var http = new XMLHttpRequest();

http.open('GET', 'data.json');

function UpdateMyPage (mydata) {
    var myheader = document.getElementById("test");
    myheader.innerHTML = mydata;
}


http.onreadystatechange = function() {
    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        console.log(http.responseText);
        UpdateMyPage(http.responseText);
    } else {
        console.log('error occurred' + http.status);
    }

}

http.send();
