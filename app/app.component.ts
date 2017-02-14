import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {StarComponent} from './star.component'
import {VoterComponent} from './voter.component'
import {TweetComponent} from './tweet.component'
import {SimpleFormComponent} from './simpleform.component'

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular 2</h1><courses></courses>
                <h1>Property binding example</h1>
                <h4>{{text}}</h4>
                <img src="{{link}}" />
                <img [src]="link"/>
                <img bind-src="link"/>
                <br>
                <h1>Event handling example</h1>
                <div (click)="onDivClick()">
                <button (click)="onClick($event)" >Click</button>
                </div>
                <br>
                <h1>Two way binding example</h1>
                <input type="text" [value]="title" (input)="title=$event.target.value" />
                Preview : {{title}}
                <br>
                <input type="button" (click)="title=''" value="clear"/>
                <br>
                <h1>Using Ng-model</h1>
                <input type="text" [(ngModel)]="ngModtitle" />
                Preview: {{ngModtitle}}
                <stars></stars>
                <voter
                    [voteCount]="post.voteCount"
                    [myVote]="post.myVote"
                    (vote)="(onVote($event))"
                ></voter>
                <tweet></tweet>
                <simple-form></simple-form>
                `,
    directives: [CoursesComponent,StarComponent, VoterComponent, TweetComponent, SimpleFormComponent]
})
export class AppComponent {
    text= "sample text";
    link = "http://images.google.com";
    title = "2 way binding value";
    ngModtitle = "2 way binding value";

    post={
        voteCount : 10,
        myVote: 0
    }
    onClick($event){
        $event.stopPropagation();
        console.log('clicked',$event);
    }

    onDivClick(){
        console.log('handled by div');
    }

    onVote($event){
        console.log($event);
    }

 }