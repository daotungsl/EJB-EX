import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  validateForm: FormGroup;
  datas: any;
  data = [
    {
      key: '1',
      month: '3',
      percent: 7.5,
    },
    {
      key: '2',
      month: '6',
      percent: 7.1,
    },
    {
      key: '3',
      month: '12',
      percent: 6.8,
    },
    {
      key: '4',
      month: '24',
      percent: 6.4,
    }
  ];

  // submitForm(): void {
  //   for (const i in this.validateForm.controls) {
  //     this.validateForm.controls[i].markAsDirty();
  //     this.validateForm.controls[i].updateValueAndValidity();
  //   }
  //   console.log(this.validateForm);
  // }

  get isHorizontal(): boolean {
    return this.validateForm.controls.formLayout && this.validateForm.controls.formLayout.value === 'horizontal';
  }

  constructor(
    private fb: FormBuilder,
    private formService: FormService) {}

  ngOnInit(): void {
    
    this.validateForm = this.fb.group({
      l: [null, [Validators.required]],
      n: [null, [Validators.required]],
      op2: [0],
    });
  }
  doSubmit() {
    console.log(this.validateForm.value);
    this.postForm();
}

postForm(){
  this.formService.create(this.validateForm.value).pipe(map(res =>{ return console.log (res)}))
}
}
