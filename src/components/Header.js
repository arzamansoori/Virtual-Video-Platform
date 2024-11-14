import { HAMBURGER_URL, LOGO_URL, USER_ICON } from "../utils/constants";

const Header = () => {
  return (
    <div className="grid grid-flow-col py-4 px-5 shadow-lg justify-between items-center">
      {/* Hamburger -> Youtube logo -> Search bar -> user icon */}
      <div className="col-span-1 flex items-center cursor-pointer">
        <img className="w-9 h-9" src={HAMBURGER_URL} alt="hamburger-icon" />
        <img className="w-12 ml-2" src={LOGO_URL} alt="logo"/>
      </div>
      {/* Search bar */}
      <div >
        <input className="w-96 col-span-10 border border-gray-400 rounded-l-full px-3 py-1" placeholder="Search"/>
        <button className="border border-gray-400 rounded-r-full px-2 bg-gray-300 py-1 hover:bg-gray-200">🔍</button>
      </div>
      {/* User icon */}
      <div>
        <img className="col-span-1 w-12 cursor-pointer" src={USER_ICON} alt="user-icon" />
      </div>
    </div>
  );
};

export default Header;
