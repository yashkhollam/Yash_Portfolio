import React, { useState } from "react"
import '../CSS/Home.css';
import {Link} from 'react-scroll'
import { frontendskillsdata,Backendicon,projectdata} from './skillsdata';
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { toast } from 'react-hot-toast'

import axios from 'axios'
function Home() {
 const [isopen,setIsopen]=useState(false);
//  const [showspinner,setShowspinner]=useState(true);

 const handlehamburger=()=>{
    setIsopen(!isopen)
 }

 const data={
   name:"",
   email:"",
   subject:"",
   message:""
 }

 const [input,setinput]=useState(data);

 const handleinput=(e)=>{
   console.log({...input,[e.target.name]:e.target.value});
    setinput({...input,[e.target.name] : e.target.value})
 }

 const submitform=async(e)=>{
   e.preventDefault()
   try{
      //  setShowspinner(true)
      //   const response=await axios.post("http://localhost:7070/sendmail/sendmail",input)
      const response = await axios.post(
  "https://yashportfolio-production.up.railway.app/sendmail/sendmail",
  input
);


        const {message}=response.data;
    
        toast.success(message)

        
        setinput({ name:"",email:"",subject:"",message:""})
   //   setShowspinner(false)

   }
   catch(err){
       console.log(err)
      toast.error("Failed to send Email")
      // setShowspinner(false)
   }
 }

 
  return (
    <>
  
 

   <div className="container-fluid" id='navbar-container'>
      <div className="row" id='navbar-row'>
         <div className="col-12 d-flex p-0" id='navbar-col'>
             <h3 id='username'>Yash</h3>


              <FontAwesomeIcon icon='bars' id='hamburger-icon' onClick={handlehamburger}/>
                        
                        
                                        <ul className={`group-items ${isopen ? "mobileresponsive":''}`} >

             
               <li className='list-items'><Link to='hero-cont' smooth={true} duration={100}>Home</Link></li>


               <li className='list-items' ><Link to='aboutme-container' smooth={true} duration={100} onClick={handlehamburger}>About Me</Link></li>
               <li className='list-items' ><Link to='skills-section' smooth={true} duration={100}    onClick={handlehamburger}>My Skills</Link></li>
               <li className='list-items' ><Link to='projectsec' smooth={true} duration={100}        onClick={handlehamburger}>My Porject</Link></li>
               <li className='list-items' > <Link to='getintouchcontainer' smooth={true} duration={100}onClick={handlehamburger}>Contact</Link></li>
               
             </ul>
         </div>
      </div>
   </div>


    <section className='container-fluid ' id='hero-container'>
      <div className="row" id='hero-row'>
        
         <div className="col-12 col-md-6 " id='hero-col'>
              <h1 id='hero-heading'>Hi,I'm <span className='hero-cont-username'>Yash</span></h1>
          <h3 id='hero-cont-heading'>MERN Stack Developer</h3> 
          <p>A passionate MERN stack developer eager to build my first professional web applications. Skilled in MongoDB, Express, React, and Node.js with a strong foundation in JavaScript.</p>
          
         
         <button id='hiremebtn'>
             <Link to='getintouchcontainer' smooth={true} duration={100}>Hire Me</Link>
         </button>
        
        
         <button id='viewworkbtn'><Link to='projectsec' smooth={true} duration={100}>View Work</Link> </button>
         </div>
               
   
         <div className='col-12 col-md-6  mt-5 mt-md-0' id='hero-img-cont'>

            <div className="outerdiv mb-5 mb-md-0">
               <div className="innerdiv">
                  <img src="/profile.jpg" alt="" id='yash_profile_img'/>
               </div>
            </div>
         </div>
      </div>

    </section>


   {/* <section  className='container-fluid bg-info' id='aboutme-cont'>
      <div className="row" id='aboutme-row'>
        
       <div className='col-12 col-lg-4 bg-danger'>
         <div className='outerdiv '></div>
       </div>

       <div className='col-12  col-lg-6 bg-warning'>
          kho
       </div>

      </div>
   </section> */}
    
    <section className="container-fluid m-0 mt-5" id='aboutme-container'>
        <div className="row" id='aboutme-row'>
            <p className='text-center  m-0 ' id='aboutme-heading' >About me</p>
            
            
              
           
             <div className="col-12 col-md-3  " id='aboutme-img-section'>
                <div className="outerdiv mb-5 mb-md-0">
               <div className="innerdiv">
                  <img src="/profile.jpg" alt="" id='yash_profile_img'/>
               </div>
            </div>
             </div>

              <div className="col-12 col-md-6 b p-3 " id='aboutme-info-cont'>
                <p id='aboutmeinfo-heading-1' className='mt-4 mt-md-0'>Who am I?</p>
                <p id='aboutme-info-para'>I'm Yash, a passionate MERN stack developer fresh to the industry. I've built several projects during my learning journey and am excited to apply my skills in a professional environment. I'm a quick learner with strong problem-solving abilities.</p>

               <div className="row p-3 gap-4 ">
                 <div className='col-12 col-md-4  p-0 'style={{width:"min-Content"}} >
                     <h3 id='personal-info' className='mb-4 mt-md-0'>Personal Info</h3>
                      <div id="perosnalinfo-cont">
                     
                     <span className='label'>Name:</span>
                     <span className='data'>Yash Khollam</span>

                       <span class="label">Email:</span>
                       <span className='data'>yashkhollam01@gmail.com </span>

                        <span class="label">From:</span>
                        <span className='data'>Pune Maharashtra, India</span>
                      </div>

                </div>
                <div  className='col-12  col-md-8 p-0  mt-3 mt-md-0' style={{width:"fit-Content"}}>
                    <h3 id='Experience' className='mb-4 mt-md-0'>Experience</h3>
                 <div id='Experience-cont'>
                    <span className='label'>Status</span>
                    <span className='data'>Fresher</span>
                    
                    <span className='label '>Education</span>
                    <span className='data'>Administration in Computer Applications</span>

                    <span className='label'>Project</span>
                    <span className='data'> Personal</span>

                 </div>



                </div>

                  
               </div>
                
           
                <div className=''>
               <p id='dwnldbtn' ><a href='/yashResume.pdf'
                                 download={"YashKhollamCV.pdf"} 
                                 // target='_blank'
                                 rel="noopener noreferrer"
                                 style={{color:"black",textDecoration:"none"}}><FontAwesomeIcon icon='download'/> Downlaod CV</a></p>  
            </div>
              </div>

            
            
        </div>
    </section>


    <section className='container-fluid  p-0 ' id='skills-section'>
      <div className="row" id='skills-row'>
        
        <div className="col-12  mt-0 " style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
        
           <h2  id='myskillheading' className=' '>My Skills</h2>
           
           <h2 style={{textAlign:"center",fontSize:"1.3rem",fontFamily:"Poppins",fontWeight:"600",height:"fit-Content",marginTop:"17px"}}>MERN Stack Expertise</h2>

          <div className='row mt-2 gap-0 gap-lg-4' style={{display:"flex",justifyContent:"center",}} id='myskillrow2'>

              <div className='col-6 col-md-3 p-2 ' id='myskills-col2' >
                  
                   <div className='skills-container' style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                    
           <FontAwesomeIcon icon='database' className='brand-icons  ' style={{backgroundColor:"rgb(14, 73, 14)",color:"rgb(47, 218, 47)"}}/>
            <p className='p-0 m-0 mt-2 text-center' style={{fontFamily:"Poppins",fontWeight:"bold"}}>Mongo DB</p>
           
             <p className='m-0 mt-3 text-center' style={{fontFamily:"Poppins",fontWeight:"500"}} id='para'>NoSQL database for flexible, scalable data storage</p>
          </div>
              </div>
                
    <div className=' col-6 col-md-3 p-2  'id='myskills-col2'>
         <div className='skills-container'  style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
            <FontAwesomeIcon icon={['fab','node-js']} className='brand-icons' style={{backgroundColor:"rgba(0, 0, 0, 0.77)",color:"rgba(45, 246, 45, 1)"}}/>
           
            <p className='p-0 m-0 mt-2 text-center' style={{fontFamily:"Poppins",fontWeight:"bold"}}>Express.js</p>
           
             <p className='m-0 mt-3 text-center' style={{fontFamily:"Poppins",fontWeight:"500"}} id='para'>Backend framework for building robust APIs</p>
          </div>
    </div>
          
          
<div className=' col-6 col-md-3 p-2' id='myskills-col2'>
  
           <div className='skills-container' style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
            <FontAwesomeIcon icon={['fab','react']} className='brand-icons' style={{backgroundColor:"rgba(201, 233, 244, 1)",color:"rgba(18, 128, 224, 1)"}}/>
            <p className='p-0 m-0 mt-2 text-center' style={{fontFamily:"Poppins",fontWeight:"bold"}}>React.js</p>
             <p className='m-0 mt-3 text-center' style={{fontFamily:"Poppins",fontWeight:"500"}} id='para'>Frontend library for building interactive UIs</p>
          </div>
</div>


<div className=' col-6 col-md-3 p-2' id='myskills-col2'>
 <div className='skills-container' style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
            <FontAwesomeIcon icon={['fab','node']} className='brand-icons' style={{backgroundColor:"rgba(138, 241, 91, 1)"}}/>
            <p className='p-0 m-0 mt-2 text-center' style={{fontFamily:"Poppins",fontWeight:"bold"}}>Node.js</p>
             <p className='m-0  mt-3 text-center' style={{fontFamily:"Poppins",fontWeight:"500"}} id='para'>JavaScript runtime for server-side development</p>
          </div>
</div>

          
          </div>


          <h2 style={{textAlign:"center",fontSize:"1.3rem",fontFamily:"Poppins",fontWeight:"600",height:"fit-Content",marginTop:"30px"}}>Frontend Technologies</h2>


          <div className="row gap-0 gap-lg-4" style={{display:"flex",justifyContent:"center"}}>
            {
              Array.isArray(frontendskillsdata)&&frontendskillsdata.map((data)=>(
                 <div className='p-2 m-0 col-6 col-lg-2' 
                   style={{maxWidth:"200px"}}
                 >
                    <div className='Fontendtech-container '>
                       <FontAwesomeIcon icon={data.icon}  color={data.color}className='Frontendtech-icon'/>

                       <p >{data.title}</p>
                    </div>
                 </div>
              ))
            }
          </div>


          {/*  */}

           <h2 style={{textAlign:"center",fontSize:"1.3rem",fontFamily:"Poppins",fontWeight:"600",height:"fit-Content",marginTop:"30px"}}>Backend & Other Skills</h2>


          <div className="row gap-0 gap-lg-4" style={{display:"flex",justifyContent:"center"}}>
            {
              Array.isArray(Backendicon)&&Backendicon.map((data)=>(
                 <div className='p-2 m-0 col-6 col-lg-2' 
                   style={{maxWidth:"200px"}}
                 >
                    <div className='Backendskills-container'>
                       <FontAwesomeIcon icon={data.icon}  color={data.color}className='Backendskills-icon'/>

                       <p>{data.title}</p>
                    </div>
                 </div>
              ))
            }
          </div>
        </div>
      </div>

    </section>

    <section className='container-fluid' id='projectsec' style={{display:"flex",justifyContent:"center"}}>
      <div className="row gap-5 ps-2 pe-2 " style={{display:"flex",justifyContent:"center"}}>
        <h2 id='myprojectheading'>My Projects</h2>
       
           {
            Array.isArray(projectdata)&&projectdata.map((data)=>(
               <div className="col-12 col-lg-3 m-0 p-0">
                  <div id='project-container' >
                    <img src={data.image} alt="E-commerce Platform" id='project-img'/>
                    
                     <h3 id='project-title'>{data.title}</h3>
                     <p id='project-description'>{data.description}</p>

                    <a href={data.livedemo} target='_blank'><p style={{display:"inline-block",cursor:"pointer",padding:"0 7px"}}><FontAwesomeIcon icon={['fas','up-right-from-square']}/>Live Demo</p></a>
                   
                   <a href={data.gitcode} target='_blank' style={{textDecoration:"none",color:"black"}}> <p style={{display:"inline-block",marginLeft:"10px"}} className='me-3'><FontAwesomeIcon icon={['fab','github']}/>code</p></a>
                  </div>
                </div>
            ))
           }

          <div style={{display:"flex",justifyContent:"center"}}>
             <p  id='viewprojects' ><FontAwesomeIcon icon={'eye'}/>View All Projects</p>
          </div>
          
        </div>
      
    </section>




    <section className='container-fluid'  id='getintouchcontainer'>

    {/* <div className='spinner-container'>
          {

            showspinner && <div className="spinner-border" role="status"></div>
         }
         </div>  */}

      {/* style={{display:"flex",justifyContent:"center",margin:"0 auto"}} */}
      
      <div className="row"  id='getintouchrow'>
        {/* style={{display:"flex",justifyContent:"center",margin:"0 auto"}} */}
       
        <h2 id='getintouchheading' className='mt-5'>Get In Touch</h2>
        <div className="col-12 col-lg-6 p-0 ps-3 pe-3" id='getintouchinfocont'>
            <h2 className='mt-5'>Contact Information</h2>

            <p>Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>

            <div className='d-flex gap-3 mt-5' id='emailcont'>
              <div id='' className=' '>
                 <FontAwesomeIcon icon={'envelope'} color='rgba(40, 115, 245, 1)' style={{backgroundColor:'rgba(215, 240, 250, 1)'}} id='continfoicon'/>
              </div>
             
               <div>
                 <h5 className='p-0 m-0'>Email</h5>
              <p className='p-0 m-0' >yashhollam01@gmail.com</p>
               </div>
            </div>
       
           <div className='d-flex gap-3 mt-4' id='emailcont'>
              <div id='' className=' '>
                 <FontAwesomeIcon icon={'phone-flip'} color='rgba(27, 163, 15, 1)' style={{backgroundColor:'rgba(212, 241, 212, 1)'}} id='continfoicon'/>
              </div>
             
               <div>
                 <h5 className='p-0 m-0'>Phone</h5>
              <p className='p-0 m-0' >+91 9022467825</p>
               </div>
            </div>


            <div className='d-flex gap-3 mt-4' id='emailcont'>
              <div id='' className=' '>
                 <FontAwesomeIcon icon={'location-dot'} color='rgba(246, 7, 7, 1)' style={{backgroundColor:'rgba(246, 219, 219, 1)'}} id='continfoicon'/>
              </div>
             
               <div>
                 <h5 className='p-0 m-0'>Location</h5>
              <p className='p-0 m-0' >Pune,India</p>
               </div>
            </div>
       
        </div>

       
        <div className="col-12 col-lg-6 mt-5 ">
        
       
          
          
           <form onSubmit={submitform}>
            
            
            <div className='col-6 col-lg-12 d-lg-flex gap-3' style={{width:"100%"}}>
                <div style={{width:"100%"}}>
                    <label  className='form-label m-0 mt-4 mt-lg-0 mb-2'>Your Name</label>
                    <input type="text"
                     className='form-control'
                      onChange={handleinput}
                      value={input.name}
                      name='name'/>
                </div>
                
                <div style={{width:"100%"}}>
                     <label htmlFor="" className='form-label m-0 mt-4 mt-lg-0 mb-2'>Your Email</label>
                <input type="email"
                 className='form-control'
                  onChange={handleinput}
                 value={input.email}
                 name='email' />
                </div>
                
            </div>
                 
                   <label htmlFor="" className='form-label m-0 mt-4 mb-2'>Subject</label>
             <input type="text"
              className='form-control'
               onChange={handleinput}
              value={input.subject}
              name='subject' />

              <label htmlFor="" className='form-label m-0 mt-2 mb-2'>Message</label>
              <textarea 
                className='form-control'
                 style={{height:"100px"}}
                 onChange={handleinput}
                 value={input.message}
                 name='message'></textarea>

              <button id='sndmsgbtn' type='submit'>Send Mail</button>
            <div>

            </div>
             
            
            


            
             
           </form>
        </div>
      </div>
    </section>

    <div className="footer bg-dark text-center mt-5">
      <div className="row" id='footerrow'>
       
        
          <h2 className=' mt-4' id='footer_username'>Yash</h2>
           <h4 className='text-secondary mt-1'>MERN Stack Developer</h4>
        
          <div className='d-flex justify-content-center'  >
          <a href="" target='_blank'></a><FontAwesomeIcon icon={['fab','linkedin-in']} color='white' className='socialmedia-icon'/>
         
         
          <FontAwesomeIcon icon={['fab','github']} color='white'  className='socialmedia-icon'/>
        
        
          <FontAwesomeIcon icon={['fab','twitter']} color='white' className='socialmedia-icon'/>
          
          
          <FontAwesomeIcon icon={['fab','instagram']} color='white' className='socialmedia-icon'/>
          </div>
        
      </div>
    </div>
      </>
  )
}

export default Home