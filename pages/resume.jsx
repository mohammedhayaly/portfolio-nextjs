import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import MohammedResume from '../public/assets/MohammedResume.jpg';




const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/assets/MohammedResume.jpg"; // Update with the correct path to your resume image
  link.download = "MohammedResume.jpg"; // Update with the desired download filename

  link.click();
};

const resume = () => {
  return (
    <>
      <Head>
        <title>Mohammed | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center text-[#d24f4f]'>Mohammed Hayaly</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/mohammed-hayaly-74baaa270/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/mohammedhayaly'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
               Summary{' '}
              
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
        Dedicated Front-End Web Developer with a passion for creating seamless and visually
         engaging user experiences. Proficient in HTML, CSS, and JavaScript, 
         with a strong foundation in responsive design principles.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> Next JS
            <span className='px-2'>|</span> React
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>Firebase
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>HTML
            <span className='px-2'>|</span> CSS
            <span className='px-2'>|</span> RESTAPI
            <span className='px-2'>|</span> Adaptability
            <span className='px-2'>|</span> Leadership
            <span className='px-2'>|</span> Pestel analysis
            <span className='px-2'>|</span> Swot analysis
            <span className='px-2'>|</span> Tows matrix
            <span className='px-2'>|</span> Project management
            <span className='px-2'>|</span> Effective communication
            
          </p>
         
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Languages
            </span>
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            ARABIC – Mother language
            </li>
            <li>
            English –Advanced
            </li>
            <li>
            Turkish – Native
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Education - Certifications
            </span>
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
          <li>
            Re:coded (Frontend web development)
            </li>
            <li>
            Master of business administration (MBA) English - Bahçeşehir university
            </li>
            <li>
            Project management course /project.
            </li>
            <li>
            Digital marketing course / project.
            </li>
            <li>
            Integrated marketing communication course / project.
            </li>
            <li>
            Marketing strategy course.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>previous experience</span>
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Pepsi Mosul — Marketing  
            </li>
            <li>
            Coca-cola Mosul — Marketing
            </li>
            <li>
            Mekameleen tv channel Turkey - External work and Relations Coordinator.
            </li>
            <li>
            Properties moon light for - Team leader
            </li>
           
          </ul>
        </div>


        
          <button
            onClick={handleDownload}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Download Resume
          </button>
        


      </div>
    </>
  );
};

export default resume;
