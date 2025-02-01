import React, { useState } from "react";

interface IMessageType {
  role: "AI" | "USER";
  message: string;
}

const Message: React.FC<IMessageType> = ({ role, message }) => {
  return (
    <div
      className={`p-3 rounded-lg w-fit ${
        role === "USER" ? "bg-primary text-white self-end" : "bg-slate-200"
      }`}
    >
      {message}
    </div>
  );
};

const App: React.FC = () => {
  const [messages, setMessages] = useState<IMessageType[]>([
    { role: "AI", message: "Hello, how can I help you?" },
  ]);
  const [input, setInput] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim()) {
      const message: IMessageType = {
        role: "USER",
        message: input,
      };

      setMessages((prev: IMessageType[]) => [...prev, message]);
    }

    setInput("");
  };

  return (
    <main className="relative p-4 max-w-4xl min-h-[calc(100vh-40px)] mx-auto shadow hover:shadow-2xl transition-all ease-in-out duration-300 bg-white rounded-lg">
      <h1 className="text-center font-bold text-4xl text-primary">Jarvis</h1>
      <p className="text-center text-xs text-slate-600">
        The best chatbot in the world
      </p>
      <div className="flex flex-col gap-y-4 mt-6">
        {messages.map((message: IMessageType, index: number) => (
          <Message key={index} role={message.role} message={message.message} />
        ))}
      </div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col md:flex-row gap-2 absolute bottom-4 left-4 right-4"
      >
        <textarea
          placeholder="Ask me anything..."
          value={input}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setInput(e.target.value)
          }
          className="border border-slate-300 rounded-lg p-2 flex-1 outline-none text-slate-700"
          rows={3}
        />
        <button className=" bg-primary hover:bg-sky-400 hover:shadow-lg active:bg-primary transition-all ease-in-out duration-100 text-white px-4 py-2 h-12 rounded-lg">
          Send
        </button>
      </form>
    </main>
  );
};

export default App;
