let button = document.querySelector(".button");
let buttonText = document.querySelector(".tick");

// var display = document.getElementsByClassName(".display");
// display.innerHTML;
let apiurl = "https://api.adviceslip.com/advice";
let display = document.querySelector(".display");

const tickMark =
  '<svg width="58" height="45" viewBox="0 0 58 45" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fill-rule="nonzero" d="M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65"/></svg>';

buttonText.innerHTML = "Next";

const apicall = () => {
  fetch(apiurl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Api request failed");
      }
    })
    .then((data) => {
      display.innerHTML = data.slip.advice;
      //   console.log(data.slip.advice);

      //   display.innerHTML = data.slip.advice;
    })
    .catch((error) => {
      console.log("There is some error" + error);
    });
};
apicall();
button.addEventListener("click", function () {
  if (buttonText.innerHTML !== "Next") {
    buttonText.innerHTML = "Next";
} else if (buttonText.innerHTML === "Next") {
  // buttonText.innerHTML = tickMark;
  apicall();
}
this.classList.toggle("button__circle");
});
// console.log("hello");
// apicall();

