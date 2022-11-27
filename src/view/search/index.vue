<template>
  <div class="searchContainer">
    <div class="searchbox">
      <el-input
        v-model="keyword"
        placeholder="请输入关键词"
        clearable
        :prefix-icon="Search"
        @input="inputChangehandle"
        @blur="blurhandle"
        @focus="focushandle"
        @keyup.enter="searchdata"
      ></el-input>
      <el-button effect="plain" size="default" @click="clickbackhandle">
        返回
      </el-button>

      <div class="searchassociate" v-show="showassociate">
        <div v-for="item in associate">
          {{ item }}
        </div>
      </div>
    </div>
    <hr />
    <div class="keywordbox" v-show="searchstate == 'search'">
      <div v-if="historyKeywords.length > 0" class="keyword">
        <div class="title" @click.sotp>
          <h3>历史记录</h3>
        </div>
        <div class="tagcontainer" @click="tagClickhandle">
          <el-tag
            effect="plain"
            v-for="(item, key) in historyKeywords"
            :key="key"
          >
            {{ item }}
          </el-tag>
        </div>
      </div>
      <div class="keyword">
        <div class="title">
          <h3>热门搜索</h3>
        </div>
        <div class="tagcontainer" @click="tagClickhandle">
          <el-tag effect="plain" v-for="(item, key) in hotkeywords" :key="key">
            {{ item }}
          </el-tag>
        </div>
      </div>
    </div>
    <div class="searchresult" v-show="searchstate == 'result'">
      <div class="filterbox">
        <div class="item">综合</div>
        <div class="item">价格</div>
        <div class="item">分类</div>
      </div>
      <div class="tm-goodGrid">
        <ul class="list">
          <div class="good" v-for="(item, index) in data" :key="index">
            <li class="item" style="z-index: 40; padding: 0 10px 26px 10px">
              <div style="min-height: 1px">
                <div class="tm-goodInGrid">
                  <div class="hd">
                    <div class="wraper">
                      <img
                        class="tm-lazy-image tm-image-loaded"
                        :src="item.listPicUrl"
                      />
                    </div>
                    <div class="promDesc-wrap">
                      <img
                        src="//yanxuan.nosdn.127.net/6bd2300f42e946b3960adf1dc7922b77.png"
                        alt=""
                      />
                      <div class="promDesc">可用红包</div>
                    </div>
                  </div>
                  <div class="name">{{ item.name }}</div>
                  <div class="newItemDesc">
                    {{ item.simpleDesc }}
                  </div>
                  <div></div>
                  <div class="price">
                    <span
                      ><span
                        ><span class="prefix">到手</span
                        ><span
                          style="color: rgb(250, 30, 50); font-weight: bold"
                          ><span style="font-size: 12px">¥</span
                          ><span style="font-size: 20px">{{
                            item.finalPriceInfoVO.priceInfo.finalPrice
                              ? item.finalPriceInfoVO.priceInfo.finalPrice.price
                              : item.retailPrice
                          }}</span></span
                        ><span class="suffix"></span></span
                      ><span :style="readpricestyle"
                        ><span style="font-size: 12px">¥</span
                        ><span style="font-size: 12px">{{
                          item.finalPriceInfoVO.priceInfo.counterPrice
                        }}</span></span
                      ></span
                    >
                  </div>
                  <div class="banner-wrap">
                    <div class="banner formal bgRed" style="font-size: 10px">
                      <img
                        class="icon"
                        src="//yanxuan.nosdn.127.net/b268d0d2f46c41d3b3edf5fa33eea3de.png"
                        alt=""
                      />
                      <div class="content">
                        <div class="right">满99减25元</div>
                      </div>
                    </div>
                  </div>
                  <img
                    class="topLogo"
                    src="https://yanxuan.nosdn.127.net/a71f34441c08a19a64fa77ca20e2f342.gif"
                    alt=""
                    style="width: 29.25px; height: 10px"
                  />
                </div>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import { useRoute, useRouter } from "vue-router";
import throttle from "lodash/throttle";
import response from "./response.json";

const imgsrc =
  "https://yanxuan-item.nosdn.127.net/d85c9c536f49784aa74a553b6ad643c1.png?type=webp";
const data = response.data.directlyList;
data.forEach((item, index) => {
  console.log(item.finalPriceInfoVO.priceInfo.counterPrice, item.id);
});
const route = useRoute();
const router = useRouter();
const query = route.query;
const keyword = ref("");
const frompage = ref("");
const searchstate = ref("");
if (query.frompage) {
  frompage.value = query.frompage;
}
if (query.keyword) {
  keyword.value = query.keyword;
  console.log(query.keyword);
  searchstate.value = "result";
} else {
  searchstate.value = "search";
}
const hotkeywords = ref(["hello world"]);
const historyKeywords = ref(["bad world"]);
const associate = ref([]);
const showassociate = ref(false);

const readpricestyle =
  "color: rgb(153, 153, 153);font-weight: 300;text-decoration: line-through;margin-left: 2px;";

// 搜索框输入
const inputChangehandle = () => {
  associate.value.push("我似乎遗忘了什么");
  if (keyword.value.trim() == "") {
    while (associate.value.length > 0) {
      associate.value.pop();
    }
  }
};
//搜索框失去焦点
const blurhandle = () => {
  showassociate.value = false;
};
const focushandle = () => {
  showassociate.value = true;
};
// 选择历史记录和热门搜索
const tagClickhandle = (event) => {
  console.log(event);
  if (event.target.className != "tagcontainer") {
    keyword.value = event.target.innerText;
    searchdata();
  }
};
// 返回上一级路由
const clickbackhandle = () => {
  if(frompage.value){
    router.go(frompage.value);
  }else{
    router.back()
  }
};
</script>
<script>
export default {
  name: "Search",
};
</script>

<style scoped>
.keyword {
  padding: 0 15px 15px;
  margin-bottom: 10px;
}
.title {
  color: darkgrey;
  height: 50px;
  font-size: 4px;
  display: flex;
  align-items: center;
}
.keywordbox {
  position: relative;
  margin-bottom: 10px;
}
.searchbox {
  position: relative;
  width: 100%;
  z-index: 1;
  margin: 10px 10px;
}
.tagcontainer {
}
.el-input {
  width: 75%;
}
.el-button {
  margin-left: 10px;
}
li.item {
  float: left;
  position: relative;
  overflow: hidden;
}
.tm-goodInGrid {
  width: 100%;
}
ul.list {
  position: relative;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
li {
  display: list-item;
}
.tm-goodInGrid .hd {
  border-radius: 8px;
  position: relative;
}
.name {
  margin-top: 8px;
  line-height: 22.5px;
  text-align: left;
  font-size: 15px;
  font-weight: 500;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #12161c;
  font-family: PingFangSC-Regular;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: break-all;
}
.newItemDesc {
  display: none;
}
.hd .wraper {
  position: relative;
  padding-bottom: 100%;
}
.hd .promDesc-wrap {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0 5px;
  max-width: 115.5px;
  position: absolute;
  bottom: -7px;
  left: 7px;
  color: #dd1a21;
  border: 1px solid #fa1e32;
  background: #fff;
  font-size: 12px;
}
.hd .wraper img {
  position: absolute;
  display: block;
  width: 100%;
  height: 172px;
  border-radius: 8px;
  background-color: #f4f4f4;
}
.hd .promDesc-wrap img {
  width: 7px;
  height: 8px;
  margin-right: 2.5px;
}
.hd .promDesc-wrap .promDesc {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.price {
  display: flex;
  align-items: center;
}
.price .prefix {
  font-size: 12px;
  font-weight: 700;
  color: red;
}
.banner-wrap {
  margin: top 5px;
}
.banner-wrap .banner {
  position: relative;
  width: 172px;
  height: 23px;
  border-radius: 60px;
}
.banner-wrap .bgRed {
  width: auto;
  display: inline-block;
  padding: 2px;
}
.banner-wrap .formal {
  line-height: 23px;
  padding: 0 0 0 6px;
  color: #fa1e32;
  background-color: #ffe9eb;
  font-weight: 500;
}
.banner-wrap .banner img {
  position: absolute;
  top: -2.5px;
  left: 18px;
  width: 10px;
  height: 3px;
}
.banner-wrap .banner .formal.bgRed .content {
  background-color: #fa1e32;
  color: #fff;
  padding: 2px 6px;
  margin-left: 0;
  border-radius: 32px;
}
.good {
  width: 50%;
}
.topLogo {
  position: absolute;
  top: 13.5px;
  right: 13.5px;
}
</style>

<style scoped lang="less">
.filterbox {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}
</style>
