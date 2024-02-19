import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
 } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit{
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm =this.fb.group({
      sku : ['', Validators.required]
    });
  }

  ngOnInit(){}

  onSubmit(value: string): void{
    if (this.myForm.valid){
      console.log('form submitted successfully! ', this.myForm.value);
      
    }else{
      console.log('form is invalid');
      
    }
    
  }

}

