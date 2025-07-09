document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("mensaje");

    textarea.addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });
  });