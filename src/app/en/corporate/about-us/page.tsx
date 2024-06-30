import UnderConstruction from "@/app/common/UnderConstruction";
import Hero from "../../../common/Hero"
import { AboutUsHeroData } from "../../data/heroData";
import { aboutUsData } from "../../data/aboutUsData";
import { Metadata } from "next";


export const metadata : Metadata = {
  title: "About Us",
  description: "Get To Know Us"
}


const AboutUs = () => {
    const data = aboutUsData;
  return (
    <div>
        <Hero img={data.heroImg} title={data.heroTitle} />
        
        <div className="container max-w-7xl mx-auto px-6">
          <div dangerouslySetInnerHTML={{__html: data.mainContent }} className="flex flex-col gap-10 my-20 sm:leading-10 leading-9 text-lg" />

          <div className="grid sm:grid-cols-2 grid-cols-1 border-2 my-20">
            {/* Vision */}
            <div className="sm:border-r-2 sm:border-b-0 border-b-2 p-8 hover:bg-[#25456c] transition-all duration-300 group">
              <h3 className="text-bold text-lg tracking-wider leading-10 group-hover:text-white font-semibold text-[#90302d]">Vision</h3>
              <p className="group-hover:text-white">{data.vision}</p>
            </div>

            {/* Mission */}
            <div className="p-8 hover:bg-[#25456c] transition-all duration-300 group">
              <h3 className="text-bold text-lg tracking-wider leading-10 group-hover:text-white font-semibold text-[#90302d]">Mission</h3>
              <p className="group-hover:text-white">{data.mission}</p>
            </div>
          </div>

        </div>

    </div>
  )
}

export default AboutUs