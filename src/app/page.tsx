"use client";

import Link from "next/link";
import styles from "./page.module.css";
import React from "react";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  Bar,
} from "recharts";
import { Check, GitHub, Linkedin, Mail, Tool } from "react-feather";
import { motion } from "framer-motion";
import Navigation from "./component/navigation";

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

  const skills = [
    {
      skill: "FE",
      fill: "#ffc658",
      proficiency: "70",
    },
    {
      skill: "BE",
      fill: "#ffc658",
      proficiency: "70",
    },
  ];

  //About Dataset
  let education = {
    Education: [
      {
        id: 1,
        title: "Malacca International School (Elementary Grade)",
        date: "2003-2009",
      },
      {
        id: 2,
        title: "Darma Yudha Junior High School",
        date: "2009-2012",
      },
      {
        id: 3,
        title: "Darma Yudha Senior High School",
        date: "2012-2015",
      },
      {
        id: 3,
        title: "Bina Nusanatara University",
        date: "2015-2019",
        GPA: "3.4",
      },
    ],
  };

  let origanisation = {
    "Organisational Experience": [
      {
        id: 1,
        title: "BNEC",
        date: "2015-2017",
        position: "Branding Team",
        tasks: "",
      },
      {
        id: 2,
        title: "BSSC",
        date: "2015-2017",
        position: "Branding Team",
        tasks: "",
      },
    ],
  };

  let work = {
    "Working Experience": [
      {
        id: 1,
        title: "BPR Intidana",
        date: "2018-2019",
        position: "Intern Software Developer",
        comments: "",
      },
      {
        id: 1,
        title: "BPR Intidana",
        date: "2020-2021",
        position: "IT Specialist",
        comments: "",
      },
      {
        id: 2,
        title: "PT Erajaya Swasembada Tbk.",
        date: "2021-2023",
        position: "Software Engineer",
        comments: "",
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
          <Navigation />
          {/* Start of intro */}
          <div id="intro" className="w-9/12 mt-20 ml-auto mr-auto">
            <div className="grid grid-cols-4 px-5 w-9/12 ml-auto mr-auto pb-12">
              <div className="lg:col-span-1 mt-auto mb-auto">
                <Image
                  className={styles.img}
                  src="/assets/image_erwin.jpeg"
                  alt="person icon"
                  width={300}
                  height={400}
                />
              </div>
              <div className="text-white mt-auto mb-auto px-10 text-justify lg:col-span-3">
                <h2 className="text-yellow-400 font-semibold py-5 text-6xl">
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
                <div className="text-left text-white">
                  <p>Name :</p>
                  <p>Current City :</p>
                  <p>Age :</p>
                </div>
                <div className="text-right text-gray-400">
                  <p>Erwin Susanto</p>
                  <p>Jakarta</p>
                  <p>26</p>
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
                <hr className="mt-10"></hr>
                <div className="mt-5">
                  <p className="text-yellow-500 font-semibold mb-5">Skills</p>
                  <BarChart
                    width={200}
                    height={200}
                    data={skills}
                    margin={{
                      top: 5,
                      right: 0,
                      left: -10,
                      bottom: 5,
                    }}
                  >
                    <XAxis dataKey="skill" />
                    <YAxis />
                    <Legend />
                    <Bar dataKey="proficiency" barSize={25} fill="#ffc658" />
                  </BarChart>
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
                <div
                  key={idx}
                  className={"bg-white p-3 text-yellow-500 ml-5 mr-10"}
                >
                  <ul>
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative p-3 bg-gradient-to-r from-gray-900 from:10% to-gray-500"
                      >
                        <h3 className="text-sm font-medium leading-5">
                          {post.title}
                        </h3>
                        <hr className={styles.line}></hr>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-400">
                          <li>{post.date}</li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <h2 className="text-white py-5 px-5 mt-10">
                Organisational Experiences
              </h2>
              {Object.values(origanisation).map((posts, idx) => (
                <div
                  key={idx}
                  className={"bg-white p-3 text-yellow-500 ml-5 mr-10"}
                >
                  <ul>
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative p-3 bg-gradient-to-r from-gray-900 from:10% to-gray-500"
                      >
                        <h3 className="text-sm font-medium leading-5">
                          {post.title}
                        </h3>
                        <hr className={styles.line}></hr>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-400">
                          <li>{post.date}</li>
                        </ul>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-400">
                          <li>{post.position}</li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <h2 className="text-white py-5 px-5 mt-10">Work Experiences</h2>
              {Object.values(work).map((posts, idx) => (
                <div
                  key={idx}
                  className={"bg-white p-3 text-yellow-500 ml-5 mr-10 mb-20"}
                >
                  <ul>
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative p-3 bg-gradient-to-r from-gray-900 from:10% to-gray-500"
                      >
                        <h3 className="text-sm font-medium leading-5">
                          {post.title}
                        </h3>
                        <hr className={styles.line}></hr>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-400">
                          <li>{post.date}</li>
                        </ul>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-400">
                          <li>{post.position}</li>
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
              Skillset
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
          {/* <div id="skillset" className="w-9/12 px-2 mt-2 mr-auto ml-auto">
            <h3 className="bg-gray-700 p-3 space-x-1 text-yellow-500 ml-5 mb-3 text-3xl">
              Projects
            </h3>
          </div> */}
          {/* End of Projects */}

          {/* Start of Contacts */}
          <div id="skillset" className="w-9/12 mt-20 mr-auto ml-auto">
            <h3 className="bg-gray-700 p-3 space-x-1 text-yellow-500 mb-3 text-3xl">
              Contacts
            </h3>
          </div>
          <div className="grid gap-8 row-gap-5 lg:grid-cols-3 w-9/12 px-2 mt-20 mr-auto ml-auto">
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
                    Let's get in touch.
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
                    Let's connect.
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
