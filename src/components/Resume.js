import ResumeImg from '../assets/resume.jpg';
export default function Resume(){
    const config={
        link:'https://getsamplefiles.com/sample-document-files/pdf#google_vignette'
    }
    return <section id='resume'    className='flex flex-col md:flex-row px-5 py-3 bg-primary'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
           <div className='flex flex-col justify-center text-white'>
           <h1 className='text-4xl text-white border-b-2 border-[violet] mb-5 w-[140px] font-bold'>Resume</h1>
           <p className='pb-5'>You can view my Resume  <a className='btn' target='_blank' href={config.link}>Download</a></p>
           </div>
        </div>
    </section>
}