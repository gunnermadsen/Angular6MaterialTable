import { BrowserModule }                      from '@angular/platform-browser';
import { NgModule }                           from '@angular/core';
import { CdkTableModule }                     from '@angular/cdk/table';
import { HttpClientModule }                   from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }                         from '@angular/http';
import { BrowserAnimationsModule }            from '@angular/platform-browser/animations';
import { MaterialModule }                     from './material.module';
import { UserTableComponent }                 from './app.component';
import { UserService }                        from './user.service';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  entryComponents: [UserTableComponent],
  declarations: [UserTableComponent],
  bootstrap: [UserTableComponent],
  providers: [UserService]
})
export class AppModule { }
