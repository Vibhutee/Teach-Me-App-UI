import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TutorSubjectsComponent } from "./Components/Tutor/tutor-subjects/tutor-subjects.component";
import { StudentSubjectsComponent } from "./Components/Student/student-subjects/student-subjects.component";
import { PageNotFoundComponent } from "./Components/Common/page-not-found/page-not-found.component";
import { LoginComponent } from "./Components/Common/login/login.component";
import { AboutComponent } from "./Components/Common/about/about.component";
import { UnauthorizedComponent } from "./Components/Common/unauthorized/unauthorized.component";
import { TutorTestsComponent } from "./Components/Tutor/tutor-tests/tutor-tests.component";
import { StudentTestsComponent } from "./Components/Student/student-tests/student-tests.component";
import { UploadTestComponent } from "./Components/Tutor/upload-test/upload-test.component";
import { CreateSubjectComponent } from "./Components/Tutor/create-subject/create-subject.component";
import { TakeTestComponent } from "./Components/Student/take-test/take-test.component";
import { ReportComponent } from "./Components/Common/report/report.component";
import { StudentListComponent } from "./Components/Tutor/student-list/student-list.component";

const routes: Routes = [
  // default route 1
  { path: "", component: LoginComponent },
  // default route 2
  // { path: "", redirectTo: "/tutor/subjects", pathMatch: "full" },

  // tutor
  { path: "tutor", component: TutorSubjectsComponent },
  { path: "tutor/createSubject", component: CreateSubjectComponent },
  { path: "tutor/tests", component: TutorTestsComponent },
  { path: "tutor/tests/uploadTest", component: UploadTestComponent },
  { path: "tutor/tests/studentList", component: StudentListComponent },

  // student
  { path: "student", component: StudentSubjectsComponent },
  { path: "student/tests", component: StudentTestsComponent },
  { path: "student/tests/takeTest", component: TakeTestComponent },

  // misc
  { path: "about", component: AboutComponent },
  { path: "report", component: ReportComponent },

  // unauthorize error page
  { path: "unauthorized", component: UnauthorizedComponent },

  // page not found route ALWAYS at last
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
