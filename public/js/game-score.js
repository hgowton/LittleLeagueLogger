//This pulls the date from the URL query
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("day");
console.log(myParam);
