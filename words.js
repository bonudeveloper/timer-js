let chanse = document.querySelector(".chanse");
let topildi = document.querySelector(".topildi");

let right =document.querySelector(".right");
let t = "T";
let m = "M";
let a = "A";
let k = "K";
let b = "B";
let right4 = document.querySelector(".right4");
let right1 = document.querySelector(".right1");
let right25 = document.querySelector(".right25");
let right3 = document.querySelector(".right3");

let right6 = document.querySelector(".right6");
let letter4 = document.querySelector(".letter4");
let letter1 = document.querySelector(".letter1");
let letter2 = document.querySelector(".letter2");
let letter3 = document.querySelector(".letter3");
let letter5 = document.querySelector(".letter5");
let letter6 = document.querySelector(".letter6");

let chanses = document.querySelector(".chanse")
let me = ["M", "A", "K", "T", "A", "B"];
let user = ["M", "A", "K", "T", "A", "B", "O", "S"];

// for ( let i=1; i< 8; i++) {
//   if () {
//     start();
//     chanses.innerHTML = "Topdingiz davom etavering";
//   } else {
//     if (i!==7) {
//         let hisob = (7 - i);
//         chanses.innerHTML =
//           "Topolmadingiz sizda yana " + hisob + " urinish qoldi, davom etavering"; 
//     }else {
//         chanses.innerHTML = "urinishlaringiz tugadi";
//        break;
//     }
//   }
// }
// function start() {
//     right25.addEventListener("click", () => {
//       letter2.innerHTML = a;

//       letter5.innerHTML = a;
//     });
//     right1.addEventListener("click", () => {
//       letter1.innerHTML = m;
//     });
//     right3.addEventListener("click", () => {
//       letter3.innerHTML = k;
//     });
//     right4.addEventListener("click", () => {
//       letter4.innerHTML = t;
//     });
//     right6.addEventListener("click", () => {
//       letter6.innerHTML = b;
//     });
// }
let text = document.querySelector("h2")
let no = document.querySelector(".letterNo");
let no1 = document.querySelector(".letterNo1");
no1.addEventListener("click", () => {
  text.innerHTML = " Noto'g'ri";
  text.style.color = "tomato";
  no1.style.backgroundColor="tomato";
  no1.style.border = "none";
});
no.addEventListener("click", () =>{
   text.innerHTML = " Noto'g'ri";
   no.style.backgroundColor = "tomato";
   no.style.border = "none";
   text.style.color = "tomato";
})
right25.addEventListener("click", () => {
    right25.style.backgroundColor = "lightgreen"; 
    text.innerHTML ="Qoyil siz birdaniga 2 ta harfni topdingiz"
    // letter2.innerHTML = a;
    letter2.innerHTML = "A";
    text.style.color = "lightgreen";
    // letter5.innerHTML = a;
    letter5.innerHTML = "A";
    right25.style.border = "none";
    
})
right1.addEventListener("click", () =>{
    letter1.innerHTML = m;
    right1.style.backgroundColor = "lightgreen";
    text.innerHTML = " Topdingiz";
    text.style.color = "lightgreen";
    right1.style.border = "none"; 
})
right3.addEventListener("click", () => {
  letter3.innerHTML = k;
  right3.style.backgroundColor = "lightgreen";
  text.innerHTML = " Topdingiz";
  text.style.color = "lightgreen"; 
  right3.style.border = "none";
});
right4.addEventListener("click", () => {
  letter4.innerHTML = t;
  right4.style.backgroundColor = "lightgreen"; 
  text.innerHTML = " Topdingiz";
  text.style.color = "lightgreen";
  right4.style.border = "none";
});
right6.addEventListener("click", () => {
  letter6.innerHTML = b;
  right6.style.backgroundColor = "lightgreen"; 
  text.innerHTML = "Topdingiz";
  text.style.color = "lightgreen";
  right6.style.border = "none";
});


// function etap() {
//     if ()
// }

// let chanse = document.querySelector(".chanse");
// let topildi = document.querySelector(".topildi");

// let right = document.querySelector(".right");
// let t = "T";
// let m = "M";
// let a = "A";
// let k = "K";
// let b = "B";
// let right4 = document.querySelector(".right4");
// let right1 = document.querySelector(".right1");
// let right25 = document.querySelector(".right25");
// let right3 = document.querySelector(".right3");

// let right6 = document.querySelector(".right6");
// let letter4 = document.querySelector(".letter4");
// let letter1 = document.querySelector(".letter1");
// let letter2 = document.querySelector(".letter2");
// let letter3 = document.querySelector(".letter3");
// let letter5 = document.querySelector(".letter5");
// let letter6 = document.querySelector(".letter6");
// let user = [m, a, k, t, a, b];
// let chanses = document.querySelector(".chanse");

// for (let i = 1; i < 8; i++) {
//   if (JSON.stringify(user) === JSON.stringify(right)) {
//     start();
//     chanses.innerHTML = "Topdingiz davom etavering";
//     break;
//   } else {
//     if (i !== 7) {
//       let hisob = 7 - i;
//       chanses.innerHTML =
//         "Topolmadingiz, sizda yana " +
//         hisob +
//         " urinish qoldi, davom etavering";
//     } else {
//       chanses.innerHTML = "Urinishlaringiz tugadi";
//       break;
//     }
//   }
// }

// function start() {
//   right25.addEventListener("click", () => {
//     letter2.innerHTML = a;
//     letter5.innerHTML = a;
//   });
//   right1.addEventListener("click", () => {
//     letter1.innerHTML = m;
//   });
//   right3.addEventListener("click", () => {
//     letter3.innerHTML = k;
//   });
//   right4.addEventListener("click", () => {
//     letter4.innerHTML = t;
//   });
//   right6.addEventListener("click", () => {
//     letter6.innerHTML = b;
//   });
// }