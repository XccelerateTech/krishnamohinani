var deck =[];
for (var i=0;i<13;i++){

    var cardH = {
        suit: 'hearts',
        value: '',
    
    }
    if(i=0){
            cardH.value='Ace';
        } else if(0<i<10){
            cardH.value=`${i}`;
        } else if (i=10){
            cardH.value='Jack';
        } else if (i=11){
            cardH.value='Queen';
        } else {
            cardH.value='King';
        }
    }
        var cardS = {
            suit: 'spades',
            value: '',
        }

        if(i=0){
            cardH.value='Ace';
        } else if(0<i<10){
            cardH.value=`${i}`;
        } else if (i=10){
            cardH.value='Jack';
        } else if (i=11){
            cardH.value='Queen';
        } else {
            cardH.value='King';
        }

    
