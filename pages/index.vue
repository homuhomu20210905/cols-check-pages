<template>
  <div>
    <v-row justify="center" align="center">
      <v-cols cols="12">
        <h1>現在のwidth：{{ heightName }}</h1>
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
    <v-row>
      <v-col cols="12">
        <v-btn
          elevation="2"
          outlined
          plain
          raised
          tile
          x-large
          @click="changeDialog"
          >デフォルト値を設定</v-btn
        >

        <custom-Dialog ref="refCustomDialog" @reflect="reflect" />
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <cols-input
        v-for="(item, index) in list"
        :key="index"
        ref="colsInput"
        :icols="item.cols"
        :ixl="item.xl"
        :ilg="item.lg"
        :imd="item.md"
        :ism="item.sm"
        :ixs="item.xs"
        :index="index"
      ></cols-input>
    </v-row>
  </div>
</template>

<script>
import colsInput from '~/components/colsInput.vue'
import customDialog from '~/components/customDialog.vue'
import Size from '~/static/data'
// const data = { cols: 1, lg: 1, md: 1, sm: 1, xs: 1 }
export default {
  components: { colsInput, customDialog },
  data() {
    const viewDialog = false
    const list = []
    const count = Size.NOMAL_COUNT
    const pullDownList = []
    for (let i = 0; i < Size.MAX_COUNT; i++) {
      pullDownList.push(i + 1)
    }
    return {
      list,
      count,
      pullDownList,
      viewDialog,
    }
  },
  computed: {
    heightName() {
      return this.$vuetify.breakpoint.name
    },
  },
  created() {
    for (let i = 0; i < Size.NOMAL_COUNT; i++) {
      this.list.push(Object.assign({}, Size.columns()))
    }
  },
  mounted() {},
  methods: {
    listReset() {
      this.list.length = 0
      for (let i = 0; i < this.count; i++) {
        this.list.push(Object.assign({}, Size.columns()))
      }
    },
    changeDialog() {
      this.$refs.refCustomDialog.setEmit()
    },
    reflect($event) {
      console.log('index.vue reflect...')
      this.$refs.colsInput.forEach((item) => {
        item.reflect($event)
      })
    },
  },
}
</script>
