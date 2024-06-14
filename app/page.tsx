import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>THE PAGE</h1>
      <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
      <Button>Get Started</Button>
    </div>
  );
}
