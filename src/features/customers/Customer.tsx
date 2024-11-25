import { useSelector } from "react-redux";

interface RootState {
   customer: {
      fullName: string;
   };
}

export default function Customer() {
   const customer = useSelector((store: RootState) => store.customer.fullName);

   return <h2>👋 Welcome, {customer}</h2>;
}
