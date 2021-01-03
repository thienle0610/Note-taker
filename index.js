"use strict";

const paren = document.querySelector(".paren");
const body = document.querySelector(".addNote");
let num = 0;
const popup = document.querySelector(".popup-content");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close");

function addNote() {
  //   add hidden to hide the 'no note is added yet!'
  paren.classList.add("hidden");

  //   create a new_div
  let text = document.getElementById("txt").value;
  num++;
  let new_div = document.createElement("div");
  new_div.className = "col-md-5";
  let x = document.createElement("B");
  let noteNumber = document.createTextNode("Note " + num + ":" + "\r\n");
  let textContent = document.createTextNode(text + "\r\n");
  let linebreak = document.createElement("br");

  //create break line for txtarea
  new_div.setAttribute("style", "overflow-wrap: break-word;");

  x.appendChild(noteNumber);
  new_div.appendChild(x);
  body.appendChild(new_div);

  body.appendChild(linebreak);
  new_div.appendChild(textContent);
  body.appendChild(new_div);

  //   styling the new_div
  new_div.style.border = "1px solid #bdc3c7";
  new_div.style.padding = "10px 100px 10px 30px";
  new_div.style.margin = "10px 48px 10px 47px";
  new_div.style.lineHeight = "250%";
  new_div.style.fontSize = "15 px";

  //create a View Detail button
  let btn_view = document.createElement("button");
  btn_view.textContent = "View Details";
  new_div.appendChild(linebreak);
  new_div.appendChild(btn_view);
  body.appendChild(new_div);

  //   styling the btn_view
  btn_view.style.padding = "0.5rem 1rem";
  btn_view.style.margin = "1rem 2rem";
  btn_view.style.background = "#3498db";
  btn_view.style.color = "#fff";
  btn_view.style.border = "#3498db";

  //   add function for view detail btn
  btn_view.addEventListener("click", () => {
    x.appendChild(noteNumber);

    popup.appendChild(x);
    popup.appendChild(textContent);

    popup.style.display = "block";
    overlay.style.display = "block";
    // create function for a close btn in the view detail function
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
      overlay.style.display = "none";

      x.appendChild(noteNumber);
      new_div.appendChild(x);

      new_div.appendChild(textContent);

      new_div.appendChild(linebreak);
      new_div.appendChild(btn_view);
      new_div.appendChild(btn_close);
    });
    // create function for an overlay same to the close btn
    overlay.addEventListener("click", () => {
      popup.style.display = "none";
      overlay.style.display = "none";
      x.appendChild(noteNumber);
      new_div.appendChild(x);

      new_div.appendChild(textContent);

      new_div.appendChild(linebreak);
      new_div.appendChild(btn_view);
      new_div.appendChild(btn_close);
    });
  });

  let btn_close = document.createElement("button");
  btn_close.textContent = "x";
  new_div.appendChild(btn_close);
  body.appendChild(new_div);

  btn_close.style.padding = "0.5rem 2rem";
  btn_close.style.margin = "1rem 2rem";
  btn_close.style.background = "#bdc3c7";
  btn_close.style.color = "#555";
  btn_close.style.border = "#bdc3c7";

  btn_close.addEventListener("click", () => {
    body.removeChild(new_div);

    num--;

    if (num < 1) {
      paren.classList.remove("hidden");
    }
  });
}
