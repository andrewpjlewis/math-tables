document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("#base2-table tbody");

  for (let exp = 2; exp <= 16; exp++) {
    const value = Math.pow(2, exp).toLocaleString();
    const expression = `\\(2^{${exp}}\\)`;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${exp}</td>
      <td>${expression}</td>
      <td>${value}</td>
    `;
    tableBody.appendChild(row);
  }

  MathJax.typeset();

  // Theme switch toggle
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark", themeToggle.checked);
  });
});
