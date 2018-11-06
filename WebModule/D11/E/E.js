$(function(){

    
    
    
    $('#form').submit(function(input){
        
        var now = new Date();
        input.preventDefault();
        let long=$('input[name=lng]').val();
        let lat=$('input[name=lat]').val();

        $.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&date=${Date.prototype.getFullYear}-${Date.prototype.getMonth}-${Date.prototype.getDay - 1}`).done(function(data){
            var yestSunrise = data.results.sunrise;
            var yestSunset = data.results.sunset;
        }).fail()(function(){
            console.log(`Unable to acquire date`);
        })
        
        $.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&date=${Date.prototype.getFullYear}-${Date.prototype.getMonth}-${Date.prototype.getDay + 1}`).done(function(data){
            var tomSunrise = data.results.sunrise;
            var tomSunset = data.results.sunset;
        }).fail()(function(){
            console.log(`Unable to acquire date`);
        })
        

        $.ajax(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&formatted=0`).done(function(data){
        
        console.log(data);
        
        let sunrise = new Date(data.results.sunrise)
        let sunset = new Date(data.results.sunset)

        $('#result').append(`<p>Sunrise is at: ${sunrise}</p>`);
        $('#result').append(`<p>Sunset is at ${sunset}</p>`);
        })
    })
})