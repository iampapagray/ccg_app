<template>
    <div>
        <nav class="bg-black lg:h-25 px-15 flex flex-col justify-center">
            <!-- <div class="max-w px-nav-side text-white"> -->
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img
                                class="lg:h-logo lg:w-logo-w"
                                :src="logo"
                                alt="CCGBTCONE Logo"
                            >
                        </div>
                        <div class="w-10 h-0.5 bg-gradient-to-r from-light-orange to-dark-orange transform rotate-90"></div>
                        <div class="flex">
                            <img 
                                v-for="social in socials"
                                :key="social.url"
                                :src="social.img" 
                                class="cursor-pointer mr-2.5 last-of-type:mr-0" />
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="flex">
                            <a
                                v-for="(nav) in navs"
                                :key="nav.title"
                                class=" text-sm leading-4 mr-nav-side  font-mont font-semibold text-white focus:outline-none"
                            >
                                {{nav.title}}
                            </a>
                        </div>
                        <div class="flex">
                            <button class="btn mr-2.5">
                                Buy on Opensea
                            </button>
                            <button class="outline-btn">
                                <div class="outline-btn-text">
                                    Buy on XCP
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            <!-- </div> -->
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
                {img: require('@/assets/images/twitter.svg'), url:''},
                {img: require('@/assets/images/discord.svg'), url: ''},
                {img : require('@/assets/images/medium.svg'), url: ''},
            ],
                
            // logo_only: require('@/assets/images/logo_no_text.svg'),
            // menu: require('@/assets/images/menu.svg'),
            // menu_close: require('@/assets/images/menu_close.svg'),
            // isLoggedIn: false,
            navs: [
                {title: "Home", url:"#", active: false},
                {title: "About", url:"#", active: false},
                {title: "FAQ", url:"#", active: false},
            ]
        }
    },
    methods: {
        changeToggle () {
          this.$emit('doToggle')
        },
    }
}
</script>