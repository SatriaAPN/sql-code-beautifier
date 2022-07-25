function textToHTML() {
  var query = document.getElementById("ad").value;
  const beautifiedQuery = beautifyQuery(query);
  document.getElementById("demo").innerHTML = beautifiedQuery;
}

const filteredQuerySyntaxt = ["select", "from", "where", "group by", "order by", "limit", "as", "when", "and", "then", "or", "else", "left", "join", "right", "is", "null", "false", "true"];

const filteredQuerySyntaxt2 = ["sum", "max", "min"]
