import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-decorator',
  imports: [MatButtonModule],
  standalone: true,
  templateUrl: './decorator.component.html',
  styleUrl: './decorator.component.scss'
})
export class DecoratorComponent {
navigateToParent() {
  
}
}
