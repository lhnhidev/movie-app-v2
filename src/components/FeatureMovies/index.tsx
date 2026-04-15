import PanigateIndicator from "./PanigateIndicator"
import Movie from "./Movie"
import { useEffect, useState } from "react"

const startNumber = 0
const endNumber = 4
const timeRepeat = 2000

const FeaturesMovie = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [movies, setMovies] = useState<Array<Record<string, any>>>([])
  const [movieIdActive, setMovieIdActive] = useState<number>(1)

  const handleSetMovieActive = (idMovie: number): void => {
    if (idMovie >= startNumber && idMovie <= endNumber) {
      setMovieIdActive(idMovie)
    }
  }

  useEffect(() => {
    try {
      fetch("https://api.themoviedb.org/3/movie/popular", {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDc2OGExMTZkMTA2ZDgwNWI0NjdiYzVmYTcwN2UwZSIsIm5iZiI6MTc0NTg1NzYzOC41NDMsInN1YiI6IjY4MGZhYzY2YTkwYWNhZjZlZWVhZTBmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qfLXEhFU67ZpVdb4mPiYW0PWFZhUopzjGpeGWATHSOI"
        }
      })
        .then((res) => res.json())
        .then((data) => setMovies(data?.results))
    } catch (error) {
      throw new Error((error as Error).message)
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setMovieIdActive((prev) =>
        prev === endNumber ? startNumber + 1 : prev + 1
      )
    }, timeRepeat)

    return () => clearInterval(timer)
  }, [movieIdActive])

  return (
    <div className="relative">
      <Movie
        movies={movies.slice(startNumber, endNumber)}
        movieIdActive={movieIdActive}
      />
      <PanigateIndicator
        movies={movies.slice(startNumber, endNumber)}
        movieIdActive={movieIdActive}
        handleSetMovieActive={handleSetMovieActive}
      />
    </div>
  )
}

export default FeaturesMovie
