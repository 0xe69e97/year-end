<template>
  <div class="home">
    <div class="self animated jello" v-show="currentPage === 0">
        <h1>丁林</h1>
        <h2>1995/12/26</h2>
        <h2>辽宁 - 鞍山</h2>
        <h2>渤海大学</h2>
    </div>
      <div class="hobby animated bounceInUp" v-show="currentPage === 1">
          <h2>技术</h2>
          <h2>看书</h2>
          <h2>游戏</h2>
          <h2>运动</h2>
      </div>
      <div class="job animated bounceInRight" v-show="currentPage === 2">
          <h2>2018/12/24</h2>
          <h2> Web 前端开发工程师 </h2>
      </div>
      <div class="flag animated bounceInUp" v-show="currentPage === 3">
          <h1> 2019 flag </h1>
      </div>
      <div class="verify animated bounceInRight" v-show="currentPage === 4">
          <h1> 重构 verify 系统</h1>
          <div class="continer">
            <h2> 1. 让系统走向大众 </h2>
            <h2> 2. 项目模块化，工程化。提升团队效率以及降低维护成本</h2>
            <h2> 3. 提高系统交互性，流畅性，稳定性</h2>
          </div>
      </div>
      <div class="team animated slideInUp" v-show="currentPage === 5">
          <h1> 团队提升 </h1>
          <div class="continer">
            <h2> 1. 更加融入公司 </h2>
            <h2> 2. IT 内部技术分享</h2>
            <h2> 3. 互相学习，提高质量，效率</h2>
          </div>
      </div>
      <div class="solo animated lightSpeedIn" v-show="currentPage === 6">
          <h1>个人提升</h1>
          <div class="continer">
            <h2> 1. 增强对医疗行业的业务理解 </h2>
            <h2> 2. 提高个人技术水平 </h2>
          </div>
      </div>
      <div class="end animated jackInTheBox" v-show="currentPage === 7">
          <img class="animated hinge delay-2s" src="../assets/end.jpeg" alt="end" v-show="imgShow">
          <h1>谢谢大家！</h1>
      </div>
  </div>
</template>

<script>

export default {
  name: 'SiderBar',
  data() {
      return {
          currentPage: 0,
          imgShow: true
      }
  },
  watch: {
      currentPage() {
          if (this.currentPage === 7) {
              setTimeout(() => {
                  this.imgShow = false
              }, 4000)
          }
      }
  },
  mounted () {
      window.addEventListener('keyup', event => {
        if (event.keyCode === 39) {
            this.currentPage++
        } else if (event.keyCode === 37) {
            this.currentPage--
        }
      })
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
    .home {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .home div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    .self {
        background-color: #f8f8f9;
    }
    .hobby {
        background-color: #e8eaec;
    }
    .job {
        background-color: #dcdee2;
    }
    .flag {
        background-color: #2d8cf0;
        color: white;
    }
    .verify {
        background-color: #5cadff;
        color: white;
    }
    .team {
        background-color: #2db7f5;
        color: white;
    }
    .solo {
        background-color: #2b85e4;
        color: white;
    }
    .end {
        background-color: #42b983;
        color: white;
    }
    .end img {
        width: 20vw;
        border-radius: 100vw;
    }
    .continer {
        height: auto!important;
        display: flex;
        align-items: flex-start;
        margin-top: 20px;
    }
</style>

