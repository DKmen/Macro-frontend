import CashCardPhone from "../assets/cash-card-phone.svg";

export default function CashcardComponent() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-black relative cashcardBG">
      <div className="flex flex-col md:flex-row items-center justify-center space-x-4">
        <div className="flex flex-col items-start justify-center z-10 max-w-sm">
          <span className="font-extrabold text-2xl md:text-6xl text-[#00D54B]">
            Cash Card & Boost
          </span>
          <span className="text-base font-semibold text-white mt-4">
            The Cash Card is a free, customizable debit card that lets you pay
            online and in stores. It’s the only way to get Boosts—instant
            discounts that work at places where you want to spend.
          </span>
        </div>
        <img className="z-10" src={CashCardPhone} alt="" />
      </div>
    </div>
  );
}
