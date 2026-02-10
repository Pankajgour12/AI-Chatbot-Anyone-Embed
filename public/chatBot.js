(function () {
  const api_url = "http://localhost:3000/api/chat";
  const scriptTag = document.currentScript;
  const ownerId = scriptTag.getAttribute("data-ownerId");
  if (!ownerId) return console.error("ownerId missing");


  const button = document.createElement("div");
  button.innerHTML = "💬";

  Object.assign(button.style, {
    position: "fixed",
    bottom: "22px",
    right: "22px",
    zIndex: "99999",
    cursor: "pointer",
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    background: "radial-gradient(circle at 30% 30%, #2c2c35, #050507 70%)",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    boxShadow:
      "0 20px 80px rgba(0,0,0,0.85), inset 0 0 12px rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
    transition: "all .25s ease",
  });

  button.onmouseenter = () => {
    button.style.transform = "translateY(-6px) scale(1.08)";
  };
  button.onmouseleave = () => {
    button.style.transform = "translateY(0) scale(1)";
  };

  document.body.append(button);

  /* ================= CHAT BOX ================= */

  const box = document.createElement("div");

  function responsive() {
    const mobile = window.innerWidth < 520;

    if (mobile) {
      Object.assign(box.style, {
        position: "fixed",
        bottom: "16px",
        right: "12px",
        left: "12px",
        width: "auto",
        height: "70vh",
        borderRadius: "22px",
      });
    } else {
      Object.assign(box.style, {
        position: "fixed",
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
    zIndex: "99999",
    background: "rgba(14,14,20,0.94)",
    backdropFilter: "blur(40px)",
    boxShadow: "0 70px 220px rgba(0,0,0,0.9)",
    border: "1px solid rgba(255,255,255,0.06)",
    display: "none",
    flexDirection: "column",
    overflow: "hidden",
    fontFamily: "Inter, system-ui, sans-serif",
    color: "white",
  });

  responsive();
  window.addEventListener("resize", responsive);

  box.innerHTML = `
  <!-- HEADER -->
  <div style="
    padding:16px 18px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:linear-gradient(180deg,rgba(0,0,0,0.55),rgba(0,0,0,0.25));
    border-bottom:1px solid rgba(255,255,255,0.06);
  ">
    <div style="display:flex;gap:8px">
      <span style="width:11px;height:11px;background:#ff5f57;border-radius:50%;"></span>
      <span style="width:11px;height:11px;background:#febc2e;border-radius:50%; "></span>
      <span style="width:11px;height:11px;background:#28c840;border-radius:50%;"></span>
    </div>

    <span style="
      font-size:12px;
      letter-spacing:.26em;
      font-weight:700;
      background:linear-gradient(90deg,#fff,#9f9fff);
      -webkit-background-clip:text;
      color:transparent;
    ">
      AI ASSISTANT
    </span>

    <span id="chat-close" style="cursor:pointer;font-size:18px;opacity:.6;">✕</span>
  </div>

  <!-- MESSAGES -->
  <div id="chat-messages" style="
    flex:1;
    padding:18px;
    overflow-y:auto;
    display:flex;
    flex-direction:column;
    gap:14px;
  "></div>

  <!-- INPUT -->
  <div style="
    padding:14px;
    border-top:1px solid rgba(255,255,255,0.06);
    display:flex;
    gap:10px;
  ">
    <input id="chat-input" placeholder="Type a message..."
      style="
        flex:1;
        padding:14px 16px;
        border-radius:18px;
        border:1px solid rgba(255,255,255,0.1);
        background:#0f0f14;
        color:white;
        outline:none;
        font-size:14px;
      "/>

    <button id="chat-send"
      style="
        padding:14px 18px;
        border-radius:18px;
        border:none;
        background:linear-gradient(145deg,#fff,#e6e6e6);
        color:black;
        font-weight:700;
        cursor:pointer;
        box-shadow:0 6px 18px rgba(0,0,0,0.35);
      ">➤</button>
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


  function bubble(text, from) {
    const el = document.createElement("div");
    el.innerText = text;

    Object.assign(el.style, {
      maxWidth: "78%",
      padding: "13px 18px",
      borderRadius: "20px",
      fontSize: "14px",
      lineHeight: "1.45",
      background:
        from === "user"
          ? "linear-gradient(145deg,#ffffff,#eaeaea)"
          : "rgba(255,255,255,0.06)",
      color: from === "user" ? "#000" : "#fff",
      alignSelf: from === "user" ? "flex-end" : "flex-start",
      border: "1px solid rgba(255,255,255,0.08)",
    });

    messageArea.append(el);
    messageArea.scrollTop = messageArea.scrollHeight;
  }


  function typing() {
    const t = document.createElement("div");
    t.innerHTML = "● ● ●";
    t.style.opacity = ".5";
    t.style.fontSize = "12px";
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
      bubble(data, "bot");
    } catch {
      t.remove();
      bubble("Server error.", "bot");
    }
  }

  sendBtn.onclick = sendMessage;
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
  });
})();
