 function loadDoc(url, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        try{
          var data = JSON.parse(xhttp.responseText);
          
        }catch(err) {
          console.log(err);
          return;
      }
      }
      callback(data);
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }