<template>
    <div class="px-footer_h py-footer_v flex justify-between">
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
             <div class="w-f_link_w flex justify-around">
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
                        class="cursor-pointer flex pb-5"
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
                {title: 'Home', url: '#'},
                {title: 'About', url: '#'},
                {title: 'FAQ', url: '#'},
            ],
            socials: [
                {title: 'Twitter', img: require('@/assets/images/twitter.svg'), url:'#'},
                {title: 'Discord', img: require('@/assets/images/discord.svg'), url:'#'},
                {title: 'Medium', img: require('@/assets/images/medium.svg'), url:'#'},
            ]
        }
    },
    methods: {
        goto(url){

        }
    }
}
</script>