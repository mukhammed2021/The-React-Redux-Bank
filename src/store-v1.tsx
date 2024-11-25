import { combineReducers, legacy_createStore as createStore } from "redux";

const initialStateAccount = {
   balance: 0,
   loan: 0,
   loanPurpose: "",
};

const initialStateCustomer = {
   fullName: "",
   nationalID: "",
   createdAt: "",
};

type ACCOUNT_ACTIONTYPE =
   | { type: "account/deposit"; payload: number }
   | { type: "account/withdraw"; payload: number }
   | { type: "account/requestLoan"; payload: { amount: number; purpose: string } }
   | { type: "account/payLoan" };

type CUSTOMER_ACTIONTYPE =
   | { type: "customer/createCustomer"; payload: typeof initialStateCustomer }
   | { type: "customer/updateName"; payload: string };

function accountReducer(state = initialStateAccount, action: ACCOUNT_ACTIONTYPE) {
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

function customerReducer(state = initialStateCustomer, action: CUSTOMER_ACTIONTYPE) {
   switch (action.type) {
      case "customer/createCustomer":
         return {
            ...state,
            fullName: action.payload.fullName,
            nationalID: action.payload.nationalID,
            createdAt: action.payload.createdAt,
         };
      case "customer/updateName":
         return {
            ...state,
            fullName: action.payload,
         };

      default:
         return state;
   }
}

const rootReducer = combineReducers({
   account: accountReducer,
   customer: customerReducer,
});

const store = createStore(rootReducer);

// store.dispatch({ type: "account/deposit", payload: 500 });
// store.dispatch({ type: "account/withdraw", payload: 200 });
// console.log(store.getState());

// store.dispatch({ type: "account/requestLoan", payload: { amount: 1000, purpose: "Buy a car" } });
// console.log(store.getState());

// store.dispatch({ type: "account/payLoan" });
// console.log(store.getState());

// const ACCOUNT_DEPOSIT = "account/deposit";

function deposit(amount: number): ACCOUNT_ACTIONTYPE {
   return { type: "account/deposit", payload: amount };
}

function withdraw(amount: number): ACCOUNT_ACTIONTYPE {
   return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount: number, purpose: string): ACCOUNT_ACTIONTYPE {
   return {
      type: "account/requestLoan",
      payload: { amount, purpose },
   };
}

function payLoan(): ACCOUNT_ACTIONTYPE {
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

function createCustomer(fullName: string, nationalID: string): CUSTOMER_ACTIONTYPE {
   return {
      type: "customer/createCustomer",
      payload: { fullName, nationalID, createdAt: new Date().toISOString() },
   };
}

function updateName(fullName: string): CUSTOMER_ACTIONTYPE {
   return { type: "customer/updateName", payload: fullName };
}

store.dispatch(createCustomer("Mukhammed Massalimov", "031020"));
console.log(store.getState());
store.dispatch(deposit(250));
console.log(store.getState());
 