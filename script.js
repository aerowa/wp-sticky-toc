document.addEventListener('DOMContentLoaded', (event) => {
    const toc = document.getElementById("floating-toc").getElementsByTagName('nav')[0];
    const h1s = document.getElementsByTagName("h1");
    const list = document.createElement("ul");

    for (let i = 0; i < h1s.length; i++) {
        const id = "h1_" + i;
        h1s[i].id = id;
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#" + id;
        a.className = "arrow-link"; // Add this line to give the link a class
        a.innerText = h1s[i].innerText;

        li.appendChild(a);
        list.appendChild(li);
    }
    toc.appendChild(list);
});

window.addEventListener('load', function() {
  var toc = document.getElementById('floating-toc');
  var header = document.querySelector('header');
  var footer = document.querySelector('footer');

  function updateTocPosition() {
    var scrollPos = window.pageYOffset;
    var headerEndPos = header.offsetTop + header.offsetHeight;
    var footerStartPos = footer.offsetTop - toc.offsetHeight;

    if (scrollPos < headerEndPos) {
      toc.style.position = 'absolute';
      toc.style.top = headerEndPos + 'px';
    } else if (scrollPos > footerStartPos) {
      toc.style.position = 'absolute';
      toc.style.top = footerStartPos + 'px';
    } else {
      toc.style.position = 'fixed';
      toc.style.top = '0';
    }
  }

  window.addEventListener('scroll', updateTocPosition);
  window.addEventListener('resize', updateTocPosition);

  // Set the initial position of #floating-toc.
  updateTocPosition();
});