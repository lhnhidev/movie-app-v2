import { FaPlay } from "react-icons/fa"
import { MdInfoOutline } from "react-icons/md"

const FeaturesMovie = () => {
  return (
    <div className="relative">
      <div>
        <img
          src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABW4vW4VPWVuYJ1YiojN-45O5Wt336hrKUzY5BHEMTBEo1bodXcMV4XqLijP1of104bMF0xKQJ6Sef5XVWqHZD39PGYsVb6coNNs1.webp?r=f33"
          alt="thumbnail-movie"
          className="aspect-video w-full"
        />
      </div>

      <div className="absolute bottom-[10%] left-6 space-y-4 text-white">
        <div className="space-y-2">
          <p className="text-xl font-bold sm:text-2xl">Tiêu đề bộ phim</p>
          <div className="inline-flex border border-gray-200 p-1">PG 13</div>
          <p>2026-04-15</p>
        </div>

        <div className="hidden w-1/2 sm:block">
          <h3 className="text-2xl font-bold">Overview</h3>
          <p className="line-clamp-3 min-[800px]:line-clamp-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            eos deserunt, dolore corporis cumque laudantium? Inventore quo
            reprehenderit, laudantium eius rem dolore nemo modi voluptate
            aliquid fugit dolorum id praesentium.
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

        <div className="absolute right-6">
          <ul className="flex gap-1">
            <li className="h-1 w-8 bg-slate-500"></li>
            <li className="h-1 w-8 bg-slate-500"></li>
            <li className="h-1 w-8 bg-slate-500"></li>
            <li className="h-1 w-8 bg-slate-500"></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FeaturesMovie
