import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { Button, BikeCard } from "../components"
import { bikes, statistics } from "../constants"
const Hero = () => {
    const [bigBikeImg, setbigBikeImg] = useState(bikes[0].thumbnail);
    return (
        <section
            id="home"
            className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-8 max-container">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full padding-x pt-32">
                <p className="text-xl font-montserrat text-coral-red">Latest technologyes</p>
                <h1 className="mt-4 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] z-20 pr-10">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The new arrival</span>
                    <br />
                    <span className="text-coral-red inline-block mt-3">
                        Bicycle
                    </span> Products
                </h1>
                <p className="font-montserrat text-slate-gray text-lg mt-6 mb-14 sm:max-w-sm">
                    Check out the last bikes of the market, with top tech and materials.
                </p>
                <Button label="Show now" iconUrl={arrowRight} />
                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                    {statistics.map((stat, index) => (
                        <div key={index}>
                            <p className="text-4xl font-palaquin font-bold">
                                {stat.value}
                            </p>
                            <p className="leading-7 font-montserrat text-slate-gray">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-coral-red bg-center">
                <img src={bigBikeImg}
                    alt="big bike 1"
                    width={610}
                    height={502}
                    className="object-contain relative z-10 rounded-2xl sm:max-w-[5000px]"
                />
                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {bikes.map((bike) => (
                        <div key={bike}>
                            <BikeCard
                                imgUrl={bike}
                                changeBigBikeImg={(bike) => { setbigBikeImg(bike) }}
                                bigBikeImg={bigBikeImg}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero