let words = ["It is certain ", "It is decidedly so ", "Without a doubt" , "Yes definitely" , "You may rely on it" , "As I see it yes ", "Most likely" , "Outlook good ", "Yes" , "Signs point to yes" , "Reply hazy, try again" , "Ask again later" ," Better not tell you now" , "Cannot predict now" , "Concentrate and ask again "," Don't, count on it" , "My reply is no ", "My sources say no",  "Outlook not so good",  "Very doubtful"];




let btn = document.querySelector(".btn");
let eight = document.querySelector(".eight");
let input = document.querySelector("input")
function str() {

    if (!input.value) {
      alert("Please enter what do you want to do");
      return;
    }

    // words.sort(function(a,b){return 0.5 - Math.random()});
    // document.querySelector(".eight").innerHTML = words[0];
    document.querySelector(".eight").innerHTML =
      words[Math.floor(Math.random() * words.length)];
    document.querySelector(".eight").style.fontSize = "18px";
    eight.classList.add("text");
    input.value="";
    
    function timeUp(){
      eight.innerHTML = "8";
      eight.style.fontSize = "87px";
    }
    setTimeout (timeUp, 3000);
    


}

btn.addEventListener("click", str);



