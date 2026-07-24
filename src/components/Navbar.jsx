import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur shadow z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-600">
          Arun Moorthy
        </h1>

        <div className="hidden md:flex gap-8">

          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>


        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>


      </div>


      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">

          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>
      )}

    </nav>
  );
}

export default Navbar;