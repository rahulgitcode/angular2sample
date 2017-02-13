System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [
                        {
                            ulr: "http://lorempixel.com/100/100/people?1",
                            author: "Windward",
                            handle: "@windwardstudios",
                            body: "Looking for better company",
                            iLike: false,
                            totalLikes: 0
                        },
                        {
                            ulr: "http://lorempixel.com/100/100/people?2",
                            author: "Angular JS News",
                            handle: "@angularjs_news",
                            body: "Looking for better company 2",
                            iLike: true,
                            totalLikes: 0
                        },
                        {
                            ulr: "http://lorempixel.com/100/100/people?3",
                            author: "UX and Bootstrap",
                            handle: "@3rd wave",
                            body: "Looking for better company 3",
                            iLike: true,
                            totalLikes: 0
                        }
                    ];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweets.service.js.map