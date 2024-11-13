import moment from "moment";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-2">
      <div>
        <img className="w-96" src={logo} alt="logo" />
      </div>
      <p className="text-gray-500">Journalism Without Fear or Favour</p>
      <p>{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
