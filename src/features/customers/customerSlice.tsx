const initialStateCustomer = {
   fullName: "",
   nationalID: "",
   createdAt: "",
};

type ACTIONTYPE =
   | { type: "customer/createCustomer"; payload: typeof initialStateCustomer }
   | { type: "customer/updateName"; payload: string };

export default function customerReducer(state = initialStateCustomer, action: ACTIONTYPE) {
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

export function createCustomer(fullName: string, nationalID: string): ACTIONTYPE {
   return {
      type: "customer/createCustomer",
      payload: { fullName, nationalID, createdAt: new Date().toISOString() },
   };
}

export function updateName(fullName: string): ACTIONTYPE {
   return { type: "customer/updateName", payload: fullName };
}
