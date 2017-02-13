import {Component} from 'angular2/core'

@Component({
    selector: 'stars',
    template: `<h2>Star</h2>
                <i class="glyphicon" [class.glyphicon-star-empty]="empty" [class.glyphicon-star]="!empty" 
                    (click)="onStarClick()" ></i>
                <br>
                <br>
                <br>
                `
})

export class StarComponent{
    empty = true;
    full = false;

    onStarClick(){
        this.empty = !this.empty;
    }
    
}