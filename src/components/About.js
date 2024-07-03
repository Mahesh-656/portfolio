import AboutImg from '../assets/about.png';
export default function About(){
    const config={
        line1:'I my name is Maheshwar.I am a full stack web developer.I built beautiful websites by using React.js and Tailwind CSS.',
        line2:'Im profiecient in backend skills such as Java , Database like SQL, MongoDB and Fresher too.',
        line3:''
    }
    return <section id='about' className='flex flex-col md:flex-row px-5 py-3 bg-primary'>
        <div className='py-5 md:w-1/2'>
            <img  src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
           <div className='flex flex-col justify-center text-white'>
           <h1 className='text-4xl text-white border-b-2 border-[violet] mb-5 w-[170px] font-bold'>About Me</h1>
           <p className='pb-5'>{config.line1}</p>
           <p className=''>{config.line2}</p>
           </div>
        </div>
    </section>
}