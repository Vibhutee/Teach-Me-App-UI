import { Component, OnInit } from "@angular/core";
import { SubjectService } from "src/app/Services/subject.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-tutor-subjects",
  templateUrl: "./tutor-subjects.component.html",
  styleUrls: ["./tutor-subjects.component.scss"]
})
export class TutorSubjectsComponent implements OnInit {
  subjects: any = [];
  pageTitle = "Subjects";

  getTests(subjectId: any) {
    this.router.navigate(["tutor/tests"], {
      queryParams: {
        subjectId: subjectId
      }
    });
  }

  constructor(private subjectService: SubjectService, private router: Router) {}

  ngOnInit(): void {
    this.subjectService.getAllSubjects().subscribe(response => {
      console.log(response);
      this.subjects = response;
    });
  }
}
