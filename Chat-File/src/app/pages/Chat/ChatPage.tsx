import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowUp, Copy, Send } from "lucide-react";

const dummyChat = [
  {
    chatID: "jhh",
    chat: [
      {
        id: 1,
        sender: "user",
        message: "Hello, how are you?",
        timestamp: "2024-12-28T10:00:00Z",
      },
      {
        id: 2,
        sender: "bot",
        message: "I'm good, thank you! How can I assist you today?",
        timestamp: "2024-12-28T10:01:00Z",
      },
      {
        id: 3,
        sender: "user",
        message: "Can you tell me about the weather?",
        timestamp: "2024-12-28T10:02:00Z",
      },
      {
        id: 4,
        sender: "bot",
        message: "Sure! It's sunny with a temperature of 25°C.",
        timestamp: "2024-12-28T10:03:00Z",
      },
      {
        id: 5,
        sender: "user",
        message: "Thank you!",
        timestamp: "2024-12-28T10:04:00Z",
      },
      {
        id: 6,
        sender: "bot",
        message: "You're welcome! Let me know if you need anything else.",
        timestamp: "2024-12-28T10:05:00Z",
      },
    ],
  },
];

export default function ChatPage() {
  return (
    <div className="w-full flex flex-row items-start justify-center h-[95%]">
      {/* Left Panel */}
      <div className="w-1/2 p-4 hidden lg:block">
        <div className="p-4 flex flex-row gap-x-4 items-center shadow-md rounded-lg">
          <input
            placeholder="Type in your message"
            type="text"
            aria-multiline="true"
            className="p-4 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <Send className="cursor-pointer hover:text-blue-700" />
        </div>
      </div>

      <div className="h-full w-px hidden "></div>

      {/* Right Panel */}
      <div className="w-1/2 flex flex-col border-l px-6 h-full">
        <ScrollArea className="h-[600px] overflow-y-auto py-4">
          {dummyChat.map((item) => (
            <div key={item.chatID} className="flex flex-col gap-y-4">
              {/* Chat Messages */}
              {item.chat.map((message) => (
                <div
                  key={message.id}
                  className={`max-w-[80%] ${
                    message.sender === "user" ? "self-end" : "self-start"
                  }`}
                >
                  <div
                    id={
                      message.sender === "user"
                        ? "userChatBubble"
                        : "botChatBubble"
                    }
                    className="text-sm p-4 rounded-xl "
                  >
                    <p>{message.message}</p>
                  </div>
                  {message.sender === "bot" && (
                    <div className="flex justify-end mt-1">
                      <Copy
                        size={14}
                        className="cursor-pointer hover:text-gray-700"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </ScrollArea>

        {/* Input Area */}
        <div id="userChatBubble" className="flex flex-col rounded-xl">
          <textarea
            placeholder="Type in your message"
            cols={4}
            rows={2}
            aria-multiline="true"
            className="pr-12 pl-4 pb-6 pt-4 w-[95%] bg-transparent focus:outline-none resize-none"
          ></textarea>
          <div className="flex justify-end p-2 ">
            <div className="cursor-pointer bg-white rounded-full p-2 ">
              <ArrowUp size={12} color="black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
