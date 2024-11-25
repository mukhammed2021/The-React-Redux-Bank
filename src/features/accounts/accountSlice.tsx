const initialStateAccount = {
   balance: 0,
   loan: 0,
   loanPurpose: "",
};

type ACTIONTYPE =
   | { type: "account/deposit"; payload: number }
   | { type: "account/withdraw"; payload: number }
   | { type: "account/requestLoan"; payload: { amount: number; purpose: string } }
   | { type: "account/payLoan" };

export default function accountReducer(state = initialStateAccount, action: ACTIONTYPE) {
   switch (action.type) {
      case "account/deposit":
         return { ...state, balance: state.balance + action.payload };
      case "account/withdraw":
         return { ...state, balance: state.balance - action.payload };
      case "account/requestLoan":
         if (state.loan > 0) return state;
         // LATER
         return {
            ...state,
            loan: action.payload.amount,
            loanPurpose: action.payload.purpose,
            balance: state.balance + action.payload.amount,
         };
      case "account/payLoan":
         return { ...state, loan: 0, loanPurpose: "", balance: state.balance - state.loan };
      default:
         return state;
   }
}

export function deposit(amount: number): ACTIONTYPE {
   return { type: "account/deposit", payload: amount };
}

export function withdraw(amount: number): ACTIONTYPE {
   return { type: "account/withdraw", payload: amount };
}

export function requestLoan(amount: number, purpose: string): ACTIONTYPE {
   return {
      type: "account/requestLoan",
      payload: { amount, purpose },
   };
}

export function payLoan(): ACTIONTYPE {
   return {
      type: "account/payLoan",
   };
}
