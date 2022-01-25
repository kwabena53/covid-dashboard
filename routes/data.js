var express = require('express');
var router = express.Router();
const getCSV = require('get-csv');



router.get('/countries', function(req, res, next) {
  var countries = [];
  var countryCasesCSV = "https://data.humdata.org/hxlproxy/api/data-preview.csv?url=https%3A%2F%2Fraw.githubusercontent.com%2FCSSEGISandData%2FCOVID-19%2Fmaster%2Fcsse_covid_19_data%2Fcsse_covid_19_time_series%2Ftime_series_covid19_confirmed_global.csv&filename=time_series_covid19_confirmed_global.csv"
  getCSV(countryCasesCSV, (err, data) =>{
  
    // try{
      data.forEach(element => {
        countries.push(element['Country/Region']) 
       })
      res.send(countries);
    // }
    // catch{
    //   console.log(err)
    //   } 
    })
  });

  router.get('global', (req, res, next)=>{
    const api ='https://coronavirus-19-api.herokuapp.com/all'
  })

  router.get('/cases', function(req, res, next) {
    var countryCasesCSV = "https://data.humdata.org/hxlproxy/api/data-preview.csv?url=https%3A%2F%2Fraw.githubusercontent.com%2FCSSEGISandData%2FCOVID-19%2Fmaster%2Fcsse_covid_19_data%2Fcsse_covid_19_time_series%2Ftime_series_covid19_confirmed_global.csv&filename=time_series_covid19_confirmed_global.csv"
    getCSV(countryCasesCSV, (err, data) =>{
    
      // try{
        res.send(
          data
        );
      // }catch{
      //   console.log(err)
      //   } 
      })
    });

router.get('/cases/:country', function(req, res, next) {
    var country = req.params.country
    var countryCasesCSV = "https://data.humdata.org/hxlproxy/api/data-preview.csv?url=https%3A%2F%2Fraw.githubusercontent.com%2FCSSEGISandData%2FCOVID-19%2Fmaster%2Fcsse_covid_19_data%2Fcsse_covid_19_time_series%2Ftime_series_covid19_confirmed_global.csv&filename=time_series_covid19_confirmed_global.csv"
    getCSV(countryCasesCSV, (err, data) =>{
    
      // try{
        res.send(
          data.filter((c) =>{
            return c['Country/Region'].toLowerCase() === country.toLowerCase()
          })
        );
      // }catch{
      //   console.log(err)
      //   } 
      })
    });
    
router.get('/recovered/:country', function(req, res, next) {
    var country = req.params.country
    var countryRecoveryCSV = "https://data.humdata.org/hxlproxy/api/data-preview.csv?url=https%3A%2F%2Fraw.githubusercontent.com%2FCSSEGISandData%2FCOVID-19%2Fmaster%2Fcsse_covid_19_data%2Fcsse_covid_19_time_series%2Ftime_series_covid19_recovered_global.csv&filename=time_series_covid19_recovered_global.csv"
    getCSV(countryRecoveryCSV, (err, data) =>{
    // try{
        res.send(
        data.filter((c) =>{
            return c['Country/Region'].toLowerCase() === country.toLowerCase()
        })
        );
    // }catch{
    //     console.log(err)
    // }  
    })
    });

    router.get('/deaths/:country', function(req, res, next) {
    var country = req.params.country
    var countryDeathCSV = "https://data.humdata.org/hxlproxy/api/data-preview.csv?url=https%3A%2F%2Fraw.githubusercontent.com%2FCSSEGISandData%2FCOVID-19%2Fmaster%2Fcsse_covid_19_data%2Fcsse_covid_19_time_series%2Ftime_series_covid19_deaths_global.csv&filename=time_series_covid19_deaths_global.csv"
    getCSV(countryDeathCSV, (err, data) =>{
        // try{
        res.send(
            data.filter((c) =>{
            return c['Country/Region'] === country
            })
        );
        // }catch{
        // console.log(err)
        // }  
        })
    });

    module.exports = router;