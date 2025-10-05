import { useRef, useEffect, useState } from "react";

export default function Nav({ contactRef, projectRef, heroRef }) {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const menuRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    const newTheme = dark ? "light" : "dark";
    setDark(!dark);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    // Close menu on outside click
    const handleClickOutside = (e) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    // Show/hide nav on scroll
    const handleScroll = () => {
      const current = window.scrollY;
      setShowNav(current < lastScrollY.current || current < 50);
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } flex justify-between px-10 md:px-25 py-5 shadow-bottom`}
    >
      <h1 className="text-lg md:text-2xl font-bold">Tawqi Tahmed</h1>

      <button onClick={() => setOpen(!open)} className="menu-btn lg:hidden text-lg">
        <i className="fas fa-bars"></i>
      </button>

      <ul className="hidden lg:flex gap-10 justify-evenly md:text-lg">
        <button onClick={toggleTheme}>Toggle Dark Mode</button>

        <li onClick={scrollToHero} className="hover:cursor-pointer">
          Home
        </li>
        <li onClick={scrollToContact} className="hover:cursor-pointer">
          Contacts
        </li>
        <li onClick={scrollToProject} className="hover:cursor-pointer">
          Projects
        </li>
      </ul>

      <div
        ref={menuRef}
        className={`side-menu fixed z-10 top-0 right-0 h-[100vh] w-2/3 space-y-5 p-5 shadow-lg transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
        style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Tawqi Tahmed</h1>
          <button onClick={() => setOpen(false)} className="text-xl">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        <ul className="flex flex-col gap-4">
          <li onClick={scrollToHero} className="hover:cursor-pointer">
            Home
          </li>
          <li onClick={scrollToContact} className="hover:cursor-pointer">
            Contacts
          </li>
          <li onClick={scrollToProject} className="hover:cursor-pointer">
            Projects
          </li>
        </ul>
      </div>
    </nav>
  );
}
