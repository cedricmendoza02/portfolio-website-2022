import React, { useEffect, useRef } from 'react'
import { FaTwitter } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';
import {DiGithubBadge } from "react-icons/di";
import { gsap } from 'gsap';
import self from '../assets/cedric-mendoza.jpg'

const Main = () => {
  const container = useRef()

  useEffect(() => {
    gsap.from(container.current, {opacity: 0, duration: 1, delay: 1})
  }, [])

  return (
    <div className={`flex flex-col justify-center gap-6 p-3 h-screen bg-black text-white`} ref={container}>
      <div className="rounded-md">
        <h1 className="font-light">Hi,
          I am
          <br />
          <span className="text-6xl font-extrabold"> Cedric Mendoza</span>
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
    </div>
  )
}


export default Main