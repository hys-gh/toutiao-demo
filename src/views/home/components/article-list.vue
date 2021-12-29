<template>
  <div class="article-list">
    <van-pull-refresh
      v-model="isreFreshLoading"
      @refresh="onRefresh"
      :success-text="reFreshSuccessText"
      success-duration="1500"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <ArticleItem
          v-for="(article, index) in list"
          :key="index"
          :title="article.title"
          :article="article"
        ></ArticleItem>
        <!-- <van-cell
          v-for="(article, index) in list"
          :key="index"
          :title="article.title"
        /> -->
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticles } from '@/api/article'
import ArticleItem from '@/components/article-item'
export default {
  name: 'ArticleList',
  components: { ArticleItem },
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      list: [],
      loading: false,
      error: false,
      finished: false,
      timestamp: null,
      isreFreshLoading: false,
      reFreshSuccessText: '刷新成功'
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    //   console.log(1)

    async onLoad () {
      // 异步更新数据
      // 加载状态结束
      //   this.loading = false
      // 数据全部加载完成
      try {
        const { data } = await getArticles({
          channel_id: this.channel.id,
          timestamp: this.timestamp || Date.now(),
          with_top: 1
        })
        // if (Math.random() > 0.5) {
        //   JSON.parse('vsdhbovidsobno')
        // }
        // console.log(data)
        const { results } = data.data
        this.list.push(...results)
        // console.log(results)
        this.loading = false
        if (results.length) {
          this.timestamp = data.data.pre_timestamp
        } else {
          this.finished = true
        }
      } catch (err) {
        // console.log(err)
        this.error = true
        this.loading = false
      }
    },
    async onRefresh () {
      // 1.去官网查询下拉刷新的组件
      // 2.渲染数据，数据和上面的格式一样唯一不同的是数据需要更新到列表页的最前面
      // 3.数据渲染成功之后关闭下拉加载的状态
      // 4.根据文档设置所需要的属性，延长成功的显示时间
      // console.log(111)
      try {
        const { data } = await getArticles({
          channel_id: this.channel.id,
          timestamp: Date.now(),
          with_top: 1
        })
        // if (Math.random() > 0.2) {
        //   JSON.parse('vsdhbovidsobno')
        // }
        // console.log(data)
        const { results } = data.data
        this.list.unshift(...results)
        this.isreFreshLoading = false
        // console.log(results)
        // console.log(111)
        this.reFreshSuccessText = `刷新成功，更新了${results.length}条数据`
      } catch (err) {
        // 失败也需要关闭下拉加载的状态并弹出错误提示
        this.isreFreshLoading = false
        this.reFreshSuccessText = '刷新失败'
        this.$toast('刷新失败')
      }
    }
  }
}
</script>

<style scoped lang="less">
.article-list {
  height: 79vh;
  overflow: auto;
}
</style>
