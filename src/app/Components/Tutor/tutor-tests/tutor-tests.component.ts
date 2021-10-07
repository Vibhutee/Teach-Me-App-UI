import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TestService } from "src/app/Services/test.service";

@Component({
  selector: "app-tutor-tests",
  templateUrl: "./tutor-tests.component.html",
  styleUrls: ["./tutor-tests.component.scss"]
})
export class TutorTestsComponent implements OnInit {
  pageTitle = "Tests";
  subject;
  subjectId;

  goToStudentList(testId: number, subjectId: number) {
    this.router.navigate(["tutor/tests/studentList"], {
      queryParams: {
        testId: testId,
        subjectId: subjectId
      }
    });
  }

  constructor(
    private route: ActivatedRoute,
    private testService: TestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.subjectId = params["subjectId"];
    });

    this.testService.getTestsBySubjectId(this.subjectId).subscribe(response => {
      this.subject = response;
    });
  }
}
