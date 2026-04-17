import FeaturesMovie from "../components/FeatureMovies"
import Header from "../components/Header"
import MediaList from "../components/MediaList"
import { TAB_RATE, TAB_TREND } from "../consts"

const Home = () => {
  return (
    <>
      <Header />
      <FeaturesMovie />
      <MediaList title="Trending" type="trend" tabContent={TAB_TREND} />
      <MediaList title="Rated" type="rate" tabContent={TAB_RATE} />
    </>
  )
}

export default Home
