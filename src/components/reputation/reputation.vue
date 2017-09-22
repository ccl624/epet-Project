<template>
  <div class="brands-judge pr10 pb10">
    <ul class="judgeItems">
      <li class="judgeItem" v-for="judge in judges">
        <a :href="judge.link">
        <div class="judgeItemImg mt10 ml10 bgf5 pb15">
          <div class="main_img rela">
            <div class="thisimg rela loadimg-nofixed">
              <img class="image" v-lazy="judge.judgeImg" lazy="loaded">
            </div>
            <div class="ell cfff ftc ft12 join_time">加入E宠2年2月</div>
          </div>
          <div class="mt5 clearfix ft12 pr5 pl5">
            <span class="fl">红*****ω</span>
            <span class="fr pet-name">中华田园猫</span>
          </div>
          <div class="mt5 ft13 pr5 pl5 c999 font-intro">
            包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
          </div>
        </div>
      </a>
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
