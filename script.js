const selected = new Set();

document.querySelectorAll(".tags span").forEach(tag => {
  tag.addEventListener("click", () => {
    tag.classList.toggle("active");
    const value = tag.innerText;

    if (selected.has(value)) {
      selected.delete(value);
    } else {
      selected.add(value);
    }
  });
});
function analyze() {
  const tags = Array.from(selected);

  let persona = {
    name: "Undefined Energy™",
    perception: "Confusing but interesting.",
    reality: "You’re still figuring things out."
  };



