System.register(['angular2/core', './courses.component', './star.component', './voter.component', './tweet.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, star_component_1, voter_component_1, tweet_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.text = "sample text";
                    this.link = "http://images.google.com";
                    this.title = "2 way binding value";
                    this.ngModtitle = "2 way binding value";
                    this.post = {
                        voteCount: 10,
                        myVote: 0
                    };
                }
                AppComponent.prototype.onClick = function ($event) {
                    $event.stopPropagation();
                    console.log('clicked', $event);
                };
                AppComponent.prototype.onDivClick = function () {
                    console.log('handled by div');
                };
                AppComponent.prototype.onVote = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1>Hello Angular 2</h1><courses></courses>\n                <h1>Property binding example</h1>\n                <h4>{{text}}</h4>\n                <img src=\"{{link}}\" />\n                <img [src]=\"link\"/>\n                <img bind-src=\"link\"/>\n                <br>\n                <h1>Event handling example</h1>\n                <div (click)=\"onDivClick()\">\n                <button (click)=\"onClick($event)\" >Click</button>\n                </div>\n                <br>\n                <h1>Two way binding example</h1>\n                <input type=\"text\" [value]=\"title\" (input)=\"title=$event.target.value\" />\n                Preview : {{title}}\n                <br>\n                <input type=\"button\" (click)=\"title=''\" value=\"clear\"/>\n                <br>\n                <h1>Using Ng-model</h1>\n                <input type=\"text\" [(ngModel)]=\"ngModtitle\" />\n                Preview: {{ngModtitle}}\n                <stars></stars>\n                <voter\n                    [voteCount]=\"post.voteCount\"\n                    [myVote]=\"post.myVote\"\n                    (vote)=\"(onVote($event))\"\n                ></voter>\n                <tweet></tweet>\n                ",
                        directives: [courses_component_1.CoursesComponent, star_component_1.StarComponent, voter_component_1.VoterComponent, tweet_component_1.TweetComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map