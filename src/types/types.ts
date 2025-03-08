export interface State {
   balance: number;
   loan: number;
   isAccountOpened: boolean;
}

export type Action =
   | { type: "openAccount" }
   | { type: "deposit" }
   | { type: "withdraw" }
   | { type: "requestLoan" }
   | { type: "payLoan" }
   | { type: "closeAccount" };
