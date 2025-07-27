export default function Nav({ contactRef,projectRef }) {
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="flex justify-between px-10 md:px-25 py-5 text-black">
      <h1 className="text-lg md:text-2xl font-bold">Tawqi Tahmed</h1>
      <button className="lg:hidden text-lg"><i className="fas fa-bars"></i></button>
      <ul className="hidden lg:flex gap-10 justify-evenly md:text-lg">
        <li className="hover:cursor-pointer">Home</li>
        <li onClick={scrollToContact} className="hover:cursor-pointer">Contacts</li>
        <li onClick={scrollToProject} className="hover:cursor-pointer">Projects</li>
      </ul>
    </nav>
  );
}
