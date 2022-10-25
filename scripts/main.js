//Example of adding JavaScript to the HTML
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

//Adding an image changer
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "./assets/bowtie-cat.png") {
        myImage.setAttribute("src", "./assets/dapple-dachsund.jpg");
    } else {
        myImage.setAttribute("src", "./assets/bowtie-cat.png");
    }
};

//Adding a personalized welcome message
let myButton = document.querySelector("button");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = 'Mozilla is cool, ${myName}';
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = 'Mozilla is cool, ${storedName}';
}

myButton.onclick = () => {
    setUserName();
};