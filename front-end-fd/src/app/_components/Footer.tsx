import * as React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PineLogo from "../../../public/svg/PineLogo";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full h-[40vh] bg-green-500 relative">
      <div>
        <img
          className="h-full w-full absolute object-cover"
          src="Zurag.png"
          alt=""
        />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[60%] h-auto flex flex-col items-center justify-center">
          <div className="flex items-center gap-[10px]">
            <PineLogo />
            <h1 className="font-semibold text-2xl text-white">Food Delivery</h1>
          </div>

          <div className="w-full pt-10 flex justify-between">
            {[
              "Нүүр",
              "Холбоо барих",
              "Хоолны цэс",
              "Үйлчилгээний нөхцөл",
              "Хүргэлтийн бүс",
              "Нууцлалын бодлого",
            ].map((text) => (
              <div key={text} className="relative group">
                <h1 className="text-white hover:text-gray-200 transition-colors duration-200">
                  {text}
                </h1>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
              </div>
            ))}
          </div>

          <div className="w-full flex justify-center gap-4 pt-10 items-center">
            <a
              href="https://www.youtube.com/watch?v=zUkR6chwtOo"
              className="transform transition-transform duration-200 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon sx={{ color: "white" }} />
            </a>
            <a
              href="https://www.youtube.com/watch?v=MRErjPLyvDc"
              className="transform transition-transform duration-200 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon sx={{ color: "white" }} />
            </a>
            <a
              href="https://www.youtube.com/watch?v=gsLvizl5j4E"
              className="transform transition-transform duration-200 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon sx={{ color: "white" }} />
            </a>
          </div>

          <div className="w-full pt-10">
            <div className="w-full border border-white"></div>
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-white pt-10">© 2024 Pinecone Foods LLC</h1>
            <h1 className="text-white">
              Зохиогчийн эрх хуулиар хамгаалагдсан.
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};
