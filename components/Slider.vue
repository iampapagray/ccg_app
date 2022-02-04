<template>
    <div class="w-full py-25 overflow-hidden">

        <div class="overflow-hidden">
            <vue-tiny-slider v-bind="sliderOptions"  class="flex overflow-hidden ">
                <div
                    v-for="(slide, i) in slides"
                    :key="i"
                >
                    <img :src="slide.src" class="w-full lg:w-auto" />
                </div>
            </vue-tiny-slider>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            slides: [
                {src: require('@/assets/images/slide1.svg')},
                {src: require('@/assets/images/slide2.svg')},
                {src: require('@/assets/images/slide3.svg')},
                {src: require('@/assets/images/slide4.svg')},
                {src: require('@/assets/images/slide2.svg')},
            ],
            sliderOptions: {
                mouseDrag: true,
                loop: true,
                items: this.$device.isMobile ? 1 : 4 ,
                gutter: this.$device.isMobile ? 0 : 10,
                slideBy: 1,
                controls: false,
                nav: false,
                navAsThumbnails: false,
                // navContatiner: '#navs',
                navPosition: 'bottom',
                speed: 1000,
                autoplay: true,
                swipeAngle: 45
            }
        }
    }
}
</script>

<style scoped>
.tns-item:nth-child(odd) {
  background: transparent;
}

</style>

