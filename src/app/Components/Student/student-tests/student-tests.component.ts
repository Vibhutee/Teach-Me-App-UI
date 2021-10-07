import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { TestService } from "src/app/Services/test.service";

@Component({
  selector: "app-student-tests",
  templateUrl: "./student-tests.component.html",
  styleUrls: ["./student-tests.component.scss"]
})
export class StudentTestsComponent implements OnInit {
  subject;
  subjectId;
  user;
  pageTitle = "Tests";

  showReportOrTakeTest(testId: number) {
    this.testService
      .isTestAttemted(testId, this.user.userId)
      .subscribe(response => {
        console.log(response);
        if (response === false) {
          this.router.navigate(["student/tests/takeTest"], {
            queryParams: {
              testId: testId,
              subjectId: this.subjectId
            }
          });
        } else if (response === true) {
          this.router.navigate(["/report"], {
            queryParams: {
              testId: testId
            }
          });
        }
      });
  }

  constructor(
    private route: ActivatedRoute,
    private testService: TestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));

    this.route.queryParams.subscribe(params => {
      this.subjectId = params["subjectId"];
    });

    this.testService.getTestsBySubjectId(this.subjectId).subscribe(response => {
      this.subject = response;
      this.subject.testList.forEach(element => {
        this.testService
          .isTestAttemted(element.testId, this.user.userId)
          .subscribe(response => {
            if (response) element.attempted = true;
            else element.attempted = false;
          });
      });
    });
  }
}
