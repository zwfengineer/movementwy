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
      ></el-input>
      <div class="searchassociate" v-show="searchinputblur">
        <div v-for="item in associate">
        {{item}}
        </div>
      </div>
    </div>

    <hr />
    <div class="keywordbox">
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";

const query = useRoute().query;
const keyword = ref("");
if (query.keyword) {
  keyword.value = query.keyword;
}
const hotkeywords = ref(["hello world"]);
const historyKeywords = ref(["bad world"]);
const associate = ref([]);
associate.value.push("我似乎遗忘了什么");
const searchinputblur=ref(false)

// 搜索框输入
const inputChangehandle = () => {

};
// 搜索框失去焦点
const blurhandle = ()=>{
    searchinputblur.value = searchinputblur.value?false:true
}

// 选择历史记录和热门搜索
const tagClickhandle = (event) => {
  console.log(event);
  if (event.target.className != "tagcontainer") {
    keyword.value = event.target.innerText;
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
  padding: 0 0.3rem 0.3rem;
  margin-bottom: 0.2rem;
}
.title {
  color: darkgrey;
  height: 1rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
}
.keywordbox {
  position: relative;
  margin-bottom: 0.2rem;
  margin-top: 0.8rem;
}
.searchbox {
  position: relative;
  width: 100%;
  z-index: 1;
}
.tagcontainer {
  height: 4rem;
  width: 100%;
  margin-top: 0.8rem;
}
</style>
