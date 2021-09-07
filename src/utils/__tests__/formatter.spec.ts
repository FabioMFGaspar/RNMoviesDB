import {
  mockMovies,
  mockDetail,
  mockRawMovies,
  mockRawDetails,
} from '../../mocks/movieDB.mock';
import {movieFormatter, detailsFormatter} from '../formatter';

describe('Formatter test suite', () => {
  it('Should format raw movies', () => {
    // @ts-ignore
    expect(movieFormatter(mockRawMovies)).toEqual(mockMovies);
  });

  it('Should format raw movie details', () => {
    // @ts-ignore
    expect(detailsFormatter(mockRawDetails)).toEqual(mockDetail);
  });

  it('Should format raw movie details with empty budget and runtime', () => {
    expect(
      // @ts-ignore
      detailsFormatter({...mockRawDetails, budget: 0, runtime: 0}),
    ).toEqual({...mockDetail, budget: '', runtime: ''});
  });
});
