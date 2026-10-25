"use strict";

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function inline(text) {
  return escapeHtml(text)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" rel="noopener">$1</a>')
    .replace(/\*\*\*([^*]+)\*\*\*/g, "<strong><em>$1</em></strong>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

function plain(text) {
  return text.replace(/\*/g, "");
}

function render(data) {
  const doc = document.getElementById("document");
  const outline = document.getElementById("outline");
  const parts = [];
  const counts = { tasks: 0, done: 0, tbdRows: 0, rows: 0, areas: 0 };
  let section = "";
  for (const block of data.blocks) {
    if (block.type === "heading") {
      if (block.level === 1) continue;
      const level = Math.min(block.level, 4);
      section = plain(block.text);
      parts.push(`<h${level} id="${block.id}">${inline(block.text)}</h${level}>`);
      if (level <= 3) {
        const li = document.createElement("li");
        li.className = "l" + level;
        li.innerHTML = `<a href="#${block.id}">${escapeHtml(plain(block.text))}</a>`;
        outline.appendChild(li);
      }
    } else if (block.type === "paragraph") {
      parts.push(`<p>${inline(block.text)}</p>`);
    } else if (block.type === "table") {
      const head = block.header.map((h) => `<th scope="col">${inline(h)}</th>`).join("");
      const rows = block.rows.map((row) => {
        counts.rows += 1;
        if (row.includes("TBD")) counts.tbdRows += 1;
        const cells = row.map((c) => `<td class="${c === "TBD" ? "tbd" : ""}">${inline(c)}</td>`).join("");
        return `<tr class="filterable">${cells}</tr>`;
      }).join("");
      parts.push(`<div class="table-scroll"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`);
    } else if (block.type === "list") {
      if (/Areas of Work/i.test(section)) counts.areas += block.items.filter((i) => i.depth === 0).length;
      const items = block.items.map((item) => {
        if (item.task) { counts.tasks += 1; if (item.done) counts.done += 1; }
        const cls = ["filterable", "d" + item.depth, item.task ? "task" : "", item.done ? "done" : ""].join(" ");
        return `<li class="${cls}">${inline(item.text)}</li>`;
      }).join("");
      parts.push(`<ul class="items">${items}</ul>`);
    }
  }
  doc.innerHTML = parts.join("\n");
  const cards = [
    [counts.tasks - counts.done, "open tasks"],
    [counts.done, "tasks done"],
    [counts.areas, "areas of work"],
    [counts.tbdRows, "table rows with an open TBD"],
  ];
  document.getElementById("summary").innerHTML = cards
    .map(([n, t]) => `<div class="card"><div class="n">${n}</div><div class="t">${t}</div></div>`)
    .join("");
}

function setupFilter() {
  const input = document.getElementById("filter");
  const count = document.getElementById("filter-count");
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    let shown = 0;
    for (const el of document.querySelectorAll(".filterable")) {
      const match = !q || el.textContent.toLowerCase().includes(q);
      el.hidden = !match;
      if (match) shown += 1;
    }
    count.textContent = q ? `${shown} matching rows and items` : "";
  });
}

fetch("data/inventory.json")
  .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
  .then((data) => { render(data); setupFilter(); })
  .catch((err) => {
    document.getElementById("document").innerHTML =
      `<p>Could not load the inventory data (${escapeHtml(String(err))}).</p>`;
  });
