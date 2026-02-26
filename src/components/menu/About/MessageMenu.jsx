import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { messageList } from "../../../stores/messagesStore";
import { fetchMessagesAndFillStore } from "../../../loaders/messagesLoader";
import { slugify } from "../../../lib/slugify";
export default function MessageMenu() {
  const messages = useStore(messageList);
  useEffect(() => {
    fetchMessagesAndFillStore();
  }, [messageList]);

  const oddMessages = messages.filter((_, i) => i % 2 === 0);
  const evenMessages = messages.filter((_, i) => i % 2 === 1);

  return (
    <>
      <div className="mega-column">
        <h4>Board of Trustees</h4>
        <ul className="message_menu">
          {evenMessages.map((message, index) => (
            <li key={index}>
              <a href={`/messages/${slugify(message.title)}`}>{message.title}</a>
            </li>
          ))}
        </ul>
        <h4 className="subheading">Senior Management</h4>
        <ul className="message_menu">
          {oddMessages.map((message, index) => (
            <li key={index}>
              <a href={`/messages/${slugify(message.title)}`}>{message.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <style>
        {`
          .message_menu{
                padding-left: 0
            }
            .message_menu li a{
                color: #262626
            }
            .subheading{
          padding-top: 10px;}
        `}
      </style>
    </>
  );
}
