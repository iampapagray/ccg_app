<template>
    <div class="px-8 lg:px-footer_h py-footer_v flex flex-col lg:flex-row justify-between">
        <div class="flex-none">
            <div class="  flex flex-col" >
                <img
                    class="w-footer_logo_w h-footer_logo_h"
                    :src="big_logo"
                    alt="CCGBTCONE Logo"
                >
                <p class="text-white text-base font-normal leading-snug pt-copy_t font-nuni">&copy; {{date}} CCGBTCONE NFT CLUB. All rights reserved</p>
            </div>
        </div>
        <div class="grow">
             <div class="w-full lg:w-f_link_w mt-8 lg:mt-auto flex justify-around">
                <div class="flex flex-col ">
                    <p class="text-white font-mont font-bold text-lg leading-twt-msg pb-f_link_t">Useful Links</p>
                    <p 
                        v-for="link in links" 
                        :key="link.title"
                         class="cursor-pointer text-white font-nuni font-semibold text-base leading-twt-msg pb-5" 
                         @click="goto(link.url)"
                    >
                        {{link.title}}
                    </p>
                </div>
                <div>
                    <p class="text-white font-mont font-bold text-lg leading-twt-msg pb-f_link_t">Socials</p>
                    <div
                        v-for="soc in socials"
                        :key="soc.title"
                        class="cursor-pointer flex pb-5 items-center"
                        @click="goto(soc.url)"
                    >
                        <img
                            class=""
                            :src="soc.img"
                            :alt="soc.title"
                        >
                        <p class="text-white font-nuni font-semibold text-base leading-twt-msg ">{{soc.title}}</p>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
export default {
    data(){
        return {
            big_logo: require('@/assets/images/big_logo.svg'),
            date: new Date().getFullYear(),
            links: [
                {title: 'Home', url: '#home'},
                {title: 'About', url: '#about'},
                {title: 'FAQ', url: '#faq'},
            ],
            socials: [
                {title: 'Twitter', img: require('@/assets/images/twitter.svg'), url:'https://twitter.com/CCGBTCONE' },
                {title: 'Discord', img: require('@/assets/images/discord.svg'), url: 'https://discord.gg/ccgbtcone'},
                {title: 'Medium', img: require('@/assets/images/medium.svg'), url: 'https://medium.com/@coin_and_peace/history-of-vintage-nfts-in-japan-the-almost-forgotten-part-of-nft-history-5f15ce50a828'},
            ]
        }
    },
    methods: {
        goto(url){
            if(url.includes('https')){
                 window.open(url, 'blank');
             }else{
                 this.$router.path(url)
             }
        }
    }
}
</script>