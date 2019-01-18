<template>
    <div class="main-page">
        <header>
            <main-page />
        </header>
        <main class="main-page">
            <!-- this is Main page, checkout router! -->
            <router-view> </router-view>
        </main>
    </div>
</template>

<script>
import MainPage from '@/views/MainPage.vue'
export default {
    name: 'Layout',
    components: {
        MainPage
    }
}
</script>

<style scoped>
    .main-page {
        /* height: 100vh; */
        width: 100%;
        overflow: inherit;
    }
</style>

