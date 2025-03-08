export interface State {
   balance: number;
   loan: number;
   isAccountOpened: boolean;
}

export type Action =
   | { type: "openAccount" }
   | { type: "deposit"; payload: number }
   | { type: "withdraw"; payload: number }
   | { type: "requestLoan"; payload: number }
   | { type: "payLoan" }
   | { type: "closeAccount" };
