import React from 'react'
import { Card, SectionSubHeader } from './subcomponents';
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiTailwindcss, SiWebpack, SiJava, SiKotlin, SiMongodb } from 'react-icons/si'
import { BsGithub, BsBarChartFill } from 'react-icons/bs';
import { TbBrandReactNative } from 'react-icons/tb'

const TechSkills = () => {
  return (
    <Card title="Tools I use..." customStyle="lg:w-screen 2xl:w-3/5 mx-auto">
        <div className="my-3">
            <SectionSubHeader text="Primary" />
            <ul className="grid grid-cols-3 gap-5 sm:gap-2 justify-items-center">
                <li className={styles.item}><SiHtml5 className={styles.icons}/>HTML5</li> 
                <li className={styles.item}><SiCss3 className={styles.icons}/>CSS3</li> 
                <li className={styles.item}><SiJavascript className={styles.icons}/>Javascript</li>
                <li className={styles.item}><SiReact className={styles.icons}/>ReactJS</li>
                <li className={styles.item}><SiTailwindcss className={styles.icons}/>TailwindCSS</li>
                <li className={styles.item}><SiWebpack className={styles.icons}/>Webpack</li>
                <li className={styles.item}><BsGithub className={styles.icons}/>GitSCM</li>
            </ul>
        </div>
        <div className="my-3">
            <SectionSubHeader text="Others" />
            <ul className="grid grid-cols-3 gap-5 sm:gap-2 justify-items-center">
                <li className={styles.item}><TbBrandReactNative className={styles.icons}/>ReactNative</li>
                <li className={styles.item}><SiJava className={styles.icons}/>Java</li> 
                <li className={styles.item}><SiKotlin className={styles.icons}/>Kotlin</li>
                <li className={styles.item}><BsBarChartFill className={styles.icons}/>D3js</li>
                <li className={styles.item}><SiMongodb className={styles.icons}/>MongoDB</li>   
            </ul>
        </div>
    </Card>
  )
}

const styles = {
    item: "font-light text-center",
    icons: "text-4xl sm:text-7xl mx-auto"
}

export default TechSkills