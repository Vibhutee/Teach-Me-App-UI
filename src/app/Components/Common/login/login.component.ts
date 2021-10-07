import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { ConstantsService } from "src/app/Services/constants.service";
import { LoginService } from "src/app/Services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  showLoginForm;
  user;
  loginForm;
  errorMessage = "";
  showErrorMessage = false;
  loginFormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
    // userType: new FormControl("")
  });
  registerForm;
  registerFormGroup = new FormGroup({
    email: new FormControl(""),
    name: new FormControl(""),
    contact: new FormControl(""),
    password: new FormControl(""),
    userType: new FormControl(""),
  });

  formTitle;

  submitForm(form) {
    console.log(form.value);

    if (
      this.showLoginForm &&
      (form.value.email === "" || form.value.password === "")
    ) {
      // for login form
      this.errorMessage = "Email id or Password is missing";
      this.showErrorMessage = true;
    } else if (
      !this.showLoginForm &&
      (form.value.name === "" ||
        form.value.email === "" ||
        form.value.contact === "" ||
        form.value.password === "" ||
        form.value.userType === "")
    ) {
      // for register form
      this.errorMessage = "";
      if (form.value.name === "") {
        this.errorMessage = "Please add name";
        this.showErrorMessage = true;
      }
      if (form.value.email === "") {
        if (this.errorMessage !== "") this.errorMessage += ", ";
        else this.errorMessage = "Please add ";
        this.errorMessage += "email";
        this.showErrorMessage = true;
      }
      if (form.value.contact === "") {
        if (this.errorMessage !== "") this.errorMessage += ", ";
        else this.errorMessage = "Please add ";
        this.errorMessage += "contact";
        this.showErrorMessage = true;
      }
      if (form.value.password === "") {
        if (this.errorMessage !== "") this.errorMessage += ", ";
        else this.errorMessage = "Please add ";
        this.errorMessage += "password";
        this.showErrorMessage = true;
      }
      if (form.value.userType === "") {
        if (this.errorMessage !== "") this.errorMessage += ", ";
        else this.errorMessage = "Please add ";
        this.errorMessage += "user type";
        this.showErrorMessage = true;
      }
    } else {
      // valid form
      this.loginService
        .systemIn(form.value, this.showLoginForm)
        .subscribe((response) => {
          console.log(response);

          if (response && response !== null) {
            this.user = Object.assign(response);
            localStorage.setItem("user", JSON.stringify(this.user));

            if (this.user.userType === "STUDENT")
              this.router.navigateByUrl("/student");
            if (this.user.userType === "TUTOR")
              this.router.navigateByUrl("/tutor");
          } else {
            this.errorMessage = "No user found, please try again";
            this.showErrorMessage = true;
          }
        });
    }
  }

  switchForm() {
    this.showLoginForm = !this.showLoginForm;
    if (this.showLoginForm) this.formTitle = "Login";
    else this.formTitle = "Register";
    this.errorMessage = "";
    this.showErrorMessage = false;
  }

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.showLoginForm = true;
    this.formTitle = "Login";
  }
}
