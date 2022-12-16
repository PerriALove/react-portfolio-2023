import React from 'react';
import CV from '../../assets/FSE-Dec-2021.docx';
import TestDocument from '../../assets/TestFile.xlsx';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's talk!</a>
        <a href={TestDocument} className="btn">Download XLSX</a>
    </div>
  )
}

export default CTA