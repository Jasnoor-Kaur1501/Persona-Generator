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


