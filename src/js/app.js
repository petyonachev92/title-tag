import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  setTimeout(
    () => {
      document.getElementsByTagName('title')[0].textContent = 'One new message'
    }, 3000
  )
});


