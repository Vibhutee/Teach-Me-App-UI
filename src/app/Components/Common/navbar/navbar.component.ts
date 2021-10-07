import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  user;

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl("/");
  }
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
  }
}
