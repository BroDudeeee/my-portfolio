import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="text-[rgb(229 231 235)] overflow-x-hidden sticky top-0 bg-[#494949] z-50">
      <section className="flex items-center justify-between px-5 py-3 max-w-5xl mx-auto">
        <motion.section
          initial={{
            x: -500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="space-x-2"
        >
          <SocialIcon
            url="https://twitter.com/Bad_Developer1"
            bgColor="transparent"
            fgColor="	rgb(229 231 235)"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://web.facebook.com/profile.php?id=100013480984494"
            bgColor="transparent"
            fgColor="	rgb(229 231 235)"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/morsy2037/"
            bgColor="transparent"
            fgColor="	rgb(229 231 235)"
            style={{ height: 35, width: 35 }}
          />
        </motion.section>
        <motion.section
          initial={{
            x: 500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="cursor-pointer"
        >
          <SocialIcon
            network="email"
            bgColor="transparent"
            fgColor="rgb(229 231 235)"
            style={{ height: 40, width: 40 }}
          />
          <span className="text-xs font-bold">GET IN TOUCH</span>
        </motion.section>
      </section>
    </header>
  );
};

export default Header;
