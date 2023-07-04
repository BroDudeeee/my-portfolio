import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Image from "next/image";
import image from "../assets/me.jpeg";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative justify-center flex items-center h-screen">
      <motion.section
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 1.5, 2, 2.5, 2, 1.2],
          opacity: [0.1, 0.2, 0.3, 0.5, 0.7, 0.8, 1],
          borderRadius: ["20%", "35%", "50%", "80%", "50%", "20%", "50%"],
        }}
        transition={{
          duration: 2.5,
        }}
        className="absolute w-96 h-96 border rounded-full border-gray-400"
      />

      <Image
        src={image}
        alt="me"
        className="w-32 h-32 rounded-full absolute top-56 object-cover shadow-md border-2 border-white"
      />
      <section className="absolute bottom-56 text-3xl font-bold md:text-4xl">
        <Typewriter
          words={[
            "Hello, I'm Ahmed",
            "<Software Engineer />",
            "Love Math, Philosphy & CODING",
          ]}
          typeSpeed={80}
          deleteSpeed={140}
          loop={true}
        />
      </section>
    </div>
  );
};

export default Hero;
