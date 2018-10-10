var http = new XMLHttpRequest() 



function tellMeNow(value) {

    
    http.open('GET',`https://restcountries.eu/rest/v2/region/${value}`)

    http.onreadystatechange = function () {
        if (http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if (http.status == 200) {
            console.log (http.responseText);
            var a = http.responseText;
            var b = a;
            console.log(b);
            //ProcessData(http.responseText);
        } else {
            console.log('error occured ' + http.status);
        }
    }
    http.send(); 

}

tellMeNow('europe');
/*
function ProcessData(jsontring) {
    var obj = jsonstring.parse();
    var a = obj.length;
    console.log(a);
    
    /*for (var i = 0; i < a ; i++){
        if obj[i].name == 'Germany'{
            console.log(obj[i][capital]);
        }
    }
    

}*/