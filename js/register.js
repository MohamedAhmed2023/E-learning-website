// reference
const registerBox = document.querySelector(".register");
const loginBox = document.querySelector(".login");
const registerName = document.querySelector("#first-name");
const registerEmail = document.querySelector("#email");
const registerPassword = document.querySelector("#password");
const submitBtn = document.querySelector("#confirmBtn");
const inputs = document.querySelectorAll("input");
const userNameAlert = document.querySelector(".user-name-alert");
const userEmailAlert = document.querySelector(".user-email-alert");
const userPassAlert = document.querySelector(".user-pass-alert");
const requireInfo = document.querySelector(".requireInfo");
const loginBtn = document.querySelector(".login-btn");
const loginBtnSubmit = document.querySelector(".submit-login");
const invalidData = document.querySelector(".wrong-data");
let infoList = [];

if (JSON.parse(localStorage.getItem("data")))
  infoList = JSON.parse(localStorage.getItem("data"));
// Register
const signUp = function () {
  if (
    registerEmail.value == "" ||
    registerName.value == "" ||
    registerPassword.value == ""
  ) {
    requireInfo.classList.remove("hide");
    return false;
  } else {
    if (validateInputs() === true) {
      const user = {
        name: registerName.value,
        email: registerEmail.value,
        pass: registerPassword.value,
      };

      if (
        registerEmail.value == "" ||
        registerName.value == "" ||
        registerPassword.value == ""
      ) {
        requireInfo.classList.remove("hide");
        return false;
      }

      requireInfo.classList.add("hide");
      infoList.push(user);
      console.log(infoList);
      localStorage.setItem("data", JSON.stringify(infoList));
      resetForm();
      registerBox.classList.add("hide");
      loginBox.classList.remove("hide");
      return true;
    }
  }
};

// Empty inputs
const resetForm = function () {
  inputs.forEach((inp) => (inp.value = ""));
};

// Validate name
const validateName = function () {
  const regex = /^[A-Z][a-z0-9]{2}/;
  if (regex.test(registerName.value) === true && registerName.value != "") {
    userNameAlert.classList.add("hide");
    return true;
  } else {
    userNameAlert.classList.remove("hide");
    return false;
  }
};

// Validate Emaill
const validateEmail = function () {
  const regex = /^[a-zA-Z0-9]{5,}@(gmail|yahoo).com$/;
  if (regex.test(registerEmail.value) === true && registerEmail.value != "") {
    userEmailAlert.classList.add("hide");
    return true;
  } else {
    userEmailAlert.classList.remove("hide");
    return false;
  }
};

// Validate Password
const validatePassword = function () {
  const regex = /^.{5,15}$/;
  if (
    regex.test(registerPassword.value) === true &&
    registerPassword.value != ""
  ) {
    userPassAlert.classList.add("hide");
    return true;
  } else {
    userPassAlert.classList.remove("hide");
    return false;
  }
};

//group all validets in 1 fun
const validateInputs = function () {
  validateName();
  validateEmail();
  validatePassword();
  if (
    validateName() == true &&
    validateEmail() == true &&
    validatePassword() == true
  ) {
    return true;
  } else {
    return false;
  }
};

// login
const signIn = function () {
  const loginEmail = document.getElementById("login-email");
  const loginPassword = document.getElementById("login-password");
  const requireInfo2 = document.querySelector(".requireInfo2");
  if (loginEmail.value == "" || loginPassword.value == "") {
    requireInfo2.classList.remove("hide");
    return false;
  } else {
    requireInfo2.classList.add("hide");
    for (let i = 0; i < infoList.length; i++) {
      if (
        infoList[i].email === loginEmail.value &&
        infoList[i].pass === loginPassword.value
      ) {
        loginBtn.setAttribute("href", "index.html");
        invalidData.classList.add("hide");
      } else {
        invalidData.classList.remove("hide");
      }
    }
  }
};

// handlers
submitBtn.addEventListener("click", signUp);
loginBtnSubmit.addEventListener("click", signIn);
document.querySelector(".goToRegister").addEventListener("click", function () {
  registerBox.classList.add("hide");
  loginBox.classList.remove("hide");
});

//

// // Put this in your login function, just before the redirect
// var sessionTimeout = 1; //hours
// var loginDuration = new Date();
// loginDuration.setTime(loginDuration.getTime() + sessionTimeout * 60 * 1000);
// document.cookie =
//   "CrewCentreSession=Valid; " + loginDuration.toGMTString() + "register.html";

// // Put this at the top of your Crew Centre page
// if (document.cookie.indexOf("CrewCentreSession=Valid") == -1) {
//   location.href = "courses.html";
// }
