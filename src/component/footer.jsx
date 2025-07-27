export default function Footer() {
    return (
        <footer className='flex flex-col justify-between px-10 shadow-2xl mt-10 p-5 md:px-25'>
        <div className='flex justify-between'>
          <a href="" className='text-xl font-bold md:md:text-2xl'>Tawqi<br />Tahmed</a>
            <div className="flex text-center justify-evenly gap-3 underline flex-col lg:flex-row">
              <a href='#'>Home</a>
              <a href='#'>Contacts</a>
              <a href='#'>Projects</a>
              <a href='#'>About</a>
            </div>
        </div>
        ©Tawqi 2025 All rights reserved. 
      </footer>
    )
}