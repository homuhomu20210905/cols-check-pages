<template>
  <div>
    <v-row justify="center" align="center">
      <v-cols cols="12">
        <h1>colsの指定サンプルページ</h1>
      </v-cols>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-select
          v-model="count"
          :items="pullDownList"
          label="個数を選択"
          @change="listReset"
        ></v-select>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <cols-input
        v-for="(item, index) in list"
        :key="index"
        :icols="item.cols"
        :ilg="item.lg"
        :imd="item.md"
        :ism="item.sm"
        :index="index"
      ></cols-input>
    </v-row>
  </div>
</template>

<script>
import colsInput from '~/components/colsInput.vue'
const data = { cols: 1, lg: 1, md: 1, sm: 1 }
export default {
  components: { colsInput },
  data() {
    const list = []
    const count = 12
    const pullDownList = []
    for (let i = 0; i < count; i++) {
      list.push(Object.assign({}, data))
      pullDownList.push(i + 1)
    }
    return {
      list,
      count,
      pullDownList,
    }
  },
  mounted() {},
  methods: {
    listReset() {
      this.list.length = 0
      for (let i = 0; i < this.count; i++) {
        this.list.push(Object.assign({}, data))
      }
    },
  },
}
</script>
