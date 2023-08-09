import AppleLogo from "../assets/icon/apple.svg";
import PlaystoreLogo from "../assets/icon/play-store.svg";
import Message from "../assets/icon/message.svg";
import Twitter from "../assets/icon/twitter.svg";
import Instagram from "../assets/icon/instagram.svg";
import InvestPhoneLeft from "../assets/invest-phone-left.svg";
import InvestPhoneRight from "../assets/invest-phone-right.svg";

export default function InvestingComponent() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[#00D54B] relative investBG">

      <div className="flex-1 flex flex-col items-center justify-center">
        <span className="uppercase font-extrabold text-white text-4xl">
          Investing
        </span>
        <div className="flex flex-col lg:flex-row items-center justify-center z-10 mt-2 lg:mt-16 space-y-2 lg:space-y-0 lg:space-x-8">
          <div className="flex flex-col space-y-4 max-w-sm">
            <span className="font-extrabold text-4xl">Stocks</span>
            <span className="font-medium text-sm">
              Whether you’re an expert or just getting started, Cash App is the
              fastest and most accessible way to invest in stocks. Start now
              with as little as $1.
            </span>
          </div>
          <div className="flex flex-row items-center justify-center space-x-10">
            <img src={InvestPhoneLeft} alt="" />
            <img src={InvestPhoneRight} alt="" />
          </div>
          <div className="flex flex-col space-y-4 max-w-sm">
            <span className="font-extrabold text-4xl">Bitcoin</span>
            <span className="font-medium text-sm">
              Cash App is the fastest way to convert dollars to bitcoin. From
              your home screen, six taps are all it takes to stack sats, buy an
              entire bitcoin, or just see what it’s all about.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-center justify-between py-4   px-4  lg:px-10 w-full">
        <div className="flex flex-row items-center justify-center space-x-4 lg:space-x-2">
          <div className="border border-solid bg-white border-black rounded flex flex-row items-center justify-center space-x-4 p-2 lg:p-4">
            <img src={AppleLogo} alt="" />
            <span className="uppercase font-extrabold text-xs md:text-sm lg:text-base">
              app store
            </span>
          </div>
          <div className="border border-solid bg-white border-black rounded flex flex-row items-center justify-center space-x-4 p-2 lg:p-4">
            <img src={PlaystoreLogo} alt="" />
            <span className="uppercase font-extrabold text-xs md:text-sm lg:text-base">
              google play
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-4 md:space-y-0 lg:space-y-0 md:flex-row items-center justify-around md:w-fit w-full lg:justify-center lg:space-x-6">
          <span className="font-light text-xs max-w-md z-10">
            Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
            See our BrokerCheck. Investing involves risk; you may lose money.
            Bitcoin trading offered by Cash App. Cash App Investing does not
            trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
            App facilitates banking services through Sutton Bank and Lincoln
            Savings Bank, Members FDIC.
          </span>
          <div className="flex flex-row items-center justify-center space-x-2">
            <img className="bg-black" src={Message} alt="" />
            <img className="bg-black" src={Twitter} alt="" />
            <img className="bg-black" src={Instagram} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
