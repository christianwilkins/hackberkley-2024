"use client"

import { ChatWindow } from "@/components/ChatWindow";
import { PlaceholdersAndVanishInput } from "./components/ui/placeholders-and-vanish-input";

export default function Home() {
  const placeholders = [
    "Does Google provide nap pods for sleep-deprived employees?",
    "Did Pfizer illegally test drugs in Nigeria?",
    "Is China the largest foreign landowner in Africa?",
    "Are EVs better for the planet than gas cars?",
    "Did voter fraud impact the 2020 election?",
  ];
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    (e.currentTarget.value); // TODO: value of inputbox on submit, call API after
    console.log("submitted");
  };

  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        is it true?
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
