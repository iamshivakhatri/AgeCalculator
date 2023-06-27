/**
 * when we get the date by using
 * .getDate(); it gets the date in the utc
 * it converts the date in the UTC(Coordinated Universal Time) to the timezone you are using the laptop
 */


 let userInput = document.getElementById("date");
 let result = document.getElementById("result");
 userInput.max = new Date().toISOString().split("T")[0];
 
 
 function calculateAge(){
     let birthDate = new Date(userInput.value);
     let d1 = birthDate.getUTCDate();
     let m1 = birthDate.getUTCMonth() +1;
     let y1 = birthDate.getUTCFullYear();
     console.log("Input Values:", d1, m1, y1);
 
 
     let todayDate = new Date();
     let d2 = todayDate.getDate();
     let m2 = todayDate.getMonth()+1;
     let y2 = todayDate.getFullYear();
 
     let min2 = todayDate.getMinutes();
     let h2 = todayDate.getHours();
     let s2 = todayDate.getSeconds();
 
     
 
     let d3, m3, y3;
     y3 = y2 - y1; 
 
     if(m2 >= m1){
         m3 = m2- m1;
     }else{
         y3--;
         m3 = 12 + m2 - m1;
     }
 
     if(d2 >= d1){
         d3 = d2 - d1;
     }else{
         m3--;
         d3 = getlastDay(y1,m1) + d2 -d1; //how much short is the day to be 30  if birthday is on 10 and we are at 9 so it i one more day for birthday
                             // so 30 - 1 and to get 1 we do d2 -d1
 
                             //using getlastDay will help us track of extra days or less days because
                             // we think 30 days a month so do claculation so if birth  month was 28 like may 28 and at june 28 we think it as
                             //30 days but it is not the case we will have  to find the month last day of birth month 
                             //if birthday month has 31 days and we are 10 more days to get birthdate then we subract 31 - 10 because we will have 21 days already
                             //because there was one day extra on birthday month.
     } 
     if(m3<0){
         y3--;
         m3 = 11;
     }
 
     if(m3 == 0 && d3 == 0){
         result.innerHTML  = `Congratulations, Happy birthday to you..
         <br> you are ${y3} years old.`;
         console.log("Happy birthday to you");
     }else{
         result.innerHTML = `You are ${y3} years, ${m3} months, ${d3} days, ${h2} hours, ${min2} minutes, and ${s2} seconds old.`
     }
 
     function updateSeconds() {
         let now = new Date();
         let h2 = now.getHours();
         let min2 = now.getMinutes();
         let s2 = now.getSeconds();
         result.innerHTML = `You are ${y3} years, ${m3} months, ${d3} days, ${h2} hours, ${min2} minutes, and ${s2} seconds old.`
       }
       
       // Update the seconds every second
       setInterval(updateSeconds, 1000);
 
 }
 
 function getlastDay(year,month){
     return new Date(year,month,0).getDate();
 }
 
 