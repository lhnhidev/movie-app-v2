import CircularProgressBar from "./CircularProgress"

const MovieCard = () => {
  return (
    <div className="rounded-lg border border-white">
      <div>
        <img
          className="rounded-t-lg"
          src="https://media.themoviedb.org/t/p/w600_and_h900_face/in1R2dDc421JxsoRWaIIAqVI2KE.jpg"
          alt="thumbnail_movie"
        />
      </div>

      <div className="relative p-5">
        <div className="absolute -top-5">
          <CircularProgressBar />
        </div>
        <p className="mt-6 text-lg font-bold">The boys season 5</p>
        <p>2026-08-04</p>
      </div>
    </div>
  )
}

export default MovieCard
