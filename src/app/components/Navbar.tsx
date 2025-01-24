'use client'
import BSALogo from '../images/hero/BSALogo'

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Adjust for the navbar height
      behavior: 'smooth',
    });
  }
};

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 shadow-lg fixed top-0 z-50">
      
      <div className="navbar-start pl-4">
        <BSALogo classname="btn btn-ghost normal-case w-48 h-16" />
      </div>

      <div className="navbar-center absolute left-1/2 transform -translate-x-1/2">
        <ul className="menu menu-horizontal px-1">
          <li><button onClick={() => scrollToSection('manifesto')}>Manifesto</button></li>
          <li><button onClick={() => scrollToSection('speakers')}>Speakers</button></li>
          <li><button onClick={() => scrollToSection('sponsors')}>Sponsors</button></li>
          <li><button onClick={() => scrollToSection('grants')}>Grants</button></li>
          <li><button onClick={() => scrollToSection('agenda')}>Agenda</button></li>
          <li><button onClick={() => scrollToSection('workshops')}>Workshops</button></li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
