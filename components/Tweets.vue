<template>
    <div class="lg:px-29 max-w flex justify-between bg-black">
        <div 
            v-for="(tweet, i) in tweets"
            :key="tweet.message"
            class="lg:h-41 lg:w-82 bg-darkgray rounded lg:px-tweetside mt-17 mb-16"
            :class="[i==1,'lg:pl-tweetside2 lg:pr-tweetside']"
        >
            <div class="flex justify-between align-top max-w pt-4">
                <div class="flex ">
                    <img
                        class="lg:h-[2.563rem] lg:w-[2.563rem] "
                        :src="tweet.avatar"
                        alt="avatar"
                    />
                    <div class="flex flex-col ml-nmside ">
                        <div class="flex pt-nmside">
                            <p class="font-gt text-white font-bold text-sm leading-4">{{tweet.name}}</p>
                            <span>
                                <img
                                    class="pl-0.5"
                                    :src="verified"
                                    alt="verified"
                                />
                            </span>
                        </div>
                        <p class="font-gt text-sm font-normal leading-4 text-handlegray">{{tweet.handle}}</p>
                    </div>
                </div>
                <div>
                    <img
                        class=" "
                        :src="ellipsis"
                        alt="menu"
                    />
                </div>
            </div>

            <div class="font-gt  text-xs leading-3 pt-3 flex">
                <p class="text-handlegray">Replying to</p>
                <span class="text-handleblue">&nbsp; {{tweet.replyTo}}</span>
            </div>

            <div class="pt-2">
                <p class="font-gt text-white text-lg leading-twt-msg">{{tweet.message}}</p>
            </div>

            <div class="flex text-handlegray font-gt font-normal text-xs pt-4">
                <p>{{tweet.time}}</p>
                <img
                    class="mx-dot-side"
                    :src="dot"
                    alt="dot"
                />
                <p>{{tweet.date}}</p>
                <img
                    class="mx-dot-side"
                    :src="dot"
                    alt="dot"
                />
                <p>{{tweet.device}}</p>
            </div>
        </div>
        <div class="absolute tweet-container girl-position ">
            <img
                class="mx-auto"
                :src="cryptogirl"
                alt="crypto girl"
            />
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tweets: [
                {
                    avatar: require('@/assets/images/tweetpfp.svg'),
                    name: 'Elon Musk',
                    handle: '@elonmusk',
                    replyTo: '@vincentes and @Grimezsz',
                    message: 'Wanna buy some Bitcoin? 😉😉',
                    time: '11:51 PM',
                    date: 'Oct 22, 2018',
                    device: 'Twitter for iPhone'
                },
                {
                    avatar: require('@/assets/images/tweetpfp.svg'),
                    name: 'Elon Musk',
                    handle: '@elonmusk',
                    replyTo: '@Bitcoin',
                    message: 'How much for some anime Bitcoin?',
                    time: '10:44 PM',
                    date: 'May 1, 2020',
                    device: 'Twitter for iPhone'
                },
            ],
            ellipsis: require('@/assets/images/ellipsis.svg'),
            dot: require('@/assets/images/dot.svg'),
            verified: require('@/assets/images/verified.svg'),
            cryptogirl: require('@/assets/images/cryptogirl.svg'),
        }
    }
}
</script>