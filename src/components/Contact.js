export default function Contact(){
    const config={
    email:'mahigowda416@gmail.com',
    phone:'+91 934-222-0897'
    }
    return <section id="contact" className='flex flex-col px-5 py-32 bg-secondary  text-white'>


        <div className='flex flex-col items-center'>
           <h1 className='text-4x border-b-2 border-[#442d0b] mb-5 w-[60px] font-bold'>Contact</h1>
           <p className='pb-5'>If you want to discuss more in detail, Please contact me</p>
<p><span className="font-bold">Email:</span>{config.email}</p>  
<p><span className="font-bold">Phone:</span>{config.phone}</p>         
           </div>
    </section>
}