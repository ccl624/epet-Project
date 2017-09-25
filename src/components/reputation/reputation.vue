<template>
  <div class="brands-judge">
    <ul class="judgeItems" v-if="ratings.list">
      <li class="judgeItem" v-for="judge in ratings.list">
        <router-link to="/goods">
        <div class="judgeItemImg">
          <div class="main_img rela">
            <div class="thisimg rela loadimg-nofixed">
              <img class="image" v-lazy="judge.main_image.image">
            </div>
            <div class="ft12 join_time">{{judge.join_time}}</div>
          </div>
          <div class="clearfix">
            <span class="fl">{{judge.username}}</span>
            <span class="pet-name">{{judge.pet_des}}</span>
          </div>
          <div class="font-intro">
            {{judge.comment_content}}
          </div>
        </div>
      </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  const judges = [
    {
      link: 'https://wap.epet.com/reply/main.html?rid=4106784&amp;fw=0',
      judgeImg: 'https://img1.epetbar.com/2017-03/29/14/d1cf520f66912ee6adcb29ffebe2efc8.jpg@!200w-c'
    },
    {
      link: 'https://wap.epet.com/reply/main.html?rid=4106784&amp;fw=0',
      judgeImg: 'https://img1.epetbar.com/2017-03/29/14/d1cf520f66912ee6adcb29ffebe2efc8.jpg@!200w-c'
    },
    {
      link: 'https://wap.epet.com/reply/main.html?rid=4106784&amp;fw=0',
      judgeImg: 'https://img1.epetbar.com/2017-03/29/14/d1cf520f66912ee6adcb29ffebe2efc8.jpg@!200w-c'
    },
    {
      link: 'https://wap.epet.com/reply/main.html?rid=4106784&amp;fw=0',
      judgeImg: 'https://img1.epetbar.com/2017-03/29/14/d1cf520f66912ee6adcb29ffebe2efc8.jpg@!200w-c'
    }
  ]
  export default {
    props: {
      ratings:Object
    },
    data () {
      return {
        judges: judges
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.brands-judge
  padding 0 10px 10px 0
  .judgeItems
    overflow hidden
    .judgeItem
      width 50%
      float left
      &>a
        color #333
        .judgeItemImg
          background-color #f5f5f5
          padding-bottom 15px
          margin 10px 0 0 10px
          .main_img
            height 150px
            overflow hidden
            position relative
            .thisimg
              background: url(./default-epet.png) no-repeat center center #f4f4f4;
              background-size: 120px auto;
              position: relative;
              padding-top: 100%;
              &>img
                top: 0;
                left: 0;
                position: absolute;
                display block
                vertical-align middle
                width 100%
            .join_time
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              background: rgba(0,0,0,.4);
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              color #fff
              text-align center

          .clearfix
            font-size 12px
            padding 0 5px
            margin-top 5px
            overflow hidden
            .fl
              float left
            .pet-name
              float right
                background: #ddd;
                border-radius: 5px;
                padding: 0 5px;
          .font-intro
            height: 60px;
            overflow: hidden;
            color #999
            font-size 13px
            padding 0 5px
            margin-top 5px
</style>
