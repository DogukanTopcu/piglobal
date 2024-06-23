import Hero from "../../../common/Hero"
import { AboutUsHeroData } from "../../data/heroData";

const AboutUs = () => {
    const data = AboutUsHeroData;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default AboutUs