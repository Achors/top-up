import Image from "next/image";
import Airtime from "../components/AirtimeForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Airtime />
    </div>
    </main>
  );
}
