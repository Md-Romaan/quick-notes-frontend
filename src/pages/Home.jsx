import React from 'react'
import hero from "../images/hero.jpg"
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();

    const name = "Md Romaan";
    const specialization = "Software Developer";

    const frontEndSkills = ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS", "React JS"];
    const backEndSkills = ["Java", "J2EE", "Spring Boot", "Hibernate", "Python", "Node JS", "Express Js"];
    const dataBaseSkills = ["SQL", "MySQL", "MongoDB"];
    const versionControl = ["Git", "GitHub"];

    console.log(hero);
    return (
        <>
            {/* row 1------- */}
            <div className='py-10 bg-blue-100'>

                <div className='mx-10 sm:mx-16'>
                    <div className='flex gap-10 flex-wrap sm:flex-nowrap'>

                        {/* box 1----- */}
                        <div className='w-[100%] h-[350px] sm:w-[50vw]'>

                            <div className='h-[100%] flex flex-col justify-center items-center p-5 space-y-8 bg-white rounded-2xl'>
                                <div>
                                    <span className='text-3xl block'>I'm <span className='font-bold text-blue-600 font-edu'>{name}</span></span>
                                    <div className='text-right font-bold'>{specialization}</div>
                                </div>
                                <p className='italic md:w-[80%]'>I'm graduated in B.E CSE, skilled in developing
                                    web applications using modern technologies and frameworks.
                                </p>

                                <div className=''>
                                    <button onClick={() => navigate("/contact")} className='bg-blue-600 text-white font-bold py-2 px-3 rounded-lg text-sm hover:bg-blue-800 shadow-2xl font-edu'>Contact Me</button>
                                </div>
                            </div>
                        </div>

                        {/* box2----- */}
                        <div className='w-[100%] sm:w-[50vw] '>

                            <div className='h-[100%] flex flex-col justify-center items-center bg-white rounded-2xl'>
                                <img src={hero} width="300px" />
                            </div>

                        </div>

                    </div>
                </div>

            </div>


            {/* row 2--------------- */}
            <div className=''>

                <div className='mx-10 my-5 sm:mx-16'>
                    <h1 className='text-2xl font-semibold bg-blue-400 p-3 text-white rounded-2xl border-2 border-black'>Technical Skills</h1>

                    {/* skill container------ */}
                    <div className='mt-8 flex flex-col'>

                        <button className='skill-heading'>Frontend Technologies</button>

                        <div className='flex gap-5 flex-wrap justify-center mt-2'>
                            {frontEndSkills.map((skill) => {
                                return <button className='skill'>{skill}</button>
                            })}
                        </div>

                        <button className='skill-heading mt-5'>Backend Technologies</button>

                        <div className='flex gap-5 flex-wrap justify-center  mt-2'>
                            {backEndSkills.map((skill) => {
                                return <button className='skill'>{skill}</button>
                            })}
                        </div>

                        <button className='skill-heading mt-5'>Database Technologies</button>

                        <div className='flex gap-5 flex-wrap justify-center mt-2'>
                            {dataBaseSkills.map((skill) => {
                                return <button className='skill'>{skill}</button>
                            })}
                        </div>

                        <button className='skill-heading mt-5'>Version control</button>
                        <div className='flex gap-5 flex-wrap justify-center mt-2'>
                            {versionControl.map((skill) => {
                                return <button className='skill'>{skill}</button>
                            })}
                        </div>


                    </div>

                </div>

            </div>

        </>
    )
}

export default Home