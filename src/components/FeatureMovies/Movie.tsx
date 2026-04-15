import { FaPlay } from "react-icons/fa"
import { MdInfoOutline } from "react-icons/md"

type MovieType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  movies: Array<Record<string, any>>
  movieIdActive: number
}

const Movie = ({ movies, movieIdActive }: MovieType) => {
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movies[movieIdActive - 1]?.backdrop_path}`}
          alt="thumbnail-movie"
          className="aspect-video w-full brightness-75"
        />
      </div>

      <div className="absolute bottom-[10%] left-6 space-y-4 text-white">
        <div className="space-y-2">
          <p className="text-xl font-bold sm:text-2xl">
            {movies[movieIdActive - 1]?.title}
          </p>
          <div className="inline-flex border border-gray-200 p-1">PG 13</div>
          <p>{movies[movieIdActive - 1]?.release_date}</p>
        </div>

        <div className="hidden w-1/2 sm:block">
          <h3 className="text-2xl font-bold">Overview</h3>
          <p className="line-clamp-3 min-[800px]:line-clamp-none">
            {movies[movieIdActive - 1]?.overview}
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-1 rounded-lg border-none bg-white px-5 py-2 text-black">
            <FaPlay />
            Trailer
          </button>
          <button className="flex items-center gap-1 rounded-lg border-none px-5 py-2 font-semibold text-white backdrop-brightness-75">
            <MdInfoOutline className="text-xl" />
            Information
          </button>
        </div>
      </div>
    </div>
  )
}

export default Movie
