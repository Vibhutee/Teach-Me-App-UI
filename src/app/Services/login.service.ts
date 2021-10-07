import { Injectable } from "@angular/core";
import { ConstantsService } from "./constants.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  systemIn(form, isLogin) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");

    let url;
    if (isLogin) {
      url = "/user/login";
      return this.http.post(ConstantsService.BASE_URL + url, form, {
        headers: headers
      });
    } else {
      url = "/user/register";
      return this.http.post(ConstantsService.BASE_URL + url, form, {
        headers: headers
      });
    }
  }

  constructor(private http: HttpClient) {}
}
