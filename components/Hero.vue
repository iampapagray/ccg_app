<template >
    <div id="home"  class="w-full video-box bg-darkgray" >
         <video-background 
            :src="backvid"
            :poster="poster"
            class="video-box"
            overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)" 
        >
            <!-- <vue-plyr v-if="showFrame" ref="plyr">
                <div class="plyr__video-embed">
                    <iframe
                    src="https://www.youtube.com/embed/7TavVZMewpY?iv_load_policy=3&modestbranding=0&playsinline=0&controls=0&showinfo=0&rel=0&enablejsapi=1"
                    allowfullscreen
                    allowtransparency
                    allow="autoplay">
                    </iframe>
                </div>
            </vue-plyr> -->

            <div 
                class="fakeplay"
                @click="viewVideo"
            >
                <img
                    class="-mr-1"
                    :src="play"
                    alt="Play"
                />
            </div>

        </video-background>
    </div>
</template>
 

<script>
/**
 * :sources="[
                {src: '<your-tablet-video-path>.mp4', res: 900, autoplay: true}, 
                {src: '<your-mobile-video-path>.mp4', res: 638, autoplay: true, poster: '<your-mobile-background-image-path>.png'}
            ]"**/ 
// eslint-disable-next-line no-unused-vars

export default {
    data() {
        return{
            poster: require('@/assets/images/poster.png'),
            backvid: require('@/assets/images/preview.mp4'),
            play: require('@/assets/images/play.svg'),
        }
    },
    computed: {},
    methods: {
        viewVideo(){
            window.open('https://www.youtube.com/watch?v=bEXAhPZad8k', '_blank')
        }
    }
}
</script>