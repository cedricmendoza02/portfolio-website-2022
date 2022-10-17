import React, { useEffect, useRef } from 'react'
import { FaTwitter } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';
import {DiGithubBadge } from "react-icons/di";
import { gsap } from 'gsap';
import About from './About';
import Projects from './Projects'
import TechSkills from './TechSkills'
import Credentials from './Credentials';
import Footer from './Footer';
import resume from '../assets/resume.pdf'

const Main = () => {
  const container = useRef()

  useEffect(() => {
    gsap.from(container.current, {opacity: 0, duration: 1, delay: 1})
  }, [])

  const handleClick = () => {

  }

  return (
    <div>
      <div className={`flex flex-col justify-center gap-6 p-3 h-screen text-white bg-black sm:text-lg`} ref={container}>
        <div className="rounded-md">
            <h1 className="font-light">Hi,
              I am
              <br />
              <span className="text-6xl font-extrabold sm:text-8xl lg:text-9xl"> Cedric <br />Mendoza</span>
            </h1>
            <p className="">Web/Mobile Developer</p>
          </div>
          <div>
            <ul className="text-4xl flex gap-4">
              <li aria-label='Github Page' className=""><a href="https://github.com/cedricmendoza02"><DiGithubBadge /></a></li>
              <li aria-label='LinkedIn Page'><a href="https://linkedin.com/in/cedric-martin-mendoza"><ImLinkedin /></a></li>
              <li aria-label='Twitter Page'><a href="https://twitter.com/CedricMendoza02"><FaTwitter /></a></li>
            </ul>
          </div>
          <a href={resume} download target="_blank" className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white self-start">Download CV</a>
        </div>
      <About />
      <TechSkills />
      <Projects />
      <Credentials />
      <Footer />
    </div>
  )
}


export default Main