<template>
    <div class="page">
      <div class="shoping">
        <!-- 全场换购 -->
        <div class="exchange">
          <div class="top">
            <div class="left">全场换购</div>
            <div class="right">
              <span>已满10件,可选择10件商品换购</span>
              <a>去换购</a>
            </div>
          </div>
          <!-- 换购商品 -->
          <div class="bottom">
            <div class="core">
              <div class="tu" v-for="(item, index) in 5" :key="index">
                <img src="../../assets/shopCart/images/3.png" alt="" />
                <div class="price">
                  <div class="box1">
                    <div class="box">换购价</div>
                    <div class="box">¥19.9</div>
                  </div>
                  <img
                    class="box3"
                    src="../../assets/shopCart/images/2.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="gouwu">
                <a>查看商品></a>
              </div>
            </div>
          </div>
        </div>
        <div class="cartitem" v-for="(item, index) in 4" :key="index">
          <div class="box7">
            <div class="box5">
              <div class="cartitem1"></div>
            </div>
            <di class="cartitem2">
              <img src="../../assets/shopCart/images/3.png" alt="" />
            </di>
            <div class="cartitem3">
              <div class="gundong">
                <div class="Moota">
                  <span>换购</span>
                  <span>与堵塞异味说拜拜 Moota与堵塞异味说拜拜</span>
                </div>
                <div class="guige">50g*4袋</div>
                <div class="box6">
                  <div>¥19.9</div>
                  <div>x1</div>
                </div>
                <!-- <li><div>未达到换购门槛,无法换购</div></li> -->
              </div>
            </div>
            <div class="cartitem4">
              <div class="delete">删除</div>
            </div>
          </div>
        </div>
      </div>
      <div class="free">
        <!-- 免邮-->
        <div class="item1">
          <div class="top">
            <div class="left">
              <div class="quang"></div>
              <div class="box8">99包邮</div>
            </div>
            <div class="right">
              <span>已满99包邮</span>
              <a>去逛逛</a>
            </div>
          </div>
        </div>
        <div class="cartitem" v-for="(item, index) in 4" :key="index">
          <div class="box7">
            <div class="box5">
              <div class="cartitem1"></div>
            </div>
            <di class="cartitem2">
              <img src="../../assets/shopCart/images/3.png" alt="" />
            </di>
            <div class="cartitem3">
              <div class="gundong">
                <div class="Moota">
                  <span>换购</span>
                  <span>与堵塞异味说拜拜 Moota与堵塞异味说拜拜</span>
                </div>
                <div class="guige">50g*4袋</div>
                <div class="box6">
                  <div>¥19.9</div>
                </div>
              </div>
            </div>
            <div class="cartitem4">
              <div class="delete">删除</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  </script>
  <style scoped>
  .page {
    height: 2000px;
  }
  .shoping {
    width: 100%;
    background-color: white;
  }
  .shoping .exchange {
    border-radius: 10px;
    color: #333333;
    padding: 0 0.512rem;
  }
  .shoping .exchange .top {
    width: 100%;
    height: 1.87733rem;
    color: #333;
  }
  .shoping .exchange .top .left {
    font-weight: 700;
    font-size: 0.68267rem;
    color: #333333;
    line-height: 1.87733rem;
    position: relative;
  }
  
  .shoping .exchange .top .right {
    flex: 1;
    margin-right: 0.34133rem;
    margin-left: 0.34133rem;
    font-size: 0.512rem;
    text-align: right;
    line-height: 1.87733rem;
    position: absolute;
    margin-left: 5rem;
    margin-top: -1.86rem;
  }
  .shoping .exchange .top .right span {
    margin: 0 5rem;
    margin-right: 0.34133rem;
    margin-left: 0.34133rem;
  }
  
  .shoping .exchange .bottom {
    width: 100%;
  }
  .shoping .exchange .bottom .core {
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    gap: 0.4rem;
  }
  .shoping .exchange .bottom scrollbar {
    display: none !important;
    width: 0px;
    height: 0px;
  }
  .shoping .exchange .bottom .tu {
    width: 3.41333rem;
    height: 2rem;
    background: #f4f4f4;
    border-radius: 0.17067rem;
  }
  
  .shoping .exchange .bottom .gouwu {
    width: 3.41333rem;
    height: 3.41333rem;
    background: green;
    padding-top: 2rem;
    color: #fa1e32;
    font-size: 0.2rem;
  }
  
  .shoping .exchange .bottom .tu img {
    display: block;
    width: 3.41333rem;
    height: 3.41333rem;
    background: #f4f4f4;
    border-radius: 0.17067rem;
  }
  .shoping .exchange .bottom .tu .box1 {
    font-size: 0.42667rem;
    color: #fa1e32;
    display: inline-block;
  }
  .shoping .exchange .bottom .tu .box3 {
    display: inline-block;
    width: 0.85333rem;
    height: 0.85333rem;
  }
  
  .shoping .cartitem {
    padding: 0.68267rem 0;
    width: 100%;
  }
  .shoping .cartitem .box7 {
    padding: 0 0.512rem;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
  }
  .shoping .cartitem .box5 {
    width: 0.768rem;
    height: 3.84rem;
    margin-right: 0.21333rem;
    display: flex;
    align-items: center;
  }
  
  .shoping .cartitem .cartitem1 {
    flex-shrink: 0;
    display: inline-block;
    width: 0.768rem;
    height: 0.768rem;
    border: 1px solid gray;
    border-radius: 50%;
    background-repeat: no-repeat;
  }
  .shoping .cartitem .cartitem2 {
    display: inline-block;
    width: 3.84rem;
    height: 3.84rem;
    border-radius: 0.17067rem;
  
    background: #f4f4f4;
  }
  .shoping .cartitem .cartitem2 img {
    width: 3.84rem;
    height: 3.84rem;
  }
  .shoping .cartitem .cartitem3 {
    margin-left: 0.53333rem;
  }
  .shoping .cartitem .cartitem3 .gundong {
    width: 8.5rem;
  }
  .shoping .cartitem .cartitem3 .Moota {
    display: flex;
    width: 9rem;
    font-size: 0.59733rem;
    flex-direction: row;
    justify-content: space-between;
  }
  .shoping .cartitem .cartitem3 .Moota span:nth-child(1) {
    width: 4rem;
    color: #fa1e32;
    margin-right: -1.72267rem;
  }
  .shoping .cartitem .cartitem3 .Moota span:nth-child(2) {
    width: 7rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .shoping .cartitem .cartitem3 .guige {
    margin: 0.17067rem 0;
    height: 0.768rem;
    display: flex;
    align-items: center;
    border-radius: 0.896rem;
    padding: 0 0.46933rem 0 0.34133rem;
    background: #f4f4f4;
    width: max-content;
    box-sizing: border-box;
    font-size: 0.512rem;
    margin-top: 0.512rem;
  }
  .shoping .cartitem .cartitem3 .box6 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 0.512rem;
  }
  .shoping .cartitem .cartitem3 .box6 div {
    line-height: 1rem;
    font-size: 0.85333rem;
    color: #fa1e32;
    margin-top: 0.512rem;
  }
  
  .shoping .cartitem3 .delete {
    position: absolute;
    top: 0;
    display: flex;
    height: 100%;
  }
  
  .shoping .cartitem .cartitem4 {
    right: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  .shoping .cartitem .cartitem4 .delete {
    width: 2.98667rem;
    height: 100%;
    background-color: #e83a3a;
    transform: translateX(0.08533rem);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.59733rem;
    color: #ffffff;
  }
  .free {
    width: 100%;
  
    background-color: white;
  }
  .free .item1 {
    background: yellow;
    border-radius: 10px;
    padding: 0 0.512rem;
  }
  .free .item1 .top {
    width: 100%;
    height: 1.87733rem;
    color: #333;
  }
  .free .item1 .top .left {
    display: flex;
    flex-direction: row;
    padding-top: 0.3rem;
    position: relative;
  }
  .free .item1 .top .left .quang {
    flex-shrink: 0;
    display: inline-block;
    width: 0.708rem;
    height: 0.708rem;
    border: 1px solid gray;
    padding-top: 0.3rem;
    border-radius: 50%;
    position: absolute;
    top: 0.5rem;
  }
  .free .item1 .top .left .box8 {
    font-weight: 700;
    font-size: 0.68267rem;
    color: #333333;
    line-height: 1.87733rem;
    line-height: 1.8rem;
    margin-left: 1rem;
  }
  
  .free .item1 .top .right {
    margin-right: 0.34133rem;
    margin-left: 0.34133rem;
    font-size: 0.512rem;
    text-align: right;
    line-height: 1.87733rem;
    margin-left: 5rem;
    margin-top: -1.86rem;
  }
  .free .item1 .top .right span {
    margin: 0 5rem;
    margin-right: 0.34133rem;
    margin-left: 0.34133rem;
  }
  .free .cartitem {
    padding: 0.68267rem 0;
    width: 100%;
  }
  .free .cartitem .box7 {
    padding: 0 0.512rem;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
  }
  .free .cartitem .box5 {
    width: 0.768rem;
    height: 3.84rem;
    margin-right: 0.21333rem;
    display: flex;
    align-items: center;
  }
  
  .free .cartitem .cartitem1 {
    flex-shrink: 0;
    display: inline-block;
    width: 0.768rem;
    height: 0.768rem;
    border: 1px solid gray;
    border-radius: 50%;
    background-repeat: no-repeat;
  }
  .free .cartitem .cartitem2 {
    display: inline-block;
    width: 3.84rem;
    height: 3.84rem;
    border-radius: 0.17067rem;
    background: #f4f4f4;
  }
  .free .cartitem .cartitem2 img {
    width: 3.84rem;
    height: 3.84rem;
  }
  .free .cartitem .cartitem3 {
    margin-left: 0.53333rem;
  }
  .free .cartitem .cartitem3 .gundong {
    width: 8.5rem;
  }
  .free .cartitem .cartitem3 .Moota {
    display: flex;
    width: 9rem;
    font-size: 0.59733rem;
    flex-direction: row;
    justify-content: space-between;
  }
  .free .cartitem .cartitem3 .Moota span:nth-child(1) {
    width: 4rem;
    color: #fa1e32;
    margin-right: -1.72267rem;
  }
  .free .cartitem .cartitem3 .Moota span:nth-child(2) {
    width: 7rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .free .cartitem .cartitem3 .guige {
    margin: 0.17067rem 0;
    height: 0.768rem;
    display: flex;
    align-items: center;
    border-radius: 0.896rem;
    padding: 0 0.46933rem 0 0.34133rem;
    background: #f4f4f4;
    width: max-content;
    box-sizing: border-box;
    font-size: 0.512rem;
    margin-top: 0.512rem;
  }
  .free .cartitem .cartitem3 .box6 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 0.512rem;
  }
  .free .cartitem .cartitem3 .box6 div {
    line-height: 1rem;
    font-size: 0.85333rem;
    color: #fa1e32;
    margin-top: 0.512rem;
  }
  
  .free .cartitem3 .delete {
    position: absolute;
    top: 0;
    display: flex;
    height: 100%;
  }
  
  .free .cartitem .cartitem4 {
    right: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  .free .cartitem .cartitem4 .delete {
    width: 2.98667rem;
    height: 100%;
    background-color: #e83a3a;
    transform: translateX(0.08533rem);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.59733rem;
    color: #ffffff;
  }
  </style>