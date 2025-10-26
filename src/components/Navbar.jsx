
function Navbar() {
  return (
    <div className="flex items-center px-8 py-8">
      {/* Left Section (Logo / Initial) */}
      <div className="bg-black text-white flex justify-center items-center text-3xl p-3 h-10 font-serif font-bold transition-transform duration-300 hover:scale-110 hover:shadow-md">
        <a href="#">S</a>
      </div>

      {/* Right Section  */}
      <div className="flex ml-auto gap-6 text-lg pr-15">
        <a className="transition-transform duration-300 hover:scale-110" href="">
          About
        </a>
        <a className="transition-transform duration-300 hover:scale-110" href="">
          Experience
        </a>
        <a
          className="transition-transform duration-300 hover:scale-110"
          href="#"
        >
          Projects
        </a>
        <a className="transition-transform duration-300 hover:scale-110" href="">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;

