import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.scss'
})
export class ReactiveForms {
  //-------------------------------------------------
  //Reactive form with FormBuilder
  userFormBuilder!: FormGroup;
  constructor(private fb: FormBuilder){
    this.userFormBuilder = this.fb.group({
      formBuilderName: ['', [Validators.required]]
    });
  }

  onSubmitFormBuilder(){
    console.log("Form Data: " + this.userFormBuilder?.value.formBuilderName);
  }
//----------------------------------------------------

  // Reactive form with FormGroup and FormControl
  userFormControl = new FormGroup({
    username: new FormControl('',[Validators.required]),
  });

  onSubmitFormControl(){
    console.log("Form Data: "+this.userFormControl.value.username);
  }
}
