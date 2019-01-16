<template>
    <div class="main-pages" ref="mainPage">
        <div class="continer">
            <Card class="card-style">
                <p slot="title">
                    个人信息
                </p>
                <ul>
                    <li v-for="(item, index) in selfInfo" :key="index">
                        {{ item.title }}
                    </li>
                </ul>
            </Card>
        </div>
        
        <div class="continer">
            <Card class="card-style">
                <p slot="title">
                    兴趣爱好
                </p>
                <ul>
                    <li v-for="(item, index) in hobbies" :key="index">
                        {{ item.title }}
                    </li>
                </ul>
            </Card>
        </div>

        <div class="continer">
            <Card class="card-style">
                <p slot="title">
                    职位
                </p>
                <ul>
                    <li>2018/12/24</li>
                    <li>Web前端开发工程师</li>
                </ul>
            </Card>
        </div>
        <BackTop></BackTop>
    </div>
</template>

<script>
export default {
    name: 'self',
    data() {
        return {
            selfInfo: [
                {
                    title: '丁林'
                }, {
                    title: '24'
                }, {
                    title: '1995/12/26'
                }, {
                    title: '辽宁-鞍山'
                }, {
                    title: '渤海大学'
                }
            ],
            hobbies: [
                {
                    title: '跳舞'
                },{
                    title: '游戏'
                }, {
                    title: '运动'
                }, {
                    title: '看书'
                }, {
                    title: '钻研技术'
                }
            ]
        }
    },
    mounted() {
        console.log(this.$refs.mainPage)
        this.$refs.mainPage.addEventListener('mousewheel', (event) => {
            if (event.deltaY >0) {
                // 往下
                window.scrollTo(0, document.body.clientHeight + window.scrollY)
            } else {
                // 往上
                window.scrollTo(0, window.scrollY - document.body.clientHeight)
            }
        })
    }
}
</script>

<style scoped>
    .main-pages {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 300vh;
    }
    .main-pages .continer {
        height: 100vh;
        display: flex;
        align-items: center;
    }
    .card-style {
        width:400px;
        cursor:pointer;
        height: 250px!important;
    }
    ul li {
        list-style-type: none;
    }
</style>

