import CoverMobileImage from "../assets/cover-phone.svg";
import Logo from "../assets/logo.svg";
import RightLogo from "../assets/right-logo.svg";
import AppleLogo from "../assets/icon/apple.svg";
import PlaystoreLogo from "../assets/icon/play-store.svg";
import Message from "../assets/icon/message.svg";
import Twitter from "../assets/icon/twitter.svg";
import Instagram from "../assets/icon/instagram.svg";
import Arrow from "../assets/down-array.svg";

export default function CoverComponent() {
  const menu = [
    "sing up",
    "legal",
    "Licenses",
    "Security",
    "Careers",
    "Press",
    "Support",
    "Status",
    "Codeblog",
  ];
  return (
    <div className="flex flex-col items-center justify-between w-full min-h-screen bg-black relative coverBG">
      <div className="flex flex-row items-center justify-between p-4 w-full">
        <img src={Logo} alt="" />
        <div className=" hidden lg:flex flex-row items-center justify-between max-w-4xl flex-1">
          {menu.map((txt) => {
            return (
              <span className="uppercase font-extrabold text-sm text-white">
                {txt}
              </span>
            );
          })}
        </div>
        <img src={RightLogo} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center relative">
        <img
          src={CoverMobileImage}
          alt=""
          className="top-0 w-20 md:w-40 lg:w-fit absolute z-0"
        />
        <span className="text-[60px] md:text-[100px] lg:text-[198px] font-extrabold text-white leading-none tracking-widest">
          CASH
        </span>
        <span className="text-[60px] md:text-[100px] lg:text-[198px] font-extrabold text-white leading-none tracking-wide z-10">
          APP
        </span>
      </div>
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-center justify-between py-4   px-4 lg:px-10 w-full">
        <div className="flex flex-row items-center justify-center space-x-4 lg:space-x-2">
          <div className="border border-solid border-white rounded flex flex-row items-center justify-center space-x-4 p-2 lg:p-4">
            <img src={AppleLogo} alt="" />
            <span className="uppercase font-extrabold text-xs md:text-sm lg:text-base text-white">
              app store
            </span>
          </div>
          <div className="border border-solid border-white rounded flex flex-row items-center justify-center space-x-4 p-2 lg:p-4">
            <img src={PlaystoreLogo} alt="" />
            <span className="uppercase font-extrabold text-xs md:text-sm lg:text-base text-white">
              google play
            </span>
          </div>
        </div>
        <img className="hidden lg:block" src={Arrow} alt="" />
        <div className="flex flex-col space-y-4 md:space-y-0 lg:space-y-0 md:flex-row items-center justify-around md:w-fit w-full lg:justify-center lg:space-x-6">
          <span className="font-light text-xs text-white max-w-md z-10">
            Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
            See our BrokerCheck. Investing involves risk; you may lose money.
            Bitcoin trading offered by Cash App. Cash App Investing does not
            trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
            App facilitates banking services through Sutton Bank and Lincoln
            Savings Bank, Members FDIC.
          </span>
          <div className="flex flex-row items-center justify-center space-x-2">
            <img src={Message} alt="" />
            <img src={Twitter} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
