import React from 'react'
import { Card, SectionSubHeader } from './subcomponents'
import { ListItem } from './subcomponents';
import frontendLibraries from '../assets/frontend-development-libraries-certificate-original-size.JPG';
import algoAndDataStructures from '../assets/algoAndDataStructures.JPG'
import responsiveWebDesign from '../assets/responsive-web-design.JPG'

const realProjects = [
    {
        title: "FrontEnd Development Libraries Certification",
        description: "",
        imgSrc: frontendLibraries,
        url: "https://www.freecodecamp.org/certification/cedricmendoza02/front-end-development-libraries"
    },
    {
        title: "Javascript Algorithms and Data Structures Certification",
        description: "",
        imgSrc: algoAndDataStructures,
        url: "https://www.freecodecamp.org/certification/cedricmendoza02/javascript-algorithms-and-data-structures"
    },
    {
        title: "Responsive Web Design Certification",
        description: "",
        imgSrc: responsiveWebDesign,
        url: "https://www.freecodecamp.org/certification/cedricmendoza02/responsive-web-design"
    }
]

const Credentials = () => {
  return (
    <Card title="Credentials" customStyle="lg:w-3/5 mx-auto">
        <div className="">
            <SectionSubHeader text="Certifications" />
            <ul className="flex flex-col gap-5 lg:grid lg:grid-cols-2">
                {
                    realProjects.map((elem, i) => (<ListItem key={i} title={elem.title} imgSrc={elem.imgSrc} description={elem.description} url={elem.url}/>))
                }
            </ul>           
         </div>
    </Card>
  )
}

export default Credentials