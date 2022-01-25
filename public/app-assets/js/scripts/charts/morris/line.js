/*=========================================================================================
    File Name: line.js
    Description: Morris line chart
    ----------------------------------------------------------------------------------------
    Item Name: Stack - Responsive Admin Theme
    Version: 3.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Line chart
// ------------------------------

$(window).on("load", function(){
    showGraph('Ghana');
    showSummary('Ghana');
});

function showGraph(country){
    var data = [];
    loadDoc('/data/cases/'+ country, (cases)=>{
        var cases = cases[0]; //since object comes inside an array
        for (let [key, value] of Object.entries(cases)) {
            if(value != '0'){
                var splitDate = key.split('/');
                var date = splitDate[2]+'20'+ "-" + splitDate[0] + "-" + splitDate[1]; // date format [2020-03-25]
                var newObject = {'day':date, 'cases': value}
                data.push(newObject);
            }
          }

          data = data.slice(4);
          console.log(data);
          Morris.Line({
            element: 'line-chart',
            data: data,
            xkey: 'day',
            ykeys: ['cases'],
            xLabels:['days'],
            labels: ['cases'],
            resize: true,
            smooth: false,
            pointSize: 3,
            pointStrokeColors:['#00A5A8'],
            gridLineColor: '#e3e3e3',
            behaveLikeLine: true,
            numLines: 6,
            gridtextSize: 14,
            lineWidth: 3,
            hideHover: 'auto',
            lineColors: ['purple']
        });
    })
}

