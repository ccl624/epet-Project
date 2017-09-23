<template>
  <div>
    <header class="clearfix rela top ">
      <div id="1" class="sort nav-sort">
        <a href="#tab1">
          <span :class="{active:true}">分类</span>
        </a>
      </div>
      <div id="2" class="brand nav-sort">
        <a href="#tab2">
          <span :class="{active:false}">品牌</span>
        </a>
      </div>
      <a href="https://wap.epet.com/search.html?pet_type=dog&amp;fw=0">
        <img src="//static.epetbar.com/static_web/wap/src/images/background/search-ico.png" class="abs search">
      </a>
    </header>
    <div class="leftbox" ref="leftbox">
      <ul>
        <li class="on">为您推荐</li>
        <li data-id="5">狗狗主粮</li>
        <li data-id="6 on">狗狗零食</li>
        <li data-id="54">狗狗日用</li>
        <li data-id="53">狗狗玩具</li>
        <li data-id="48">狗狗保健</li>
        <li data-id="49">狗狗医疗</li>
        <li data-id="55">狗狗服饰</li>
        <li data-id="2652">狗狗牵引</li>
        <li data-id="2651">狗狗美容</li>
        <li data-id="50">狗狗香波</li>
        <li data-id="3288">狗狗书籍</li>
        <li data-id="3895">狗狗周边</li>
        <li data-id="3886">狗狗定制</li>
      </ul>
    </div>
    <div class="rightbox">
      <div class="sort-recom">
        <div class="hot-recom">
          <a href="javascript:;" class="title">热门分类</a>
          <ul class="hotItems">
            <li>
              <a href="https://wap.epet.com/goodslist.html?id_param=cateid_756&amp;fw=0" class="db">
                <div class="rela loadimg-nofixed">
                  <img class="w100 image" src="https://img2.epetbar.com/nowater/2016-08/20/14/8095e54e9414a06705acb7471eac7629.jpg@!300w-b" lazy="loaded">
                </div>
                <p class="ftc ft12 mt10 c333">肠胃调理</p>
              </a>
            </li>
            <li class="fl mt10">
              <a href="https://wap.epet.com/goodslist.html?id_param=cateid_7&amp;fw=0" class="db">
                <div class="rela loadimg-nofixed">
                  <img class="w100 image" src="https://img2.epetbar.com/nowater/2016-07/21/14/0f972761c08a37c8baff88fa9302053d.jpg@!300w-b" lazy="loaded">
                </div>
                <p class="ftc ft12 mt10 c333">进口狗粮</p>
              </a></li>
            <li class="fl mt10">
              <a href="https://wap.epet.com/goodslist.html?id_param=cateid_10&amp;fw=0" class="db">
                <div class="rela loadimg-nofixed">
                  <img class="w100 image" src="https://img2.epetbar.com/nowater/2017-05/26/10/2eeb97d6268f555de24ec370fd0de2ad.jpg@!300w-b" lazy="loaded">
                </div>
                <p class="ftc ft12 mt10 c333">磨牙洁齿</p>
              </a>
            </li>
            <li class="fl mt10"><a href="https://wap.epet.com/goodslist.html?id_param=cateid_413&amp;fw=0" class="db">
              <div class="rela loadimg-nofixed">
                <img class="w100 image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg@!300w-b" lazy="loaded">
              </div>
              <p class="ftc ft12 mt10 c333">强化免疫</p>
            </a>
            </li>
            <li class="fl mt10">
              <a href="https://wap.epet.com/goodslist.html?id_param=cateid_3555&amp;fw=0" class="db">
                <div class="rela loadimg-nofixed">
                  <img class="w100 image" src="https://img2.epetbar.com/nowater/2017-05/12/10/f38b8a4245c34c33061d04ad1e8009dd.jpg@!300w-b" lazy="loaded">
                </div>
                <p class="ftc ft12 mt10 c333">国产狗粮</p>
              </a>
            </li>
            <li class="fl mt10">
              <a href="https://wap.epet.com/goodslist.html?id_param=cateid_521&amp;fw=0" class="db"><div class="rela loadimg-nofixed">
                <img class="w100 image" src="https://img2.epetbar.com/nowater/cates/2014-03/24/81f4ac6b5b31143c056046bd9dc14b9e.jpg@!300w-b" lazy="loaded">
              </div>
                <p class="ftc ft12 mt10 c333">体内驱虫</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Bscroll from 'better-scroll'
  export default {
    mounted () {
      this.$nextTick(() => {
        const leftbox = this.$refs.leftbox
        console.log(leftbox)
        this.homeContent = new Bscroll(leftbox,{
          click: true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .top
    background-color #fff
    position fixed
    top 0
    padding: 0 15px;
    width 100%
    border-bottom: 1px solid #cbcbcb;
    height: 40px;
    color #fff
    z-index 333
    .nav-sort
      padding-right: 5%;
      width: 50%;
      height: 40px;
      line-height: 40px;
      font-size: 13px;
      float left
      font-weight: 700;
      & > a
        & > span
          display: inline-block;
          height: 40px;
          padding: 0 4px;
          cursor: pointer;
        .active
          color: #ed4044;
          border-bottom: 2px solid #ed4044;
    .sort
      text-align: right;
    & > a
      color #333
      .search
        position absolute
        top: 13px;
        right: 15px;
        width: 14px;
        height: 14px;

  .leftbox
    border-right 5px solid #f3f4f5
    position: fixed;
    top: 40px;
    left: 0;
    bottom: 45px;
    padding-bottom: 45px;
    background-color #fff
    &>ul
      .on
        background: #f3f4f5;
        color: #ed4044;
      &>li
        padding: 15px 0;
        border-bottom: 1px solid #f3f4f5;
        width: 70px;
        height: 50px;
        font-size: 13px;
        text-align: center;
  .rightbox
    position: fixed;
    top: 40px;
    left: 75px;
    bottom: 0;
    right 0
    background-color #fff
    height 100%
    .sort-recom
      .hot-recom
        padding: 15px 5px 20px;
        border-top: 1px solid #f3f4f5;
        .title
          display block
          font-size 12px
          color #999
          padding-left: 5px;
          margin-top: 10px;
        .hotItems
          overflow hidden
          &>li
            float left
            width 33.33%
            padding: 0 5px;
            margin-top: 10px;
            &>a
              display block
              .loadimg-nofixed
                background: url(./default-epet.png) no-repeat center center #f4f4f4;
                background-size: 120px auto;
                position: relative;
                padding-top: 100%;
                .image
                  top: 0;
                  left: 0;
                  position: absolute;
                  width 100%
                  vertical-align middle
              &>p
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                height: 20px;
                font-size 12px
                color #333
                margin-top 10px
                text-align center

</style>
