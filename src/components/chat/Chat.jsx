import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              tempora maiores temporibus. Numquam fugit aperiam ullam quibusdam
              cumque suscipit corrupti delectus?
            </p>
            <span>1 minuto atrás</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              tempora maiores temporibus. Numquam fugit aperiam ullam quibusdam
              cumque suscipit corrupti delectus?
            </p>
            <span>1 minuto atrás</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              tempora maiores temporibus. Numquam fugit aperiam ullam quibusdam
              cumque suscipit corrupti delectus?
            </p>
            <span>1 minuto atrás</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              tempora maiores temporibus. Numquam fugit aperiam ullam quibusdam
              cumque suscipit corrupti delectus?
            </p>
            <span>1 minuto atrás</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              tempora maiores temporibus. Numquam fugit aperiam ullam quibusdam
              cumque suscipit corrupti delectus?
            </p>
            <span>1 minuto atrás</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://images.unsplash.com/photo-1665241277288-cc866bea837c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              tempora maiores temporibus. Numquam fugit aperiam ullam quibusdam
              cumque suscipit corrupti delectus?
            </p>
            <span>1 minuto atrás</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Escreva uma mensagem..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Enviar</button>
      </div>
    </div>
  );
};

export default Chat;
