//import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import { Container } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import me from '../src/assets/sandeep4.png';
import certificate from '../src/assets/GuviCertification.png'
import certificate1 from '../src/assets/sample2.png'
import aboutimage from '../src/assets/sandeepcontact.png';
import { Line } from 'rc-progress';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript, SiMongodb } from 'react-icons/si';
import { RiReactjsFill } from 'react-icons/ri';
import { IoLogoNodejs } from 'react-icons/io';
import axios from 'axios';
import { GrLinkedinOption } from 'react-icons/gr'
//import ScrollReveal from 'scrollreveal'
import { Fade, Slide } from 'react-awesome-reveal'




const App = () => {

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');

  const contact = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://portfolio-section.herokuapp.com/message', { name, email, message });
      setname("")
      setemail("")
      setmessage("")
      alert('message sent')
    } catch (error) {
      console.log(error.response)
      alert('invalid')
    }
  }


  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid n w3-card ">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse container-fluid" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link  home" aria-current="page" href="#home">Home</a>
              </li>
            </ul>
            <form className="">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex nav-list">
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
            <p>Web designer</p>
            <a href='#contact'><button className='btn btn-primary hire-button' >Hire Me</button></a>
            <a href="https://drive.google.com/file/d/1LrhBajb9Dj90Qomftgm9g2aVyJhdu-9p/view" target="_blank"
              rel="noreferrer"><button className='btn btn-primary resume-button'>Resume</button></a>
          </Container>
          <Container className='right text-center center'>
            <img src={me} alt="me" className='about-image' />
          </Container>
        </section>
      </Fade>
      {/* 
      --------------------------section home end----------------------------------------- */}

      {/* 
      --------------------------section about start----------------------------------------- */}
      <h1 className='text-center mt-5 about-head' id="about">About</h1>
      <Fade cascade delay={300} >
        <section className='d-flex justify-content-space-around about-section'>
          <Container className='right text-center center'>
            <div className='d-flex justify-content-around'>
              <div className='right text-center center'>
                <img src={aboutimage} alt="me" className='about-image' />
              </div>
              <div className='d-flex flex-column'>
                <a href="https://github.com/Sandeep151-lang?tab=repositories" target="_blank"
                  rel="noreferrer" className='text-center social-link' style={{ "fontWeight": "bold" }}>
                  <AiFillGithub style={{ width: 30, height: 30, color: 'black' }} className="github-link" /></a>
                <a href="https://www.linkedin.com/in/sandeep-nandanwar-29a4b61b9" target="_blank"
                  rel="noreferrer" className='text-center linked-In' style={{ "fontWeight": "bold" }}>
                  <GrLinkedinOption style={{ width: 30, height: 30, color: 'black' }} className="github-link" /></a>
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
              <span className='about_sub_para'>School:</span> S.T. Vishna R.R.Nector
            </p>
            <p className='about-para'>
              <span className='about_sub_para'>College:</span> B.E. from  S.B JAIN INSTITUTE OF TECHNOLOGY MANAGEMENT & RESEARCH
            </p>
            <p className='about-para'>
              <span className='about_sub_para'>Stream: </span>Computer Science & Engineering
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
            <div className="card mb-3 w3-card-4 project-card" style={{ "maxWidth": "500px" }}>
              <div className="row g-0">
                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="card-title">Ecommerce Clone</h5>
                    <p className="card-text">E-commerce (electronic commerce) is the activity of electronically buying or selling of
                      products on online services or over the Internet. E-commerce draws on technologies such as
                      mobile commerce, electronic funds transfer,
                      supply chain management, Internet marketing, online transaction processing,</p>
                    <a href="https://ecomerce-admin-panel.herokuapp.com/" target="_blank" rel="noreferrer" ><button className='btn btn-primary my-2'>view User App</button></a>
                    <a href="https://github.com/Sandeep151-lang/project1-ecommerce-user-panel" target="_blank" rel="noreferrer" ><button className='btn btn-primary mx-2 source-button'>View source code</button></a>
                    <br />
                    <a href="https://edcommerce-admin-panel.herokuapp.com/" target="_blank" rel="noreferrer" ><button className='btn btn-primary'>view Admin App</button></a>
                    <a href="https://github.com/Sandeep151-lang/project1-admin-panel-ecommerce-clone" target="_blank" rel="noreferrer" ><button className='btn btn-primary mx-2 source-button'>View source code</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 w3-card-4 project-card" style={{ "maxWidth": "500px" }}>
              <div className="row g-0">
                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="card-title">Equipment Hiring</h5>
                    <p className="card-text">Rental, also known as hiring or letting is an agreement where payment is made for the
                      temporary use of a good, service or property owened by another.
                      A gross lease is when the tenant pays a flat rental amount and the landlords pays for
                      all property charges regularly incurred by the ownership</p>

                    <a href="https://hiring-project-panel.herokuapp.com/" target="_blank" rel="noreferrer" ><button className='btn btn-primary'>view App</button></a>
                    <a href="https://github.com/Sandeep151-lang/hackathon-2-hiring-product" target="_blank" rel="noreferrer" ><button className='btn btn-primary mx-2 sorce-button'>View source code</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex project-flex justify-content-evenly'>
            <div className="card mb-3 w3-card-4 project-card" style={{ "maxWidth": "500px" }}>
              <div className="row g-0">

                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="card-title">Movie Ticket Booking</h5>
                    <p className="card-text">Online Movie Ticket Booking System” is the process whereby consumers directly buy
                      movie tickets online from a multiplex website interactively in real-time without an
                      intermediary service over the Internet. The Given System provides the detailed working of the
                      Online Movie Ticket Booking Processing and what all happens whenever we or any one of us goes to
                      book movie tickets online.</p>
                    <a href="https://movieticketbook.herokuapp.com/" target="_blank" rel="noreferrer" ><button className='btn btn-primary'>view App</button></a>
                    <a href="https://github.com/Sandeep151-lang/TicketBooking" target="_blank" rel="noreferrer" ><button className='btn btn-primary mx-2 sorce-button'>View source code</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 w3-card-4 project-card" style={{ "maxWidth": "500px" }}>
              <div className="row g-0">
                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="card-title">Chat App</h5>
                    <p className="card-text">A web chat is a system that allows users to communicate in real-time using
                      easily accessible web interfaces. It is a type of Internet online chat distinguished by its simplicity and accessibility
                      to users who do not wish to take the time to install and learn to use specialized chat software.</p>
                    <a href="https://quizzical-hodgkin-b1f619.netlify.app/" target="_blank" rel="noreferrer" ><button className='btn btn-primary'>view App</button></a>
                    <a href="https://github.com/Sandeep151-lang/chat-app/tree/main" target="_blank" rel="noreferrer" ><button className='btn btn-primary mx-2 sorce-button'>View source code</button></a>
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
        <Container className='inter-para'>
          <h1 className='justify-content-evenly text-center'>Interest</h1>
          <hr />
          <Fade direction='left' delay={200} triggerOnce>
            <p>Watching Movies</p>
            <p>Sports</p>
            <p>Gaming</p>
            <p>Traveling</p>
            <p>Cooking</p>
            <p>Art</p>
            <p>Reading</p>
          </Fade>
        </Container>
        <Container className='achievemnets'>
          <h1 className='justify-content-evenly text-center'>Achievements</h1>
          <hr />
          <Fade direction='right' delay={200} triggerOnce>
            <p>Developed or implemented new procedures or systems</p>
            <p>Come up with a new idea that improved things</p>
            <p>Contributed to good customer service</p>
            <p>Identified a problem and solved it</p>
          </Fade>
        </Container>
      </Container>

      {/* 
      --------------------------section Interest/Achievements end----------------------------------------- */}


      {/* 
      --------------------------section Contact start----------------------------------------- */}


      <h1 className='text-center mt-5 about-head' id="contact">Contact</h1>

        <div className='container contact-section'>
          <form className='contact-part'>
          <Fade cascade delay={200}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" aria-describedby="name" value={name} onChange={(e) => setname(e.target.value)} />
            </div>
          </Fade>
          <Fade cascade delay={300}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => { setemail(e.target.value) }} />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
          </Fade>
          <Fade cascade delay={400}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={(e) => setmessage(e.target.value)}></textarea>
            </div>
          </Fade>

            <button className="btn btn-primary submit-button" onClick={contact}>Submit</button>
          </form>
      </div>
      {/* 
      --------------------------section Contact start----------------------------------------- */}


      {/* 
      --------------------------section Footer start----------------------------------------- */}
      <section className='foot mt-5'>
        <div className=' text-white text-center d-flex justify-content-space-around  foot-page'>
          <Container className='mt-5'>
            <p>Email : sandeepnandanwar92@gmail.com</p>
          </Container>
          <Container className='mt-5'>
            <h5 className='copyright'>&#169; COPYRIGHT 2022</h5>
          </Container>
        </div>
      </section>
      {/* 
      --------------------------section Footer end----------------------------------------- */}
    </div>
  );
}

export default App;
