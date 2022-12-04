import React from "react";

import { useAccount } from "wagmi";

export const Login = () => {
  const account = useAccount();

  return (
    <div>
      <div>{account.address}</div>
    </div>
  );
};
