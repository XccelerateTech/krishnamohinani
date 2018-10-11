$(function(){

    $('#form').submit(function(input){
        input.preventDefault();

        let long=$('input[name=lng]').val();
        let lat=$('input[name=lat]').val();

        $.ajax(`https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&formatted=0`).done(function(data){

        console.log(data);
        
        let sunrise = new Date(data.results.sunrise)
        let sunset = new Date(data.results.sunset)

        $('#times').append(`<p>Sunrise is at: `)
        })
    })
})