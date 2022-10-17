import React from 'react'
import { Card, SectionSubHeader } from './subcomponents'
import chromeExt from '../assets/chrome-extension.JPG'
import rnpomodoro from '../assets/rn-pomodoro-clock.JPG'
import { ListItem } from './subcomponents';

const list = [
    {
        title: "Paste Notes Chrome Extension(WIP)",
        description: "A chrome extension where a user can paste pre-defined notes from the chrome storage on to the target input field. Working on icons to get it published to the chrome store.",
        imgSrc: chromeExt,
        url: 'https://github.com/cedricmendoza02/paste-notes-chrome-extension'
    },
    {
        title: "React Native Pomodoro Clock(WIP)",
        description: "A simple ReactNative app. Had to use a package for this which allows the timer to run in the background. useInterval by Dan Abramov came it handy too. Gave me a good example of useRef's more practical use.",
        imgSrc: rnpomodoro,
        url: ''
    },
    {
        title: "ReactJS Pomodoro Clock",
        description: "One of my first personal react projects. Had fun doing it. I've later created a react native version. I think it's complete state but I've no place to host the site yet.",
        imgSrc: chromeExt,
        url: 'https://github.com/cedricmendoza02/pomodoro-clock'
    }
]

const Projects = () => {
  return (
    <Card title="Projects...">
        <div className="">
            <SectionSubHeader text="My Real Projects" />
            <ul className="flex flex-col gap-5">
                {
                    list.map((elem, i) => (<ListItem key={i} title={elem.title} imgSrc={elem.imgSrc} description={elem.description} url={elem.url}/>))
                }
            </ul>           
         </div>
        {/* <div>
            <SectionSubHeader text="Learning Projects" />
            <ul className="grid grid-cols-2 gap-2">
                <li>
                    <figure>
                        <img src={chromeExt} className="shadow-lg"/>
                        <figcaption className="font-light">Random Quote Generator</figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={chromeExt} className="shadow-lg"/>
                        <figcaption className="font-light">Heat Map D3Js</figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={chromeExt} className="shadow-lg"/>
                        <figcaption className="font-light">Heat Map D3Js</figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={chromeExt} className="shadow-lg"/>
                        <figcaption className="font-light">FCC Survey Form</figcaption>
                    </figure>
                </li>
            </ul>  
        </div> */}
    </Card>
  )
}

export default Projects