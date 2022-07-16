function textToHTML() {
  var query = document.getElementById("ad").value;
  const beautifiedQuery = beautifyQuery(query);
  document.getElementById("demo").innerHTML = beautifiedQuery;
}

const beautifyQuery = (query) => {
  
  for(let querySyntaxt of filteredQuerySyntaxt) {
    const regex = new RegExp(`\\b${querySyntaxt}\\b`, 'gi');
    console.log(regex)
    query = query.replace(regex, querySyntaxt.toUpperCase());
  }

  for(let querySyntaxt of filteredQuerySyntaxt2) {
    const regex = new RegExp(`\\b${querySyntaxt}`, 'gi');
    console.log(regex)
    query = query.replace(regex, querySyntaxt.toUpperCase());
  }

  return addSpaceBetweenSelectAndFrom(query);

}

const filteredQuerySyntaxt = ["select", "from", "where", "group by", "order by", "limit", "as", "when", "and", "then", "or", "else", "left", "join", "right", "is", "null", "false", "true"];

const filteredQuerySyntaxt2 = ["sum", "max", "min"]

const addSpaceBetweenSelectAndFrom = (query) => {
  console.log(query)
  let selectStatementIndex;
  let fromStatementIndex;
  for(let i=0; i<query.length; i++) {
    if(query.slice(i, i+6) === 'SELECT'){
      selectStatementIndex = i;
    }
  }

  for(let i=0; i<query.length; i++) {
    if(query.slice(i, i+4) === 'FROM'){
      fromStatementIndex = i;
    }
  }
  console.log('1 ', JSON.stringify(query));
  console.log('2 ', selectStatementIndex, fromStatementIndex);
  let selectColumnQuery = query.slice(selectStatementIndex+6, fromStatementIndex-1);
  console.log('3 ', selectColumnQuery)
  let result = selectColumnQuery.replace(/[^\w\,\.\"]/gi, '')
  console.log('4 ', result)


  let countIndex = 0;
  while(countIndex<result.length) {
    if(result[countIndex] === ','){
      result = result.slice(0, countIndex+1) + '\n' + '  ' + result.slice(countIndex+2);
    }
    countIndex++;
  }
  result = '\n' + '  ' + result + '\n';
  console.log('5 ', JSON.stringify(result));

  finalResult = query.slice(0, selectStatementIndex+6) + result + query.slice(fromStatementIndex);
  return finalResult
}