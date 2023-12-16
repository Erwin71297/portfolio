"use client";

import Link from "next/link";
import styles from "./page.module.css";
import React from "react";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";
import { Check, GitHub, Linkedin, Mail, Tool } from "react-feather";

export default function Home() {
  //Constants
  const circleSize = 50;

  const down = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 100 },
  };

  const eg = [
    {
      skill: "100",
      fill: "#d0ed57",
    },
  ];

  const id = [
    {
      skill: "100",
      fill: "#d0ed57",
    },
  ];

  const jp = [
    {
      skill: "65",
      fill: "#ffc658",
    },
  ];

  //About Dataset
  let education = {
    Education: [
      {
        id: 3,
        title: "Bina Nusanatara University",
        date: "2015-2019",
        GPA: "3.4 GPA",
      },
    ],
  };

  let work = {
    "Working Experience": [
      {
        id: 1,
        title: "PT Erajaya Swasembada Tbk",
        date: "2018-2019",
        position: "Intern Software Developer",
        comment1:
          "•	Developed javascript based mobile training application for senior employees to track their self-training program given by the company.",
        comment2:
          "•	Implemented new features on HR website to allow supervisors to track the of progress of new ",
        comment3: "",
        comment4: "",
        comment5: "",
        comment6: "",
        comment7: "",
        comment8: "",
        comment9: "",
        comment10: "",
        comment11: "",
        comment12: "",
      },
      {
        id: 1,
        title: "BPR Intidana",
        date: "2020-2021",
        position: "IT Specialist",
        comment1: "•	Maintained the PHP Laravel website that was outsourced.",
        comment2:
          "•	Designed and implemented extra feature that allowed the front desk attendant to verify data of customer to the SQL database.",
        comment3: "",
        comment4: "",
        comment5: "",
        comment6: "",
        comment7: "",
        comment8: "",
        comment9: "",
        comment10: "",
        comment11: "",
        comment12: "",
      },
      {
        id: 2,
        title: "PT Erajaya Swasembada Tbk.",
        date: "2021-2023",
        position: "Software Engineer",
        comment1:
          "•	Participated in the agile software development cycle to migrate from monolithic (Magento) to microservices for Promotion and Stock services using Gin Framework using REST API, Docker, Kubernetes, MySQL and PostgreSQL database to increase scalability as well as ease deployments for future features to be implemented.",
        comment2:
          "•	Implemented the use of scalyr on code to help better track error logs, as well as logging data that runs on go-routines and workers. Implement sonarqube to help keep track of code-quality. Coordinated with DevOps using Open Telemetry and New Relic for observations of metrics so that loads stay relatively low and bug-free.",
        comment3:
          "•	Implemented automated email-service feature that used workers and go-routines to send emails to customers in case of promotions and restocks. This service also utilized the message brokering system using pubsub from GCP to minimize load and maximize efficiency.",
        comment4:
          "•	Designed and implemented gift card feature utilizing that allows users to redeem and use gift cards for their orders with partnering companies in collaboration with the order and customer microservice teams.",
        comment5:
          "•	Implemented redis onto functions with redundancy of data being passed from one microservice to another.",
        comment6:
          "•	Implemented Swagger in microservice for ease of testing, aiding QA, and managing documentation.",
        comment7:
          "•	Managed response times of APIs to be under 1 second or less.",
        comment8:
          "•	Assisted in the implementation of the credit/deposit payment feature in B2B commerce service.",
        comment9:
          "•	Assisted in the implementation of the promotion side of order management system.",
        comment10:
          "•	Managed the ERP microservice and well as revamping it to match clean code standards.",
        comment11:
          "•	Exchanged and designed ideas with senior about the implementation of revamping o2o scheduler.",
        comment12:
          "•	Implemented cron job scheduler to automate stock syncs in order to reduce risk of errors.",
      },
    ],
  };

  // Skillset Dataset
  let serverside = {
    Serverside: [
      {
        id: 1,
        title: "Go Language",
      },
      {
        id: 2,
        title: "Javascript",
      },
      {
        id: 3,
        title: "C#",
      },
    ],
  };

  let clientside = {
    Clientside: [
      {
        id: 1,
        title: "Next.js",
      },
      {
        id: 2,
        title: "React.js",
      },
      {
        id: 3,
        title: "HTML&CSS",
      },
    ],
  };

  let database = {
    Database: [
      {
        id: 1,
        title: "MySQL",
      },
      {
        id: 2,
        title: "PostGreSQL",
      },
      {
        id: 3,
        title: "",
      },
    ],
  };

  let docker = {
    Docker: [
      {
        id: 1,
        title: "Docker",
      },
      {
        id: 2,
        title: "Kubernetes",
      },
      {
        id: 3,
        title: "",
      },
    ],
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <html id="home" className={styles.html}>
        <body>
          {/* Nav Bar */}
          <div className="w-full h-20 bg-yellow-400 top-0 right-0 left-0 z-10">
            <div className="container mx-auto px-4 h-full">
              <div className="flex justify-between items-center h-full">
                <a href="#home" className={styles.homebutton}>
                  Home
                </a>
                <ul className="hidden md:flex gap-x-6 text-black align-right">
                  <li>
                    <Link href="#about">
                      <p className={styles.text}>About</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#skillset">
                      <p className={styles.text}>Skillset</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#project">
                      <p className={styles.text}>Projects</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact">
                      <p className={styles.text}>Contacts</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Start of intro */}
          <div id="intro" className="w-9/12 mt-20 ml-auto mr-auto">
            <div className="flex flex-col items-center justify-between w-full lg:flex-row px-5 w-9/12 ml-auto mr-auto pb-12">
              <div className="w-5/12 mt-auto mb-auto">
                <Image
                  className={styles.img}
                  src="/assets/image_erwin.jpeg"
                  alt="person icon"
                  width={300}
                  height={400}
                />
              </div>
              <div className="text-white mt-auto mb-auto px-10 text-justify">
                <h2 className="text-yellow-400 font-semibold py-5 text-4xl">
                  Software Engineer
                </h2>
                <p className="mt-1">
                  Hi I&apos;m Erwin Susanto. A software engineer who is based in
                  Indonesia with aspirations of working abroad in Japan.
                </p>
                <p className="mt-5">
                  I usually dabble in music and gaming off work. Usually I
                  listen to Pop like J-Pop, C-Pop, and K-pop, but I like other
                  genres like House and Jazz as well. I also do sports like
                  badminton, going to the gym and running on occasions.
                </p>
                <div className="flex place-content-end mt-10">
                  <a href="https://www.facebook.com/erwin.susanto.522">
                    <Image
                      className="relative rounded-3xl"
                      src="/assets/facebook.png"
                      alt="facebook"
                      width={40}
                      height={40}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/erwin-susanto-431670209/"
                    className="ml-3"
                  >
                    <Image
                      className="relative rounded-3xl"
                      src="/assets/linkedin.png"
                      alt="linkedin"
                      width={40}
                      height={40}
                    />
                  </a>
                  <a href="https://github.com/Erwin71297" className="ml-3">
                    <Image
                      className="relative rounded-3xl"
                      src="/assets/github.png"
                      alt="github"
                      width={40}
                      height={40}
                    />
                  </a>
                  <a href="https://www.instagram.com/erwins7/" className="ml-3">
                    <Image
                      className="relative rounded-3xl"
                      src="/assets/instagram.svg.png"
                      alt="instagram"
                      width={40}
                      height={40}
                    />
                  </a>
                </div>
                <p className="group mt-10 px-5 py-4 border border-transparent hover:bg-gray-500 hover:rounded-2xl">
                  <Link
                    className="mb-3 text-1xl font-semibold text-white"
                    href="assets/CV.pdf"
                    download
                  >
                    Download CV
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* End of intro */}

          {/* Start of about */}
          <div
            id="about"
            className="grid lg:grid-cols-10 w-9/12 ml-auto mr-auto"
          >
            <div className="lg:col-span-3">
              {/* Start of left side */}
              <div
                className={classNames(
                  "bg-gray-700 py-5 px-5 mt-10 ml-10 mr-10",
                  "text-center "
                )}
              >
                <h2 className="text-yellow-500 text-3xl py-2">About Me</h2>
              </div>
              <div
                className={classNames(
                  "px-5 mt-10 ml-10 mr-10",
                  "text-center grid lg:grid-cols-2"
                )}
              >
                <div className="text-left w-max">
                  <p>
                    <a className="text-white">Name :</a>{" "}
                    <a className="text-yellow-400">Erwin Susanto</a>
                  </p>
                  <p>
                    <a className="text-white">City :</a>{" "}
                    <a className="text-yellow-400">Jakarta</a>Current
                  </p>
                  <p>
                    <a className="text-white">CurrentAge :</a>{" "}
                    <a className="text-yellow-400">26</a>
                  </p>
                </div>
              </div>
              <div
                className={classNames("px-5 mt-10 ml-10 mr-10", "text-center")}
              >
                <hr className="mt-10 mb-5"></hr>
                <p className="text-yellow-500 font-semibold mb-5">Languages</p>
                <div className="grid lg:grid-cols-3 text-white">
                  <div>
                    <div className={styles.graph}>
                      <RadialBarChart
                        width={circleSize}
                        height={circleSize}
                        cx={circleSize / 2}
                        cy={circleSize / 2}
                        innerRadius={24}
                        outerRadius={28}
                        barSize={2}
                        data={eg}
                        startAngle={90}
                        endAngle={-270}
                      >
                        <PolarAngleAxis
                          type="number"
                          domain={[0, 100]}
                          angleAxisId={0}
                          tick={false}
                        />
                        <RadialBar
                          background
                          className="clockWise"
                          dataKey="skill"
                          cornerRadius={circleSize / 2}
                          fill="#82ca9d"
                        />
                        <text
                          x={circleSize / 2}
                          y={circleSize / 2}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="progress-label"
                          fill="#FFD700"
                        >
                          100
                        </text>
                      </RadialBarChart>
                    </div>
                    ENG
                  </div>
                  <div>
                    <div className={styles.graph}>
                      <RadialBarChart
                        width={circleSize}
                        height={circleSize}
                        cx={circleSize / 2}
                        cy={circleSize / 2}
                        innerRadius={24}
                        outerRadius={28}
                        barSize={2}
                        data={id}
                        startAngle={90}
                        endAngle={-270}
                      >
                        <PolarAngleAxis
                          type="number"
                          domain={[0, 100]}
                          angleAxisId={0}
                          tick={false}
                        />
                        <RadialBar
                          background
                          className="clockWise"
                          dataKey="skill"
                          cornerRadius={circleSize / 2}
                          fill="#82ca9d"
                        />
                        <text
                          x={circleSize / 2}
                          y={circleSize / 2}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="progress-label"
                          fill="#FFD700"
                        >
                          100
                        </text>
                      </RadialBarChart>
                    </div>
                    ID
                  </div>
                  <div>
                    <div className={styles.graph}>
                      <RadialBarChart
                        width={circleSize}
                        height={circleSize}
                        cx={circleSize / 2}
                        cy={circleSize / 2}
                        innerRadius={24}
                        outerRadius={28}
                        barSize={2}
                        data={jp}
                        startAngle={90}
                        endAngle={-270}
                      >
                        <PolarAngleAxis
                          type="number"
                          domain={[0, 100]}
                          angleAxisId={0}
                          tick={false}
                        />
                        <RadialBar
                          background
                          className="clockWise"
                          dataKey="skill"
                          cornerRadius={circleSize / 2}
                          fill="#82ca9d"
                        />
                        <text
                          x={circleSize / 2}
                          y={circleSize / 2}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="progress-label"
                          fill="#FFD700"
                        >
                          65
                        </text>
                      </RadialBarChart>
                    </div>
                    JP
                  </div>
                </div>
                <hr className="mt-10 mb-5"></hr>
                <div className="text-yellow-400 text-left">
                  <div className="flex">
                    <Check></Check>
                    <p className="ml-3">Responsible</p>
                  </div>
                  <div className="flex">
                    <Check></Check>
                    <p className="ml-3">Detail Oriented</p>
                  </div>
                  <div className="flex">
                    <Check></Check>
                    <p className="ml-3">Adaptable</p>
                  </div>
                  <div className="flex">
                    <Check></Check>
                    <p className="ml-3">Team Player</p>
                  </div>
                  <div className="flex">
                    <Check></Check>
                    <p className="ml-3">Result Oriented</p>
                  </div>
                  <div className="flex">
                    <Check></Check>
                    <p className="ml-3">Willing to Speak</p>
                  </div>
                </div>
                <hr className="mt-10 mb-5"></hr>
              </div>
            </div>
            {/* End of left side */}
            {/* Start of right side */}
            <div className="lg:col-span-7 overflow-hidden relative ml-5 mr-10 mt-5 py-5">
              <h2 className="text-white py-5 px-5">Education</h2>
              {Object.values(education).map((posts, idx) => (
                <div key={idx} className={"text-yellow-500 ml-5 mr-10"}>
                  <ul>
                    {posts.map((post) => (
                      <li key={post.id} className="relative p-3 bg-gray-800">
                        <h3 className="text-sm font-medium leading-5">
                          {post.title}
                        </h3>
                        <hr className={styles.line}></hr>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-white">
                          <li>{post.date}</li>
                        </ul>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-white">
                          <li>{post.GPA}</li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <h2 className="text-white py-5 px-5 mt-10">Work Experiences</h2>
              {Object.values(work).map((posts, idx) => (
                <div key={idx} className={"text-yellow-500 ml-5 mr-10 mb-20"}>
                  <ul>
                    {posts.map((post) => (
                      <li key={post.id} className="relative p-3 bg-gray-800">
                        <h3 className="text-sm font-medium leading-5">
                          {post.title}
                        </h3>
                        <hr className={styles.line}></hr>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-white">
                          <li>{post.date}</li>
                        </ul>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-white">
                          <li>{post.position}</li>
                        </ul>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-white">
                          <li>{post.comment1}</li>
                        </ul>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-white">
                          <li>{post.comment2}</li>
                        </ul>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-white">
                          <li>{post.comment3}</li>
                        </ul>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-white">
                          <li>{post.comment4}</li>
                        </ul>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-white">
                          <li>{post.comment5}</li>
                        </ul>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-white">
                          <li>{post.comment6}</li>
                        </ul>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-white">
                          <li>{post.comment7}</li>
                        </ul>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-white">
                          <li>{post.comment8}</li>
                        </ul>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-white">
                          <li>{post.comment9}</li>
                        </ul>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-white">
                          <li>{post.comment10}</li>
                        </ul>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-white">
                          <li>{post.comment11}</li>
                        </ul>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-white">
                          <li>{post.comment12}</li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* End of About */}

          {/* Start of Skillset */}
          <div id="skillset" className="w-9/12 mt-2 mr-auto ml-auto">
            <h3 className="bg-gray-700 p-3 space-x-1 text-yellow-500 mb-3 text-3xl">
              Tech Stacks
            </h3>
          </div>

          <div className="grid gap-8 row-gap-8 lg:grid-cols-3 text-center w-9/12 mr-auto ml-auto mt-20">
            <div className="lg:col-span-1">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
                <Image
                  className="relative rounded-3xl"
                  src="/assets/react.svg.png"
                  alt="instagram"
                  width={50}
                  height={50}
                />
              </div>
              <h6 className="mb-2 font-semibold leading-5 border-b-2 pb-4 text-white">
                FrontEnd
              </h6>
              <div className="inline-flex mr-2 ">
                <object
                  data="https://img.shields.io/badge/HTML5-E34F26?logo=html5&amp;logoColor=fff&amp;style=flat"
                  className="my-1 mx-1"
                ></object>
              </div>
              <div className="inline-flex mr-2 ">
                <object
                  data="https://img.shields.io/badge/CSS3-1572B6?logo=css3&amp;logoColor=fff&amp;style=flat"
                  className="my-1 mx-1"
                ></object>
              </div>
              <div className="inline-flex mr-2 ">
                <object
                  data="https://img.shields.io/badge/React-61DAFB?logo=react&amp;logoColor=fff&amp;style=flat"
                  className="my-1 mx-1"
                ></object>
              </div>
              <div className="inline-flex mr-2 ">
                <object
                  data="https://img.shields.io/badge/Next.js-000?logo=nextdotjs&amp;logoColor=fff&amp;style=flat"
                  className="my-1 mx-1"
                ></object>
              </div>
              <div className="inline-flex mr-2 ">
                <object
                  data="https://img.shields.io/badge/Material%20Design-757575?logo=materialdesign&amp;logoColor=fff&amp;style=flat"
                  className="my-1 mx-1"
                ></object>
              </div>
              <div className="inline-flex mr-2 ">
                <object
                  data="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&amp;logoColor=fff&amp;style=flat"
                  className="my-1 mx-1"
                ></object>
              </div>
              <div className="inline-flex mr-2 ">
                <object
                  data="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&amp;logoColor=000&amp;style=flat"
                  className="my-1 mx-1"
                ></object>
              </div>
              <div className="inline-flex mr-2 ">
                <object
                  data="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat"
                  className="my-1 mx-1"
                ></object>
              </div>
              <div className="inline-flex mr-2 ">
                <object
                  data="https://img.shields.io/badge/Material--UI-0081CB?logo=material-ui&logoColor=white&stle=flat"
                  className="my-1 mx-1"
                ></object>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
                <Image
                  className="relative rounded-3xl"
                  src="/assets/go.svg.png"
                  alt="instagram"
                  width={50}
                  height={50}
                />
              </div>
              <h6 className="mb-2 font-semibold leading-5 border-b-2 pb-4 text-white">
                BackEnd
              </h6>
              <div className="inline-flex mr-2 ">
                <object
                  data="https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white"
                  className="my-1 mx-1"
                ></object>
              </div>
              <div className="inline-flex mr-2 ">
                <object
                  data="https://img.shields.io/badge/JavaScript-323330?style=flat&logo=javascript&logoColor=F7DF1E"
                  className="my-1 mx-1"
                ></object>
              </div>
              <div className="inline-flex mr-2 ">
                <object
                  data="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white"
                  className="my-1 mx-1"
                ></object>
              </div>
              <div className="inline-flex mr-2 ">
                <object
                  data="https://img.shields.io/badge/Laravel-FF2D20?style=flat&logo=laravel&logoColor=white"
                  className="my-1 mx-1"
                ></object>
              </div>
              <div className="inline-flex mr-2 ">
                <object
                  data="https://img.shields.io/badge/MySQL-00000F?style=flat&logo=mysql&logoColor=white"
                  className="my-1 mx-1"
                ></object>
              </div>
              <div className="inline-flex mr-2 ">
                <object
                  data="https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white"
                  className="my-1 mx-1"
                ></object>
              </div>
              <div className="inline-flex mr-2 ">
                <object
                  data="https://img.shields.io/badge/Amazon_AWS-232F3E?style=flat&logo=amazon-aws&logoColor=white"
                  className="my-1 mx-1"
                ></object>
              </div>
              <div className="inline-flex mr-2 ">
                <object
                  data="https://img.shields.io/badge/Google_Cloud-4285F4?style=flat&logo=google-cloud&logoColor=white"
                  className="my-1 mx-1"
                ></object>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
                <Tool width={50} height={50}></Tool>
              </div>
              <h6 className="mb-2 font-semibold leading-5 border-b-2 pb-4 text-white">
                Tools
              </h6>
              <div className="inline-flex mr-2">
                <object
                  data="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=flat&logo=visual%20studio%20code&logoColor=white"
                  className="my-1 mx-1"
                ></object>
              </div>
              <div className="inline-flex mr-2 ">
                <object
                  data="https://img.shields.io/badge/GIT-E44C30?style=flat&logo=git&logoColor=white"
                  className="my-1 mx-1"
                ></object>
              </div>
              <div className="inline-flex mr-2 ">
                <object
                  data="https://img.shields.io/badge/GitHub-181717?logo=github&amp;logoColor=fff&amp;style=flat"
                  className="my-1 mx-1"
                ></object>
              </div>
              <div className="inline-flex mr-2 ">
                <object
                  data="https://img.shields.io/badge/Postman-FF6C37?logo=postman&amp;logoColor=fff&amp;style=flat"
                  className="my-1 mx-1"
                ></object>
              </div>
              <div className="inline-flex mr-2 ">
                <object
                  data="https://img.shields.io/badge/Jira-0052CC?style=flat&logo=Jira&logoColor=white"
                  className="my-1 mx-1"
                ></object>
              </div>
              <div className="inline-flex mr-2 ">
                <object
                  data="https://img.shields.io/badge/Snyk-4C4A73?style=flat&logo=snyk&logoColor=white"
                  className="my-1 mx-1"
                ></object>
              </div>
            </div>
          </div>
          {/* End of Skillset */}

          {/* Start of Projects */}
          <div id="project" className="w-9/12 mt-20 mr-auto ml-auto">
            <h3 className="bg-gray-700 p-3 space-x-1 text-yellow-500 mb-3 text-3xl">
              Projects
            </h3>
          </div>
          <div className="grid gap-8 row-gap-5 lg:grid-cols-3 w-9/12 px-2 mt-10 mr-auto ml-auto">
            <a href="https://eraspace.com">
              <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl">
                <div className="flex flex-col items-center  mb-2 lg:flex-row">
                  <Image
                    className="relative"
                    src="/assets/eraspace.png"
                    alt="instagram"
                    width={450}
                    height={250}
                  ></Image>
                </div>
                <div className="p-3">
                  <h6 className="font-semibold leading-5 font-semibold text-white">
                    Eraspace
                  </h6>
                  <p className="mb-2 mt-2 text-sm text-gray-900 text-center text-white lg:text-start">
                    An ecommerce that mainly focuses on selling gadgets of all
                    types and brands.
                  </p>
                  <p className="mb-2 mt-2 text-sm text-gray-900 text-center text-white lg:text-start">
                    I worked as part of the promotion and stock service team.
                  </p>
                </div>
              </div>
            </a>
            <a href="https://ibox.co.id">
              <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl">
                <div className="flex flex-col items-center  mb-2 lg:flex-row">
                  <Image
                    className="relative"
                    src="/assets/ibox.png"
                    alt="instagram"
                    width={450}
                    height={250}
                  ></Image>
                </div>
                <div className="p-3">
                  <h6 className="font-semibold leading-5 font-semibold text-white">
                    IBox
                  </h6>
                  <p className="mb-2 mt-2 text-sm text-gray-900 text-center text-white lg:text-start">
                    An ecommerce that mainly focuses on apple products.
                  </p>
                  <p className="mb-2 mt-2 text-sm text-gray-900 text-center text-white lg:text-start">
                    I worked as part of the promotion and stock service team.
                  </p>
                </div>
              </div>
            </a>
            <a href="https://jdsports.id/">
              <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl">
                <div className="flex flex-col items-center  mb-2 lg:flex-row">
                  <Image
                    className="relative"
                    src="/assets/jdsport.png"
                    alt="instagram"
                    width={450}
                    height={250}
                  ></Image>
                </div>
                <div className="p-3">
                  <h6 className="font-semibold leading-5 font-semibold text-white">
                    JDSport
                  </h6>
                  <p className="mb-2 mt-2 text-sm text-gray-900 text-center text-white lg:text-start">
                    An ecommerce that mainly focuses on fashion sports
                    apparatus.
                  </p>
                  <p className="mb-2 mt-2 text-sm text-gray-900 text-center text-white lg:text-start">
                    I worked as part of the promotion and stock service team.
                  </p>
                </div>
              </div>
            </a>
          </div>
          {/* End of Projects */}

          {/* Start of Contacts */}
          <div id="contact" className="w-9/12 mt-20 mr-auto ml-auto">
            <h3 className="bg-gray-700 p-3 space-x-1 text-yellow-500 mb-3 text-3xl">
              Contacts
            </h3>
          </div>
          <div className="grid gap-8 row-gap-5 lg:grid-cols-3 w-9/12 px-2 mt-10 mr-auto ml-auto">
            <a href="mailto:erwins71297@gmail.com">
              <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl">
                <div className="relative p-5 bg-white rounded-sm">
                  <div className="flex flex-col items-center  mb-2 lg:flex-row">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                      <Mail></Mail>
                    </div>
                    <h6 className="font-semibold leading-5">Email</h6>
                  </div>
                  <p className="mb-2 text-sm text-gray-900 text-center lg:text-start">
                    Let&apos;s get in touch.
                  </p>
                </div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/erwin-susanto-431670209">
              <div className="relative  p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl">
                <div className="relative p-5 bg-white rounded-sm">
                  <div className="flex flex-col items-center  mb-2 lg:flex-row">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                      <Linkedin></Linkedin>
                    </div>
                    <h6 className="font-semibold leading-5">LinkedIn</h6>
                  </div>
                  <p className="mb-2 text-sm text-gray-900 text-center lg:text-start">
                    Let&apos;s connect.
                  </p>
                </div>
              </div>
            </a>
            <a href="https://github.com/Erwin71297">
              <div className="relative  p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl">
                <div className="relative p-5 bg-white rounded-sm">
                  <div className="flex flex-col items-center  mb-2 lg:flex-row">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                      <GitHub></GitHub>
                    </div>
                    <h6 className="font-semibold leading-5">Github</h6>
                  </div>
                  <p className="mb-2 text-sm text-gray-900 text-center lg:text-start">
                    Here are my repos.
                  </p>
                </div>
              </div>
            </a>
          </div>
          {/* End of Contacts */}
        </body>
      </html>
    </main>
  );
}
