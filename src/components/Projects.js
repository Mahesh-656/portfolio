import ProjectImg from '../assets/ecommerce-websites.jpg';
import ProjectImg1 from '../assets/food-ecommerce.jpg';
import ProjectImg2 from '../assets/website-blog.jpg';
export default function Projects(){
    const config={
       projects: [
        {
            image:ProjectImg,
            description:'Ecommerce website built with mern stack',
            link:''
        },
        {
            image:ProjectImg1,
            description:'Ecommerce website built with mern stack',
            link:''
        },
        {
            image:ProjectImg2,
            description:'Ecommerce website built with mern stack',
            link:''
        }

        ]
    }
    return <section id='project' className="px-5 py-20 flex flex-col justify-center bg-secondary text-white">
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
        <h1 className='text-4xl text-white border-b-2 border-[#0f2a4f] mb-5 w-[145px] font-bold'>Projects</h1>
        <p>This are the some of my best projects.I have built by using react.js and tailwind CSS</p>
        </div>
       </div>
        <div className="w-full">
         <div className='flex flex-col md:flex-row px-10 gap-5'>
     {config.projects.map((project)=>(
           <div className='relative'>
           <img className='h-[200px] w-[500px] ' src={project.image}/>
           <div className='project-desc'>
               <p className='text-center px-5 py-5'>{project.description}</p>
              <div className='flex justify-center'>
              <a className='btn' target='_blank' href={project.link}>view project</a>
              </div>
           </div>
           </div>
     ))}
         </div>
        </div>
    </section>
}