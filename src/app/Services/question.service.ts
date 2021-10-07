import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConstantsService } from "./constants.service";

@Injectable({
  providedIn: "root"
})
export class QuestionService {
  fetchReport(userId: any, testId: any) {
    return this.http.get(
      ConstantsService.BASE_URL + "/response/" + userId + "/" + testId
    );
  }
  submitResponse(userId: any, questionId: any, answer: any) {
    return this.http.get(
      ConstantsService.BASE_URL +
        "/response/submitResponse/" +
        answer +
        "/" +
        userId +
        "/" +
        questionId
    );
  }
  fetchNextQuestion(userId: any, testId: any) {
    return this.http.get(
      ConstantsService.BASE_URL + "/takeTest/" + testId + "/" + userId
    );
  }

  constructor(private http: HttpClient) {}
}
