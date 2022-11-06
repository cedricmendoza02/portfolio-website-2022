import React from 'react'
import self from '../assets/cedric-mendoza.jpg'
import { Card } from './subcomponents'

const About = () => {
  return (
    <Card title="About Me..." customStyle="lg:w-screen 2xl:w-3/5 mx-auto">
        <div className="h-1/2 text-sm sm:text-base lg:text-2xl flex flex-col sm:flex-row items-center gap-3 lg:gap-x-8 2xl:gap-x-10 p-3">
            <img src={self} className="rounded-full w-1/3 max-w-sm shadow-lg" />
            <p className="">I've built myself from the ground up and have taught myself web development using all the resources I could find.
               <br />
               <br />
               I have a good working knowledge of the MERN(MongoDB, Express, ReactJS, NodeJS) stack.

            </p>
        </div>
    </Card>
  )
}

export default About