$(document).ready(function (){
    
    /* get the number */

    $("#numMain").keydown(function (event) {
        if (event.which === 13) {
            var numberGuess = +document.getElementById('numMain').value;
            console.log("You entered: " + numberGuess);

            /* check to see if it's a number */

            var checkNum = $("#numMain").val();
            
            /* check to see if they added a number */
            
            if(checkNum == 0) {
                console.log(checkNum);
                alert("You need to enter a number!");
            }
            else {
                if(jQuery.isNumeric(checkNum)){
                    console.log("Your number is: "+ numberGuess);
                    
                    /* check the length of the entered number */

                    if(checkNum > 100) {
                        alert("Your number is too big!");
                        $("#numMain").val("");
                    } else {
                        
                        /* call fizz buzz function */

                        fizzbuzz(numberGuess);

                    }
                }
                else {
                    alert("That's not a number!");
                }
            }      
            
        }
    });
});

/* fizzbuzz function */

function fizzbuzz(n) {
    for ( var i = 1; i <= n; i++ ) {
        if (i % 5 == 0 && i % 3 == 0) {
            $(".numbers").append("FizzBuzz" + "<p></p>");
        } else if ( i % 3 == 0 ) {
            $(".numbers").append("Fizz"  + "<p></p>");
        } else if (i % 5 == 0) {
            $(".numbers").append("Buzz"  + "<p></p>");
        } else {
            $(".numbers").append(i + "<p></p>");                        
        }
    }
}