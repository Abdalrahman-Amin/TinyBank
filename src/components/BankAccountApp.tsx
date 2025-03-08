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
   switch (action.type) {
      case "openAccount":
         return { ...state, isAccountOpened: true, balance: 500 };
      case "deposit":
         return { ...state, balance: state.balance + 150 };
      case "withdraw":
         return {
            ...state,
            balance: state.balance >= 50 ? state.balance - 50 : state.balance,
         };
      case "requestLoan":
         return {
            ...state,
            balance: state.balance + 5000,
            loan: state.loan + 5000,
         };

      case "payLoan":
         return { ...state, balance: state.balance - state.loan, loan: 0 };
      case "closeAccount":
         return { ...intialState };
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
            onDeposit={() => dispatch({ type: "deposit" })}
            onWithdraw={() => dispatch({ type: "withdraw" })}
            onRequestLoan={() => dispatch({ type: "requestLoan" })}
            onPayLoan={() => dispatch({ type: "payLoan" })}
            onCloseAccount={() => dispatch({ type: "closeAccount" })}
            state={state}
         />
      </div>
   );
}

export default BankAccountApp;
