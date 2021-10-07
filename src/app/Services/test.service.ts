import { Injectable } from "@angular/core";
import { ConstantsService } from "./constants.service";

import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TestService {
  getStudentForTestId(testId: any) {
    return this.http.get(
      ConstantsService.BASE_URL + "/test/students/" + testId
    );
  }
  markThisTestAttempted(userId: any, testId: any) {
    return this.http.get(
      ConstantsService.BASE_URL + "/userTest/insert/" + userId + "/" + testId
    );
  }
  getTestsBySubjectId(subjectId: number) {
    return this.http.get(
      ConstantsService.BASE_URL + "/subject/test/" + subjectId
    );
  }
  isTestAttemted(testId, userId) {
    return this.http.get(
      ConstantsService.BASE_URL + "/students/test/" + testId + "/" + userId
    );
  }

  submitTest(formData: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json"
      })
    };
    return this.http.post(
      ConstantsService.BASE_URL + "/test/insert",
      formData,
      httpOptions
    );
  }

  constructor(private http: HttpClient) {}
}
