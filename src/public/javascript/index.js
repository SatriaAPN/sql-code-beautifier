function textToHTML() {
  var query = document.getElementById("ad").value;
  const beautifiedQuery = beautifyQuery(query);
  document.getElementById("demo").innerHTML = beautifiedQuery;
}
