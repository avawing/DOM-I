/*   
  * Counts up to 10 seconds
  * Increments every 10 ms
  * Has digits change to red when it gets to 10 seconds
  * Should not count past 10 seconds
  * 
  * 
  * 
  * <div class="digit" id="msHundreds">-</div>
  * <div class="digit" id="msTens">-</div>
  * <div class="digit" id="secondTens">-</div>
  * <div class="digit" id="secondOnes">-</div>
*/

var sec = 0;



function pad ( val ) { return val > 9 ? val : "0" + val; }







function timer(){

        let interval = setInterval( 
        function(){
        document.getElementById("msTens").innerHTML= ++sec%10;
        document.getElementById("msHundreds").innerHTML= +(pad(parseInt(sec/10))%10);
        document.getElementById('secondOnes').innerHTML= +(pad(parseInt(sec/100))%10);
        document.getElementById('secondTens').innerHTML = +(pad(parseInt(sec/1000))%10);
            if(document.getElementById('secondTens').innerHTML == 1)
            {
                document.querySelector('.digits').style.color = 'red';
                clearInterval(interval)
            }
        }, 10)
    }       
        
