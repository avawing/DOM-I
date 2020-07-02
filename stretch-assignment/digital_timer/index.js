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

function reset(){
    document.getElementById("msTens").textContent= 0;
    document.getElementById("msHundreds").textContent= 0;
    document.getElementById('secondOnes').textContent= 0;
    document.getElementById('secondTens').textContent = 0;
    document.querySelector('.digits').style.color = 'black';
    clearInterval(sec)
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
                       
        
