import BankingPhone from "../assets/banking-mobile.svg";

export default function BankingComponent() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[#00D54B] relative bankingBG">
      <div className="flex flex-col md:flex-row items-center justify-center space-x-4">
        <div className="flex flex-col items-start justify-center z-10 max-w-sm">
          <span className="text-white font-extrabold text-4xl -mr-10">
            Banking
          </span>
          <span className="text-base font-semibold text-white md:text-black">
            Receive your paycheck, tax returns, and other direct deposits up to
            two days early using your Cash App routing and account number.
          </span>
        </div>
        <img className="z-10" src={BankingPhone} alt="" />
      </div>
    </div>
  );
}
