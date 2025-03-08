interface AccountInfoProps {
   balance: number;
   loan: number;
}

function AccountInfo({ balance, loan }: AccountInfoProps) {
   return (
      <div className="account-info">
         <p className={`balance ${balance < 0 ? "negative" : ""}`}>
            💰 Balance: ${balance}
         </p>
         <p className={`loan ${loan > 0 ? "active-loan" : ""}`}>
            🏦 Loan: ${loan}
         </p>
      </div>
   );
}

export default AccountInfo;
