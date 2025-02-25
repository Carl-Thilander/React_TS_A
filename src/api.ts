interface Movie {
    "Title": string,
    "Year": "1999–2007",
    "Rated": "TV-MA",
    "Released": "10 Jan 1999",
    "Runtime": "55 min",
    "Genre": "Crime, Drama",
    "Director": "N/A",
    "Writer": "David Chase",
    "Actors": "James Gandolfini, Lorraine Bracco, Edie Falco",
    "Plot": "An innovative look at the life of fictional Mafia Capo Tony Soprano, this serial is presented largely first person, but additional perspective is conveyed by the intimate conversations Tony has with his psychotherapist. We see Tony at work, at home, and in therapy. Moments of black comedy intersperse this aggressive, adult drama, with adult language, and extreme violence.",
    "Language": "English, Italian, Russian",
    "Country": "United States",
    "Awards": "Won 21 Primetime Emmys. 126 wins & 312 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjRmMTNiMTQtMDg1ZS00MGM1LWE1MGUtYjEzMGFjNWUzOWRkXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "9.2/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "9.2",
    "imdbVotes": "506,576",
    "imdbID": "tt0141842",
    "Type": "series",
    "totalSeasons": "6",
    "Response": "True"
}

export async function getMovie(id?: string) {
  const response = await fetch(
    `https://www.omdbapi.com/?i=${id}&apikey=76b66c`
  );

  return response.json() as Promise<Movie>;
}

export async function getMovies() {
  const response = await fetch(
    `https://www.omdbapi.com/?discover?apikey=76b66c`
  );

  return response.json() as Promise<Movie[]>;
}
