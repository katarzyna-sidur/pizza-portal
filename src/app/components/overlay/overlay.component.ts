import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-overlay',
    templateUrl: './overlay.component.html',
    styleUrls: ['./overlay.component.css'],
     encapsulation: ViewEncapsulation.None
})
export class OverlayComponent implements OnInit {


    @Input()
    title: string;

    constructor() { }



    ngOnInit() {
    }

}
