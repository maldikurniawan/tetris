const Menu = ({ onClick }) => {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center max-w-sm mx-auto"
      style={{ backgroundImage: "url('assets/images/tetris.jpeg')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Menu */}
      <div className="relative z-10 text-center rounded-lg shadow-lg">
        <h1 className="text-5xl mb-[420px] font-extrabold bg-gradient-to-r from-red-600 via-green-600 to-blue-600 inline-block text-transparent bg-clip-text tracking-widest">
          TETRIS
        </h1>

        <button
          onClick={onClick}
          className="px-6 py-3 text-white font-bold rounded-lg mb-2 bg-purple-900 bg-opacity-75 w-[200px] shadow transition"
        >
          Play
        </button>

        <div className="justify-center">
          <a href="https://maldikurniawan.netlify.app/" target="_blank" className="text-white tracking-widest cursor-pointer hover:text-purple-300 font-bold">
            Follow Me Here!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
