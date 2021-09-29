function search() {
  const text = document.getElementById("search-book").value;
  console.log("User text: " + text);
  window.location.href = "#" + text;
}
