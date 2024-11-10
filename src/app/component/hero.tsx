import React from 'react'
import Image from 'next/image';
import myImage from '../../../public/picture/dp.avif'
import Link from 'next/link'
import Page from '../styles/hero.module.css';

const Hero = () => {
  return (
    <div className={Page.wrapper}>
        <div className={Page.text}>
            <h2 className={Page.h2}>Full Stack Developer</h2>
            <p className={Page.p}>Hey there! I’m Asifa Khan, Software developer who believes in the magic of code.A seasoned Software Developer with a profound belief in the transformative power of code. Over the course of my 1-year technical journey, Skilled in HTML, CSS, JavaScript,Typescript and creating engaging UI/UX.</p>
            <div className={Page.buttons}>
                <Link className={Page.btn} href={'./about'}>About me</Link>
                <a className={Page.btn} href='./cv/myCV.pdf' download>Download CV</a>
            </div>
        </div>
        <div className={Page.img}>
            <Image className={Page.myimg}  src={myImage} alt='mypic' width={350} height={350}></Image>
        </div>
    </div>
  )
}

export default Hero