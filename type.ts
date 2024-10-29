export interface Movie {
    nameRu: string,
    kinopoiskId: number,
    countries: [
      {
        country: string;
      }
    ];
    genres: [
      {
        genre: string;
      }
    ];
    // posterUrl: string,
    posterUrlPreview: string,
    ratingKinopoisk: number,
    year: number,
  }
  
  export interface MoviesRequest {
    items: Movie[];
    total: number;
    totalPages: number;
  }
  
  export interface SearchFn {
    (subString: string): Promise<boolean>;
  }
  