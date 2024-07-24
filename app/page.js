"use client";
import ParticlesComponent from "@/components/ParticlesComponent";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import SocialMediaComponent from "@/components/SocialMediaComponent";
import CardComponent from "@/components/CardComponent";
import HeadingComponent from "@/components/HeadingComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ParticlesComponent />
      <HeadingComponent heading="playDev" />
      <div className="relative z-2 w-[950px] max-sm:w-[300px] max-sm:text-center max-sm:pt-8 max-sm:pb-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          Join us at playDev for a thrilling adventure of cryptic hunts and
          puzzle-solving challenges. Our events are designed to push your
          limits, foster teamwork, and enhance problem-solving skills. Whether
          you&apos;re a seasoned puzzle enthusiast or a curious newcomer,
          playDev offers an unforgettable experience that combines fun and
          learning in the most exciting way.
        </motion.p>
      </div>

      <div className="relative z-2 mb-32 max-sm:mb-20 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <CardComponent
          link="https://unstop.com/competitions/playdev-cryptic-hunt-e-hun10-ajsystems-1087739"
          title="About Event"
          description="Find in-depth information about this event."
        />
        <CardComponent
          link="https://drive.google.com/file/d/1-H9c4JUWkaq346qKvw44fWvoNiqbCuLG/view?usp=sharing"
          title="Rule Book"
          description="Download"
        />
        <CardComponent
          link="mailto:playdevone@gmail.com"
          title="Email"
          description="playdevone@gmail.com suresh's email: suresh@ajsystems.co.in"
        />

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Contact Us
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Phone no: 7419064057 Phone no: 9467763384 Phone no: 6303994057
          </p>
        </a>
      </div>

      <div className="flex relative z-2 items-center space-x-4">
        <p className="max-sm:text-[10px]">Follow us:</p>
        <SocialMediaComponent
          link="https://discord.com/invite/Kqj6j9qD"
          color="#B197FC"
          icon={faDiscord}
        />
        <SocialMediaComponent
          link="https://instagram.com/playdevone"
          color="#74C0FC"
          icon={faInstagram}
        />
        <SocialMediaComponent
          link="https://x.com/playdevone"
          icon={faXTwitter}
        />
      </div>
    </main>
  );
}
