import React from 'react'
import { Container } from 'react-bootstrap';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript, SiMongodb } from 'react-icons/si';
import { RiReactjsFill } from 'react-icons/ri';
import { IoLogoNodejs } from 'react-icons/io';
import { Fade } from 'react-awesome-reveal'


const Experience = () => {
    return (
        <section className='mt-5 experience'>
            <h1 className='text-center my-5' style={{ color: "rgb(0, 28, 85)", fontSize: "50px", opacity: "1" }}>What I Do?</h1>
            <div className='d-flex justify-content-space-around experience-flex'>

                <Container className='text-center center'>
                    <Fade direction='left' delay={50} damping="0.5" triggerOnce>

                        <img src="https://st4.depositphotos.com/34031690/39622/v/380/depositphotos_396224840-stock-illustration-vector-illustration-businessman-standing-next.jpg?forcejpeg=true"
                            alt='img' className='experience-image' />
                    </Fade>
                </Container>
                <Container className='center'>

                    <p style={{ color: "rgb(0, 28, 85)", fontSize: "30px" }}>Full stack development</p>
                    <AiFillHtml5 style={{ width: 70, height: 70, color: 'rgb(227, 79, 38)' }} className="mx-3" />
                    <DiCss3 style={{ width: 70, height: 70, color: 'rgb(21, 114, 182)' }} />
                    <SiJavascript style={{ width: 60, height: 60, color: 'rgb(247, 223, 30)', backgroundColor: 'black' }} className="mx-3" />
                    <RiReactjsFill style={{ width: 70, height: 70, color: 'skyblue' }} className="mx-3" />
                    <IoLogoNodejs style={{ width: 70, height: 70, color: 'Green' }} className="mx-3" />
                    <SiMongodb style={{ width: 70, height: 70, color: '#0d3e0d' }} className="mx-3" />
                    <ul className='what-list'>
                        <li className='mb-3'> Building responsive website front end using React</li>
                        <li>Building Ecommerce website</li>
                    </ul>

                </Container>
            </div>
        </section >
    )
}

export default Experience
