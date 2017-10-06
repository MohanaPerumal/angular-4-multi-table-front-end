import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { BookCategoryService } from "./bookcategory.service";

@Component({
  selector: 'app-bookcategory',
  templateUrl: './bookcategory.component.html',
  styleUrls: ['./bookcategory.component.css']
})
export class BookcategoryComponent implements OnInit {
  public myForm: FormGroup;
  statusCode: number;

  constructor(private _fb: FormBuilder,
  private bookCategoryService:BookCategoryService
  ) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      id: [0],
      name: ['', [Validators.required, Validators.minLength(5)]],
      book: this._fb.array([
        this.initBook(),
      ])
    });
  }
  initBook() {
    return this._fb.group({
      id: [0],
      bookname: ['']
    });
  }

  addBook() {
    const control = <FormArray>this.myForm.controls['book'];
    control.push(this.initBook());
  }

  removeAddress(i: number) {
    const control = <FormArray>this.myForm.controls['book'];
    control.removeAt(i);
  }

  save(){
    console.log(this.myForm.value);
    this.bookCategoryService.addBookCategory(this.myForm.value)
            .subscribe(successCode => {
                this.statusCode = successCode;
            },
            errorCode => this.statusCode = errorCode);
  }
}
