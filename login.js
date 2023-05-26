
// home
let ham = document.getElementById('bar');
let navbar = document.querySelector('.navLink');




ham.onclick = () => {
  ham.classList.toggle('fa-close');
  navbar.classList.toggle('open');
}

var typingEffect = new Typed(".multiText", {
  strings: ["Mutual Funds", "Fixed Deposits", "Gold"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
})



// ssee




const context = document.getElementById("data-set").getContext("2d");
let line = new Chart(context, {});
//Values from the form
const intialAmount = document.getElementById("initialamount");
const years = document.getElementById("years");
const rates = document.getElementById("rates");
const compound = document.getElementById("compound");




//Messge
const message = document.getElementById("message");




//The calculate button
const button = document.querySelector(".input-group button");
//Attach an event listener
const res = document.querySelector(".result");
button.addEventListener("click", calculateGrowth);






const data = [];
const labels = [];




function calculateGrowth(e) {
  res.classList.add('results');
  e.preventDefault();
  data.length = 0;
  labels.length = 0;
  let growth = 0;
  try {
    const initial = parseInt(intialAmount.value);
    const period = parseInt(years.value);
    const interest = parseInt(rates.value);
    const comp = parseInt(compound.value);




    for (let i = 1; i <= period; i++) {
      const final = initial * Math.pow(1 + ((interest / 100) / comp), comp * i);
      data.push(toDecimal(final, 2));
      labels.push("Year " + i);
      growth = toDecimal(final, 2);
    }
    //
    message.innerText = `You will have this amount ${growth} after ${period} years`;
    drawGraph();
  } catch (error) {
    console.error(error);
  }
}




function drawGraph() {
  line.destroy();
  line = new Chart(context, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: "compound",
        data,
        fill: true,
        backgroundColor: "rgba(12, 141, 0, 0.7)",
        borderWidth: 3
      }]
    }
  });
}




function toDecimal(value, decimals) {
  return +value.toFixed(decimals);
}



// login

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});






