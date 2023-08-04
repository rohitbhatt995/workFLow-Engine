function loadContent(url) {
  fetch(url)
    .then((response) => response.text())
    .then((content) => {
      document.querySelector(".form-value").innerHTML = content;
    })
    .catch((error) => {
      console.error("Error loading content:", error);
    });
}
