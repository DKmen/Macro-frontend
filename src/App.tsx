import CoverComponent from "./components/cover";
import PaymentComponent from "./components/payment";
import BankingComponent from "./components/banking";
import CashcardComponent from "./components/cashcard";
import InvestingComponent from "./components/investing";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Cover Page Component */}
      <CoverComponent />
      {/* Payment Page Component  */}
      <PaymentComponent />
      {/* Banking   */}
      <BankingComponent />
      {/* Cash Card  */}
      <CashcardComponent />
      {/* Investing  */}
      <InvestingComponent />
    </div>
  );
}
