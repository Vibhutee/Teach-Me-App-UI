import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { QuestionService } from "src/app/Services/question.service";
import { TestService } from "src/app/Services/test.service";
import { isUndefined } from "util";

@Component({
  selector: "app-take-test",
  templateUrl: "./take-test.component.html",
  styleUrls: ["./take-test.component.scss"],
})
export class TakeTestComponent implements OnInit {
  user;
  testId;
  subjectId;
  subject;

  answer;
  quest;
  loading = false;
  totalQuestions: number;
  remainingQuestions: number = -1;

  submitForm() {
    var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();

    if (isUndefined(this.answer)) this.answer = "NONE";
    console.log(this.answer);

    // submit ans
    this.questionService
      .submitResponse(this.user.userId, this.quest.questionId, this.answer)
      .subscribe((response) => {
        console.log(response);
      });

    if (this.remainingQuestions === 0) {
      window.alert("Your test is successfully submitted!");
      this.router.navigateByUrl("/student");
      return;
    }

    console.log("before submitting: " + this.remainingQuestions);
    this.remainingQuestions--;
    this.fetchNextQuestion();
  }

  endTest() {
    var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();

    if (window.confirm("Do you really want to end the test?"))
      this.router.navigateByUrl("/student");
  }

  fetchNextQuestion() {
    // this.loading = true;
    this.answer = "NONE";
    this.questionService
      .fetchNextQuestion(this.user.userId, this.testId)
      .subscribe((response) => {
        console.log(response);
        // this.loading = false;
        this.quest = Object.assign(response);
        this.totalQuestions = this.quest.test.numberOfQuest;
        if (this.remainingQuestions === -1)
          this.remainingQuestions = this.totalQuestions - 1;
        this.resetRadios();
      });
  }

  resetRadios() {
    // unchecking radio buttons
    for (let i = 1; i <= 4; i++) {
      var radio = document.getElementById("option" + i) as HTMLInputElement;
      if (radio.checked) radio.checked = false;
    }
  }

  stopBubbling(e) {
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private testService: TestService
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));

    this.route.queryParams.subscribe((params) => {
      this.subjectId = params["subjectId"];
      this.testId = params["testId"];
    });

    this.testService
      .markThisTestAttempted(this.user.userId, this.testId)
      .subscribe((response) => {
        console.log(response);
      });

    this.fetchNextQuestion();
  }
}
