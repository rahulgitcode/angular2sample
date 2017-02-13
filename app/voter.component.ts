import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'voter',
    template: `<h2>Voter</h2>
                <div class="voter">
                    <i class="glyphicon glyphicon-menu-up vote-button"
                    [class.highlighted]="myVote == 1" 
                    (click)="upVote()"></i>
                    <span>{{voteCount+myVote}}</span>
                    <i class="glyphicon glyphicon-menu-down vote-button" 
                    [class.highlighted]="myVote == -1"
                    (click)="downVote()"></i>
                </div>
                <br>
                <br>
                
                `,
    styles: [
        `
        .voter{
            width: 20px;
            text-align: center;
            color: #999;
        }

        .vote-button{
            cursor:pointer;
        }
        `
    ]
})

export class VoterComponent{
    @Input() myVote=0 ;
    @Input() voteCount=0;
    @Output() vote = new EventEmitter();

    upVote(){
        if(this.myVote == 1){
            return;
        }

        this.myVote++;
        this.vote.emit({myvote: this.myVote});
    }

    downVote(){
        if(this.myVote == -1){
            return;
        }

        this.myVote--;
        this.vote.emit({myvote: this.myVote});
    }

    
}