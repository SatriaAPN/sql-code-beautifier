function textToHTML() {
  var query = document.getElementById("ad").value;
  const beautifiedQuery = beautifyQuery(query);
  document.getElementById("demo").innerHTML = beautifiedQuery;
}

const filteredQuerySyntaxt = ["select", "from", "where", "group by", "order by", "limit", "as", "when", "and", "then", "or", "else", "left", "join", "right", "is", "null", "false", "true"];

const filteredQuerySyntaxt2 = ["sum", "max", "min"]

const beautifyQuery = (query) => {
  query = replaceMatchCaseIntoUpperCase(query);
  query = createSpaceInQuery(query);

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
  let index1 = 0;
  let countOpenParenthesis = 0;
  let index2 = 0;
  let countCloseParenthesis = 0;
  let end = false;
  let subQuery = [];

  for(let i=0; i<query.length; i++) {
    console.log('parenthesis', countOpenParenthesis, countCloseParenthesis);
    console.log('index', index1, index2);

    if(query[i] === '(') {
      if(countOpenParenthesis === 0) index1 = i+1;
      
      countOpenParenthesis++;
    }

    if(query[i] === ')') 
      countCloseParenthesis++; 

    if(countOpenParenthesis > 0 && countOpenParenthesis === countCloseParenthesis) {
      console.log('i', i)
      if(checkIfSubQueryEnd(query, i))
        index2 = i-1;
    }

    if(index1 != 0 && index2 != 0) {
      subQuery.push(query.substring(index1, index2));
      index1 = 0;
      index2 = 0;
      countOpenParenthesis = 0;
      countCloseParenthesis = 0;
    }

    if(index1 != 0 && i === query.length - 1)
      subQuery.push(query.substring(index1, i));
  }

  // return the result
  return subQuery
}

const checkIfSubQueryEnd = (query, index) => {
  for(let subQuery of subQueryEnd) {
    console.log(query.substring(index, index + subQuery.length))
    if(query.substring(index, index + subQuery.length).toLowerCase() === subQuery.toLowerCase()) {
      return true;
    }
  }

  return false;
}

const subQueryEnd = ['left', 'right', 'join', 'where', 'having', 'order'];

const addSpaceInBetweenSelectANDFrom = (query, space) => {
  
  return query
}