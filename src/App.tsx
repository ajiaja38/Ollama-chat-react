import React from "react";

interface IMessageType {
  role: "AI" | "USER";
  message: string;
}

const App: React.FC = () => {
  return (
    <main className="p-4 max-w-4xl min-h-[calc(100vh-40px)] mx-auto shadow hover:shadow-2xl transition-all ease-in-out duration-300 bg-white rounded-lg">
      <h1 className="text-center font-bold text-4xl text-primary">Jarvis</h1>
    </main>
  );
};

export default App;
