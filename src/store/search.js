import { defineStore } from "pinia";
import request from "@/util/request.js";
const useSearchStore = defineStore({
  id: "search",
  state: () => ({
    directlyList:null
  }),
  actions: {
    async search(keyword) {
      let result = await request.get("/xhr/search/search.json", {
        params: {
          size: 40,
          keyword: keyword,
        },

      });
      this.directlyList = result.data.directlyList
    },
  }
});

export { useSearchStore };
