import { State } from "../types/types";
import Button from "./Button";

interface ControlsProps {
   onOpenAccount: () => void;
   onDeposit: () => void;
   onWithdraw: () => void;
   onRequestLoan: () => void;
   onPayLoan: () => void;
   onCloseAccount: () => void;
   state: State;
}

function Controls({
   onOpenAccount,
   onDeposit,
   onWithdraw,
   onRequestLoan,
   onPayLoan,
   onCloseAccount,
   state,
}: ControlsProps) {
   return (
      <div className="controls">
         <Button
            onClick={onOpenAccount}
            type="tertiary"
            disabled={state.isAccountOpened}
         >
            Open Account
         </Button>
         <Button
            onClick={onDeposit}
            type="primary"
            disabled={!state.isAccountOpened}
         >
            Deposit 150
         </Button>
         <Button
            onClick={onWithdraw}
            type="secondary"
            disabled={state.balance < 50}
         >
            Withdraw 50
         </Button>
         <Button
            onClick={onRequestLoan}
            type="primary"
            disabled={!state.isAccountOpened || Boolean(state.loan)}
         >
            Request Loan 5000
         </Button>
         <Button
            onClick={onPayLoan}
            type="danger"
            disabled={state.loan <= 0 || state.balance < state.loan}
         >
            Pay Loan
         </Button>
         <Button
            onClick={onCloseAccount}
            type="danger"
            disabled={
               !state.isAccountOpened || state.balance !== 0 || state.loan !== 0
            }
         >
            Close Account
         </Button>
      </div>
   );
}

export default Controls;
