<template>
  <div class="home">
    <div class="ctrl">
        <i-switch v-model="switch1" />
    </div>
    <Drawer title="菜单" placement="left" :closable="true" v-model="switch1">
        <Menu active-name="1" @on-select="open">
            <MenuGroup title="模块">
                <MenuItem name="1">
                    <Icon type="md-document" />
                    自我介绍
                </MenuItem>
            </MenuGroup>
            <MenuItem name="3">
                <Icon type="md-heart" />
                    2019 Flag
            </MenuItem>
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
        line-height: 60px;
        width: 100vw;
        position: fixed;
        z-index: 999;
        background-color: white;
    }
</style>

