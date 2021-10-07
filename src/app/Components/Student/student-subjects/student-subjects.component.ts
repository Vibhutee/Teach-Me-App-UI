import { Component, OnInit } from "@angular/core";
import { SubjectService } from "src/app/Services/subject.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-student-subjects",
  templateUrl: "./student-subjects.component.html",
  styleUrls: ["./student-subjects.component.scss"]
})
export class StudentSubjectsComponent implements OnInit {
  subjects: any = [];
  pageTitle = "Subjects";

  getTests(subjectId: any) {
    this.router.navigate(["student/tests"], {
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
