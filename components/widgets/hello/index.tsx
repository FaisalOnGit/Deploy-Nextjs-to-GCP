import Card from "@components/card";
import CardLinkButton from "@components/card-link-btn";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Player } from "@lottiefiles/react-lottie-player";
import Hello from "@public/emoji/hello.json";
import Namaskar from "@public/emoji/namaskar.json";
import Link from "next/link";
import { useState } from "react";
import Balancer from "react-wrap-balancer";

export default function HelloWidget() {
  const [showHello, setShowHello] = useState<boolean | undefined>(false);

  return (
    <Card
      className="flex cursor-default select-none flex-col items-start justify-center p-8 md:col-span-2 md:px-10"
      onPointerEnter={() => setShowHello(true)}
      onPointerLeave={() => setShowHello(false)}
    >
      <div className="flex items-center">
        <Player
          className="h-16 w-16"
          src={showHello ? Hello : Namaskar}
          autoplay={true}
          loop={showHello}
        />
        <div className="ml-2 pt-4 text-3xl font-bold">
          {showHello ? "Hello!" : "Kon'nichiwa!"}
        </div>
      </div>
      <span className="pt-6 text-lg">
        <Balancer>
          I&apos;m <span className="text-2xl font-extrabold">Faisal</span>,
          front-end web developer based in Indonesia, I have a passion for
          building and designing for the web. With a focus on user experience
          and efficient coding.
        </Balancer>
      </span>
      <CardLinkButton href="/about" as={Link} variant={ArrowRightIcon} />
    </Card>
  );
}
