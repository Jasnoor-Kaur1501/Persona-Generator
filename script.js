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
  if (tags.includes("productivity") && tags.includes("motivational")) {
    persona = {
      name: "Performative Discipline Core™",
      perception: "Looks highly driven.",
      reality: "Relies on bursts of motivation."
    };
  }

  if (tags.includes("aesthetic") && tags.includes("deep")) {
    persona = {
      name: "Aesthetic Overthinker™",
      perception: "Emotionally intelligent.",
      reality: "Overanalyzes everything."
    };
  }

  if (tags.includes("memes") && tags.includes("funny")) {
    persona = {
      name: "Chaos Entertainer™",
      perception: "Funny and carefree.",
      reality: "Avoids seriousness."
    };
  }


}


