window.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("fname");
  if (!inputField) return; // safety

  inputField.addEventListener("blur", function () {
    this.value = this.value.toUpperCase();
  });
});