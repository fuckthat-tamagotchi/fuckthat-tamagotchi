import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/alert";
import { useAccount } from "wagmi";
import { MintButton } from "./Components/MintButton";

export const Home = () => {
  const account = useAccount();

  return (
    <div>
      {!account.isConnected ? (
        <>
          <Alert status="info" color={"#000"}>
            <AlertIcon />
            For using the app, please first connect your wallet using the top
            right button "Connect Wallet"
          </Alert>
          <br />
        </>
      ) : null}

      <MintButton />
      <p>
        Upon activating the pet, an egg appears on the screen. After setting the
        clock on the device, the egg will wiggle for several minutes, and then
        hatch into a small pet. In later versions, inputting the player's name
        and birthday is also required when setting the clock, and at birth, the
        player can name the pet and learn of its family group and/or gender. The
        player can care for the pet as much or as little as they choose, and the
        outcome depends on the player's actions.
      </p>
      <br />
      <p>
        The first Tamagotchis could only be paused by going to set the clock,
        effectively stopping the passage of time in the game, but in later
        models, a pause function was included. Pets have a Hunger meter, Happy
        meter and a Training meter to determine how healthy and well-behaved the
        pet is. There is also an age and weight check function for the current
        age and weight of the pet. Filling up the Hunger meter can be achieved
        by feeding the pet a meal (usually a loaf of bread or hamburger) or a
        snack (usually a piece of candy or cake). Filling up the Happy meter can
        be achieved by playing mini-games with the pet or by feeding it a snack
        (there are no limits to this, but there are limits to how many meals can
        be fed). Mini-games usually vary between versions. The Discipline meter
        can be filled by pressing the "scold" option when a pet calls for
        attention but refuses to play or be fed a meal. The pet will leave
        droppings around the screen from time to time and can become sick if
        they are not cleaned up. Before the pet goes to the bathroom, it will
        make a face and stink lines will appear around it.
      </p>
    </div>
  );
};
