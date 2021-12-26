<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view></router-view>
    <!-- /子路由出口 -->
    <!-- 标签导航栏 -->
    <van-tabbar class="layout-tabbar" v-model="active" route>
      <van-tabbar-item icon="home-o" to="/">
        <i slot="icon" class="iconfont icon-shouye"></i>
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item icon="home-o" to="/qa">
        <i slot="icon" class="iconfont icon-wenda"></i>
        <span>问答</span>
      </van-tabbar-item>
      <van-tabbar-item icon="home-o" to="/video">
        <i slot="icon" class="iconfont icon-shipin"></i>
        <span>视频</span>
      </van-tabbar-item>
      <van-tabbar-item icon="home-o" to="/my">
        <i slot="icon" class="iconfont icon-wode"></i>
        <span class="text">{{ $store.state.user ? '我的' : '未登录' }}</span>
      </van-tabbar-item>
    </van-tabbar>
    <!-- /标签导航栏 -->
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  components: {},
  props: {},
  data () {
    return {
      active: 0
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.layout-container {
  .layout-tabbar {
    i.iconfont {
      font-size: 40px;
    }
    span.text {
      font-size: 20px;
    }
  }
}
</style>
