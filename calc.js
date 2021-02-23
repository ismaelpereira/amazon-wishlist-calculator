Array.from(document.querySelectorAll("span.a-price-whole"))
  .map((v) => v.parentNode.innerText)
  .map((v) => v.replace("R$", "").replace(",", ""))
  .map((v) => parseInt(v, 10)).reduce((acc,n) => acc+n,0);

