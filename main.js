const button = document.querySelector("#path");
const steps = document.querySelector("#steps");

button.addEventListener("click", () => {
  const hidden = steps.hasAttribute("hidden");
  if (hidden) {
    steps.removeAttribute("hidden");
    button.textContent = "Hide the exchange";
  } else {
    steps.setAttribute("hidden", "");
    button.textContent = "Show the exchange";
  }
});
