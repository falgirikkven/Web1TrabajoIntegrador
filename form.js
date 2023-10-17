// html stuff
const frm = document.getElementById("frm");
const btnSubmit = document.getElementById("frm-btn");
const errDivs = document.getElementsByClassName("frm-invalid-feedback");
const formResultDiv = document.querySelector(".form-result");

// inputs
const f_name = document.getElementById("frm-name");
const f_age = document.getElementById("frm-age");
const f_email = document.getElementById("frm-email");
const f_dropdown = document.getElementById("frm-dropdown");
const f_radio = document.getElementsByName("frm-choice");
const f_checkbox = document.getElementsByName("frm-checkin");

// validation variables
const mailRegex = /^\w+@\w+(\.\w{2,4})+$/;
const nameMaxLenght = 64;
const emailMaxLenght = 64;

function submitForm() {
    // read values from inputs
    let name = f_name.value.trim();
    let age = parseInt(f_age.value);
    let email = f_email.value.trim();
    let dropdown = f_dropdown.value;
    // let checkboxRes = "";
    // for (let i = 0; i < f_checkbox.length; i++) {
    //     if (f_checkbox[i].checked) checkboxRes += f_checkbox[i].value;
    // }

    // hide previous result
    formResultDiv.classList.add("hide");
    formResultDiv.innerHTML = "";

    // clean error fields
    for (let v of errDivs) {
        v.classList.add("hide");
    }

    // check for errors
    let hasError = false;
    if (name == "" || name.length > nameMaxLenght) {
        hasError = true;
        f_name.nextElementSibling.classList.remove("hide");
    }
    if (
        email == "" ||
        email.length > emailMaxLenght ||
        !mailRegex.test(email)
    ) {
        hasError = true;
        f_email.nextElementSibling.classList.remove("hide");
    }
    if (isNaN(age) || age < 1 || age > 99) {
        hasError = true;
        f_age.nextElementSibling.classList.remove("hide");
    }
    if (dropdown == "" || dropdown == 0) {
        hasError = true;
        f_dropdown.nextElementSibling.classList.remove("hide");
    }
    if (hasError) return; // skip remaining actions

    let resElem;

    resElem = document.createElement("p");
    resElem.innerText = `Nombre: ${name}`;
    formResultDiv.appendChild(resElem);

    resElem = document.createElement("p");
    resElem.innerText = `Email: ${email}`;
    formResultDiv.appendChild(resElem);

    resElem = document.createElement("p");
    resElem.innerText = `Edad: ${age.toString()}`;
    formResultDiv.appendChild(resElem);

    for (let i = 0; i < f_radio.length; i++) {
        if (f_radio[i].checked) {
            resElem = document.createElement("p");
            resElem.innerText = `Radio: ${f_radio[i].value}`;
            formResultDiv.appendChild(resElem);
            break;
        }
    }

    let checkboxRes = "";
    for (let i = 0; i < f_checkbox.length; i++) {
        if (f_checkbox[i].checked) {
            resElem = document.createElement("p");
            resElem.innerText = `CheckBox: ${f_checkbox[i].value}`;
            formResultDiv.appendChild(resElem);
        }
    }

    formResultDiv.classList.remove("hide");
}

btnSubmit.addEventListener("click", submitForm);
