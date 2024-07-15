import { api, app } from './comfy/comfy.js'

const CHAT_BUTTON_ID = "chatButton";
const CHAT_BOX_ID = "chatBox";

const createChatButton = () => {
  const chatButton = document.createElement('div');
  chatButton.innerHTML = `<div id="${CHAT_BUTTON_ID}"></div>`;
  // is absolute
  chatButton.style.position = 'fixed';
  chatButton.style.bottom = '0';
  chatButton.style.right = '0';
  // circle, green bg
  chatButton.style.backgroundColor = 'green';
  chatButton.style.color = 'white';
  chatButton.style.borderRadius = '50%';
  chatButton.style.width = '100px';
  chatButton.style.height = '100px';
  chatButton.style.zIndex = 9999;
  return chatButton;
}

const createChatBox = () => {
  const chatBox = document.createElement('div');
  chatBox.innerHTML = `<div id="${CHAT_BOX_ID}"></div>`;
  chatBox.style.position = 'fixed';
  chatBox.style.bottom = '0';
  chatBox.style.right = '0';
  chatBox.style.backgroundColor = 'white';
  chatBox.style.width = '300px';
  chatBox.style.height = '500px';
  chatBox.style.zIndex = 9999;
  return chatBox;
}






const registerChat = () => {

  // With js, append an bottom that opens up a chatbox in the bottom right hand corner
  const chatButton = createChatButton();
  const chatBox = createChatBox()

  document.body.appendChild(chatBox);
  document.body.appendChild(chatButton);
}


/** @typedef {import('../../../web/types/comfy.js').ComfyExtension} ComfyExtension*/
/** @type {ComfyExtension} */
const ext = {
  name: 'nathannlu.ComfyUI-Chat',

  // ComfyUI extension init
  init() {
    registerChat()
  },
}

app.registerExtension(ext)
