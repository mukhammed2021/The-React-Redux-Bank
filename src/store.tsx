import { legacy_createStore as createStore } from "redux";

const initialState = {
   balance: 0,
   loan: 0,
   loanPurpose: "",
};

type ACTIONTYPE =
   | { type: "account/deposit"; payload: number }
   | { type: "account/withdraw"; payload: number }
   | { type: "account/requestLoan"; payload: { amount: number; purpose: string } }
   | { type: "account/payLoan" };

function reducer(state = initialState, action: ACTIONTYPE) {
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

const store = createStore(reducer);

// store.dispatch({ type: "account/deposit", payload: 500 });
// store.dispatch({ type: "account/withdraw", payload: 200 });
// console.log(store.getState());

// store.dispatch({ type: "account/requestLoan", payload: { amount: 1000, purpose: "Buy a car" } });
// console.log(store.getState());

// store.dispatch({ type: "account/payLoan" });
// console.log(store.getState());

// const ACCOUNT_DEPOSIT = "account/deposit";

function deposit(amount: number): ACTIONTYPE {
   return { type: "account/deposit", payload: amount };
}

function withdraw(amount: number): ACTIONTYPE {
   return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount: number, purpose: string): ACTIONTYPE {
   return {
      type: "account/requestLoan",
      payload: { amount, purpose },
   };
}

function payLoan(): ACTIONTYPE {
   return {
      type: "account/payLoan",
   };
}

store.dispatch(deposit(500));
store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(1000, "Buy a cheap car"));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());
