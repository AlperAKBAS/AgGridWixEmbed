document.addEventListener("DOMContentLoaded", () => {
  window.onmessage = (event) => {
    clog(event);
    clog(event.target);
    clog(event.data);
  };

  const msg = "Embedded DOM loaded @" + new Date();
  clog(msg);
  window.parent.postMessage({ msg }, "*");
});

// HELPER FUNCTIONS
function clog(str) {
  console.log(`From Embedded: ${str}`);
}
