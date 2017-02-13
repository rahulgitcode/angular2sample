import {Component} from 'angular2/core'
import {TweetService} from './tweet.service'

@Component({
    selector: 'tweet',
    template: `<h2>Tweets</h2>
                <div *ngFor="#tweet of tweets">
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                            <img class="media-object" src="{{tweet.Imgurl}}" alt="">
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">{{tweet.body}}</h4>
                        </div>
                    </div>
                    <br>
                    <br>
                </div>
                `,
    providers: [TweetService]
})

export class TweetComponent{
    tweets;
    index = 1;
    courseFaculty;

    constructor(tweetService : TweetService){
        this.tweets = tweetService.getTweets();
    }
}