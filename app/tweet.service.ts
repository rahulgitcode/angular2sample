export class TweetService{
    getTweets(){
        return [
            {
                Imgurl: "http://lorempixel.com/100/100/people?1",
                author: "Windward",
                handle: "@windwardstudios",
                body: "Looking for better company",
                iLike: false,
                totalLikes: 0

            },
            {
                Imgurl: "http://lorempixel.com/100/100/people?2",
                author: "Angular JS News",
                handle: "@angularjs_news",
                body: "Looking for better company 2",
                iLike: true,
                totalLikes: 0
            },
            {
                Imgurl: "http://lorempixel.com/100/100/people?3",
                author: "UX and Bootstrap",
                handle: "@3rd wave",
                body: "Looking for better company 3",
                iLike: true,
                totalLikes: 0
            }
        ]
    }
}