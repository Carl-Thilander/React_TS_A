export interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: [
    {
      Source: string;
      Value: string;
    }
  ];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: string;
}

export interface MovieSearchResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

export async function getMovie(id?: string) {
  const response = await fetch(
    `https://www.omdbapi.com/?i=${id}&apikey=76b66c`
  );

  return response.json() as Promise<Movie>;
}

export async function getMovies() {
  const response = await fetch(
    `https://www.omdbapi.com/?s=star wars&apikey=76b66c`
  );

  return response.json() as Promise<MovieSearchResponse>;
}
