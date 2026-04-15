type PanigateIndicatorType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  movies: Array<Record<string, any>>
  movieIdActive: number
  // eslint-disable-next-line no-unused-vars
  handleSetMovieActive: (idMovie: number) => void
}

const PanigateIndicator = ({
  movies,
  movieIdActive,
  handleSetMovieActive
}: PanigateIndicatorType) => {
  return (
    <div className="absolute right-6 bottom-[10%]">
      <ul className="flex gap-1">
        {movies.map((_movie, index) => {
          return (
            <li
              key={crypto.randomUUID()}
              onClick={() => handleSetMovieActive(index + 1)}
              className={`h-1 w-8 cursor-pointer ${index + 1 === movieIdActive ? "bg-slate-100" : "bg-slate-500"}`}
            ></li>
          )
        })}
      </ul>
    </div>
  )
}

export default PanigateIndicator
