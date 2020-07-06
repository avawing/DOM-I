var sec = 0;

function reset(){
    document.getElementById("msTens").textContent= 0;
    document.getElementById("msHundreds").textContent= 0;
    document.getElementById('secondOnes').textContent= 0;
    document.getElementById('secondTens').textContent = 0;
    document.querySelector('.digits').style.color = 'black';
    sec = 0;
}


function pad ( val ) { return val > 9 ? val : "0" + val; }

function timer(){

        let interval = setInterval( 
        function(){
        document.getElementById("msTens").textContent= ++sec%10;
        document.getElementById("msHundreds").textContent= +(pad(parseInt(sec/10))%10);
        document.getElementById('secondOnes').textContent= +(pad(parseInt(sec/100))%10);
        document.getElementById('secondTens').textContent = +(pad(parseInt(sec/1000))%10);
            if(document.getElementById('secondTens').textContent == 1)
            {
                document.querySelector('.digits').style.color = 'red';
                clearInterval(interval)
            }
        }, 10)
    }
              

