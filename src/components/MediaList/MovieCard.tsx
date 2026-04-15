import CircularProgressBar from "./CircularProgress"

type MovieCard = {
  title: string | undefined
  posterPath: string | undefined
  point: number | undefined
  releaseDay: string | undefined
  isTvShow: boolean
}

const MovieCard = ({
  title,
  posterPath,
  point,
  releaseDay,
  isTvShow
}: MovieCard) => {
  return (
    <div className="rounded-lg border border-white">
      <div className="relative">
        {isTvShow && (
          <div className="absolute top-2 right-2 rounded-md bg-white p-1 text-black opacity-70">
            Tv show
          </div>
        )}
        <img
          className="rounded-t-lg"
          src={`https://image.tmdb.org/t/p/original/${posterPath}`}
          alt="thumbnail_movie"
        />
      </div>

      <div className="relative p-5">
        <div className="absolute -top-5">
          <CircularProgressBar
            percent={point}
            strokeColor={
              point === undefined
                ? "green"
                : point >= 80
                  ? "green"
                  : point >= 60
                    ? "yellow"
                    : "red"
            }
          />
        </div>
        <p className="mt-6 text-lg font-bold">{title}</p>
        <p>{releaseDay}</p>
      </div>
    </div>
  )
}

export default MovieCard
