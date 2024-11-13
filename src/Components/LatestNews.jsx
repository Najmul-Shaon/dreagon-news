import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-base-200 p-2">
      <p className="bg-[#d72050] text-base-100 px-3 py-2">Latest</p>
      <Marquee pauseOnHover={true} speed={75} direction="right" className="space-x-12">
        <Link to="/news">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          sunt.
        </Link>
        <Link to="/news">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          sunt.
        </Link>
        <Link to="/news">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          sunt.
        </Link>
        <Link to="/news">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          sunt.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
