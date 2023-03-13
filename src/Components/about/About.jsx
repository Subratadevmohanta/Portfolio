import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>2+ years Working</small>
                        </article>
                        <article className='about__card'>
                            <FaUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>100+ Worldwide</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>40+ Completed</small>
                        </article>
                    </div>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis deserunt excepturi minima quos blanditiis. Exercitationem eveniet sapiente tempore illo, amet, porro distinctio iure doloremque optio ipsam laboriosam non. Eos, quos.</p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About