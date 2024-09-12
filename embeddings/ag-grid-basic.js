document.addEventListener("DOMContentLoaded", () => {
  window.onmessage = (event) => {
    clog(event);
    clog(event.target);
    clog(event.data);
  };

  const msg = "Embedded DOM loaded @" + new Date();
  clog(msg);
  window.parent.postMessage({ msg }, "*");

  const btnMsg = document.getElementById("sendMessageBtn");
  btnMsg.addEventListener("click", (event) => {
    clog("Button clicked");
    console.log(event.target);
    window.parent.postMessage(
      {
        msg: "Button clicked in the embedded link....",
      },
      "*"
    );
  });
});

// HELPER FUNCTIONS
function clog(str) {
  console.log(`From Embedded via cdn channel: ${str}`);
}
