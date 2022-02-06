<template>
    <div class="flex flex-col h-screen">
        <Header class="fixed w-full top-0 z-50" :is-open="isOpen" @doToggle="toggle" />
         
        <Nuxt 
            class="transform ease-in-out transition-all duration-300 relative top-25"  
            :class="isOpen ? '-translate-x-80' : 'translate-x-0'" 
        />

    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        }
    },
    computed: {},
    methods: {
        toggle () {
            this.isOpen = !this.isOpen
        },
    }
}
</script>