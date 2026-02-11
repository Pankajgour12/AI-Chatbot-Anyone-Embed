(function () {
  const api_url = "http://localhost:3000/api/chat";
  const scriptTag = document.currentScript;
  const ownerId = scriptTag.getAttribute("data-ownerId");
  if (!ownerId) return console.error("ownerId missing");

  /* ================= FLOAT BUTTON ================= */

  const button = document.createElement("div");
  button.innerHTML = "💬";

  Object.assign(button.style, {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    zIndex: "99999",
    cursor: "pointer",
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg,#0f172a,#020617)",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    boxShadow:
      "0 20px 80px rgba(0,0,0,0.6), inset 0 0 8px rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    transition: "all .25s ease",
  });

  // Glow pulse animation
  setInterval(() => {
    button.style.boxShadow =
      "0 20px 80px rgba(0,0,0,0.6), 0 0 18px rgba(99,102,241,0.6)";
    setTimeout(() => {
      button.style.boxShadow =
        "0 20px 80px rgba(0,0,0,0.6), inset 0 0 8px rgba(255,255,255,0.08)";
    }, 900);
  }, 2500);

  document.body.append(button);

  /* ================= CHAT BOX ================= */

  const box = document.createElement("div");

  function responsive() {
    const mobile = window.innerWidth < 520;

    if (mobile) {
      Object.assign(box.style, {
        bottom: "16px",
        right: "12px",
        left: "12px",
        width: "auto",
        height: "70vh",
        borderRadius: "22px",
      });
    } else {
      Object.assign(box.style, {
        bottom: "92px",
        right: "22px",
        left: "auto",
        width: "390px",
        height: "560px",
        borderRadius: "26px",
      });
    }
  }

  Object.assign(box.style, {
    position: "fixed",
    zIndex: "99999",
    background: "rgba(15,15,23,0.96)",
    backdropFilter: "blur(35px)",
    boxShadow: "0 60px 220px rgba(0,0,0,0.85)",
    border: "1px solid rgba(255,255,255,0.08)",
    display: "none",
    flexDirection: "column",
    overflow: "hidden",
    fontFamily: "Inter, system-ui, sans-serif",
    color: "white",
  });

  responsive();
  window.addEventListener("resize", responsive);

  box.innerHTML = `
  <div style="padding:16px 18px;display:flex;justify-content:space-between;align-items:center;background:rgba(0,0,0,0.4);border-bottom:1px solid rgba(255,255,255,0.08)">
    <div style="display:flex;gap:8px">
      <span style="width:11px;height:11px;background:#ff5f57;border-radius:50%"></span>
      <span style="width:11px;height:11px;background:#febc2e;border-radius:50%"></span>
      <span style="width:11px;height:11px;background:#28c840;border-radius:50%"></span>
    </div>
    <span style="font-size:12px;letter-spacing:.25em;font-weight:700;background:linear-gradient(90deg,#fff,#a5b4fc);-webkit-background-clip:text;color:transparent">
      AI ASSISTANT
    </span>
    <span id="chat-close" style="cursor:pointer;font-size:18px;opacity:.6;">✕</span>
  </div>

  <div id="chat-messages" style="
  flex:1;
  padding:18px;
  overflow-y:auto;
  display:flex;
  flex-direction:column;
  gap:14px;
  min-width:0;
  word-break:break-word;
"></div>


  <div style="padding:14px;border-top:1px solid rgba(255,255,255,0.08);display:flex;gap:10px">
    <input id="chat-input" placeholder="Type a message..."
      style="flex:1;padding:14px 16px;border-radius:18px;border:1px solid rgba(255,255,255,0.15);background:#0f0f14;color:white;outline:none;font-size:14px" />
    <button id="chat-send"
      style="padding:14px 18px;border-radius:18px;border:none;background:linear-gradient(145deg,#fff,#e6e6e6);color:black;font-weight:700;cursor:pointer;box-shadow:0 6px 18px rgba(0,0,0,0.35)">➤</button>
  </div>
  `;

  document.body.append(box);

  button.onclick = () =>
    (box.style.display = box.style.display === "none" ? "flex" : "none");

  document.addEventListener("click", (e) => {
    if (e.target.id === "chat-close") box.style.display = "none";
  });

  const sendBtn = box.querySelector("#chat-send");
  const input = box.querySelector("#chat-input");
  const messageArea = box.querySelector("#chat-messages");

  /* ================= BUBBLES ================= */
function bubble(text, from) {
  const el = document.createElement("div");

  el.innerText = text;

  Object.assign(el.style, {
    maxWidth: "85%",
    minWidth: "0",
    padding: "12px 16px",
    borderRadius: "18px",
    fontSize: "14px",
    lineHeight: "1.45",

    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    overflowWrap: "anywhere",

    background:
      from === "user"
        ? "linear-gradient(145deg,#ffffff,#eaeaea)"
        : "rgba(255,255,255,0.08)",

    color: from === "user" ? "#000" : "#fff",
    alignSelf: from === "user" ? "flex-end" : "flex-start",

    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow:
      from === "user"
        ? "0 4px 14px rgba(0,0,0,0.12)"
        : "0 4px 14px rgba(0,0,0,0.35)",
  });

  messageArea.append(el);
  messageArea.scrollTop = messageArea.scrollHeight;
}


 function typing() {
  const t = document.createElement("div");
  t.innerHTML = "● ● ●";

  Object.assign(t.style, {
    opacity: ".5",
    fontSize: "12px",
    alignSelf: "flex-start",
    wordBreak: "break-word",
  });

  return t;
}


  async function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    bubble(text, "user");
    input.value = "";

    const t = typing();
    messageArea.append(t);

    try {
      const res = await fetch(api_url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ownerId, message: text }),
      });

     const data = await res.json();
t.remove();

let botText = "";

// SUCCESS CASE
if (res.ok) {
  botText =
    typeof data === "string"
      ? data
      : data.reply || data.message || "I am here to help!";
}

// ERROR CASE
else {
  const raw =
    typeof data === "string" ? data : JSON.stringify(data);

  if (raw.includes("quota") || raw.includes("RESOURCE_EXHAUSTED")) {
    botText =
      "⚠️ AI limit reached. Please try again after a few seconds.";
  } else if (raw.includes("network")) {
    botText =
      "🌐 Network issue. Please check your internet connection.";
  } else if (raw.includes("server")) {
    botText =
      "🚧 Server is busy right now. Please try again later.";
  } else {
    botText =
      "❌ Something went wrong. Please try again.";
  }
}

bubble(botText, "bot");

   } catch (err) {
  t.remove();

  let msg = "❌ Unexpected error occurred.";

  if (err.message?.includes("fetch")) {
    msg = "🌐 Unable to connect. Check internet.";
  }

  bubble(msg, "bot");
}

  }

  sendBtn.onclick = sendMessage;
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
  });
})();
