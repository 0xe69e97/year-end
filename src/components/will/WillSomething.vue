<template>
    <div class="main-page">
        <div class="flex-continer">
            <h1> 2019 Flag</h1>
            <Collapse accordion @on-change="addLength">
                <Panel name="1" class="parent">
                    verify 系统优化
                    <p slot="content">1. 前后端分离</p>
                    <p slot="content">2. 项目模块化，工程化。提升团队效率以及降低维护成本</p>
                    <p slot="content">3. 提高项目交互性，流畅性</p>
                </Panel>
                <Panel name="2" class="parent">
                    团队提升
                    <p slot="content">1. 更加融入公司</p>
                    <p slot="content">2. IT 内部技术分享</p>
                    <p slot="content">3. 互相学习，提高质量，效率</p>
                </Panel>
                <Panel name="3" class="parent">
                    个人提升
                    <p slot="content">1. 对医疗行业的业务理解</p>
                    <p slot="content">2. 提升自身技术水平</p>
                </Panel>
            </Collapse>
        </div>
        <div>
            <Button type="success" v-if="selected.length === 3" @click="end">End..</Button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'will',
    data() {
        return {
            selected: []
        }
    },
    methods: {
        addLength(val) {
            if (!this.selected.includes(val)) {
                this.selected.push(val)
            }
        },
        end() {
            this.$router.push({ path: '/finish' })
        }
    }
}
</script>


<style scoped>
    .main-page {
        padding-top: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .flex-continer {
        width: 500px;
    }
    .parent {
        text-align: left;
    }
    .parent p {
        text-align: left;
    }
</style>
