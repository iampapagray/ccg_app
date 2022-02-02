<template>
    <div>
        <nav class="bg-black h-25 px-4 md:px-8 lg:px-15 flex flex-col justify-center">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img
                            class="lg:h-logo lg:w-logo-w"
                            :src="logo"
                            alt="CCGBTCONE Logo"
                        >
                    </div>
                    <div class="hidden md:block w-10 h-0.5 bg-gradient-to-r from-light-orange to-dark-orange transform rotate-90"></div>
                    <div class="hidden md:block">
                        <div class="flex">
                            <img 
                                v-for="social in socials"
                                :key="social.url"
                                :src="social.img" 
                                class="cursor-pointer mr-2.5 last-of-type:mr-0"
                                @click="goto(social.url)"
                            />
                        </div>
                    </div>
                </div>
                <div class="hidden lg:block">
                    <div class="flex items-center">
                        <div class="flex">
                            <a
                                v-for="(nav) in navs"
                                :key="nav.title"
                                class=" text-sm leading-4 mr-nav-side  font-mont font-semibold text-white focus:outline-none cursor-pointer"
                                @click="goto(nav.url)"
                            >
                                {{nav.title}}
                            </a>
                        </div>
                        <div class="flex">
                            <button class="btn mr-2.5" @click="goto('https://opensea.io/collection/emblem-vault?search%5BsortAscending%5D=true&search%5BsortBy%5D=PRICE&search%5BstringTraits%5D%5B0%5D%5Bname%5D=Oasis%20Mining&search%5BstringTraits%5D%5B0%5D%5Bvalues%5D%5B0%5D=CCGBTCONE')">
                                Buy on Opensea
                            </button>
                            <button class="outline-btn" @click="goto('https://xchain.io/asset/ccgbtcone')">
                                <div class="outline-btn-text">
                                    Buy on XCP
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div class=" lg:hidden">
                    <!-- Mobile menu button -->
                    <button
                        class="focus:outline-none"
                        @click="changeToggle"
                    >
                        <img :src="menu" class="text-white stroke-white" />
                    </button>
                </div>
            </div>

            <transition
                enter-class="opacity-0"
                enter-active-class="ease-out transition-medium"
                enter-to-class="opacity-100"
                leave-class="opacity-100"
                leave-active-class="ease-out transition-medium"
                leave-to-class="opacity-0"
            >
                <div
                    v-show="isOpen"
                    class="z-10 fixed inset-0 transition-opacity"
                    @keydown.esc="changeToggle"
                >
                    <div
                    class="absolute inset-0 bg-black opacity-50"
                    tabindex="0"
                    @click="changeToggle"
                    ></div>
                </div>
            </transition>

             <aside
                class="transform top-0 right-0 w-4/5 bg-black fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 lg:hidden" 
                :class="[isOpen ? '-translate-x-0 ' : 'translate-x-full', 'lg:hidden']"
            >
                <div class="flex items-center justify-end h-16 px-4 md:px-12 w-full mb-14">
                    <!-- <div class="flex items-center">
                        <div class="flex-shrink-0">
                        <img
                            class="h-4 md:h-10"
                            :src="logo"
                            alt="CCG logo"
                        >
                        </div>
                    </div> -->
                    <div class="flex items-center" @click="changeToggle">
                        <div class="flex-shrink-0">
                        <img
                            class="h-12"
                            :src="menu_close"
                            alt="Close Menu"
                        >
                        </div>
                    </div>
                </div>

                <div
                    v-for="(nav) in navs"
                    :key="nav.title"
                    class="md:mx-4"
                >
                    <a
                        :href="nav.url"
                        class="block text-base font-acumin pl-10 mb-6 font-semibold text-gray-500 "
                        :class="nav.active ? 'text-light-blue' : ''"
                    >
                        {{nav.title}}
                    </a>
                    <hr class="mx-10 mb-6 border-whitish" />

                </div>

                <div class="mx-10 md:mx-12">
                    <button 
                        class="btn text-sm md:text-base w-full" 
                        @click="goto('https://opensea.io/collection/emblem-vault?search%5BsortAscending%5D=true&search%5BsortBy%5D=PRICE&search%5BstringTraits%5D%5B0%5D%5Bname%5D=Oasis%20Mining&search%5BstringTraits%5D%5B0%5D%5Bvalues%5D%5B0%5D=CCGBTCONE')"
                    >
                        Buy on Opensea
                    </button>
                    <button class="outline-btn text-sm md:text-base w-full my-4">
                        <div 
                            class="outline-btn-text"
                            @click="goto('https://xchain.io/asset/ccgbtcone')"
                        >
                            Buy on XCP
                        </div>
                    </button>
                </div>
                <div class="mx-10 md:mx-12 md:hidden" >
                    <div class="flex justify-between">
                        <img 
                            v-for="social in socials"
                            :key="social.url"
                            :src="social.img" 
                            class="cursor-pointer" 
                            @click="goto(social.url)"
                        />
                    </div>
                </div>
            </aside>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
      isOpen: Boolean,
    },
    data() {
        return {
            logo: require('@/assets/images/logo.svg'),
            socials: [
                {img: require('@/assets/images/twitter.svg'), url:'https://twitter.com/CCGBTCONE'},
                {img: require('@/assets/images/discord.svg'), url: 'https://discord.gg/ccgbtcone'},
                {img : require('@/assets/images/medium.svg'), url: 'https://medium.com/@coin_and_peace/history-of-vintage-nfts-in-japan-the-almost-forgotten-part-of-nft-history-5f15ce50a828'},
            ],
                
            // logo_only: require('@/assets/images/logo_no_text.svg'),
            menu: require('@/assets/images/menu.svg'),
            menu_close: require('@/assets/images/menu_close.svg'),

            navs: [
                {title: "Home", url:"#home", active: false},
                {title: "About", url:"#about", active: false},
                {title: "FAQ", url:"#faq", active: false},
            ]
        }
    },
    methods: {
        changeToggle () {
          this.$emit('doToggle')
        },
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