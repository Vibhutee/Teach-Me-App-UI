import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ConstantsService {
  public static BASE_URL = "http://localhost:8080";
  constructor() {}
}
