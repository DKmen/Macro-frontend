import PaymentPhone from "../assets/payment-phone.svg";

export default function PaymentComponent() {
  return (
    <div className="flex flex-col items-center justify-center lg:items-start lg:justify-center w-full min-h-screen bg-white relative px-4 lg:px-36 paymentBG overflow-hidden">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-start md:items-center justify-center space-x-4">
        <div className="flex flex-col items-start justify-center z-10 max-w-sm -mr-60">
          <span className="text-[#00D54B] font-extrabold text-4xl">
            Payment
          </span>
          <span className="text-base font-normal">
            Send and receive money with anyone, donate to an important cause, or
            tip professionals. Just enter a $cashtag, phone number, or scan
            their QR code to pay.
          </span>
        </div>
        <img className="z-10" src={PaymentPhone} alt="" />
      </div>
    </div>
  );
}
