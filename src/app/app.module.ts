import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookcategoryComponent } from './bookcategory/bookcategory.component';
import { BookCategoryService } from "./bookcategory/bookcategory.service";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    BookcategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [BookCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
