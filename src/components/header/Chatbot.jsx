import React, { useState } from "react";
import { MdOutlineHelp, MdClose } from "react-icons/md";
import SmoothCollapse from "react-smooth-collapse";

const Chatbot = () => {
  const [expanded, setExpanded] = useState(false);

  const handleCollapse = () => {
    console.log("Collapsed clicked. State changed to: " + expanded);
    setExpanded(!expanded);
  };

  return (
    <div className="chatbot__container">

      <div >
        <div >
          <button
            className="btn btn-primary chatbot__button"
            onClick={handleCollapse}
          >
            {expanded ? <MdClose className="icon"/> : <MdOutlineHelp className="icon" />}
          </button>
        </div>
        <SmoothCollapse expanded={expanded}>
          <div className="pva">
            <iframe 
            src="https://web.powerva.microsoft.com/environments/953fce05-823d-4e86-a849-6ff25280390b/bots/new_bot_f78f734079a04ec48a01cb58caa5acbf/webchat" 
            frameborder="0"
            title="3Cloud Power Virtual Agent"
            ></iframe>
          </div>
        </SmoothCollapse>
      </div>
    </div>
  );
};

export default Chatbot;
