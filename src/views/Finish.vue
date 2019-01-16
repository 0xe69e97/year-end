<template>
    <div>
        <transition name="fade">
            <p v-show="asd">
                谢谢大家！🙏
            </p>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Finish',
    data() {
        return {
            asd: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.asd = true
        }, 500)
    }
}
</script>

<style scoped>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #515a6e;
        color: #f8f8f9;
    }
    p {
        font-size: 60px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 2.5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
