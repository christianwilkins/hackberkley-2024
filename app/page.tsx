import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        true. a way to combat misinformation
      </h1>
      <ul>
        <li className="text-l">
          🤝
          <span className="ml-2">
            this project attempts to fight {" "}
            <a href="https://en.wikipedia.org/wiki/Misinformation" target="_blank">
              misinformation
            </a>{" "}
            using AI.
          </span>
        </li>
        <li className="text-l">
          👇
          <span className="ml-2">
            try asking e.g. <code>Who is the second president of the United States?</code> below!
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="http://127.0.0.1:8000/"
      emoji="👨‍🏫"
      titleText="Well Informed LLM"
      placeholder="I'm an LLM that helps you verify what is real and fake. Ask me anything!"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
