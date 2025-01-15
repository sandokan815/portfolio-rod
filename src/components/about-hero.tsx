import Image from "next/image";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";
import heroProfileImg from "@/public/images/heroProfile.png";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
      <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="hero-image" duration={0.6}>
            <Image
              src={heroProfileImg}
              width={100}
              height={100}
              className="h-auto w-full px-0"
              alt="hero image"
              unoptimized
            />
          </FadeUp>
        </AnimatePresence>
      </div>
      <div className="sm:1/2 w-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-6xl font-bold text-accent sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
              Hi, I&apos;m Anthony Rodríguez
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-4 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              I turn your idea into reality using top trend technologies in web
              and mobile, eCommerce fields.
            </p>
            <p className="mt-2 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Mastered basic programming languages such as &nbsp;
              <span className="text-accent">
                JavaScript/TypeScript , PHP, Python
              </span>{" "}
              and got a chance to work with the almost available web & mobile
              frameworks in different role such as
            </p>
            <p className="mt-2 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              <span className="text-accent">Web Developer</span>
              (Frontend/Backend/FullStack/DevOps),
              <br />
              <span className="text-accent">Native Mobile Developer</span>
              (Swift, Kotlin, Java),
              <br />
              <span className="text-accent">Hybrid Mobile Developer</span>
              (Ionic, Cordova, React Native, Flutter),
              <br />
              <span className="text-accent">eCommerce Developer</span>
              (Magento, WooCommerce, OpenCart, PrestaShop),
              <br />
              <span className="text-accent">Browser Extension Developer</span>
              (Chrome, Safari, Edge),
              <br />
              <br />
            </p>
          </FadeUp>
          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="mr-0 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
          >
            <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
              <Image
                className="-z-10 h-full w-full bg-cover bg-no-repeat"
                alt="Philippines flag"
                src="https://flagcdn.com/ph.svg"
                width={15}
                height={15}
              />
            </div>
            <span className="text-lg font-medium text-foreground">
              Batangas, Philippines
            </span>
          </FadeRight>
        </AnimatePresence>
      </div>
    </div>
  );
}
