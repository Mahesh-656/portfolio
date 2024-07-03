import hero from '../assets/hero.png'
import { ImTwitter, ImFacebook, ImLinkedin } from "react-icons/im";
export default function Hero(){
const config={
  subtitle:'Im a Full-stack developer'
}

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
       <h1 className=' text-white text-4xl font-hero-font'>Hi, <br/> Im Maheshwar R
        <p className='text-2xl '>{config.subtitle}</p>
        </h1>
        <div className='flex py-7 '>
            <a href='#' className='pr-5 hover:text-white'><ImTwitter size={30}/></a>
            <a href='#' className='pr-5  hover:text-white'><ImFacebook size={30}/></a>
            <a href='#' className=' hover:text-white'><ImLinkedin size={30}/></a>
        </div>
     
      </div>
      <img className='md:w-1/3' src={hero}/>
   
    </section>
}