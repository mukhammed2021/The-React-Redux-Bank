import { useState } from "react";

type DepositAmount = number;
type WithdrawalAmount = number;
type LoanAmount = number;

export default function AccountOperations() {
   const [depositAmount, setDepositAmount] = useState<DepositAmount | string>("");
   const [withdrawalAmount, setWithdrawalAmount] = useState<WithdrawalAmount | string>("");
   const [loanAmount, setLoanAmount] = useState<LoanAmount | string>("");
   const [loanPurpose, setLoanPurpose] = useState("");
   const [currency, setCurrency] = useState("USD");

   function handleDeposit() {}

   function handleWithdrawal() {}

   function handleRequestLoan() {}

   function handlePayLoan() {}

   return (
      <div>
         <h2>Your account operations</h2>
         <div className="inputs">
            <div>
               <label>Deposit</label>
               <input type="number" value={depositAmount} onChange={(e) => setDepositAmount(+e.target.value)} />
               <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                  {/* USD выбран изначально, потому что currency = USD */}
                  <option value="USD">US Dollar</option>
                  <option value="EURO">Euro</option>
                  <option value="GBP">British Pound</option>
               </select>

               <button onClick={handleDeposit}>Deposit {depositAmount}</button>
            </div>

            <div>
               <label>Withdraw</label>
               <input type="number" value={withdrawalAmount} onChange={(e) => setWithdrawalAmount(+e.target.value)} />
               <button onClick={handleWithdrawal}>Withdraw {withdrawalAmount}</button>
            </div>

            <div>
               <label>Request loan</label>
               <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(+e.target.value)}
                  placeholder="Loan amount"
               />
               <input
                  type="text"
                  value={loanPurpose}
                  onChange={(e) => setLoanPurpose(e.target.value)}
                  placeholder="Loan purpose"
               />
               <button onClick={handleRequestLoan}>Request loan</button>
            </div>

            <div>
               <span>Pay back $X</span>
               <button onClick={handlePayLoan}>Pay loan</button>
            </div>
         </div>
      </div>
   );
}
