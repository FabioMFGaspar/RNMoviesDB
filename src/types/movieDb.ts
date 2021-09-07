export interface Movie {
  backImgPath?: string;
  title: string;
  id: number;
  overview: string;
}

export interface RawMovie {
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids?: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
  video: boolean;
  poster_path?: string;
  backdrop_path?: string;
}

export interface MovieDetails extends Movie {
  genres: string[];
  posterPath?: string;
  runtime?: string;
  releaseDate: string;
  voteAverage: number;
  budget: string;
  status: string;
}

type Genres = {
  id: number;
  name: string;
};

type ProductionCompany = {
  name: string;
  id: number;
  logo_path?: string;
  origin_country: string;
};

type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguage = {
  iso_639_1: string;
  name: string;
};

export interface RawMovieDetails extends RawMovie {
  belongs_to_collection?: any; // there is no information about this object in their api docs...
  budget: number;
  genres: Genres[];
  homepage?: string;
  imdb_id?: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  revenue: number;
  runtime?: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline?: string;
}
