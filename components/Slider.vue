<template>
    <div class=" max-w py-25 overflow-hidden">

        <div>
            <vue-tiny-slider v-bind="sliderOptions" class="flex overflow-hidden ">
                <div
                    v-for="(slide, i) in slides"
                    :key="i"
                >
                    <img :src="slide.src" />
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
                items: 4,
                gutter: 10,
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

