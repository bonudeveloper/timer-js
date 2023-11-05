// let userDay = prompt("O'zingiz istagan kun kititing");
// let userHour = prompt("O'zingiz  istagan vaqt kiriting");
// let userMinute = prompt("O'zingiz istagan daqiqa kiriting");
// let userSecond = prompt("O'zingiz istagan soniya kiriting");
 
// function countDown() {
//     let now = Date.now();
//     let day = new Date( userDay, userHour, userMinute)
     
// }

// Set the date we're counting down to

//  let userDay = parseInt(prompt("O'zingiz kutayotgan kun kititing (09)"));
//  let userMonth = parseInt(prompt("O'zingiz kutayotgan oyni kititing (09)"));
//  let userYear = parseInt(prompt("O'zingiz kutayotgan yilni kiriting"));

//  function countDown() {
   
//  }




//  let heading = document.querySelector("h1");
//  function countDown() {
//     let kutilgan =new Date(userDay, userMonth-1, userYear).getTime();
//     let now = new Date();
//     let kiritilgan = (kutilgan - now);
//     let seconds = Math.abs((kutilgan - now) / 1000);
//     let day = Math.floor(seconds / 3600 / 24);
//     let hours = Math.floor(seconds / 3600) % 24;
//     let min = Math.floor(seconds / 60) % 60;
//     let sec = Math.floor(seconds) %60;
    
//     heading.innerHTML ="Siz kutgan kunga " + day + " kun" + hours + " soat" + min + " daqiqa" + sec + " soniya bor"
//  }
//  setInterval(countDown, 1000);


 // let kiritilgan = new Date(userDay, userMonth - 1, userYear).getTime();
    // let now = Date.now();
    // let oraliq =Math.abs(kiritilgan-now);
    // let days = parseInt(oraliq/(1000 * 60 * 60*24));
    
    // let hours =parseInt((oraliq % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    // let minutes = parseInt((oraliq % (1000 * 60 * 60)) / (1000 * 60));
    // let seconds = parseInt((oraliq % (1000*60)) / 1000)
 
  let daysEl = document.querySelector("#days");
  let hoursEl = document.querySelector("#hours");
  let minEl = document.querySelector("#mins");
  let secondEl = document.querySelector("#seconds");
  let newYears = "1 Jan 2024";
//   let user = prompt("Ozingiz istagan kuni kiritishingiz mumkin (1 Jan 2024) ko'rinishida")

  function countDown() {
   let newYearsDate = new Date(newYears);
   let now = new Date();

   let totalSeconds = (newYearsDate - now)/1000;
   let days = Math.floor(totalSeconds/3600/24);
   let hours = Math.floor(totalSeconds/3600) % 24;
   let mins = Math.floor(totalSeconds / 60) % 60;
   let seconds = Math.floor(totalSeconds) %60;
   daysEl.innerHTML = days;
   hoursEl.innerHTML = format(hours);
   minEl.innerHTML = format(mins);
   secondEl.innerHTML = format(seconds);
   //  hoursEl.innerHTML = hours;
   //  minEl.innerHTML = mins;
   //  secondEl.innerHTML = seconds;

  }

  function format(time) {
   return time < 10 ? "0" + time : time
  }
  countDown();
  setInterval(countDown, 1000);
