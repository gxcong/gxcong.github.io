(() => {
  const dialog = document.querySelector("#figure-dialog");
  const large = document.querySelector("#figure-large");
  const title = document.querySelector("#figure-title");
  let trigger;
  document.querySelectorAll("[data-lightbox]").forEach(link => {
    link.addEventListener("click", event => {
      if (!dialog?.showModal || event.ctrlKey || event.metaKey || event.shiftKey) return;
      event.preventDefault();
      trigger = link;
      large.src = link.getAttribute("href");
      large.alt = link.querySelector("img").alt;
      title.textContent = link.dataset.title;
      dialog.showModal();
    });
  });
  function close() { dialog.close(); trigger?.focus(); }
  dialog?.querySelector(".close-dialog").addEventListener("click", close);
  dialog?.addEventListener("click", event => {
    if (event.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) close();
  });
})();
