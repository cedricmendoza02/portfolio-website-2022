import React from 'react'
import { Link } from 'react-router-dom';

const ListItem = ({title, description, imgSrc, url}) => {
  return (
    <li className="shadow-lg rounded-lg p-3 text-center flex flex-col justify-between gap-3 last:col-span-2 lg:last:w-1/2 lg:last:place-self-center">
        <figure>
            <img src={imgSrc} className="object-cover h-48 w-96 mx-auto rounded-lg border-2 border-cyan-500" />
            <figcaption className="text-sm">{title}</figcaption>

        </figure>
        <p className="font-light">{description}</p>
        <a href={url} target="_blank" className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white lg:self-center">Check it out</a>
    </li>
  )
}

export default ListItem