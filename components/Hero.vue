<template >
    <div id="home"  class="w-full video-box bg-darkgray" >
        <video-background 
            ref="videobackground"
            :src="backvid"
            :poster="poster"
            type="video/mp4"
            class="video-box"
            overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)" 
            preload="auto"
            @ready="vidReady"
        >
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

export default {
    data() {
        return{
            poster: require('@/assets/images/poster.png'),
            backvid: require('@/assets/preview.mp4'),
            play: require('@/assets/images/play.svg'),
        }
    },
    computed: {},
    methods: {
        viewVideo(){
            window.open('https://www.youtube.com/watch?v=bEXAhPZad8k', '_blank')
        },
        vidReady(){
            // eslint-disable-next-line no-console
            console.log('vidReady');
            this.$refs.videobackground.player.play();
        }
    }
}
</script>