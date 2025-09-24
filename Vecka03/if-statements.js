const output = document.getElementById("output");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  if (output.innerText === "Like me") {
    output.innerText = "Liked";
    button.innerText = "Unlike";
  } else {
    output.innerText = "Like me";
    button.innerText = "Like";
  }
});
