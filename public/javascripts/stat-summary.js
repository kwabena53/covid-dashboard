const  showSummary = (country)=>{
    var activeCases;
    var casesRecorded; 
    var deathsRecorded;
    var recoveryRecorded;
     loadDoc('/data/cases/'+ country, (data)=>{
      console.log("cases recorded",casesRecorded)
       casesRecorded = getTotalValue(data);
       document.getElementById('totalCases').innerHTML = casesRecorded;
         //Country
         
         document.getElementById('countryTitle').innerHTML = data[0]['Country/Region'];
         document.getElementById('countryTitle2').innerHTML = data[0]['Country/Region'];
         loadDoc('/data/recovered/'+ country, (data)=>{
          recoveryRecorded = getTotalValue(data);
             document.getElementById('recoveryRecorded').innerHTML = recoveryRecorded;
           })
           loadDoc('/data/deaths/'+ country, (data)=>{
            deathsRecorded = getTotalValue(data);
             document.getElementById('deaths').innerHTML = deathsRecorded;
             //active cases
        
             activeCases = parseInt(casesRecorded) - parseInt(deathsRecorded) - parseInt(recoveryRecorded);
             document.getElementById('activeCases').innerHTML = activeCases;
           })
       })
       
 }

 const getTotalValue = (data) => {
  let totalValue = 0;
  // if(data.length > 1){ //if data for particular country are separated in regions accumulate the figures with reduce function
  //   //get the key (last date recorded) for value I want - casesRecorded
  //   console.log("data length",data.length)
  //  let firstData = data[0]; //get the first object in array
  //  let lastDateRecorded = Object.keys(firstData).pop();
  //  console.log("lastDateRecorded: ", lastDateRecorded)
  //  console.log("cum data: ", data)
  //  const valuePair = data.reduce((s,p)=>({lastDateRecorded: parseInt(s[lastDateRecorded]) + parseInt(p[lastDateRecorded])}));
  //  console.log("value pair: ", valuePair);
  //  totalValue = valuePair.lastDateRecorded;
  //  console.log("Reduced total", totalValue);
  // } else{
   var firstData = data[0]; //since object comes inside an array
   console.log("first data",firstData);
   totalValue = firstData[Object.keys(firstData).pop()];
   console.log("first data",totalValue);
  // }
  return totalValue
 }