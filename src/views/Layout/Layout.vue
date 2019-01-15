<template>
    <div class="main-page">
        <header>
            <sider-bar />
        </header>
        <main class="main-page">
            <!-- this is Main page, checkout router! -->
            <router-view> </router-view>
        </main>
    </div>
</template>

<script>
import SiderBar from '@/views/SiderBar.vue'
export default {
    name: 'Layout',
    components: {
        SiderBar
    }
}
</script>

<style scoped>
    .main-page {
        height: calc(100vh - 60px);
        width: 100%;
    }
    header {
        margin-top: 60px;
    }
</style>

