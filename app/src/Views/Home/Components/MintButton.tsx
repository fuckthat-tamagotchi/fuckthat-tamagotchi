import { useCallback } from "react";
import { Button, useToast } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";

export const MintButton = () => {
  const toast = useToast();
  const account = useAccount();
  const navigate = useNavigate();

  const onClickButton = useCallback(() => {
    if (account.isConnected) {
      navigate("/character");
    } else {
      toast({
        title: "You must login first!",
        status: "warning",
      });
    }
  }, [account.isConnected, navigate, toast]);

  return (
    <Button colorScheme="teal" size="lg" onClick={onClickButton}>
      Mint your first FTT!
    </Button>
  );
};
