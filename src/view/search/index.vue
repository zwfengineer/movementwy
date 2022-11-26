<template>
  <div>
    <el-input
      v-model="keyword"
      placeholder="请输入关键词"
      clearable
      :prefix-icon="Search"
    ></el-input>
    <div
      v-if="historyKeywords.length > 0"
      class="history"
    >
      <div class="title">历史记录</div>
      <el-tag
        effect="dark"
        v-for="(item, key) in historyKeywords"
        :key="key"
        :data-keyWord="item"
        @click="tagClickhandle"
      >
        {{ item }}
      </el-tag>
    </div>
    <div class="hotkeyword" @click="tagClickhandle">
      <div class="title">热门搜索</div>
      <el-tag
        effect="dark"
        v-for="(item, key) in hotkeywords"
        :key="key"
        :data-keyWord="item"
      >
        {{ item }}
      </el-tag>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
const keyword = ref("");
const hotkeywords = ref(["hello world"]);
const historyKeywords = ref(["bad world"]);

const tagClickhandle = (event) => {
  console.log(event);
};
</script>
<script>
export default {
  name: "Search",
};
</script>

<style scoped></style>
