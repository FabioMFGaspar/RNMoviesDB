import {searchMovieByQuery, fetchMovieDetails} from '../movieDb';
import {mockRawMovies, mockRawDetails} from '../../mocks/movieDB.mock';

const mockSuccesfulFetch = (returnBody: object) => {
  global.fetch = jest.fn().mockImplementationOnce(() => {
    return new Promise(resolve => {
      resolve({
        ok: true,
        json: () => {
          return returnBody;
        },
      });
    });
  });
};

const mockRejectedFetch = () => {
  global.fetch = jest.fn().mockImplementationOnce(() => {
    return new Promise((resolve, reject) => {
      reject('mocked error');
    });
  });
};

describe('MovieDb API test suite', () => {
  it('Should return mockRawMovies', async () => {
    mockSuccesfulFetch(mockRawMovies);

    const movies = await searchMovieByQuery('dummyQuery');

    expect(movies).toEqual(mockRawMovies);
  });

  it('Should throw an error while searching by query', async () => {
    mockRejectedFetch();
    try {
      const movies = await searchMovieByQuery('dummyQuery');
      expect(movies).toBeUndefined();
    } catch (error) {
      expect(error.message).toEqual('mocked error');
    }
  });

  it('Should return mockRawDetails', async () => {
    mockSuccesfulFetch(mockRawDetails);

    const details = await fetchMovieDetails(1);

    expect(details).toEqual(mockRawDetails);
  });

  it('Should throw an error while getting the details', async () => {
    mockRejectedFetch();
    try {
      const details = await fetchMovieDetails(1);
      expect(details).toBeUndefined();
    } catch (error) {
      expect(error.message).toEqual('mocked error');
    }
  });
});
