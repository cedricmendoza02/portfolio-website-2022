import React from 'react'
import { Card, SectionSubHeader } from './subcomponents'
import chromeExt from '../assets/chrome-extension.JPG'
import rnpomodoro from '../assets/rn-pomodoro-clock.JPG'
import quoteGenerator from '../assets/reactjs-quote-generator.JPG'
import heatMap from '../assets/d3js-heatmap.JPG'
import mdEditor from '../assets/reactjs-md-editor.JPG'
import { ListItem } from './subcomponents';

const realProjects = [
    {
        title: "Paste Notes Chrome Extension(Published)",
        description: `A chrome extension where a 
        user can paste pre-defined notes from the 
        chrome storage on to the target input field. 
        Created with ReactJS, TailwindCSS and Webpack as the bundler.
        The storage and the rest of the app uses the chrome API.
        `,
        imgSrc: chromeExt,
        url: 'https://chrome.google.com/webstore/detail/paste-notes/fahjckjmikeeekgjpcfohnkgpfdemeii'
    },
    {
        title: "React Native Pomodoro Clock(WIP)",
        description: "A simple ReactNative app. Had to use a package for this which allows the timer to run in the background. useInterval by Dan Abramov came it handy too. Gave me a good example of useRef's more practical use.",
        imgSrc: rnpomodoro,
        url: "https://github.com/cedricmendoza02/rn-pomodoro-clock"
    },
    {
        title: "ReactJS Pomodoro Clock",
        description: "One of my first personal react projects. Had fun doing it. I've later created a react native version. I think it's complete state but I've no place to host the site yet.",
        imgSrc: chromeExt,
        url: 'https://github.com/cedricmendoza02/pomodoro-clock'
    }
]

const learningProjects = [
    {
        title: "D3js Heatmap",
        description: "A heatmap created with D3js library",
        imgSrc: heatMap,
        url: "https://codepen.io/cedricmendoza02/full/xxLXqKj"
    },
    {
        title: "ReactJS Quote Generator",
        description: "A Freecodecamp certification project",
        imgSrc: quoteGenerator,
        url: "https://codepen.io/cedricmendoza02/full/ZEazZNE"
    },
    {
        title: "ReactJS Simple Markdown Editor",
        description: "A Freecodecamp certification project",
        imgSrc: mdEditor,
        url: "https://codepen.io/cedricmendoza02/full/ZEyROaO"
    },
]

const Projects = () => {
  return (
    <Card title="Projects..." customStyle="lg:w-3/5 mx-auto">
        <div className="">
            <SectionSubHeader text="My Real Projects" />
            <ul className="flex flex-col gap-5 lg:grid lg:grid-cols-2">
                {
                    realProjects.map((elem, i) => (<ListItem key={i} title={elem.title} imgSrc={elem.imgSrc} description={elem.description} url={elem.url}/>))
                }
            </ul>           
         </div>
         <div className="">
            <SectionSubHeader text="Learning Projects" />
            <ul className="flex flex-col gap-5 lg:grid lg:grid-cols-2">
                {
                    learningProjects.map((elem, i) => (<ListItem key={i} title={elem.title} imgSrc={elem.imgSrc} description={elem.description} url={elem.url}/>))
                }
            </ul>           
         </div>
        
    </Card>
  )
}

export default Projects