<template>
    <div class="flex flex-col h-screen">
        <Header :is-open="isOpen" @doToggle="toggle" />
         
        <Nuxt class="transform ease-in-out transition-all duration-300 "  :class="isOpen ? '-translate-x-80' : 'translate-x-0'" />

    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        toggle () {
            this.isOpen = !this.isOpen
        },
        
    }
}
</script>