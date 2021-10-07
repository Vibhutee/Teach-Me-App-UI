import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./Components/Common/navbar/navbar.component";
import { FooterComponent } from "./Components/Common/footer/footer.component";
import { TutorSubjectsComponent } from "./Components/Tutor/tutor-subjects/tutor-subjects.component";
import { StudentSubjectsComponent } from "./Components/Student/student-subjects/student-subjects.component";
import { LoaderComponent } from "./Components/Common/loader/loader.component";
import { PageNotFoundComponent } from "./Components/Common/page-not-found/page-not-found.component";
import { LoginComponent } from "./Components/Common/login/login.component";
import { UnauthorizedComponent } from "./Components/Common/unauthorized/unauthorized.component";
import { AboutComponent } from "./Components/Common/about/about.component";
import { TutorTestsComponent } from "./Components/Tutor/tutor-tests/tutor-tests.component";
import { StudentTestsComponent } from "./Components/Student/student-tests/student-tests.component";
import { UploadTestComponent } from "./Components/Tutor/upload-test/upload-test.component";
import { CreateSubjectComponent } from "./Components/Tutor/create-subject/create-subject.component";
import { TakeTestComponent } from "./Components/Student/take-test/take-test.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { ReportComponent } from './Components/Common/report/report.component';
import { StudentListComponent } from './Components/Tutor/student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TutorSubjectsComponent,
    StudentSubjectsComponent,
    LoaderComponent,
    PageNotFoundComponent,
    LoginComponent,
    UnauthorizedComponent,
    AboutComponent,
    TutorTestsComponent,
    StudentTestsComponent,
    UploadTestComponent,
    CreateSubjectComponent,
    TakeTestComponent,
    ReportComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
