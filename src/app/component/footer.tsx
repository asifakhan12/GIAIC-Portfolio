import React from 'react'
import footercss from '../styles/footer.module.css'
import Image from 'next/image';
import Logo from '../../../public/picture/dp.avif'
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className={footercss.footer}>
        <div className={footercss.img}>
          <Image src={Logo} alt='logo' className={footercss.img}/>
        </div>
        <div className={footercss.links}>
          <ul className={footercss.ul}>
            <li>
              <Link href='/' className={footercss.link}>Home</Link>
            </li>
            <li>
              <Link href='/about' className={footercss.link}>About</Link>
            </li>
            <li>
              <Link href='/contact' className={footercss.link}>Contact</Link>
            </li>
          </ul>
        </div>
        <p className={footercss.p}>Copyright 2024 Design by Asifa khan. All Rights Reserved</p>
      </div>
    </>
  )
}

export default Footer