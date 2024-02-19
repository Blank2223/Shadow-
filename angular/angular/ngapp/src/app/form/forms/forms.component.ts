import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
    constructor(){}

    onSubmit(form: any): void{
      console.log('your submitted value', form);
    }

    ngOnInit(){}
}
