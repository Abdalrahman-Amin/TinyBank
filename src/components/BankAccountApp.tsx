import React, { useReducer } from "react";
import { Action, State } from "../types/types";
import AccountInfo from "./AccountInfo";
import Controlls from "./Controlls";
import Header from "./Header";

const intialState: State = {
   balance: 0,
   loan: 0,
   isAccountOpened: false,
};

const reducer: React.Reducer<State, Action> = (state, action) => {
   if (!state.isAccountOpened && action.type !== "openAccount")
      return { ...state };

   switch (action.type) {
      case "openAccount":
         return { ...state, isAccountOpened: true, balance: 500 };
      case "deposit":
         return { ...state, balance: state.balance + action.payload };
      case "withdraw":
         return {
            ...state,
            balance:
               state.balance >= action.payload
                  ? state.balance - action.payload
                  : state.balance,
         };
      case "requestLoan": {
         if (state.loan !== 0) return state;
         return {
            ...state,
            balance: state.balance + action.payload,
            loan: action.payload,
         };
      }

      case "payLoan": {
         if (state.loan > state.balance) return state;
         return { ...state, balance: state.balance - state.loan, loan: 0 };
      }
      case "closeAccount": {
         if (state.loan !== 0 || state.balance !== 0) return state;
         return { ...intialState };
      }
   }
};

function BankAccountApp() {
   const [state, dispatch] = useReducer(reducer, intialState);

   const { balance, loan } = state;
   return (
      <div>
         <Header />
         <AccountInfo balance={balance} loan={loan} />
         <Controlls
            onOpenAccount={() => dispatch({ type: "openAccount" })}
            onDeposit={() => dispatch({ type: "deposit", payload: 150 })}
            onWithdraw={() => dispatch({ type: "withdraw", payload: 50 })}
            onRequestLoan={() =>
               dispatch({ type: "requestLoan", payload: 5000 })
            }
            onPayLoan={() => dispatch({ type: "payLoan" })}
            onCloseAccount={() => dispatch({ type: "closeAccount" })}
            state={state}
         />
      </div>
   );
}

export default BankAccountApp;
