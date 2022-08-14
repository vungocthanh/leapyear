function myFunc(){
   var numYear = document.getElementById('year').value;
   if ( numYear % 4 == 0 && numYear % 100 != 0){
      numYear = " Leap Year";
   } else if (numYear % 100 == 0 && numYear % 400 == 0){
      numYear = "Leap year";
   }else{
      numYear = " No leap year";
   }
   document.getElementById('exp').innerHTML = numYear;
}