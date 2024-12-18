import MagneticLink from "@/components/MagneticLink";
import StaggerReveal from "@/components/StaggerReveal";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-8 row-start-2 items-start flex-1 justify-between pb-16">
        <div className="text-7xl sm:text-8xl md:text-9xl uppercase">
          <div className="font-thin">
            <StaggerReveal
              explode="characters"
              from={{ transform: "translate(-10px, 0px)", opacity: 0 }}
              to={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}
              trailChildrenClassName="inline-block"
              config={{ mass: 1, tension: 210, friction: 70 }}
            >
              Tye
            </StaggerReveal>
          </div>
          <div className="font-semibold">
            <StaggerReveal
              explode="characters"
              delay={600}
              from={{ transform: "translate(10px, 0px)", opacity: 0 }}
              to={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}
              trailChildrenClassName="inline-block"
              config={{ mass: 1, tension: 210, friction: 70 }}
            >
              Peck
            </StaggerReveal>
          </div>
        </div>
        <div className="flex flex-col gap-8 row-start-2 items-start ">
          <div className="text-3xl md:text-5xl">
            <div className="overflow-hidden flex gap-x-2 flex-wrap">
              <StaggerReveal
                delay={900}
                explode="words"
                trailChildrenClassName="inline-block"
                from={{
                  transform: "translate(0px, 130%) rotate(5deg) skew(20deg)",
                  opacity: 0,
                }}
                to={{
                  transform: "translate(0px, 0px) rotate(0deg) skew(0deg)",
                  opacity: 1,
                }}
                config={{ mass: 1, tension: 210, friction: 40 }}
              >
                Senior Team Lead
              </StaggerReveal>
            </div>
            <div className="overflow-hidden flex gap-x-2 flex-wrap">
              <StaggerReveal
                delay={1050}
                explode="words"
                trailChildrenClassName="inline-block"
                from={{
                  transform: "translate(0px, 130%) rotate(5deg) skew(20deg)",
                  opacity: 0,
                }}
                to={{
                  transform: "translate(0px, 0px) rotate(0deg) skew(0deg)",
                  opacity: 1,
                }}
                config={{ mass: 1, tension: 210, friction: 40 }}
              >
                Software Engineer
              </StaggerReveal>
            </div>
          </div>
          <div className="text-lg md:text-xl flex gap-x-1 flex-wrap max-w-2xl">
            <StaggerReveal
              delay={1300}
              explode="words"
              from={{
                transform: "translate(0%, 40%) skew(30deg, 0)",
                filter: "blur(8px)",
                opacity: 0,
              }}
              to={{
                transform: "translate(0px, 0px) skew(0deg, 0deg)",
                filter: "blur(0px)",
                opacity: 1,
              }}
            >
              A seasoned Full Stack Engineer and Team Leader, bringing together
              both technical expertise and strategic leadership. I’m dedicated
              to crafting engaging applications and scalable architecture.
              <hr className="w-full border-none my-2" />
              Currently working at
              <MagneticLink
                className="flex gap-2"
                href="https://novatasolutions.com.au"
                target="_blank"
                rel="noopener noreferrer"
              >
                Novata Solutions
              </MagneticLink>
            </StaggerReveal>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-8 flex-wrap items-center justify-center">
        <MagneticLink
          className="flex items-center gap-2 "
          href="https://github.com/Taaqif"
          target="_blank"
          rel="noopener noreferrer"
          hoverIcon={<Github width={7} height={7} />}
        >
          <Github width={16} height={16} />
          Github
        </MagneticLink>
        <MagneticLink
          className="flex items-center gap-2 "
          href="mailto:taaqifpeck@gmail.com?subject=Hello there"
          target="_blank"
          rel="noopener noreferrer"
          hoverIcon={<Mail width={7} height={7} />}
        >
          <Mail width={16} height={16} />
          Email
        </MagneticLink>
        <MagneticLink
          className="flex items-center gap-2"
          href="https://linkedin.com/in/tye-peck"
          target="_blank"
          rel="noopener noreferrer"
          hoverIcon={<Linkedin width={7} height={7} />}
        >
          <Linkedin width={16} height={16} />
          LinkedIn
        </MagneticLink>
      </footer>
    </>
  );
}
