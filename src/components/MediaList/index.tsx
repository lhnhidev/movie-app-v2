import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import MediaControler from "./MediaControler"
import type { TabType } from "../../types"

type MediaListType = {
  title: string
  type: "trend" | "rate"
  tabContent: Array<{ id: string; label: string }>
}

const MediaList = ({ title, tabContent, type }: MediaListType) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [mediaList, setMediaList] = useState<Array<Record<string, any>>>([])
  const [tabActive, setTabActive] = useState<TabType>(
    type === "trend" ? "all" : "tv"
  )

  useEffect(() => {
    let api = ""

    if (type === "rate") {
      api = `https://api.themoviedb.org/3/${tabActive}/top_rated`
    } else if (type === "trend") {
      api = `https://api.themoviedb.org/3/trending/${tabActive}/day?language=en-US`
    }

    fetch(api, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDc2OGExMTZkMTA2ZDgwNWI0NjdiYzVmYTcwN2UwZSIsIm5iZiI6MTc0NTg1NzYzOC41NDMsInN1YiI6IjY4MGZhYzY2YTkwYWNhZjZlZWVhZTBmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qfLXEhFU67ZpVdb4mPiYW0PWFZhUopzjGpeGWATHSOI"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results.slice(0, 12))
        setMediaList(data.results.slice(0, 12))
      })
  }, [tabActive])

  return (
    <div className="bg-slate-950 px-8 py-10 text-white">
      <MediaControler
        tabActive={tabActive}
        setTabActive={setTabActive}
        title={title}
        tabContent={tabContent}
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        {mediaList.map((media) => {
          return (
            <MovieCard
              key={media?.id}
              title={media?.title || media?.name}
              posterPath={media?.poster_path}
              point={Math.round((media?.vote_average ?? 0) * 10)}
              releaseDay={media?.release_date || media?.first_air_date}
              isTvShow={
                tabActive === "all"
                  ? media?.media_type === "tv"
                  : tabActive === "tv"
              }
            />
          )
        })}
      </div>
    </div>
  )
}

export default MediaList
