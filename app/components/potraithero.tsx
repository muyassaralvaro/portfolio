"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-base-200 flex items-center overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1800px]
            h-[clamp(18rem,32vw,32rem)]
          "
        >
          {/* BLUE PANEL + ALVARO REVEAL TOGETHER */}
          <motion.div
            initial={{
              clipPath: "inset(0 50% 0 50%)",
            }}
            animate={{
              clipPath: "inset(0 0% 0 0%)",
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              inset-0
              overflow-hidden
              rounded-lg
              bg-blue-400
              dark:bg-blue-300
            "
          >
            {/* ALVARO */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h1
                className="
                  whitespace-nowrap
                  select-none
                  text-[clamp(6rem,22vw,28rem)]
                  font-black
                  leading-none
                  tracking-[-0.09em]
                  text-white
                  text-shadow-lg/30
                "
              >
                ALVARO
              </h1>
            </div>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.45 }}
              className="
                absolute
                left-5
                top-5
                z-30
                text-xs
                lg:text-sm
                font-semibold
                leading-tight
                text-white
              "
            >
              FULL STACK
              <br />
              DEVELOPER
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.45 }}
              className="
                absolute
                right-5
                top-5
                z-30
                text-right
                text-xs
                lg:text-sm
                font-semibold
                leading-tight
                text-white
              "
            >
              CODE
              <br />
              BUILD
              <br />
              SOLVE
              <br />
              IMPROVE
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.45 }}
              className="
                absolute
                bottom-5
                left-5
                z-30
                hidden
                sm:block
                text-xs
                lg:text-sm
                font-semibold
                leading-tight
                text-white
              "
            >
              WITH GREAT POWER
              <br />
              COMES GREAT
              <br />
              RESPONSIBILITIES.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.45 }}
              className="
                absolute
                bottom-5
                right-5
                z-30
                hidden
                sm:block
                text-right
                text-xs
                lg:text-sm
                text-white
              "
            >
              <div className="mb-2 ml-auto h-px w-10 bg-white/70" />

              BASED IN INDONESIA
              <br />
              AVAILABLE WORLDWIDE
            </motion.div>
          </motion.div>

          {/* PORTRAIT — OUTSIDE THE CLIPPED PANEL */}
          <motion.img
            initial={{
              opacity: 0,
              y: 45,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            src="/img/me.png"
            alt="Alvaro Muyassar"
            className="
              pointer-events-none
              absolute
              z-10
              left-1/2
              -translate-x-1/2

              bottom-[-23%]

              h-[130%]
              sm:h-[138%]
              lg:h-[145%]

              w-auto
              max-w-none
              drop-shadow-lg
            "
          />
        </div>
      </div>
    </section>
  );
}