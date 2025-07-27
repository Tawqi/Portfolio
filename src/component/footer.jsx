export default function Footer({ contactRef, projectRef, heroRef }) {
    const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

    return (
        <footer className='flex flex-col justify-between px-10 shadow-2xl mt-10 p-5 md:px-25'>
        <div className='flex justify-between'>
          <a href="" className='text-xl font-bold md:md:text-2xl'>Tawqi<br />Tahmed</a>
            
        <div className="space-x-5">
          <button onClick={scrollToProject} className='p-4 bg-(--white) text-(--black) md:text-xl border border-(--black) rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 hover:cursor-pointer'>MY Project</button>
           <button onClick={scrollToHero} className='p-4 bg-(--black) text-(--white) md:text-xl rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 hover:cursor-pointer'><i className="fas fa-arrow-up"></i></button>
        </div>
        </div>
        ©Tawqi 2025 All rights reserved. 
      </footer>
    )
}