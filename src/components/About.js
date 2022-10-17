import React from 'react'
import self from '../assets/cedric-mendoza.jpg'
import { Card } from './subcomponents'

const About = () => {
  return (
    <Card title="About Me..." customStyle="">
        <div className="h-1/2 text-sm flex flex-col items-center gap-3 p-3">
            <img src={self} className="rounded-full w-1/3" />
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