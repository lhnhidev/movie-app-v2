import type { Dispatch, SetStateAction } from "react"
import type { TabType } from "../../types"

type MediaControlerType = {
  title: string
  tabActive: TabType
  setTabActive: Dispatch<SetStateAction<TabType>>
  tabContent: Array<{ id: string; label: string }>
}

const MediaControler = ({
  tabActive,
  setTabActive,
  title,
  tabContent
}: MediaControlerType) => {
  return (
    <div className="pb-10">
      <div className="flex items-center gap-14">
        <h3 className="text-2xl font-bold">{title}</h3>

        <ul className="flex rounded-lg border border-gray-100">
          {tabContent.map((tab) => {
            return (
              <li
                key={tab.id}
                onClick={() => setTabActive(tab.id as TabType)}
                className={`cursor-pointer rounded-lg px-4 py-2 ${tab.id === tabActive ? "bg-white text-black" : ""}`}
              >
                {tab.label}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default MediaControler
