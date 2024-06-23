"use client";

import { ChatWindow } from "@/components/ChatWindow";
import { PlaceholdersAndVanishInput } from "./components/ui/placeholders-and-vanish-input";
import { useState } from "react";
import axios from 'axios';

async function fastAPICall() {
  try {
    const response = await fetch("http://localhost:8000");
    const data = await response.json();
    console.log(data.message);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [textRef, setTextRef] = useState<string>("TextRef is null");

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
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const question = e.currentTarget.value; // TODO: value of inputbox on submit, call API after
    try {
      const response = await axios.post('/api/hello', { question })
      setTextRef(response.data.data)
    } catch (error) {
      console.error('Error:', error)
    }
    setIsLoading(true);
    console.log("submitted");
  };

  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        is it true?
      </h2>
      {!isLoading && (
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      )}
      {isLoading && (
        <p>{textRef}</p>
      )}
    </div>
  );
}
