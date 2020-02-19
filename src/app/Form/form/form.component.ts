import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { DataArray } from '../../Data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private router:Router) { }

  salaryForm : FormGroup;
  userDetails = DataArray;
  
  ngOnInit() {
    this.salaryForm = new FormGroup({
      name : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required),
      salary : new FormControl('', Validators.required),
    });
  }

  SubmitFn() {
    this.userDetails.push(this.salaryForm.value);
    localStorage.setItem('data',JSON.stringify(this.userDetails))
  }

}
