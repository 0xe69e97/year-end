<template>
    <div class="main-pages">
        <!-- <h1>
            大家好，我叫丁林，我在遥领医疗科技担任web前端开发工程师，喜欢钻研，学习新技术，当然也爱玩游戏，看书运动等等……
        </h1> -->
        <div>
            <Card style="width:350px; cursor:pointer;">
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
        
        <div>
            <Card style="width:350px">
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
                }, {
                    title: '运动'
                }, {
                    title: '看书'
                }, {
                    title: '钻研技术'
                }
            ]
        }
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
        height: 100%;
    }
    .main-pages div {
        height: 50%;
    }
    ul li {
        list-style-type: none;
    }
</style>

