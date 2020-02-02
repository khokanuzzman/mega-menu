import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EventBus {

    private eventSource = new Subject<any>();

    constructor() { }

    on(type: EventType, callBackFunction): Subscription {
        return this.eventSource.pipe(
            filter((e: Event) => e.type === type),
            map((e: Event) => e.payload)
        ).subscribe(callBackFunction);
    }

    emit(e: Event) {
       this.eventSource.next(e);
    }
}

export enum EventType {
    ON_WINDOW_RESIZE
}

export class Event {
    constructor(public type: EventType, public payload?: any) { }
}


