import React from 'react'
import { FaLocationArrow, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Card } from './subcomponents'

const Footer = () => {
  return (
    <Card title="Contact Me" customStyle="h-screen bg-slate-900 text-white">
        <ul className="sm:px-8  ">
            <li aria-label='address'><FaLocationArrow className={styles.listItem} /> B30 L26 Mulawin St, Casimiro Westville Homes, Ligas 3, Bacoor, Cavite</li>
            <li aria-label='address'><FaPhoneAlt className={styles.listItem} /> +639762518979</li>
            <li aria-label='address'><FaEnvelope className={styles.listItem} /> cedric.mendoza02@gmail.com</li>
        </ul>
    </Card>
  )
}

const styles = {
    listItem: 'inline'
}

export default Footer