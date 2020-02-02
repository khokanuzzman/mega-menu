import { Component, HostListener } from '@angular/core';
import { EventType, EventBus } from './shared/event-bus/event.bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private eventBus: EventBus) { }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    let windowSize = event.target.innerWidth;
    this.eventBus.emit({ type: EventType.ON_WINDOW_RESIZE, payload: windowSize });
  }
}
