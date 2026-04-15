import { IoSearch } from "react-icons/io5"

const Header = () => {
  return (
    <div className="flex h-16 items-center justify-between bg-slate-950 px-4 text-white">
      <div className="flex items-center justify-between gap-3">
        <div>
          <img
            src="/Netflix-logo.png"
            alt="Logo Netflix"
            className="w-24 sm:w-28"
          />
        </div>
        <div>Phim</div>
        <div>Truyền hình</div>
      </div>
      <div className="text-2xl">
        <IoSearch />
      </div>
    </div>
  )
}

export default Header
