var myRate;         //rate as entered in the input form
var myDistance;     //distance as entered in the input form
var result;         //rate * distance

/*
   tells the browser to run this function when it loads up
*/

window.onload = function () {


    /* event listener for rate */
    /* change tells eventLister to listen for some change in our input form */
    /* displayRate is the function whose value we will be changing */

    myRate = document.getElementById("rate").addEventListener('change', displayRate);

    /* function displayRate()
      @param none
      @return none
    */
    function displayRate(){

       myRate = this.value;
       result = myRate * myDistance;

       if( isNaN( result ) ){
         return document.getElementById('output').innerHTML = "Waiting...";
       }
       document.getElementById('output').innerHTML= result;
    }



    /* event listener for distance */
    /* change tells eventLister to listance for some change in our input form */
    /* displayDistance is the function whose value we will be changing */

    myDistance = document.getElementById("distance").addEventListener('change', displayDistance);

    /* function displayRate()
      @param none
      @return none
    */
    function displayDistance(){

       myDistance = this.value;
       result = myRate * myDistance;

       if( isNaN( result ) ){
         return document.getElementById('output').innerHTML = "Waiting...";
       }
       document.getElementById('output').innerHTML= result;
    }




}
