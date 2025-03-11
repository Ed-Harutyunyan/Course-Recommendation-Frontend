import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: false,
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
	@Output() loginEvent = new EventEmitter();
	@Output() logoutEvent = new EventEmitter();
}