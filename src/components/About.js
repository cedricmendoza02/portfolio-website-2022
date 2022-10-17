import React from 'react'
import self from '../assets/cedric-mendoza.jpg'
import { Card } from './subcomponents'

const About = () => {
  return (
    <Card title="About Me..." customStyle="lg:w-screen 2xl:w-3/5 mx-auto">
        <div className="h-1/2 text-sm sm:text-base lg:text-2xl flex flex-col sm:flex-row items-center gap-3 lg:gap-x-8 2xl:gap-x-10 p-3">
            <img src={self} className="rounded-full w-1/3 max-w-sm" />
            <p className="">I am a self-taught developer with 1 year of experience programming for web and some mobile apps on the side.
               <br />
               <br />
               I have a good grasp of web technologies specifically Javascript, HTML and CSS. I've mainly focused on ReactJS framework for my apps and is working on
               integrating some back end to existing apps. Skills I'm working on right now is
               React Native, creating my own assets, SQL, PHP, Design in general and back end languages, working my way to develop full stack apps.
               <br />
               <br />
               I hope that you will consider having me on your company and I'd be proud to show you that I'm passionate on learning and doing my best on this field.
            </p>
        </div>
    </Card>
  )
}

export default About