const loginForm = document.getElementById("loginForm");

const studentId = document.getElementById("studentId");
const password = document.getElementById("password");

const studentIdError = document.getElementById("studentIdError");
const passwordError = document.getElementById("passwordError");

const togglePassword = document.getElementById("togglePassword");

const loginButton = document.getElementById("loginButton");
const buttonText = document.getElementById("buttonText");

const formMessage = document.getElementById("formMessage");


// =========================
// SHOW / HIDE PASSWORD
// =========================

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.textContent = "🙈";

    } else {

        password.type = "password";

        togglePassword.textContent = "👁";
    }

});


// =========================
// LOGIN FORM
// =========================

loginForm.addEventListener("submit", (event) => {

    event.preventDefault();


    // Clear previous errors

    studentIdError.textContent = "";
    passwordError.textContent = "";

    formMessage.textContent = "";
    formMessage.className = "form-message";


    let isValid = true;


    // =========================
    // STUDENT ID VALIDATION
    // =========================

    if (studentId.value.trim() === "") {

        studentIdError.textContent =
            "لطفاً شماره دانشجویی را وارد کنید.";

        isValid = false;

    } else if (studentId.value.trim().length < 5) {

        studentIdError.textContent =
            "شماره دانشجویی وارد شده معتبر نیست.";

        isValid = false;
    }


    // =========================
    // PASSWORD VALIDATION
    // =========================

    if (password.value.trim() === "") {

        passwordError.textContent =
            "لطفاً رمز عبور را وارد کنید.";

        isValid = false;

    } else if (password.value.length < 4) {

        passwordError.textContent =
            "رمز عبور باید حداقل ۴ کاراکتر باشد.";

        isValid = false;
    }


    // =========================
    // STOP IF INVALID
    // =========================

    if (!isValid) {
        return;
    }


    // =========================
    // LOGIN LOADING
    // =========================

    loginButton.classList.add("loading");

    buttonText.textContent = "در حال ورود...";


    // Fake request
    // در پروژه واقعی این قسمت باید
    // به Backend متصل شود.

    setTimeout(() => {

        loginButton.classList.remove("loading");

        buttonText.textContent = "ورود به سامانه";


        formMessage.textContent =
            "اطلاعات با موفقیت بررسی شد.";

        formMessage.classList.add("success");


    }, 1500);

});