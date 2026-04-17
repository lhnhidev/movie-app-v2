import { FaPlay } from "react-icons/fa"
import CircularProgressBar from "../CircularProgress"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

type FilmType = {
  id: number
  title: string
  overview: string
  backdrop_path: string
  vote_average: number
  poster_path: string
  release_date: string
  genres: Array<{ id: number; name: string }>
}

const Banner = () => {
  const { id } = useParams()

  const [film, setFilm] = useState<FilmType>({} as FilmType)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDc2OGExMTZkMTA2ZDgwNWI0NjdiYzVmYTcwN2UwZSIsIm5iZiI6MTc0NTg1NzYzOC41NDMsInN1YiI6IjY4MGZhYzY2YTkwYWNhZjZlZWVhZTBmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qfLXEhFU67ZpVdb4mPiYW0PWFZhUopzjGpeGWATHSOI"
          }
        })

        const data = await result.json()
        setFilm(data)
      } catch (error) {
        throw new Error((error as Error).message)
      }
    }

    fetchData()
  }, [id])

  return (
    <div className="relative overflow-hidden">
      <img
        className="absolute inset-0 brightness-[0.2]"
        src="https://image.tmdb.org/t/p/original/bq28ajZaoMyzEIm6REelqyqtEDZ.jpg"
        alt="Thumbnail_movie"
      />

      <div className="relative z-1 mx-auto flex max-w-7xl gap-10 px-5 py-8 text-white min-[960px]:py-20">
        <div className="flex-1">
          <img
            src="https://image.tmdb.org/t/p/original/in1R2dDc421JxsoRWaIIAqVI2KE.jpg"
            alt="Thumbnail_movie"
          />
        </div>

        <div className="flex-2">
          <p className="text-lg font-bold max-[600px]:mb-5 min-[960px]:text-3xl">
            {film?.title}
          </p>

          <div className="min-[960px]:text-md mt-1 mb-1 hidden items-center gap-5 text-sm min-[600px]:flex min-[960px]:mt-3 min-[960px]:mb-4">
            <div className="inline-block border border-gray-400 p-2 text-gray-400">
              G
            </div>
            <div>{film?.release_date}</div>
            <div>
              {film?.genres?.map((genre, index) => {
                let symbol = ", "
                if (index + 1 === film?.genres?.length) {
                  symbol = ""
                }
                return (
                  <span key={genre?.id || crypto.randomUUID()}>
                    {genre?.name + symbol}
                  </span>
                )
              })}
            </div>
          </div>

          <div className="min-[960px]:text-md my-3 hidden gap-4 text-sm min-[600px]:flex min-[960px]:my-6 min-[960px]:gap-10">
            <div className="flex items-center gap-3">
              <CircularProgressBar
                percent={Math.round(film?.vote_average * 10)}
                strokeColor="green"
              />
              <p className="text-sm min-[960px]:text-xl">Rating</p>
            </div>
            <button className="flex items-center gap-2 text-sm min-[960px]:text-xl">
              <FaPlay />
              Trailer
            </button>
          </div>

          <div className="mb-3 hidden min-[700px]:block min-[960px]:mb-10">
            <p className="text-md mb-2 font-bold min-[960px]:text-xl">
              Overview
            </p>
            <p className="min-[960px]:text-md text-sm">{film?.overview}</p>
          </div>

          <div className="flex gap-8 min-[960px]:gap-20">
            <div>
              <p className="text-md mb-1 font-bold min-[960px]:text-xl">
                Director
              </p>
              <p className="min-[960px]:text-md text-sm">Philip Sgriccia</p>
            </div>
            <div>
              <p className="text-md mb-1 font-bold min-[960px]:text-xl">
                Writter
              </p>
              <p className="min-[960px]:text-md text-sm">
                Ellie Monahan, Anslem Richardson
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
