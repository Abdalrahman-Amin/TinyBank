import React from "react";

interface ButtonProps {
   children: React.ReactNode;
   onClick: () => void;
   type?: "primary" | "secondary" | "tertiary" | "danger";
   disabled?: boolean;
   loading?: boolean;
}

function Button({
   children,
   onClick,
   type = "primary",
   disabled = false,
   loading = false,
}: ButtonProps) {
   return (
      <button
         className={`button ${type} ${!disabled && "active"}`}
         onClick={onClick}
         disabled={disabled || loading}
      >
         {loading ? "Loading..." : children}
      </button>
   );
}

export default Button;
