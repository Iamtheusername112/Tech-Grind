import { DarkmodeHandler } from "./components/DarkmodeHandler";

export default function Home() {
  return (
    <div className="flex justify-between p-10 items-center">
      <h1 className="font-semibold text-3xl">Home Page</h1>
      <DarkmodeHandler />
    </div>
  );
}
