"use client"

import { Image } from "@nextui-org/react";
import cardImage from "@/assets/images/saturn.png"

const HomeCard:React.FC = () => {
    return (
      <section className="mt-16 mb-8 grid  lg:grid-cols-2 justify-items-center items-center gap-10 mx-12 bg-gray-50 p-5">


        <div>
          <h3 className="text-xl">
            Facts About{" "}
            <span className="text-cyan-500 font-semibold">Saturn</span>
          </h3>

          <div className="pt-3">

          <p className="text-xs leading-relaxed">
            Saturn, the second-largest planet in our solar system, is famous for
            its mesmerizing ring system, composed of countless ice and rock
            particles. It has a rapid rotation, completing one full turn in
            about 10.7 hours, which gives it its distinctive flattened shape,
            making it an oblate spheroid.
          </p>
          <p className="text-xs leading-relaxed">
            Saturn hosts an impressive collection of over 80 moons, the largest
            of which is Titan. Titan is a unique moon due to its thick
            atmosphere and the presence of lakes and rivers filled with liquid
            methane and ethane on its surface.
          </p>
          </div>



        </div>

        <div>
          <Image
            alt="NextUI hero Image"
            width={500}
            src="https://i.ibb.co/2YC9TKB/saturn-removebg-preview.png"
          />
        </div>
      </section>
    );
};

export default HomeCard;