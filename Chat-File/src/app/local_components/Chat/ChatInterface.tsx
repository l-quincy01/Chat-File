import { ArrowUp, Copy } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

// Define interfaces
interface Props {
  data: ChatGroup[];
}
interface ChatGroup {
  chatID: string;
  chat: ChatData[];
}

interface ChatData {
  id: number;
  sender: "user" | "bot";
  message: string;
  timestamp: string;
}

// Component
export default function ChatInterface({ data }: Props) {
  return (
    <div className="h-full w-full flex flex-col">
      {/* Scrollable Chat Area */}
      <ScrollArea className="h-[600px] overflow-y-auto py-4">
        {data.map((item) => (
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
                  className="text-sm p-4 rounded-xl"
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
        <div className="flex justify-end p-2">
          <div className="cursor-pointer bg-white rounded-full p-2">
            <ArrowUp size={12} color="black" />
          </div>
        </div>
      </div>
    </div>
  );
}
