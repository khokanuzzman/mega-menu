import { Component, OnDestroy } from '@angular/core';
import { EventBus, EventType } from '../../shared/event-bus/event.bus.service';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnDestroy {

    subscribers: any = {};
    isMobileLayout: boolean = false;

    constructor(private eventBus: EventBus) {
        this.isMobileLayout = window.innerWidth <= 992;

        this.subscribers.onWindowResizeSub = this.eventBus.on(EventType.ON_WINDOW_RESIZE, (wsize) => {
            this.isMobileLayout = wsize <= 992;
        });
    }

    ngOnDestroy(): void {
        this.subscribers.onWindowResizeSub.unsubscribe();
    }
}