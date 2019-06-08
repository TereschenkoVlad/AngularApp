import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit, AfterViewInit, OnDestroy{
    public test = 'some text';
    constructor () {
        setTimeout(() => {
            this.test = 'new text !!!!';
        }, 5000);
    }

    myMethod () {
        // alert(2222);
        // this.test = 'cho to tam kek';
    }

    ngOnInit () {
        // alert(3333);
    }
    ngAfterViewInit () {
        // alert(44444);
    }
    ngOnDestroy () {
        // alert('sad');
    }
}
