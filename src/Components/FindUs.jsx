import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Login with</h2>
      <div className="join join-vertical lg:join-horizontal flex *:bg-base-100">
        <button className="btn join-item justify-start">
          <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaInstagram></FaInstagram>Instagram
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter></FaTwitter>Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;
