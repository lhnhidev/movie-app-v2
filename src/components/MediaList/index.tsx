import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"

const MediaList = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [mediaList, setMediaList] = useState<Array<Record<string, any>>>([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDc2OGExMTZkMTA2ZDgwNWI0NjdiYzVmYTcwN2UwZSIsIm5iZiI6MTc0NTg1NzYzOC41NDMsInN1YiI6IjY4MGZhYzY2YTkwYWNhZjZlZWVhZTBmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qfLXEhFU67ZpVdb4mPiYW0PWFZhUopzjGpeGWATHSOI"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setMediaList(data.results.slice(0, 12))
      })
  }, [])

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
        {mediaList.map((media) => {
          return (
            <MovieCard
              key={media?.id}
              title={media?.title || media?.name}
              posterPath={media?.poster_path}
              point={Math.round((media?.vote_average ?? 0) * 10)}
              releaseDay={media?.release_date || media?.first_air_date}
              isTvShow={media?.media_type === "tv"}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MediaList
