let http = new XMLHttpRequest() {


}


function tellMeNow(endpoint, value, callback) {

    let http = new XMLHttpRequest;
    http.open('GET',`https://restcountries.eu/rest/v2/${region}/${{region}}`)

    http.onreadystatechange = function () {
        if (http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if (http.status ==200) {
            callback(http.responseText);
        } else {
            console.log('error occured' + http.status);
        }
    }
    http.send();

}

tellMeNow('region','europe',function(callback){
    console.log(JSON.parse(callback))
})