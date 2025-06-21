import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templet-driven-form',
  imports: [FormsModule],
  templateUrl: './templet-driven-form.html',
  styleUrl: './templet-driven-form.scss'
})
export class TempletDrivenForm {
  userName: any
  onSubmit(formData: any){
    console.log("Form Data: "+formData.value);
    this.userName=formData.value.username;
  }
}
