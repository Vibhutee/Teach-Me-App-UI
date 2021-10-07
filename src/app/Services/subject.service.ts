import { Injectable } from "@angular/core";
import { ConstantsService } from "./constants.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SubjectService {
  private url = ConstantsService.BASE_URL + "/subject";

  getSubjectBySubjectId(subjectId: any) {
    return this.http.get(this.url + "/" + subjectId);
  }

  getAllSubjects() {
    return this.http.get(this.url + "/all");
  }

  createSubject(subject: string) {
    return this.http.post(this.url + "/insert", { name: subject });
  }

  constructor(private http: HttpClient) {}
}
