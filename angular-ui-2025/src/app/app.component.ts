import { Component } from '@angular/core';;
import { DecoratorComponent } from "./decorator/decorator.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, DecoratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-ui-2025';
}
