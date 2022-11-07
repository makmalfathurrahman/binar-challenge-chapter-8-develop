function SearchResult() {
  const search = document.getElementById("mySearch");
  search.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("myButton").click();
    }
  });
}

export default SearchResult;
