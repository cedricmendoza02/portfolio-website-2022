import React from 'react'
import { Link } from 'react-router-dom';

const ListItem = ({title, description, imgSrc, url}) => {
  return (
    <li className="shadow-lg rounded-lg p-3 text-center flex flex-col gap-3">
        <figure>
            <img src={imgSrc} className="object-cover h-48 w-96" />
            <figcaption className="text-sm">{title}</figcaption>
            <p className="font-light">{description}</p>
        </figure>
        <a href={url} target="_blank" className="p-2 bg-cyan-500 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Check it out</a>
    </li>
  )
}

export default ListItem