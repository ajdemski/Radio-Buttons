function handleSelect(event) {
  event.preventDefault();
  const selection = document.getElementById("beverage").value;
}

window.addEventListener("load", function() {
  document.getElementById("select-form").addEventListener("submit", handleSelect);
});