<template>
  <div class="home">
    <!-- <Menu mode="horizontal" active-name="1" @on-select="open">
        <MenuItem name="1">
            <Icon type="ios-paper" />
            自我介绍
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people" />
            做过的
        </MenuItem>
        <MenuItem name="3">
            <Icon type="ios-paper" />
            准备做的
        </MenuItem>
        <MenuItem name="4">
            <Icon type="ios-construct" />
            个人展望
        </MenuItem>
    </Menu> -->
    <div class="ctrl">
        <i-switch v-model="switch1" />
    </div>
    <Drawer title="Basic Drawer" placement="left" :closable="true" v-model="switch1">
        <Menu active-name="1" @on-select="open">
            <MenuGroup title="内容管理">
                <MenuItem name="1">
                    <Icon type="md-document" />
                    文章管理
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="md-chatbubbles" />
                    评论管理
                </MenuItem>
            </MenuGroup>
            <MenuGroup title="统计分析">
                <MenuItem name="3">
                    <Icon type="md-heart" />
                    用户留存
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="md-leaf" />
                    流失用户
                </MenuItem>
            </MenuGroup>
        </Menu>
    </Drawer>
  </div>
</template>

<script>

export default {
  name: 'SiderBar',
  data() {
      return {
          switch1: false
      }
  },
  methods: {
    open(name) {
        let type = Number(name)
        switch(type) {
            case 1: 
                this.$router.replace('/main/self')
                break
            case 2: 
                this.$router.replace('/main/did')
                break
            case 3: 
                this.$router.replace('/main/will')
                break
            case 4: 
                this.$router.replace('/main/solo')
                break
            default: 
                break
        }
    },
    showLeftBar() {
        this.switch1 = true
    }
    
  }
}
</script>

<style>
    .ctrl {
        height: 60px;
        width: 100vw;
    }
</style>

