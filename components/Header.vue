<template>
    <div>
        <nav class="bg-black lg:h-25 px-15 flex flex-col justify-center">
            <!-- <div class="max-w px-nav-side text-white"> -->
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img
                                class="lg:h-logo lg:w-40"
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
                                class="cursor-pointer" >
                        </div>
                    </div>
                    <div></div>
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
            // navs: [
            //     {title: "Home", url:"#", active: true},
            //     {title: "Staking", url:"#", active: false},
            //     {title: "Docs", url:"#", active: false},
            //     {title: "Support", url:"#", active: false},
            // ]
        }
    },
    methods: {
        changeToggle () {
          this.$emit('doToggle')
        },
    }
}
</script>