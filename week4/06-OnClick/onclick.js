var count = 0;

var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

    
    incrementEl.addEventListener("click", function() {
        count ++;
        countEl.textContent = count;
    });

        
        
    decrementEl.addEventListener("click", function() { 
        count --;
        countEl.textContent = count;
    });
            