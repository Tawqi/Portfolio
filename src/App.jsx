import Nav from './component/nav'
import Footer from './component/footer'
import tawqi from './assets/images/pfp2.jpg'
import TBL from './assets/images/frame8.png'
import WSP from './assets/images/wsp.jpg'
import { useEffect, useRef } from 'react';

function App() {

  const contactRef = useRef(null);
  const projectRef = useRef(null);
  const heroRef = useRef(null);

  const cursorRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <>
    <div ref={cursorRef} className="custom-cursor" />
      <Nav heroRef={heroRef} contactRef={contactRef} projectRef={projectRef}/>
      <section    
        style={{
          animation: 'fadeIn 1s ease-out 0.5s forwards', 
          opacity: 0
        }}
        ref={heroRef} 
        className=' opacity-0 flex flex-col px-10 pt-20 md:px-25 mt-10 gap-10 text-(--black) md:justify-center justify-center md:h-160 lg:h-[100vh]'>
        <div>
        <h1 className='text-4xl md:text-6xl lg:text-8xl'>Hey there <br />I'm Tawqi Tahmed</h1>
        <p className='mt-2 text-sm'><span className="before:content-['\2022'] before:mr-2 md:text-2xl">Web Developer & Designer from Bangladesh.</span></p>
        </div>
        <div className="flex justify-center lg:justify-normal gap-5">
          <button onClick={scrollToContact} className='px-4 py-2 bg-(--black) text-(--white) md:text-2xl rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 hover:cursor-pointer'>Contact Me</button>
          <button onClick={scrollToProject} className='px-4 py-2 bg-(--white) text-(--black) md:text-2xl border border-(--black) rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 hover:cursor-pointer'>MY Project</button>
        </div>
        <div className='flex gap-2 mt-10 justify-end items-center'
          style={{
          animation: 'fadeIn 1s ease-out 1.1s forwards',
          opacity: 0
        }}>
          <p className='text-sm text-right md:text-lg lg:text-xl lg:w-[30vw]'>With a year of self-taught experience, I specialize in crafting engaging front-end designs and simple, effective backend solutions.</p>
          <img src={tawqi} className='w-20 md:w-25 lg:w-30 rounded-lg'></img>
        </div>
      </section>
      <section className="skills sec2 flex flex-col gap-10 px-10 md:px-25 mt-20">
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-30'>
          
          <ul className='text-lg md:text-xl space-y-3 list-disc lg:w-full lg:text-2xl flex flex-col gap-5 lg:py-5'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl'>My Skill</h1>
              <li className='ml-4 font-light'><span className='font-medium'>Front-End:</span>HTML, CSS, JavaScript, React, ReactRouter, Tailwind CSS</li>
              <li className='ml-4 font-light'><span className='font-medium'>UI Design:</span>Clean, user-focused interfaces</li>
              <li className='ml-4 font-light'><span className='font-medium'>Back-End:</span>Vite.js, Node.js, Express, MongoDB, Mongoose (basic APIs, no complex auth and stuff yet)</li>
              <li className='ml-4 font-light'><span className='font-medium'>Tools:</span>Vite, Figma, Git</li>
          </ul>
        <div className="p-5 flex flex-col gap-5 bg-(--black) rounded-xl text-(--white) lg:w-full">
          <div className="flex flex-col gap-8 md:text-lg lg:text-2xl">
            <div className='space-y-4'>
              <h2>Front-End</h2>
            <div className="w-full border border-(--white) rounded-full h-2 overflow-hidden">
              <div className="bg-(--white) h-full" style={{ width: '48%' }}></div>
            </div>
            </div>

            <div className="space-y-4">
              <h2>Back-End</h2>
            <div className="w-full border border-(--white) rounded-full h-2 overflow-hidden">
              <div className="bg-(--white) h-full" style={{ width: '35%' }}></div>
            </div>
            </div>

            <div className="space-y-4">
              <h2>UI/UX</h2>
            <div className="w-full border border-(--white) rounded-full h-2 overflow-hidden">
              <div className="bg-(--white) h-full" style={{ width: '48%' }}></div>
            </div>
            </div>
          </div>
        <div className="div flex flex-wrap justify-evenly gap-2 mt-10">
          <svg className='w-8 md:w-10' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#E44D26" d="M14.021 90.034 6 0h88.187l-8.022 89.985L50.02 100"/><path fill="#F16529" d="M50.093 92.344V7.39h36.048l-6.88 76.811"/><path fill="#EBEBEB" d="M22.383 18.4h27.71v11.036H34.488L35.51 40.74h14.584v11.01H25.397zm3.5 38.893h11.084l.778 8.823 12.348 3.306v11.521l-22.654-6.32"/><path fill="#fff" d="M77.706 18.4H50.044v11.036h26.64zm-2.018 22.34H50.044v11.035h13.612l-1.288 14.341-12.324 3.306v11.473l22.606-6.271"/></svg>
          <svg className='w-8 md:w-10' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 101 100"><path fill="#61DAFB" d="M50.307 58.816a8.816 8.816 0 1 0 0-17.632 8.816 8.816 0 0 0 0 17.632"/><path stroke="#61DAFB" strokeWidth="5" d="M50.307 68.063c26.126 0 47.306-8.087 47.306-18.063s-21.18-18.062-47.306-18.062C24.18 31.938 3 40.024 3 50s21.18 18.063 47.307 18.063Z"/><path stroke="#61DAFB" strokeWidth="5" d="M34.664 59.031C47.727 81.658 65.321 95.957 73.96 90.97c8.64-4.988 5.053-27.374-8.01-50C52.885 18.342 35.291 4.043 26.652 9.03s-5.052 27.374 8.011 50Z"/><path stroke="#61DAFB" strokeWidth="5" d="M34.664 40.969c-13.063 22.626-16.65 45.012-8.01 50 8.638 4.988 26.232-9.311 39.295-31.938s16.65-45.012 8.01-50c-8.638-4.988-26.232 9.311-39.295 31.938Z"/></svg>
          <svg className='w-8 md:w-10' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#000" d="M30.636 59.339c-4.968 0-9.017-4.081-9.017-9.085s4.05-9.085 9.017-9.085c4.968 0 9.017 4.081 9.017 9.085 0 5-4.053 9.085-9.017 9.085M8.985 77.377c-4.96-.01-9-4.11-8.985-9.114a9.067 9.067 0 0 1 9.05-9.056c4.964.01 9.002 4.11 8.984 9.117a9.07 9.07 0 0 1-9.049 9.053m82.066 0a9.07 9.07 0 0 1-9.089-9.017c-.025-5.011 3.996-9.125 8.953-9.15A9.07 9.07 0 0 1 100 68.224c.028 5.007-3.996 9.124-8.95 9.153"/><path fill="#F44250" d="M74.15 41.698c-2.453-.765-5.072-1.083-7.642-1.362-3.974-.429-5.557-1.98-6.23-5.961-.378-2.223-.907-4.503-1.869-6.523-1.833-3.842-6.129-5.564-10.443-4.582-3.645.833-6.672 4.46-6.84 8.185-.193 4.246 2.237 7.873 6.411 9.124 1.984.597 4.093.894 6.162 1.047 3.8.276 5.068 1.409 6.094 3.138.65 1.094 1.276 2.17 1.276 5.422 0 3.256-.633 4.332-1.276 5.422-1.026 1.73-2.295 2.859-6.094 3.141-2.073.15-4.182.45-6.162 1.047-4.174 1.255-6.604 4.875-6.411 9.128.168 3.72 3.198 7.348 6.84 8.181 4.314.987 8.61-.74 10.443-4.582.965-2.015 1.49-4.3 1.87-6.522.675-3.982 2.258-5.53 6.229-5.962 2.573-.278 5.19-.6 7.641-1.365 3.72-1.161 5.958-4.632 5.958-8.488 0-3.853-2.237-7.32-5.958-8.488"/></svg>
          <svg className='w-8 md:w-10' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#264DE4" d="m94.175 0-8.033 89.99L50.034 100l-36.01-9.996L6 0z"/><path fill="#2965F1" d="m79.265 84.26 6.864-76.9H50.087v84.988z"/><path fill="#EBEBEB" d="m24.396 40.74.99 11.039h24.702V40.74zm25.692-22.342h-27.68l1.003 11.038h26.676zm-.001 62.495V69.408l-.048.013-12.294-3.32-.786-8.803H25.878l1.547 17.332 22.612 6.277z"/><path fill="#fff" d="m63.642 51.779-1.281 14.316-12.312 3.323v11.484l22.63-6.272.166-1.865 2.594-29.06.27-2.965L77.7 18.398H50.05v11.038h15.555L64.599 40.74H50.05v11.04z"/></svg>
          <svg className='w-8 md:w-10' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#06B6D4" d="M50 20q-20 0-25 19.994 7.5-9.997 17.5-7.498c3.804.95 6.522 3.71 9.532 6.764 4.902 4.974 10.576 10.731 22.969 10.731q20 0 24.999-19.995-7.5 9.997-17.5 7.5c-3.803-.951-6.521-3.71-9.531-6.765C68.067 25.758 62.392 20 50 20M25 49.991q-20 0-25 19.995 7.5-9.998 17.5-7.498c3.803.952 6.522 3.71 9.532 6.763C31.933 74.225 37.608 79.984 50 79.984q20 0 25-19.995-7.5 9.997-17.5 7.498c-3.803-.95-6.522-3.71-9.532-6.763C43.066 55.75 37.393 49.991 25 49.991"/></svg>
          <svg className='w-8 md:w-10' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#F7DF1E" d="M100 0H0v100h100z"/><path fill="#000" d="M67.175 78.125c2.014 3.29 4.634 5.707 9.27 5.707 3.893 0 6.38-1.946 6.38-4.635 0-3.222-2.555-4.364-6.84-6.238l-2.35-1.008c-6.781-2.89-11.286-6.508-11.286-14.159 0-7.047 5.37-12.413 13.762-12.413 5.975 0 10.27 2.08 13.365 7.524l-7.317 4.699c-1.612-2.89-3.35-4.027-6.048-4.027-2.752 0-4.497 1.746-4.497 4.027 0 2.819 1.746 3.96 5.778 5.706l2.35 1.006c7.983 3.424 12.491 6.915 12.491 14.762 0 8.46-6.646 13.096-15.571 13.096-8.727 0-14.365-4.16-17.124-9.61zm-33.196.815c1.477 2.619 2.82 4.833 6.048 4.833 3.087 0 5.035-1.208 5.035-5.905V45.916h9.397v32.08c0 9.73-5.705 14.158-14.032 14.158-7.524 0-11.881-3.894-14.097-8.583z"/></svg>
          <svg className='w-8 md:w-10' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#8CC84B" d="M46.279 1.067c2.479-1.42 5.709-1.426 8.186 0 12.464 7.042 24.931 14.074 37.393 21.12 2.343 1.321 3.911 3.93 3.887 6.63v42.371c.018 2.813-1.705 5.483-4.178 6.774-12.422 7.004-24.838 14.016-37.259 21.02-2.53 1.447-5.825 1.335-8.277-.23-3.724-2.16-7.455-4.308-11.18-6.465-.76-.453-1.619-.815-2.156-1.552.475-.64 1.324-.72 2.015-1 1.554-.495 2.982-1.288 4.41-2.058.361-.247.802-.152 1.148.069 3.185 1.826 6.342 3.705 9.537 5.513.682.394 1.372-.129 1.955-.453 12.19-6.89 24.396-13.754 36.584-20.646a1.21 1.21 0 0 0 .664-1.191c.009-13.977.002-27.957.005-41.934a1.31 1.31 0 0 0-.781-1.308C75.852 20.756 63.479 13.773 51.102 6.8a1.29 1.29 0 0 0-1.458-.002c-12.378 6.975-24.749 13.964-37.126 20.935-.506.23-.845.738-.785 1.302q.002 20.966 0 41.936a1.19 1.19 0 0 0 .673 1.176c3.303 1.873 6.61 3.733 9.916 5.6 1.861 1.002 4.148 1.597 6.199.83 1.81-.65 3.08-2.497 3.045-4.42.017-13.895-.009-27.793.013-41.686-.046-.617.54-1.127 1.14-1.069 1.586-.01 3.175-.021 4.762.005.663-.015 1.119.649 1.037 1.27-.007 13.984.017 27.968-.01 41.952.003 3.726-1.528 7.781-4.975 9.605-4.247 2.2-9.496 1.733-13.691-.376-3.632-1.813-7.098-3.952-10.666-5.894C6.697 76.68 4.983 73.999 5 71.189V28.817c-.026-2.756 1.604-5.412 4.021-6.713Q27.651 11.588 46.28 1.067"/><path fill="#8CC84B" d="M57.114 30.417c5.417-.348 11.216-.206 16.091 2.462 3.774 2.046 5.867 6.338 5.933 10.53-.105.566-.696.878-1.236.84-1.572-.003-3.144.02-4.716-.011-.667.025-1.054-.59-1.138-1.179-.451-2.006-1.545-3.993-3.434-4.96-2.898-1.452-6.26-1.38-9.42-1.349-2.308.123-4.79.322-6.744 1.68-1.5 1.027-1.957 3.102-1.421 4.773.505 1.2 1.89 1.587 3.023 1.944 6.529 1.708 13.447 1.538 19.85 3.785 2.651.916 5.245 2.697 6.152 5.472 1.187 3.72.667 8.168-1.98 11.154-2.146 2.458-5.273 3.796-8.39 4.522-4.149.925-8.454.949-12.666.538-3.962-.451-8.084-1.492-11.142-4.191-2.614-2.27-3.892-5.808-3.765-9.223.03-.576.605-.978 1.157-.93 1.583-.014 3.165-.018 4.748.001.632-.045 1.101.501 1.133 1.097.292 1.912 1.01 3.918 2.678 5.051 3.216 2.075 7.253 1.933 10.936 1.991 3.052-.135 6.477-.176 8.967-2.193 1.314-1.15 1.703-3.075 1.348-4.73-.384-1.398-1.847-2.05-3.103-2.476-6.444-2.038-13.44-1.299-19.822-3.604-2.59-.916-5.096-2.647-6.092-5.309-1.389-3.767-.752-8.427 2.172-11.313 2.852-2.87 6.968-3.976 10.881-4.372"/></svg>
          <svg className='w-8 md:w-10' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#000" d="M31.015 61.315V39.437h1.187v3.441q.21-.23.387-.485a5.88 5.88 0 0 1 5.364-3.329c2.706-.08 4.905.921 6.197 3.329a10.7 10.7 0 0 1 .258 9.808c-1.204 2.698-4.177 4.04-7.36 3.547a5.95 5.95 0 0 1-4.751-3.135v8.701zm1.187-14.14.266 2.57c.469 2.924 2.198 4.652 4.912 4.977a5.58 5.58 0 0 0 6.132-3.547 9.52 9.52 0 0 0-.209-7.821 5.47 5.47 0 0 0-5.76-3.184 5.33 5.33 0 0 0-4.759 3.935 27 27 0 0 0-.582 3.07m37.499 2.974a6.4 6.4 0 0 1-6.254 5.656c-4.977.25-7.312-3.054-7.683-6.868a11 11 0 0 1 .97-6.06 6.76 6.76 0 0 1 7.036-3.773 6.47 6.47 0 0 1 5.736 4.92 33 33 0 0 1 .557 3.637h-13.07c-.242 3.458 1.616 6.237 4.25 6.908 3.28.807 6.083-.614 7.101-3.733.226-.8.638-.914 1.365-.687zm-12.717-3.595h11.69c-.073-3.684-2.366-6.36-5.478-6.391-3.512-.057-6.06 2.513-6.212 6.391m15.133 3.676h1.146a4.59 4.59 0 0 0 2.698 3.959 7.06 7.06 0 0 0 6.124-.161 2.75 2.75 0 0 0 1.616-2.707 2.496 2.496 0 0 0-1.68-2.497c-1.26-.469-2.602-.727-3.886-1.14a28.5 28.5 0 0 1-3.91-1.429c-2.07-1.01-2.198-4.944.145-6.19a8.25 8.25 0 0 1 7.885-.121 4.15 4.15 0 0 1 2.101 4.234h-.982c0-.048-.09-.09-.09-.138-.121-3.133-2.755-4.113-5.582-3.837a7.1 7.1 0 0 0-2.424.734 2.42 2.42 0 0 0-1.405 2.424 2.42 2.42 0 0 0 1.616 2.279c1.234.453 2.544.743 3.821 1.098l3.086.807a3.645 3.645 0 0 1 2.504 3.289 3.89 3.89 0 0 1-2.092 4.04c-2.698 1.526-7.142 1.123-9.122-.808a5.4 5.4 0 0 1-1.566-3.837zm27.323-6.051h-1.075c0-.146-.057-.285-.073-.396a3.51 3.51 0 0 0-2.86-3.377 7.05 7.05 0 0 0-4.532.218 2.75 2.75 0 0 0-1.996 2.626 2.535 2.535 0 0 0 1.939 2.553l4.912 1.26q.796.192 1.566.477a4.05 4.05 0 0 1 2.677 3.687 4.03 4.03 0 0 1-2.468 3.835 9 9 0 0 1-7.271.074 5.04 5.04 0 0 1-3.038-4.897h1.05a5.89 5.89 0 0 0 8.968 3.75 2.89 2.89 0 0 0 1.55-2.698 2.5 2.5 0 0 0-1.704-2.481c-1.261-.47-2.602-.719-3.886-1.14a29 29 0 0 1-3.934-1.413c-2.02-.994-2.182-4.896.121-6.14a8.14 8.14 0 0 1 8.015-.09 4.23 4.23 0 0 1 2.028 4.145zm-70.377 11.23a1.85 1.85 0 0 1-2.295-.872L22.59 48.76l-.605-.807-4.848 6.593a1.776 1.776 0 0 1-2.181.856l6.245-8.378-5.81-7.57a1.93 1.93 0 0 1 2.302.807l4.329 5.848 4.355-5.826a1.736 1.736 0 0 1 2.165-.808l-2.255 2.992-3.054 3.975a.81.81 0 0 0 0 1.204l5.817 7.764zm26.516-16.036v1.14a5.86 5.86 0 0 0-6.238 6.05v8.888h-1.155V39.444h1.14v3.28c1.397-2.392 3.554-3.28 6.26-3.344zM.002 46.92l.509-2.514c1.397-4.968 7.094-7.036 11.013-3.958 2.294 1.801 2.867 4.354 2.755 7.231H1.35c-.209 5.138 3.498 8.24 8.24 6.657a4.94 4.94 0 0 0 3.127-3.482c.25-.807.665-.946 1.422-.712a6.56 6.56 0 0 1-3.135 4.791 7.595 7.595 0 0 1-8.847-1.13A7.96 7.96 0 0 1 .17 49.132c0-.285-.095-.551-.162-.807Q0 47.605 0 46.919zm1.365-.348h11.69c-.072-3.724-2.423-6.367-5.558-6.391-3.49-.048-5.987 2.537-6.14 6.375z"/></svg>
          <svg className='w-8 md:w-10' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#599636" d="m50.146.273 2.668 5.012c.6.925 1.25 1.744 2.016 2.506a70 70 0 0 1 6.262 7.08c4.521 5.938 7.57 12.531 9.749 19.662 1.306 4.356 2.015 8.824 2.069 13.343.218 13.508-4.413 25.107-13.75 34.747a40 40 0 0 1-4.905 4.194c-.925 0-1.363-.71-1.744-1.363a11.2 11.2 0 0 1-1.362-3.921c-.328-1.635-.544-3.269-.438-4.956v-.763c-.075-.162-.89-75.157-.566-75.541"/><path fill="#6CAC48" d="M50.146.108c-.11-.22-.22-.054-.329.053.053 1.093-.328 2.068-.925 3-.656.924-1.524 1.634-2.396 2.396-4.844 4.194-8.656 9.259-11.709 14.924-4.062 7.624-6.156 15.796-6.75 24.398-.271 3.103.982 14.052 1.96 17.211 2.669 8.387 7.462 15.415 13.67 21.515 1.526 1.468 3.157 2.83 4.844 4.14.49 0 .544-.438.656-.763a15 15 0 0 0 .491-2.124l1.094-8.169z"/><path fill="#C2BFBF" d="M52.814 90.135c.11-1.25.71-2.287 1.362-3.321-.656-.272-1.143-.813-1.524-1.416-.33-.57-.601-1.173-.813-1.797-.762-2.287-.925-4.687-1.143-7.024V75.16c-.272.22-.329 2.069-.329 2.344a54 54 0 0 1-.98 7.353c-.163.98-.273 1.959-.876 2.83 0 .11 0 .22.053.382.981 2.887 1.25 5.827 1.416 8.824v1.094c0 1.306-.053 1.03 1.031 1.468.438.163.925.22 1.362.544.329 0 .382-.272.382-.49l-.163-1.797V92.7c-.053-.875.11-1.744.219-2.563z"/></svg>
          <svg className='w-8 md:w-10' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#800" d="M97.733 46.548a4.2 4.2 0 0 0-.352-1.431 3.3 3.3 0 0 0-.778-1.155 3.3 3.3 0 0 0-1.155-.778q-.652-.301-1.456-.301-.83 0-1.507.3a3.3 3.3 0 0 0-1.13.779q-.476.502-.752 1.18a4.3 4.3 0 0 0-.327 1.406zm2.058 3.615q-.426 2.184-1.883 3.29-1.455 1.104-3.665 1.104-1.557 0-2.712-.502a5.35 5.35 0 0 1-1.908-1.406q-.778-.904-1.18-2.16a10.8 10.8 0 0 1-.426-2.736q0-1.48.452-2.711.451-1.23 1.255-2.134a5.9 5.9 0 0 1 1.933-1.406 6 6 0 0 1 2.46-.503q1.733 0 2.862.729a5.4 5.4 0 0 1 1.833 1.807q.704 1.105.954 2.41.277 1.306.226 2.486h-9.716q-.025.854.201 1.632.225.753.728 1.356.503.577 1.28.928.78.352 1.833.352 1.355 0 2.21-.628.878-.627 1.154-1.908z"/><path fill="#800" d="M79.88 50.188q.025.703.326 1.206.301.477.778.778a4 4 0 0 0 1.105.402q.627.125 1.28.125.503 0 1.055-.075.552-.076 1.004-.277a1.94 1.94 0 0 0 .779-.577q.3-.402.3-1.004 0-.828-.627-1.255-.627-.428-1.582-.678a19 19 0 0 0-2.033-.477 12.3 12.3 0 0 1-2.059-.603 4.4 4.4 0 0 1-1.556-1.105q-.628-.702-.628-1.958 0-.979.427-1.682a3.64 3.64 0 0 1 1.13-1.13 5 5 0 0 1 1.556-.653A7 7 0 0 1 82.867 41q1.106 0 2.034.201a4.3 4.3 0 0 1 1.632.653q.728.452 1.155 1.255.427.78.502 1.959h-2.134q-.05-.628-.326-1.03a2.1 2.1 0 0 0-.704-.678 3 3 0 0 0-.953-.351 4.2 4.2 0 0 0-1.03-.126q-.477 0-.979.076-.476.075-.879.276a1.63 1.63 0 0 0-.653.502q-.25.301-.25.803 0 .553.376.93.402.351 1.004.602.603.226 1.356.402.753.15 1.506.326.804.176 1.557.427.778.25 1.356.678.602.4.954 1.03.376.627.376 1.556 0 1.18-.502 1.958a3.7 3.7 0 0 1-1.28 1.255 5 5 0 0 1-1.783.653q-.979.2-1.958.2-1.08 0-2.059-.225a5.2 5.2 0 0 1-1.732-.728 3.9 3.9 0 0 1-1.205-1.356q-.452-.853-.502-2.059z"/><path fill="#800" d="M68.122 47.803q0 1.18.301 2.11.326.903.879 1.53.552.603 1.28.93.754.326 1.582.326t1.556-.326a3.8 3.8 0 0 0 1.306-.93q.552-.627.854-1.53.326-.93.326-2.11t-.326-2.084q-.302-.929-.854-1.556a3.66 3.66 0 0 0-1.305-.954 3.8 3.8 0 0 0-1.557-.327q-.829 0-1.582.327a3.7 3.7 0 0 0-1.28.954q-.552.627-.879 1.556-.3.905-.301 2.084m-2.26 0q0-1.43.402-2.661a5.9 5.9 0 0 1 1.205-2.16 5.6 5.6 0 0 1 1.984-1.455q1.18-.528 2.71-.528 1.558 0 2.712.528a5.6 5.6 0 0 1 1.984 1.456 5.9 5.9 0 0 1 1.205 2.159q.402 1.23.402 2.661 0 1.43-.402 2.662-.402 1.23-1.205 2.159a5.75 5.75 0 0 1-1.984 1.43q-1.154.503-2.711.503-1.532 0-2.712-.502a5.75 5.75 0 0 1-1.983-1.431 6.2 6.2 0 0 1-1.205-2.16 8.5 8.5 0 0 1-.402-2.66"/><path fill="#800" d="M56.113 47.803q0 1.18.302 2.11.326.903.878 1.53a3.9 3.9 0 0 0 1.28.93q.754.326 1.582.326.83 0 1.557-.326a3.8 3.8 0 0 0 1.305-.93q.553-.627.854-1.53.327-.93.327-2.11t-.327-2.084q-.3-.929-.854-1.556a3.66 3.66 0 0 0-1.305-.954 3.8 3.8 0 0 0-1.557-.327q-.829 0-1.581.327a3.7 3.7 0 0 0-1.28.954q-.553.627-.88 1.556-.3.905-.3 2.084m-2.26 0q0-1.43.402-2.661a5.9 5.9 0 0 1 1.206-2.16 5.6 5.6 0 0 1 1.983-1.455q1.18-.528 2.711-.528 1.557 0 2.712.528a5.6 5.6 0 0 1 1.983 1.456 5.9 5.9 0 0 1 1.205 2.159q.402 1.23.402 2.661 0 1.43-.402 2.662-.402 1.23-1.205 2.159a5.75 5.75 0 0 1-1.983 1.43q-1.155.503-2.712.503-1.53 0-2.711-.502a5.75 5.75 0 0 1-1.983-1.431 6.2 6.2 0 0 1-1.206-2.16 8.5 8.5 0 0 1-.401-2.66m-.11 5.372q0 3.189-1.456 4.77-1.456 1.582-4.57 1.582a9 9 0 0 1-1.857-.201 5.8 5.8 0 0 1-1.708-.653 4 4 0 0 1-1.255-1.18q-.503-.728-.552-1.782h2.134q.026.577.351.979.351.401.829.653.501.25 1.08.351.576.126 1.104.126 1.055 0 1.782-.377a3.2 3.2 0 0 0 1.206-1.004q.477-.629.678-1.532.225-.903.225-1.983v-.854h-.05q-.552 1.206-1.682 1.783a5.2 5.2 0 0 1-2.36.552q-1.456 0-2.536-.527a5.4 5.4 0 0 1-1.807-1.406 6.4 6.4 0 0 1-1.105-2.084 9 9 0 0 1-.351-2.536q0-1.154.3-2.36.302-1.23 1.005-2.209a5.3 5.3 0 0 1 1.858-1.632Q46.163 41 47.845 41q1.23 0 2.26.553 1.029.527 1.606 1.607h.025V41.3h2.009zm-5.975-.628q1.055 0 1.782-.427a3.6 3.6 0 0 0 1.205-1.154q.453-.729.653-1.632a7.4 7.4 0 0 0 .226-1.808q0-.854-.2-1.682a4.4 4.4 0 0 0-.654-1.481 3.2 3.2 0 0 0-1.13-1.08q-.702-.401-1.707-.401-1.03 0-1.757.401a3.4 3.4 0 0 0-1.205 1.03 4.8 4.8 0 0 0-.678 1.506q-.2.853-.2 1.782 0 .879.175 1.758.176.878.602 1.607.428.702 1.13 1.154.703.427 1.758.427M31.005 41.3h2.008v2.06h.05Q34.395 41 37.281 41q1.28 0 2.134.351.855.35 1.381.98.527.627.728 1.505.225.855.226 1.909v8.536h-2.134v-8.788q0-1.204-.703-1.908-.703-.703-1.933-.703-.98 0-1.707.302a3.2 3.2 0 0 0-1.18.853 3.8 3.8 0 0 0-.728 1.306 5.4 5.4 0 0 0-.226 1.607v7.33h-2.134zm-10.452 6.503q0 1.18.301 2.11a4.7 4.7 0 0 0 .879 1.53 3.9 3.9 0 0 0 1.28.93q.754.326 1.582.326t1.557-.326a3.8 3.8 0 0 0 1.305-.93q.552-.627.854-1.53.326-.93.326-2.11t-.326-2.084q-.302-.929-.854-1.556a3.66 3.66 0 0 0-1.305-.954 3.8 3.8 0 0 0-1.557-.327q-.828 0-1.582.327a3.7 3.7 0 0 0-1.28.954q-.552.627-.879 1.556-.3.905-.301 2.084m-2.26 0q0-1.43.402-2.661a5.9 5.9 0 0 1 1.205-2.16 5.6 5.6 0 0 1 1.984-1.455q1.18-.528 2.711-.528 1.557 0 2.711.528a5.6 5.6 0 0 1 1.984 1.456 5.9 5.9 0 0 1 1.205 2.159q.402 1.23.402 2.661 0 1.43-.402 2.662-.402 1.23-1.205 2.159a5.75 5.75 0 0 1-1.984 1.43q-1.154.503-2.711.503-1.532 0-2.711-.502a5.75 5.75 0 0 1-1.984-1.431 6.2 6.2 0 0 1-1.205-2.16 8.5 8.5 0 0 1-.402-2.66M0 41.3h2.008v1.909h.05q1.458-2.21 4.193-2.21 1.206 0 2.185.503.979.502 1.38 1.707a4.56 4.56 0 0 1 1.708-1.632 4.9 4.9 0 0 1 2.36-.578 6.3 6.3 0 0 1 1.757.226q.804.201 1.356.653.578.452.879 1.18.326.703.326 1.707v9.516h-2.134V45.77q0-.603-.1-1.13a2.2 2.2 0 0 0-.377-.904 1.83 1.83 0 0 0-.778-.628q-.477-.225-1.256-.225-1.582 0-2.485.903-.904.904-.904 2.41v8.085H8.034V45.77q0-.629-.126-1.155a2.2 2.2 0 0 0-.376-.904 1.7 1.7 0 0 0-.753-.603q-.453-.225-1.18-.225-.93 0-1.607.376a3.8 3.8 0 0 0-1.08.904q-.4.527-.602 1.105-.176.552-.176.928v8.085H0z"/></svg>
          <svg className='w-8 md:w-10' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="url(#a)" d="M98.848 14.801 52.731 98.695a2.486 2.486 0 0 1-4.365.019L1.336 14.808c-1.054-1.878.525-4.153 2.617-3.773L50.12 19.43c.294.053.596.053.89-.002l45.2-8.381c2.086-.387 3.672 1.871 2.638 3.753"/><path fill="url(#b)" d="M72.111.025 37.984 6.828c-.273.054-.52.2-.703.412a1.3 1.3 0 0 0-.307.764l-2.1 36.07a1.3 1.3 0 0 0 .442 1.05 1.25 1.25 0 0 0 1.091.268l9.502-2.23c.889-.21 1.692.587 1.51 1.496l-2.824 14.064c-.19.946.684 1.755 1.592 1.474l5.87-1.813c.909-.281 1.783.53 1.59 1.477l-4.486 22.09c-.28 1.382 1.526 2.135 2.28.951l.503-.791 27.81-56.46c.465-.946-.338-2.024-1.358-1.823l-9.781 1.92c-.92.18-1.701-.69-1.442-1.605l6.384-22.513c.26-.917-.526-1.788-1.446-1.604"/><defs><linearGradient id="a" x1=".187" x2="51.038" y1="17.805" y2="85.688" gradientUnits="userSpaceOnUse"><stop stopColor="#41D1FF"/><stop offset="1" stopColor="#BD34FE"/></linearGradient><linearGradient id="b" x1="54.398" x2="64.98" y1="1.872" y2="73.224" gradientUnits="userSpaceOnUse"><stop stopColor="#FFEA83"/><stop offset=".083" stopColor="#FFDD35"/><stop offset="1" stopColor="#FFA800"/></linearGradient></defs></svg>
          <svg className='w-8 md:w-10' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#0ACF83" d="M33.333 100C42.533 100 50 92.533 50 83.333V66.667H33.333c-9.2 0-16.666 7.466-16.666 16.666S24.133 100 33.333 100"/><path fill="#A259FF" d="M16.667 50c0-9.2 7.466-16.667 16.666-16.667H50v33.334H33.333c-9.2 0-16.666-7.467-16.666-16.667"/><path fill="#F24E1E" d="M16.667 16.667C16.667 7.467 24.133 0 33.333 0H50v33.333H33.333c-9.2 0-16.666-7.466-16.666-16.666"/><path fill="#FF7262" d="M50 0h16.667c9.2 0 16.666 7.467 16.666 16.667s-7.466 16.666-16.666 16.666H50z"/><path fill="#1ABCFE" d="M83.333 50c0 9.2-7.466 16.667-16.666 16.667S50 59.2 50 50s7.467-16.667 16.667-16.667S83.333 40.8 83.333 50"/></svg>
          <svg className='w-8 md:w-10' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#161614" d="M50 1C22.39 1 0 23.386 0 51c0 22.092 14.327 40.834 34.193 47.446 2.499.462 3.417-1.085 3.417-2.406 0-1.192-.047-5.131-.068-9.309-13.91 3.025-16.846-5.9-16.846-5.9-2.274-5.779-5.551-7.315-5.551-7.315-4.537-3.104.341-3.04.341-3.04 5.022.353 7.665 5.153 7.665 5.153 4.46 7.644 11.697 5.434 14.55 4.156.449-3.232 1.745-5.437 3.175-6.686-11.106-1.264-22.78-5.552-22.78-24.71 0-5.459 1.953-9.92 5.151-13.42-.519-1.26-2.23-6.346.485-13.233 0 0 4.198-1.344 13.753 5.125 3.988-1.108 8.266-1.663 12.515-1.682 4.25.019 8.53.574 12.526 1.682 9.544-6.469 13.736-5.125 13.736-5.125 2.722 6.887 1.01 11.973.49 13.232 3.206 3.502 5.146 7.962 5.146 13.42 0 19.205-11.697 23.434-22.83 24.671 1.793 1.552 3.391 4.595 3.391 9.26 0 6.69-.058 12.074-.058 13.721 0 1.33.9 2.89 3.435 2.399C85.692 91.819 100 73.085 100 51c0-27.614-22.386-50-50-50"/><path fill="#161614" d="M18.727 72.227c-.11.248-.502.322-.857.152-.363-.163-.567-.502-.45-.751.109-.256.5-.327.862-.156.363.163.57.505.445.755m2.46 2.194c-.24.221-.706.118-1.022-.231-.327-.349-.388-.814-.146-1.04.246-.22.698-.117 1.026.232.327.353.39.816.14 1.04zm1.687 2.808c-.307.213-.808.013-1.118-.432-.306-.444-.306-.977.007-1.191.31-.214.804-.021 1.118.42.305.452.305.985-.008 1.203m2.853 3.252c-.274.302-.858.22-1.285-.192-.437-.403-.56-.975-.284-1.277.277-.303.864-.218 1.295.191.434.403.566.979.274 1.278m3.688 1.098c-.12.391-.683.57-1.25.403-.565-.171-.935-.63-.821-1.026.118-.394.682-.58 1.253-.401.565.17.936.625.818 1.024m4.197.465c.014.413-.466.755-1.06.762-.599.013-1.082-.32-1.088-.726 0-.416.469-.755 1.067-.765.594-.012 1.081.32 1.081.73m4.123-.158c.071.403-.342.816-.932.926-.58.106-1.118-.143-1.192-.541-.072-.413.35-.826.928-.933.592-.103 1.12.14 1.196.548"/></svg>
        </div>
        </div>
        </div>
      </section>
      <section ref={projectRef} className='projects px-10 md:px-25 mt-20 gap-10'>
        <div>
          <h1 className='text-2xl md:text-3xl lg:text-4xl'>MY Projects</h1>
          <p className='md:text-lg mt-3'>Here are some projects that showcase my skills in <span className='font-semibold'>front-end development</span>, UI design, and simple backend integration.</p>
        </div>
        <a href="https://restaurant-page-the-local-bite.onrender.com/" className="cards flex flex-col md:flex-row justify-between gap-10 lg:gap-30 mt-10">
          <div className="card flex flex-col border-1 rounded-xl md:w-full transition-transform duration-200 hover:scale-102">
            <img src={TBL} className='rounded-t-xl' alt="proj1"></img>
            <div className='space-y-2 lg:space-y-4 p-5'>
              <h2 className='text-lg md:text-xl lg:text-2xl'>The Local Bite</h2>
              <p className='font-light text-sm md:text-base lg:text-lg'>A responsive restaurant website with a dynamic menu page fetching dishes from a MongoDB database.</p>
              <button className='text-lg md:text-xl lg:text-2xl underline hover:cursor-pointer transition-transform duration-200 hover:scale-102'>View Project</button>
              </div>
          </div>
          <a href='https://github.com/Tawqi/ISP-Proj-2' className="card flex flex-col border-1 rounded-xl md:w-full transition-transform duration-200 hover:scale-102">
            <img src={WSP} className='rounded-t-xl' alt="proj1"></img>
            <div className='space-y-2 lg:space-y-4 p-5'>
              <h2 className='text-lg md:text-xl lg:text-2xl'>Omuk-Tomuk</h2>
              <p className='font-light text-sm md:text-base lg:text-lg'>A responsive website with a clean Dark & Blue theme .</p>
              <button className='text-lg md:text-xl lg:text-2xl underline hover:cursor-pointer transition-transform duration-200 hover:scale-102'>View Project</button>
              </div>
          </a>
        </a>

      </section>
      <section ref={contactRef} className='socials-and-Contact flex flex-col px-10 md:px-25 lg:flex-row gap-10 lg:gap-30 mt-20'>
          <div className='flex flex-col gap-5 lg:w-full lg:py-5'>
           <div>
            <h1 className='text-2xl md:text-3xl lg:text-4xl'>Socials</h1>
            <p className='md:text-lg mt-3'>Follow me for more updats and stuff.</p>
           </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText('tawqitahmedchy@proton.me')
                  .then(() => alert('Email copied!'))
                  .catch(() => alert('Failed to copy'));
              }}
              className='w-full border border-black p-2 px-4 items-center flex justify-between rounded-lg md:py-4 shadow-xl transition-transform duration-200 hover:scale-105 hover:cursor-pointer'
            >
              <span className='flex items-center gap-3'>
                <i className='fas fa-envelope text-xl'></i>Email
              </span>
              <i className='fas fa-copy'></i>
            </button>
            <a href='https://www.facebook.com/tawqi0/' className='w-full border border-(--black) p-2 px-4 items-center flex justify-between rounded-lg md:py-4 shadow-xl transition-transform duration-200 hover:scale-102 hover:cursor-pointer'><span className='flex items-center gap-3'><i className='fab fa-facebook text-xl'></i>Facebook</span><i className='fas fa-up-right-from-square'></i></a>
            <a href='https://www.instagram.com/tawqi0' className='w-full border border-(--black) p-2 px-4 items-center flex justify-between rounded-lg md:py-4 shadow-xl transition-transform duration-200 hover:scale-102 hover:cursor-pointer'><span className='flex items-center gap-3'><i className='fab fa-instagram text-xl'></i>Instagram</span><i className='fas fa-up-right-from-square'></i></a>
            <a href='https://github.com/tawqi' className='w-full border border-(--black) p-2 px-4 items-center flex justify-between rounded-lg md:py-4 shadow-xl transition-transform duration-200 hover:scale-102 hover:cursor-pointer'><span className='flex items-center gap-3'><i className='fab fa-github text-xl'></i>Github</span><i className='fas fa-up-right-from-square'></i></a>
        </div>
        <div className="p-5 flex flex-col bg-(--black) rounded-xl text-(--white) mt-10 lg:mt-0 shadow-2xl lg:w-full">
          <h1 className='text-2xl md:text-3xl lg:text-4xl'>Get in Touch</h1>
          <p className='mt-3 md:text-lg'>Fill up the form to send a message.</p>
          <form action="/form-message" className='flex flex-col'>
            <label className='mt-3'>Name</label>
            <input type="text" placeholder='Enter your name' className='border border-(--white) bg-(--white) text-(--black2) text-sm rounded-lg px-3 py-2 p-1 mt-2 md:py-3'/>
             <label className='mt-3'>Email</label>
            <input type="text" placeholder='Enter your email' className='border border-(--white) bg-(--white) text-(--black2) text-sm rounded-lg px-3 py-2 p-1 mt-2 md:py-3'/>
             <label className='mt-3'>Phone number</label>
            <input type="text" placeholder='Enter your phone number' className='border border-(--white) bg-(--white) text-(--black2) text-sm rounded-lg px-3 py-2 p-1 mt-2 md:py-3'/>
             <label className='mt-3'>Message</label>
            <input type="text" placeholder='Your message......' className='border border-(--white) bg-(--white) text-(--black2) text-sm rounded-lg px-3 py-2 p-1 mt-2 md:py-3'/>
             <input type="submit" placeholder='Submit' className='border border-(--white) bg-(--white) text-(--black2) text-sm rounded-lg px-3 py-2 p-1 mt-8 md:py-3 transition-transform duration-200 hover:scale-102 hover:cursor-pointer'/>
          </form>
        </div>

      </section>
      <Footer heroRef={heroRef} contactRef={contactRef} projectRef={projectRef} />
    </>
  )
}

export default App
