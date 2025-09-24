import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsInstagram, BsArrowUpRightSquare } from "react-icons/bs"
import { link } from "fs"

const projects = [
  {
    name: "Fitnes Plus: Content Creation",
    description: "Created Instagram Reels and posts to promote gym membership and events. Contributed as both content creator and talent, handling ideation, script, and on-camera execution. reach 290k organic views  & 14k likes The campaign boosted engagement and generated new membership inquiries within the first month.",
    image: ["/project-1.jpg"],
    link: ["https://www.instagram.com/rozan_fitnessplus/"],
  },
  {
    name: "Marugame Udon, Fitness Plus: Event Organizer",
    description: "Planned and executed multiple brand and community events from concept to completion, including 4 major customer-engagement programs. Managed logistics, timelines, and audience flow to ensure seamless operations, high participation, and memorable brand experiences.",
    image: ["/project-2.jpg", "/project-2.1.jpg"],
    link: ["https://www.instagram.com/reel/CvY6xaxNXtn/", "https://www.instagram.com/reel/DGh2DD2TY63/"]
  },
  {
    name: "Marugame Udon: KOL HANDLING",
    description:
      " Coordinated with KOLs to amplify brand events, ensuring authentic storytelling and maximum reach. Managed briefing, content flow, and on site presence to keep both brand voice and influencer style aligned.  achieved  200k+ views  &  7.000+ likes on Instagram.",
    image: ["/project-3.jpg"],
    link: ["https://www.instagram.com/reel/Cut0TgwpnHF/?igsh=cmVuZTdyaTNnZDJw"]
  }, 
  {
    name: "Fitness Plus, Bolivar: TALENT MODELING",
    description:
      "Featured as a model in social media campaigns to promote gym programs and events. Contributed both presence and personality, bringing energy, approachability, and authenticity on-camera to strengthen brand image. reach 150k views",
    image: ["/project-4.jpg", "/project-4.1.jpg"],
    link: ["https://www.instagram.com/reel/DLpB9Qsz2kc/","https://www.instagram.com/p/C7d8HHlSJuO/"]
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
                  <div className="md:w-1/2 flex flex-col space-y-4">
                    {project.image.map((img, i) => (
                      <Link key={i} href={project.link[i] || project.link[0]} target="_blank">
                        <Image
                          src={img}
                          alt={`${project.name} - ${i}`}
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {project.link.map((url, i) => (
                        url && ( // avoid empty strings
                          <Link key={i} href={url} target="_blank">
                            <BsInstagram
                              size={30}
                              className="hover:-translate-y-1 transition-transform cursor-pointer"
                            />
                          </Link>
                        )
                      ))}
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
