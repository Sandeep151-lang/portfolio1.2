import React, { useState, useEffect } from 'react'
import './App.css';
import { Container } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import certificate from '../src/assets/GuviCertification.png'
import certificate1 from '../src/assets/sample2.png'
import aboutimage from '../src/assets/sandeepcontact.png';
import { Line } from 'rc-progress';
import { AiFillHtml5, AiFillStar } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript, SiMongodb } from 'react-icons/si';
import { RiReactjsFill } from 'react-icons/ri';
import { IoLogoNodejs } from 'react-icons/io';
import { GrLinkedinOption } from 'react-icons/gr'
import { Fade } from 'react-awesome-reveal'
import ReactTypingEffect from 'react-typing-effect';
import Loader from './Loader';
import Experience from './Experience';
import Modal from 'react-modal';




const App = () => {

  const [loading, setloading] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false)
    }, 3000);
  }, [])


  return (
    <>
      {loading ? <Loader /> :

        <div className="w3-card-4">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid n w3-card ">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse container-fluid" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                    <a className="nav-link  home" aria-current="page" href="#hom" style={{ 'fontSize': '1.5rem' }}>Sandeep Nandanwar<span>&#128512;</span></a>
              </li>
            </ul>
            <form className="">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex nav-list">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skill">Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#project">Project</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#certificate">Certificate</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#interest">Interest/Achievements</a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
      {/* 
      --------------------------section home start----------------------------------------- */}

      <Fade direction='down' delay={50} damping="0.5" triggerOnce>
            <section className='d-flex justify-content-space-around mt-5 home-section' id="home">
          <Container className='left '>
                <h1>Hello,</h1>

                <p>I' am <span className='my-name'> Sandeep Nandanwar</span></p>
                <p className='my-name'><ReactTypingEffect
                  text={["React Developer"]}
                /></p>
            <a href='#contact'><button className='btn btn-primary hire-button' >Hire Me</button></a>
                <a href="https://drive.google.com/file/d/1Z1H1dfDRrr5ACPXSyOCkFIL7a-7pOBdz/view?usp=sharing" target="_blank" className='resume-button-link'
              rel="noreferrer"><button className='btn btn-primary resume-button'>Resume</button></a>
          </Container>
          <Container className='right text-center center'>
                <img src="https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-flat-wind-work-business-image_1199291.jpg" alt="me" className='about-image' height="100%" />
          </Container>
        </section>
      </Fade>
      {/* 
      --------------------------section home end----------------------------------------- */}


          {/* ------------------------------what I Do ? section start-------------------------- */}
          <Experience />
          {/* ------------------------------what I Do ? section end-------------------------- */}


      {/* 
      --------------------------section about start----------------------------------------- */}
      <h1 className='text-center mt-5 about-head' id="about">About</h1>
      <Fade cascade delay={300} >
        <section className='d-flex justify-content-space-around about-section'>
          <Container className='right text-center center'>
            <div className='d-flex justify-content-around'>
              <div className='right text-center center'>
                    <img src={aboutimage} alt="me" className='about-image mt-5' />
              </div>
              <div className='d-flex flex-column'>
                <a href="https://github.com/Sandeep151-lang?tab=repositories" target="_blank"
                  rel="noreferrer" className='text-center social-link' style={{ "fontWeight": "bold" }}>
                      <AiFillGithub style={{ width: 25, height: 25 }} className="github-link" /></a>
                <a href="https://www.linkedin.com/in/sandeep-nandanwar-29a4b61b9" target="_blank"
                  rel="noreferrer" className='text-center linked-In' style={{ "fontWeight": "bold" }}>
                      <GrLinkedinOption style={{ width: 25, height: 25 }} className="linked-link" /></a>
              </div>
            </div>
          </Container>
          <Container className='center p-3'>
            <h4><span className='about_heading_section'>Hello ,</span> I'm Sandeep Nandanwar</h4>
            <hr />
            <p className='about-para'>I'm enthusiastic about tech in coding and learning new things about computers
              and what they can do. I've been dabbling coding with coding since roughly age
              of 15, until I Started studying computer Science from S.B JAIN INSTITUTE OF TECHNOLOGY MANAGEMENT & RESEARCH
              at Rashtrasant Tukadoji Maharaj Nagpur University at 19 where my interest really peaked.</p>
            <p className='about-para'>I'm interested in building something awesome with code , currently focused on Web Development.</p>
            <p className='about-para'>When I'm not coding I play games with my friends, watch some show on prime video , or if the weather's
              good , play cricket.</p>
            <p className='about-para'>
                  <span className='about_sub_para'>School</span> : S.T. Vishna R.R.Nector
            </p>
            <p className='about-para'>
                  <span className='about_sub_para'>College</span> : B.E. from  S.B JAIN INSTITUTE OF TECHNOLOGY MANAGEMENT & RESEARCH
            </p>
            <p className='about-para'>
                  <span className='about_sub_para'>Stream</span> : Computer Science & Engineering
            </p>
            <hr />
          </Container>
        </section >
      </Fade>
      {/* 
      --------------------------section about end----------------------------------------- */}


      {/* 
      --------------------------section skill start----------------------------------------- */}

          <h1 className='text-center mt-5 about-head' id="skill">Skills</h1>
        <div className='d-flex container skill-section'>
        <Container>
          <Fade cascade delay={500} triggerOnce>
            <div className='w3-card-4 container skill-card' style={{ 'borderRadius': '5px', width: '80%' }}>
              <div className='d-flex '>
                <div className='d-flex justify-content-space-around'>
                  <AiFillHtml5 style={{ width: 20, height: 20, color: 'blue' }} className=" mt-1" /><p className='mx-2 skill-text'>HTML</p>
                </div>
                <p className='ms-auto skill-text'>80%</p>
              </div>
              <Line percent="80" strokeWidth="1" strokeColor="blue" prefixCls="rc-progress" />
            </div>
          </Fade>
          <Fade cascade delay={600} triggerOnce>

            <div className='w3-card-4 mt-3 container skill-card' style={{ 'borderRadius': '5px', width: '80%' }}>
              <div className='d-flex'>
                <div className='d-flex justify-content-space-around'>
                  <DiCss3 style={{ width: 20, height: 20, color: 'blue' }} className=" mt-1" /><p className='mx-2 skill-text'>CSS3</p>
                </div>
                <p className='ms-auto skill-text'>70%</p>
              </div>
              <Line percent="70" strokeWidth="1" strokeColor="blue" />
            </div>
          </Fade>
          <Fade cascade delay={700} triggerOnce>

            <div className='w3-card-4 mt-3 container skill-card' style={{ 'borderRadius': '5px', width: '80%' }}>
              <div className='d-flex'>
                <div className='d-flex justify-content-space-around'>
                  <SiJavascript style={{ width: 20, height: 20, color: 'blue' }} className=" mt-1" /><p className='mx-2 skill-text'>Javascript</p>
                </div>
                <p className='ms-auto skill-text'>70%</p>
              </div>
              <Line percent="70" strokeWidth="1" strokeColor="blue" />
            </div>
          </Fade>
          <Fade cascade delay={800} triggerOnce>

            <div className='w3-card-4 mt-3 container skill-card' style={{ 'borderRadius': '5px', width: '80%' }}>
              <div className='d-flex'>
                <div className='d-flex justify-content-space-around'>
                  <RiReactjsFill style={{ width: 20, height: 20, color: 'blue' }} className=" mt-1" /><p className='mx-2 skill-text'>ReactJS</p>
                </div>
                <p className='ms-auto skill-text'>70%</p>
              </div>
              <Line percent="70" strokeWidth="1" strokeColor="blue" />
            </div>
          </Fade>
          <Fade cascade delay={900} triggerOnce>

            <div className='w3-card-4 mt-3 container skill-card' style={{ 'borderRadius': '5px', width: '80%' }}>
              <div className='d-flex'>
                <div className='d-flex justify-content-space-around'>
                  <IoLogoNodejs style={{ width: 20, height: 20, color: 'blue' }} className=" mt-1" /><p className='mx-2 skill-text'>NodeJS</p>
                </div>
                <p className='ms-auto skill-text'>50%</p>
              </div>
              <Line percent="50" strokeWidth="1" strokeColor="blue" />
            </div>
          </Fade>
          <Fade cascade delay={1000} triggerOnce>

            <div className='w3-card-4 mt-3 container skill-card' style={{ 'borderRadius': '5px', width: '80%' }}>
              <div className='d-flex'>
                <div className='d-flex justify-content-space-around'>
                  <AiFillHtml5 style={{ width: 20, height: 20, color: 'blue' }} className=" mt-1" /><p className='mx-2 skill-text'>ExpressJS</p>
                </div>
                <p className='ms-auto skill-text'>50%</p>
              </div>
              <Line percent="50" strokeWidth="1" strokeColor="blue" />
            </div>
          </Fade>
          <Fade cascade delay={1100} triggerOnce>

            <div className='w3-card-4 mt-3 container skill-card' style={{ 'borderRadius': '5px', width: '80%' }}>
              <div className='d-flex'>
                <div className='d-flex justify-content-space-around'>
                  <SiMongodb style={{ width: 20, height: 20, color: 'blue' }} className=" mt-1" /><p className='mx-2 skill-text'>MongoDB</p>
                </div>
                <p className='ms-auto skill-text'>60%</p>
              </div>
              <Line percent="60" strokeWidth="1" strokeColor="blue" />
            </div>
          </Fade>
          </Container>
          <Container className='right text-center center'>
            <img src='https://images.unsplash.com/photo-1521790945508-bf2a36314e85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNraWxsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              alt="me" className='about-image' width='100%' height={300} style={{ opacity: '0.7', borderRadius: '5px', marginTop: '10%' }} />
          </Container>
        </div>

      {/* 
      --------------------------section skill end----------------------------------------- */}

      {/* 
      --------------------------section project start----------------------------------------- */}
      <section className=' main-project mt-5 ' id="project">
        <h1 className='text-center mt-5 about-head '>Project</h1>
        <Fade cascade delay={100}>
          <div className='d-flex justify-content-evenly project-flex'>
            <div className="card mb-3 w3-card-4 project-card" style={{ "maxWidth": "23rem" }}>
              <div className="row g-0">
                <div className="col-md-12">
                  <div className="card-body">
                    <h5 className="card-title">Ecommerce Clone</h5>
                        <img src="https://img.freepik.com/free-vector/happy-people-shopping-online_74855-5865.jpg?w=740&t=st=1649668701~exp=1649669301~hmac=5a9b23d49d09aae3fdb0f56d53b17d806a3dbb32cb930ebd0677ece6adc9aa9f" alt='img' width='100%' />
                    <div className='d-flex mt-3'>
                      <a href="https://spontaneous-shortbread-7d98c9.netlify.app/" target="_blank" rel="noreferrer" ><button className='btn btn-primary source-button source-button '>view User App</button></a>
                      <a className='ms-auto' href="https://github.com/Sandeep151-lang/ecommerce-frontend-panel" target="_blank" rel="noreferrer" ><button className='btn btn-primary source-button-link'>View source code</button></a>
                    </div>
                    <br />
                    <div className='d-flex'>
                      <a href="https://thriving-pavlova-7d6a61.netlify.app/" target="_blank" rel="noreferrer" ><button className='btn btn-primary source-button '>View Admin App</button></a>
                      <a className='ms-auto' href="https://github.com/Sandeep151-lang/ecommerce-admin-panel" target="_blank" rel="noreferrer" ><button className='btn btn-primary source-button-link'>View source code</button></a>
                    </div>
                    <div className='my-3 d-flex'>
                      <a className='mx-auto' href="https://github.com/Sandeep151-lang/ecommerce-node" target="_blank" rel="noreferrer" ><button className='btn btn-primary source-button-link'>Backend source code</button></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 w3-card-4 project-card" style={{ "maxWidth": "23rem" }}>
              <div className="row g-0">
                <div className="col-md-12">
                  <div className="card-body">
                        <h5 className="card-title">Equipment Hiring</h5>
                    <img src="https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg?w=740&t=st=1649669048~exp=1649669648~hmac=54a4dfc397c6163108f0558ba9562deb8a66f5281fa99d37a40ecadf98fa4d62" alt='img' width='100%' />
                    <div className='d-flex my-5'>
                      <a href="https://deft-blini-b59258.netlify.app/" target="_blank" rel="noreferrer" ><button className='btn btn-primary source-button '>View App</button></a>
                      <a className='ms-auto' href="https://github.com/Sandeep151-lang/equipment-product-user-panel" target="_blank" rel="noreferrer" ><button className='btn btn-primary  source-button-link'>View source code</button></a>
                    </div>
                    <div className='d-flex'>
                      <div>

                    <button className='btn btn-primary source-button ' onClick={openModal}>Admin Credential</button>
                      <Modal
                        isOpen={modalIsOpen}                        
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                        >
                    <button className='btn btn-primary  source-button-link' onClick={closeModal}>Close</button>
                    <p className='credential_para'><span className='credential'>Email:-</span>   pandit1@gmail.com</p>
                    <p><span className='credential'>Password:-</span> Test@123</p>
                  </Modal>
                          </div>
                          
                      <a className='mx-auto' href="https://github.com/Sandeep151-lang/equipment-hiring-node" target="_blank" rel="noreferrer" ><button className='btn btn-primary source-button-link'>Backend code</button></a>
                    
              </div>
                  
                   
{/*                       
                    <p>Admin Credential : - pandit1@gmail.com</p>
                    <p>Password:- Test@123</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-evenly project-flex'>
            <div className="card mb-3 w3-card-4 project-card" style={{ "maxWidth": "23rem" }}>
              <div className="row g-0">
                <div className="col-md-12">
                  <div className="card-body">
                    <h5 className="card-title">Movie Tickets</h5>
                        <img src="https://img.freepik.com/free-photo/cinema-cinema-attributes-cinemas-films-online-viewing-popcorn-glasses_99433-1588.jpg?w=740" alt='img' width='100%' />
                    <div className='d-flex my-5'>
                          <a href="https://movieticketbookings.herokuapp.com/" target="_blank" rel="noreferrer" ><button className='btn btn-primary source-button '>View App</button></a>
                      <a className='ms-auto' href="https://github.com/Sandeep151-lang/TicketBooking" target="_blank" rel="noreferrer" ><button className='btn btn-primary  source-button-link'>View source code</button></a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 w3-card-4 project-card" style={{ "maxWidth": "23rem" }}>
              <div className="row g-0">
                <div className="col-md-12">
                  <div className="card-body">
                        <h5 className="card-title">Chat App</h5>
                    <img src="https://img.freepik.com/free-vector/texting-concept-illustration_114360-2744.jpg?t=st=1649669321~exp=1649669921~hmac=0c9551dc5a227d81349400b2ea4564d6473b13f630a042af99ce4830237dc650&w=740" alt='img' width='100%' />
                    <div className='d-flex my-5'>
                      <a href="https://quizzical-hodgkin-b1f619.netlify.app/" target="_blank" rel="noreferrer" ><button className='btn btn-primary source-button '>view App</button></a>
                      <a className='ms-auto' href="https://github.com/Sandeep151-lang/chat-app/tree/main" target="_blank" rel="noreferrer" ><button className='btn btn-primary  source-button-link'>View source code</button></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
          </section>
      {/* 
      --------------------------section project end----------------------------------------- */}


      {/* 
      --------------------------section certificate start----------------------------------------- */}
      <section id="certificate" className='mt-5 certificate'>
        <h1 className='text-center mt-5 about-head'>Certificate</h1>
        <div id="carouselExampleDark" className="carousel carousel-dark slide contact-part" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={certificate} className="d-block w-100" alt="..." height={450} style={{ objectFit: 'contain' }} />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={certificate1} className="d-block w-100" alt="..." height={450} style={{ objectFit: 'contain' }} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* 
      --------------------------section certificate end----------------------------------------- */}

      {/* 
      --------------------------section Interest/Achievements start----------------------------------------- */}
      <Container className='d-flex text-center  inter-achieve mt-5' id="interest">
        <Container>
              <img className='interest-image' src="https://freepngimg.com/thumb/volleyball/5-2-volleyball-png-clipart.png"
                style={{ borderRadius: '30%', maxWidth: "100%" }} alt='imga' />
        </Container>
            <Container className=''>
              <h1 className='justify-content-evenly text-center' style={{ 'fontSize': '50px', color: 'rgb(0 28 85)' }}>Interest</h1>
          <hr />
              <Fade direction='left' delay={200} triggerOnce >
                <p style={{ 'fontSize': '22px', color: 'rgb(109, 132, 178' }}>Watching Movies</p>
                <p style={{ 'fontSize': '22px', color: 'rgb(109, 132, 178' }}>Sports</p>
                <p style={{ 'fontSize': '22px', color: 'rgb(109, 132, 178' }}>Gaming</p>
                <p style={{ 'fontSize': '22px', color: 'rgb(109, 132, 178' }}>Traveling</p>
                <p style={{ 'fontSize': '22px', color: 'rgb(109, 132, 178' }}>Cooking</p>
                <p style={{ 'fontSize': '22px', color: 'rgb(109, 132, 178' }}>Art</p>
                <p style={{ 'fontSize': '22px', color: 'rgb(109, 132, 178' }}>Reading</p>
          </Fade>
        </Container>
      </Container>
      <Container className='d-flex  inter-achieve mt-5 text-center'>
            <Container clasasName="achievements">
              <h1 className='justify-content-evenly text-center' style={{ 'fontSize': '2.7rem', color: 'rgb(0 28 85)' }}>Achievements</h1>
          <hr />
          <Fade direction='right' delay={200} triggerOnce>
                <p style={{ 'fontSize': '22px', color: 'rgb(109, 132, 178' }}>Developed or implemented new procedures or systems</p>
                <p style={{ 'fontSize': '22px', color: 'rgb(109, 132, 178' }}>Come up with a new idea that improved things</p>
                <p style={{ 'fontSize': '22px', color: 'rgb(109, 132, 178' }}>Contributed to good customer service</p>
                <p style={{ 'fontSize': '22px', color: 'rgb(109, 132, 178' }}>Identified a problem and solved it</p>
          </Fade>
        </Container>
        <Container>
              <img className='interest-image' src="https://st.depositphotos.com/1552219/3605/i/600/depositphotos_36058621-stock-photo-man-with-check-mark.jpg"
                style={{ borderRadius: '30%', maxWidth: "100%" }} alt='imga' />
        </Container>
      </Container>

      {/* 
      --------------------------section Interest/Achievements end----------------------------------------- */}




          {/* -------------------------------------------contact section start---------------------------------- */}

          <section className='mt-5 experience' id="contact" >
            <h1 className='text-center my-3' style={{ color: "rgb(0, 28, 85)", fontSize: "50px", opacity: "1" }}>Contact</h1>
            <div className='d-flex justify-content-space-around experience-flex'>
              <Container className='text-center center'>
                <Fade direction='left' delay={50} damping="0.5" triggerOnce>
                  <img src="https://media.istockphoto.com/vectors/email-vector-flat-icon-vector-id1131969913?k=20&m=1131969913&s=612x612&w=0&h=bc001355mU2lj9gJEaeKFj--Bx3H4UBgiXUujNGQvZE="
                    alt='img' className='experience-image' style={{ maxWidth: "100%" }} />
                </Fade>
              </Container>
              <Container className='center'>
                <p className='text-center' style={{ color: "rgb(0, 28, 85)", fontSize: "40px", fontWeight: 'bold' }}>Address</p>
                <ul className='contact-list'>
                  <p className='text-center' >The Millennium Flat No.-403 , Singapore Life City, Gotalpanjari </p>
                  <p className='text-center'>Nagpur</p>
                  <p className='text-center'>Maharashtra - 440018</p>
                  <h1 className='text-center' style={{ color: "rgb(0, 28, 85)", fontSize: "40px", fontWeight: 'bold', marginTop: '2rem' }}>Phone Number</h1>
                  <p className='text-center'>+91 8738854495</p>
                </ul>
                <a href="https://github.com/Sandeep151-lang/portfolio1.2" target="_blank"
                  rel="noreferrer"><button className="btn btn-primary submit-button "><AiFillStar style={{ color: 'orange' }} className="mx-2" />Star Me On Github</button></a>
              </Container>
            </div>
          </section >

          {/* -------------------------------------------------contact section end------------------------------ */}

      {/* 
      --------------------------section Footer start----------------------------------------- */}
      <section className='foot mt-5'>
        <div className=' text-white text-center d-flex justify-content-space-around  foot-page'>
          <Container className='mt-5'>
            <p>Email : sandeepnandanwar92@gmail.com</p>
          </Container>
          <Container className='mt-5'>
            <h5 className='copyright'>&#169; COPYRIGHT 2023</h5>
          </Container>
        </div>
      </section>
      {/* 
      --------------------------section Footer end----------------------------------------- */}
        </div>
      }
    </>
  );
}

export default App;
