import { IoSearch } from "react-icons/io5"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex h-16 items-center justify-between bg-slate-950 px-4 text-white">
      <div className="flex items-center justify-between gap-3">
        <Link to="/">
          <img
            src="/Netflix-logo.png"
            alt="Logo Netflix"
            className="w-24 sm:w-28"
          />
        </Link>
        <div>Phim</div>
        <div>Truyền hình</div>
      </div>
      <div className="cursor-pointer text-2xl transition-all hover:text-gray-300">
        <IoSearch />
      </div>
    </div>
  )
}

export default Header
