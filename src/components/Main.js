import React from 'react'
import self from '../assets/cedric-mendoza.jpg'

const Main = () => {
  return (
    <div className={`bg-cyan-50 text-sky-900 flex gap-3 p-3 items-center h-screen`}>
      <div>
        <img src={self} className="rounded-full mx-auto"/>
      </div>
      <div className="rounded-md">
        <h1 className="font-light">Hi,
          I am
          <br />
          <span className="text-5xl font-extrabold"> Cedric Mendoza</span>
        </h1>
        <p className="">Web/Mobile Developer</p>
      </div>
    </div>
  )
}

export default Main