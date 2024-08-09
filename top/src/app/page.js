import Image from "next/image";
import Airtime from "../components/AirtimeForm";

export default function Home() {
  return (
    <main >
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Airtime />
    </div>
    </main>
  );
}
