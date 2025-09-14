import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Public Speaking" },
  { skill: "Negotiation" },
  { skill: "Content Creating" },
  { skill: "Social Media Specialist" },
  { skill: "Marketing" },
  { skill: "Ms Office" },
  { skill: "Canva" },
  { skill: "Capcut" },
  { skill: "English" },
  // { skill: "PHP" }, { skill: "Laravel" }, { skill: "AI" }, { skill: "Machine Learning" },

]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              What to know about me ?
            </h1>
            <p>
              Hi, my name is Rozan, and I have an{" "}
              <span className="font-bold">active and cheerful personality</span>,{" "}
              {/* <span className="font-bold">, Analytical Thinking, Adaptability</span>,{" "} */}

              <span className="font-bold">with extensive
                experience in sales</span>, and{" "}
              <span className="font-bold">marketing, and hospitality</span>.
            </p>

            <br />
            <p>
              I graduated from Universitas Islam Indonesia, Yogyakarta, in 2023 with a Bachelor&apos;s degree in Management,
              achieving a <span className="font-semibold"> 3.40/4.00 GPA</span>. During my studies, I explored a wide range of courses including strategic marketing,
              digital marketing, international marketing, and organizational behavior, which gave me a strong foundation in both theory and practice.
            </p>


            <br />
            <div>

              <p>
                While pursuing my degree, I sought opportunities to apply what I learned in real-world settings. At Fitness Plus Jogja,
                I worked as a <span className="font-semibold">Membership Consultant</span>, where I was responsible for driving sales and building long-term customer relationships.
                Through consultative selling and creative engagement strategies, I successfully generated up to <span className="font-semibold"> Rp. 101 million in monthly sales. </span>
                I also helped plan and execute brand activation events, leveraged Instagram marketing to expand reach, and even served as a
                talent in multiple social media campaigns. My dedication to customer satisfaction earned me the <span className="font-semibold">“Most Friendly Consultant” </span>
                recognition in 2025.
              </p>
            </div>
            <br />
            <div><p>
              During my journey, I gained valuable marketing and leadership experience across diverse roles. At <span className="font-semibold"> Marugame Udon Indonesia</span> in Jakarta,
              I worked as a Marketing Intern specializing in event management, where I coordinated end-to-end event planning and collaborated with
              KOLs to boost brand engagement. Later, as a Senior Barista at Bolivar.id, I led daily café operations, trained junior staff,
              and maintained service quality, which sharpened my teamwork and customer service skills. Beyond professional roles, I was actively
              involved in organizations—serving as <span className="font-semibold"> Head of Fundraising</span> for the Anniversary of Management Community, where I <span className="font-semibold"> exceeded financial</span>
              targets through strategic campaigns, and as a Procurement Specialist at Manifest UII, where I negotiated with vendors and managed
              resources for large-scale events. These experiences collectively strengthened my ability to lead, collaborate, and adapt in dynamic
              environments.
            </p></div>

            <br />
            <p>
              I believe in <span className="font-bold text-teal-500">continuous growth</span>, and I&apos;m passionate about pursuing opportunities where I can combine <span className="font-semibold">creativity,
                strategy, and communication</span> to deliver impactful results. Whether it&apos;s driving sales, building customer
              relationships, or managing events, I am eager to take on new challenges that allow me to grow while contributing
              meaningfully to the organization I am part of.
            </p>



          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/cartoonized.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block rounded-2xl md:relative md:top-4 md:left-16 md:z-0"
            />
            <Image
              src="/cartoonized-1.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block rounded-2xl md:relative md:top-4 md:left-16 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
