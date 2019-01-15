<template>
  <div class="home">
    <Menu mode="horizontal" active-name="1" @on-select="open">
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
    </Menu>
  </div>
</template>

<script>

export default {
  name: 'MainPage',
  methods: {
    open(name) {
      alert(name)
    }
  }
}
</script>
