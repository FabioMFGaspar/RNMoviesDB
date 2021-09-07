import {
  mockMovies,
  mockDetail,
  mockRawMovies,
  mockRawDetails,
} from '../../mocks/movieDB.mock';
import {searchMovieByQuery, fetchMovieDetails} from '../../libraries/movieDb';
import {movieFormatter, detailsFormatter} from '../formatter';
import {findMovieByQuery, getMovieById} from '../requester';

jest.mock('../../libraries/movieDb', () => ({
  searchMovieByQuery: jest
    .fn()
    .mockImplementation(() => ({results: mockRawMovies})),
  fetchMovieDetails: jest.fn().mockImplementation(() => mockRawDetails),
}));

jest.mock('../formatter', () => ({
  movieFormatter: jest.fn().mockImplementation(() => mockMovies),
  detailsFormatter: jest.fn().mockImplementation(() => mockDetail),
}));

const mockDispatch = jest.fn();

describe('Requester test suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should find movies with query and dispatch to store', async () => {
    await findMovieByQuery({query: 'dummyQuery', dispatch: mockDispatch});

    expect(searchMovieByQuery).toHaveBeenCalledWith('dummyQuery');
    expect(movieFormatter).toHaveBeenCalledWith(mockRawMovies);
    expect(mockDispatch).toHaveBeenCalledWith({
      payload: mockMovies,
      type: 'SET_SEARCH_MOVIES',
    });
  });

  it('Shouldnt find any movie and should clear list in store', async () => {
    // @ts-ignore - ts doesn't like this mock
    searchMovieByQuery.mockResolvedValue(() => ({results: []}));

    await findMovieByQuery({query: 'dummyQuery', dispatch: mockDispatch});

    expect(searchMovieByQuery).toHaveBeenCalledWith('dummyQuery');
    expect(movieFormatter).not.toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith({
      payload: [],
      type: 'SET_SEARCH_MOVIES',
    });
  });

  it('Should find movies details with the ID and dispatch to store', async () => {
    await getMovieById({movieId: 1, dispatch: mockDispatch});

    expect(fetchMovieDetails).toHaveBeenCalledWith(1);
    expect(detailsFormatter).toHaveBeenCalledWith(mockRawDetails);
    expect(mockDispatch).toHaveBeenCalledWith({
      payload: mockDetail,
      type: 'SET_MOVIE_DETAILS',
    });
  });

  it('Shouldnt find any details and should clear object in store', async () => {
    // @ts-ignore - ts doesn't like this mock
    fetchMovieDetails.mockResolvedValue(() => ({}));

    await getMovieById({movieId: 1, dispatch: mockDispatch});

    expect(fetchMovieDetails).toHaveBeenCalledWith(1);
    expect(detailsFormatter).not.toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'CLEAR_MOVIE_DETAILS',
    });
  });
});
