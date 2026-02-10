

(function(){

    const api_url = 'http://localhost:3000/api/chat'
    const scriptTag = document.currentScript;
     
    const ownerId  = scriptTag.getAttribute('data-ownerId');

    if(!ownerId) {
        console.error('ownerId is Not found');
        return;
    }

    const button = document.createElement('div');
button.innerHTML = "🗨️";

Object.assign(button.style, {
  position: 'fixed',
  bottom: '24px',
  right: '24px',
  zIndex: '9999',
  cursor: 'pointer',
  fontSize: '24px',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: '#007bff',
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
  transition: 'background-color 0.3s ease',
});



    document.body.append(button);

  const box = document.createElement('div');

Object.assign(box.style, {
  position: 'fixed',
  bottom: '90px',
  right: '24px',
  zIndex: '9999',
  width: '320px',
  height: '420px',
  backgroundColor: '#ffffff',
  borderRadius: '14px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
  display: 'none', // default hidden
  flexDirection: 'column',
  overflow: 'hidden',
  fontFamily: 'Arial, sans-serif',
  backdropFilter: 'blur(10px)',
  border: '1px solid #e5e5e5',
  animation: 'fadeIn 0.2s ease',
});

box.innerHTML = `
  <div style="
      background:#007bff;
      color:white;
      padding:12px;
      font-weight:600;
      font-size:16px;
      display:flex;
      justify-content:space-between;
      align-items:center;
  ">
      <span>Chat Assistant</span>
      <span id="chat-close" style="cursor:pointer;font-size:18px;">✕</span>
  </div>

  <div style="flex:1; padding:12px; overflow-y:auto; background:#f9f9f9;">
      <div id="chat-messages" style="display:flex; flex-direction:column; gap:8px; font-size:14px;"></div>
  </div>

  <div style="
      display:flex;
      gap:8px;
      padding:12px;
      border-top:1px solid #eee;
      background:white;
  ">
      <input 
        id="chat-input"
        type="text"
        placeholder="Type your message..."
        style="
          flex:1;
          padding:10px;
          border:1px solid #ccc;
          border-radius:8px;
          outline:none;
          font-size:14px;
        "
      />

      <button 
        id="chat-send"
        style="
          padding:10px 14px;
          border:none;
          border-radius:8px;
          background:#007bff;
          color:white;
          cursor:pointer;
          font-weight:600;
        "
      >
        Send
      </button>
  </div>
`;

document.body.append(box);

button.onclick = () => {
  box.style.display = box.style.display === 'none' ? 'flex' : 'none';
};

document.addEventListener('click', (e) => {
  if (e.target.id === 'chat-close') {
    box.style.display = 'none';
  }
});




const sendBtn = document.getElementById('chat-send');
const input = document.getElementById('chat-input');
const messageArea = document.getElementById('chat-messages');


function addMessage(text,from){
    const bubble = document.createElement('div');
    bubble.innerText = text;
    Object.assign(bubble.style,{
        maxWidth:'80%',
        padding:' 8px 10px',
        borderRadius:'12px',
        wordBreak:'break-word',
        fontSize:'14px',
        backgroundColor: from === 'user' ? '#007bff' : '#e5e5e5',
        color: from === 'user' ? 'white' : 'black',
        alignSelf: from === 'user' ? 'flex-end' : 'flex-start',
        lineHeight:'1.4',
        marginBottom:'8px',



        borderTopRightRadius: from === 'user' ? '4px' : '12px',
        borderTopLeftRadius: from === 'user' ? '12px' : '4px',
        




    });
   messageArea.append(bubble);
   messageArea.scrollTop = messageArea.scrollHeight;
  }
 
  sendBtn.onclick = async ()=>{
    const text = input.value.trim();
    if(!text) return;
    addMessage(text,'user');
    input.value = '';

    const typing = document.createElement('div');
    typing.innerText = 'Typing...';
    Object.assign(typing.style,{
        fontSize:'12px',
        color:'#888',
        alignSelf:'flex-start',
        marginBottom:'8px',
    });
    messageArea.append(typing);
    messageArea.scrollTop = messageArea.scrollHeight;
  
try {
    const response = await fetch(api_url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            ownerId,
            message:text,
        }),
    })
    console.log(response);
  
    const data = await response.json();
    console.log(data);
    addMessage(data, 'bot');
        messageArea.removeChild(typing);

} catch (error) {
  console.log(error);
  addMessage("Server error. Try again.", 'bot');
  if (typing.parentNode) messageArea.removeChild(typing);
}




}



})()