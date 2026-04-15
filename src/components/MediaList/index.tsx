import MovieCard from "./MovieCard"

const MediaList = () => {
  return (
    <div className="bg-slate-950 px-8 py-10 text-white">
      <div className="pb-10">
        <div className="flex items-center gap-14">
          <h3 className="text-2xl font-bold">Trending</h3>

          <ul className="flex rounded-lg border border-gray-100">
            <li className="rounded-lg bg-white px-4 py-2 text-black">All</li>
            <li className="rounded-lg px-4 py-2">Movie</li>
            <li className="rounded-lg px-4 py-2">Tv show</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  )
}

export default MediaList
