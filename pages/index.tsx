import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function Home() {
  const words = [
    {
      text: "Allanah",
    },
    {
      text: "Ranuco,",
    },
    {
      text: "I",
    },
    {
      text: "miss",
    },
    {
      text: "you.",
    },
    { text: " ❤️" },
  ];

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-300 to-pink-300 p-4">
        <div className="bg-black rounded-md w-full max-w-[760px] h-full max-h-[400px] shadow-lg shadow-black">
          <div className="flex flex-col h-full">
            <div className="flex gap-2 bg-white/10 p-3">
              <div className="rounded-full bg-red-600 p-2" />
              <div className="rounded-full bg-yellow-400 p-2" />
              <div className="rounded-full bg-green-600 p-2" />
            </div>
            <div className="flex items-center justify-center h-full">
              <TypewriterEffect words={words} className="font-montserrat" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
