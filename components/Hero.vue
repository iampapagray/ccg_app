<template>
    <div class="w-full video-box bg-darkgray">
        <!-- <vue-plyr>
          <div class="plyr__video-embed">
            <iframe
              src="https://www.youtube.com/embed/7TavVZMewpY?iv_load_policy=3&modestbranding=0&playsinline=0&controls=0&showinfo=0&rel=0&enablejsapi=1"
              allowfullscreen
              allowtransparency
              allow="autoplay"
              :autoplay="true">
            </iframe>
          </div>
        </vue-plyr> -->

         <video-background 
            :src="backvid"
            :poster="poster"
            class="video-box"
            overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)" 
        >
            <!-- <h1 style="color: white;">Hallo!</h1> -->
        </video-background>
    </div>
</template>
 

<script>
/**
 * :sources="[
                {src: '<your-tablet-video-path>.mp4', res: 900, autoplay: true}, 
                {src: '<your-mobile-video-path>.mp4', res: 638, autoplay: true, poster: '<your-mobile-background-image-path>.png'}
            ]"**/ 
export default {
    props: [],
    data(){
        return {
            poster: require('@/assets/images/poster.png'),
            backvid: require('@/assets/images/preview.mp4'),
           
        }
    },
    mounted() {
        
    },
    methods: {
         
    }
}
</script>