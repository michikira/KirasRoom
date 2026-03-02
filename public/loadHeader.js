
document.addEventListener("DOMContentLoaded", function () {
  if (document.body.classList.contains("no-layout")) return;
  document.body.insertAdjacentHTML("afterbegin", headerEl);
  document.body.insertAdjacentHTML("beforeend", footerEl);

  const wrapperEl = document.querySelector(".my-wrapper");
  if (wrapperEl) wrapperEl.insertAdjacentHTML("afterbegin", `<b>Element at beginning of wrapper element.</b>`);
  if (wrapperEl) wrapperEl.insertAdjacentHTML("beforeend", `<b>Element at the end of wrapper element.</b>`);

  initActiveLinks();
});

function initActiveLinks() {
  const pathname = window.location.pathname;
  [...document.querySelectorAll("a")].forEach((el) => {
    const elHref = el.getAttribute("href").replace(".html", "").replace("/public", "");

    if (pathname == "/") {
      if (elHref == "/" || elHref == "/index.html") el.classList.add("active");
    } else {
      if (window.location.href.includes(elHref)) el.classList.add("active");
    }
  });
}

function getNestingString() {
  const currentUrl = window.location.href.replace("http://", "").replace("https://", "").replace("/public/", "/");
  const numberOfSlahes = currentUrl.split("/").length - 1;
  if (numberOfSlahes == 1) return ".";
  if (numberOfSlahes == 2) return "..";
  return ".." + "/..".repeat(numberOfSlahes - 2);
}

const nesting = getNestingString();

// How to use the nesting variable: <img src="${nesting}/images/example.jpg" />

const headerEl = `

  <head>
  <div class="container">
    <nav class="window">
      <div class = "window-body" style="padding-top: 1em">
      <a href="#https://michikira.neocities.org">TOP</a>
      <a href="#webmaster">About Me!</a>
    </nav>
    </div>
  </div>
  <h1 style="padding-left: 5em">Kira's Room</h1>
</head>

`;

const footerEl = `

`;