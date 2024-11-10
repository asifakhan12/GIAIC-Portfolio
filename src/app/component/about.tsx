import Image from 'next/image';
import myImage from "../../../public/picture/dp.avif";
import Aboutcss from "../../app/styles/about.module.css";

const About = () => {
  return (
    <>
    <h2 className={Aboutcss.h2}>About Me</h2>
    <div className={Aboutcss.wrapper}>
        <div className={Aboutcss.img}>
            <Image className={Aboutcss.myimg}  src={myImage} alt='mypic' width={350} height={350}></Image>
        </div>
        <div className={Aboutcss.text}>
          <h3 className={Aboutcss.h3}>Web Developer | Full-Stack Developer | Programmer</h3>
          <p className={Aboutcss.p}>Hey there! I’m Asifa Khan, Software developer who believes in the magic of code.A seasoned Software Developer with a profound belief in the transformative power of code. Over the course of my 1-year technical journey, Skilled in HTML, CSS, JavaScript,Typescript and creating engaging UI/UX.</p><br/>
          <p className={Aboutcss.p}>
          In my journey to become a Certified Cloud Applied Generative AI Engineer, I am gaining extensive expertise in deploying and overseeing generative AI models on cloud platforms.</p>
        </div>
    </div>
    </>
  )
}

export default About