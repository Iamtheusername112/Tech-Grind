import { Button } from "@/components/ui/button";
import { DarkmodeHandler } from "./components/DarkmodeHandler";

export default function Home() {
  return (
    <div className="flex justify-between p-10 items-center">
      <Button>Tech Grind</Button>
      <DarkmodeHandler />
    </div>
  );
}
