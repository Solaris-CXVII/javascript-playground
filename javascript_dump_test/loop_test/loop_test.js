const output = document.querySelector(".output");
output.textContent = "";

let i = 10;

while (i >= 10) {
  const para = document.createElement("p");
  if (i === 10) {
    para.textContent = `Countdown ${i}`;
  } else if (i === 0) {
    para.textContent = "Blastoff!";
  } else {
    para.textContent = i;
  }

  output.appendChild(para);
  i--;
}

const output = document.querySelector(".output");
output.textContent = "";
