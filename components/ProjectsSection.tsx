import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Business Profile",
    description:
      "Designed and developed a company profile website for an Australia-based business using Next.js framework to showcase the business's services and values. ",
    image: "/cec.jpg",
    github: "https://github.com/beramm/cuttingedgecorrection",
    link: "https://www.cecdetailing.com.au/",
  },
  {
    name: "Yogain : Yoga AI-based Instructor Mobile Application ",
    description: "Implemented a pretrained model to analyze user posture and coordinated cross-functional teams (AI, Cloud Computing, Mobile Development) .",
    image: "/yogain2.jpg",
    github: "https://github.com/Yogain-FinalProjectBangkit",
    link: "",
  },
  {
    name: "LLM OpenAI's API Integration: AI-Powered Quiz Maker",
    description:
      "Implemented OpenAI's API to generate quizzes dynamically based on user-selected topics using Svelte",
    image: "/quiz.jpg",
    github: "https://github.com/vianneynara/quiz-gpt",
    link: "https://vianneynara.github.io/quiz-gpt/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
