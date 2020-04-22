var date1 = new Date(); 
const date62 = new Date("10/03/2029"); 
const date65 = new Date("10/03/2034")
  
// To calculate the time difference of two dates 
var Difference_In_Time_62 = date62.getTime() - date1.getTime();
var Difference_In_Time_65 = date65.getTime() - date1.getTime();  
  
// To calculate the no. of days between two dates 
var Difference_In_Days_62 = Math.ceil(Difference_In_Time_62 / (1000 * 3600 * 24)); 
var Difference_In_Days_65 = Math.ceil(Difference_In_Time_65 / (1000 * 3600 * 24));  
//To display the final no. of days (result) 

document.querySelector('#retire-62').textContent=Difference_In_Days_62
document.querySelector('#retire-65').textContent=Difference_In_Days_65
//document.write("Retire at 62: " + Difference_In_Days_62 + " days"); 
//document.write("Retire at 65: " + Difference_In_Days_65 + " days");