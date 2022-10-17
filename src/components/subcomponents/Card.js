import React from 'react';
import SectionHeader from './SectionHeader';

const Card = ({children, title, customStyle}) => {
  return (
    <div className={`p-3 ${customStyle}`} >
        <SectionHeader text={title} />
        {children}
    </div>
  )
}

export default Card