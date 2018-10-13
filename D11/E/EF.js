$(function(){

    $('#form').on('submit', function(e){
        e.preventDefault;

        let lngLatData = $('form').serialize();
        
        let oldDay = new Date(new Date().getTime()-86400000);
        let nextDay = new Date(new Date().getTime() + 86400000);

        callApi(new Date(), lngLatData, today =>{
            callApi(oldDay,lngLatData, yester => {
                callApi(nextDay,lngLatData,tomorrow => {
                    let sunriseTime = [new Date(today.sunrise), new Date(tomorrow.sunrise), new Date(yester.sunrise)];
                    let sunsetTime = [new Date(today.sunset), new Date(tomorrow.sunset), new Date(yester.sunset)];

                    let now = new Date();

                    let nextSunrise = sunriseTime.find(function(sunrise){
                        return (sunrise-now) > 0;
                    })

                    let nextSunset = sunsetTime.find(function(sunset){
                        return (sunset-now) > 0;
                    })

                    let pastSunrises = sunrisesTime.filter(function(sunrise){
                        return (now - sunrise) >0
                    }).sort().reverse();

                    let pastSunset = sunsetTime.filter(function(sunset){
                        return (now - sunset) >0
                    }).sort().reverse();

                    let previousSunrise = pastSunrises[0];
                    let previousSunset = pastSunset[0];

                    $('#times').append("the time difference between previous sunruse and now is" + toHHMMSS(now - previousSunrise - 86400000) + '<br/>');
                })
            })
        })
    })

});

function callApi (date,latLng,cb){
    $.ajax({
        type:'GET',
        url: `https://api.sunrise-sunset.org/json?${latLng}&date=${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()}&formatted=0`,
        dataType: 'json',
    }).done(function(response){
        cb(function(response)
    }).fail(function(err){
        console.log('error')
    });
}

function toHHMMSS(milliseconds){
    let seconds = milliseconds/1000;
    let hoursDisplayed = Math.floor(seconds/3600) + "";
    let minuteDisplayed = Math.floor((seconds % 3600)/60)+ "";
    let secondsDisplayed = (seconds%60).toFixed(0) +"";
    return `${hoursDisplayed.padStart(2,'0')}:${minuteDisplayed.padStart(2,'0')}:${secondsDisplayed.padStart(2,'0')}`;
}