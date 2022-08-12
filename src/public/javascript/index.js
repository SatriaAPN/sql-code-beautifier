function textToHTML() {
  var query = document.getElementById("ad").value;
  const beautifiedQuery = beautifyQuery(query);
  document.getElementById("demo").innerHTML = beautifiedQuery;
}

const filteredQuerySyntaxt = ["select", "from", "where", "group by", "order by", "limit", "as", "when", "and", "then", "or", "else", "left", "join", "right", "is", "null", "false", "true"];

const filteredQuerySyntaxt2 = ["sum", "max", "min"]

const beautifyQuery = (query) => {
  query = replaceMatchCaseIntoUpperCase(query);

  return query;
}

const replaceMatchCaseIntoUpperCase = (query) => {
  for(let data of filteredQuerySyntaxt) {
    const regex = new RegExp(data, 'gi');
    query = query.replace(regex, data.toUpperCase());
  }
  for(let data of filteredQuerySyntaxt2) {
    const regex = new RegExp(data, 'gi');
    query = query.replace(regex, data.toUpperCase());
  }

  return query;
}

const createSpaceInQuery = (query) => {

  return query
}

const addSpaceInBetweenSelectANDFrom = (query) => {
  
  return query
}