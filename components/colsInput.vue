<template>
  <v-col
    :cols="data.cols"
    :xl="data.xl"
    :lg="data.lg"
    :md="data.md"
    :sm="data.sm"
    :xs="data.xs"
    style="border: dotted 1px"
    name="div"
  >
    <v-row>
      <v-col cols="12">
        <h2>要素{{ counter }}</h2>
      </v-col>
      <v-col cols="12">
        <span
          ><v-text-field
            v-model.number="data.xl"
            label="xl"
            type="number"
            outlined
        /></span>
        <span
          ><v-text-field
            v-model.number="data.lg"
            label="lg"
            type="number"
            outlined
        /></span>
        <span
          ><v-text-field
            v-model.number="data.md"
            label="md"
            type="number"
            outlined
        /></span>
        <span
          ><v-text-field
            v-model.number="data.sm"
            label="sm"
            type="number"
            outlined
        /></span>
        <span
          ><v-text-field
            v-model.number="data.xs"
            label="xs"
            type="number"
            outlined
        /></span>
        <span
          ><v-text-field
            v-model.number="data.cols"
            label="cols"
            type="number"
            outlined
        /></span>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import Size from '@/static/data'
export default {
  props: {
    icols: { type: Number, default: 0 },
    ixl: { type: Number, default: 0 },
    ilg: { type: Number, default: 0 },
    imd: { type: Number, default: 0 },
    ism: { type: Number, default: 0 },
    ixs: { type: Number, default: 0 },
    index: { type: Number, default: 0 },
  },
  data() {
    const cols = this.icols
    const xl = this.ixl
    const lg = this.ilg
    const md = this.imd
    const sm = this.ism
    const xs = this.ixs

    const data = Object.assign(Size.columns(), { xl, lg, md, sm, xs, cols })
    return {
      data,
    }
  },
  computed: {
    counter() {
      const data = '' + (this.index + 1)
      return data.padStart(2, '0')
    },
  },
  methods: {
    reflect($event) {
      console.log('cols input reflect')
      Size.setColumns(this.data, $event)
    },
  },
}
</script>
