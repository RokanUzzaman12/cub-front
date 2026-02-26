import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { messageList } from "../../../../stores/messagesStore";
import { fetchMessagesAndFillStore } from "../../../../loaders/messagesLoader";
import { slugify } from "../../../../lib/slugify";
export default function MessageMobileMenu() {
  const messages = useStore(messageList);
  useEffect(() => {
    fetchMessagesAndFillStore();
  }, [messageList]);

  const oddMessages = messages.filter((_, i) => i % 2 === 0);
  const evenMessages = messages.filter((_, i) => i % 2 === 1);

  return (
    <>
      <ul className="submenu mm-collapse">
        <li style={{ textAlign: "center", color: "#890c25" }}>Board of Trustees</li>
        {evenMessages.map((message, index) => (
          <li key={index}>
            <a href={`/messages/${slugify(message.title)}`}>{message.title}</a>
          </li>
        ))}
        <li style={{ textAlign: "center", color: "#890c25" }}>Senior Management</li>
        {oddMessages.map((message, index) => (
          <li key={index}>
            <a href={`/messages/${slugify(message.title)}`}>{message.title}</a>
          </li>
        ))}
      </ul>
      <style>
        {`
              
        `}
      </style>
    </>
  );
}
