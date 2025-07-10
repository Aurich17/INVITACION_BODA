import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvitacionComponent } from './components/invitacion/invitacion.component';

@Component({
  selector: 'app-root',
  imports: [InvitacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'invitacion-boda';
}
