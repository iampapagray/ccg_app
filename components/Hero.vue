<template>
    <div class="w-full video-box bg-darkgray">
        <vue-plyr>
          <div class="plyr__video-embed">
            <iframe
              src="https://www.youtube.com/embed/7TavVZMewpY?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1"
              allowfullscreen
              allowtransparency
              allow="autoplay"
            >
            </iframe>
          </div>
        </vue-plyr>

    </div>
</template>

<script>
export default {
    props: [],
    data(){
        return {

        }
    },
    mounted() {

    },
    methods: {
         
    }
}
</script>