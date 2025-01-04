import ChatInterface from "../../local_components/Chat/ChatInterface";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowUp, Copy, Send } from "lucide-react";

import FileViewer from "react-file-viewer";

import localFile from "../../assets/doclingReport.pdf";
import "@cyntler/react-doc-viewer/dist/index.css";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const dummyChat: ChatGroup[] = [
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
        message: "Can you tell me about the weauyggjjhguytther?",
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
  const file = "https://arxiv.org/pdf/2408.09869";
  const type = "pdf";

  const docs = [
    { uri: "https://arxiv.org/pdf/2408.09869" }, // Remote file
    { uri: localFile }, // Local file (adjust based on your setup)
  ];

  return (
    <div className="w-full flex flex-row items-start justify-center h-[95%]">
      {/* Left  */}
      <div className="hidden md:block w-1/2 flex flex-col border-l px-6 h-full">
        <ScrollArea className="h-[600px] overflow-y-auto py-4">
          <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
        </ScrollArea>
      </div>

      <div className="h-full w-px hidden md:block  "></div>

      {/* Right  */}
      <div className="md:w-1/2 w-full flex flex-col  px-6 h-full">
        <ChatInterface data={dummyChat} />
      </div>
    </div>
  );
}
