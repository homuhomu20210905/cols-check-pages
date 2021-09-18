<template>
  <v-col
    :cols="cols"
    :lg="lg"
    :md="md"
    :sm="sm"
    style="border: dotted 1px"
    name="div"
  >
    <v-row>
      <v-col cols="12">
        <h2>要素{{ counter }}</h2>
      </v-col>
      <v-col cols="12">
        <span
          ><v-text-field v-model.number="lg" label="lg" type="number" outlined
        /></span>
        <span
          ><v-text-field v-model.number="md" label="md" type="number" outlined
        /></span>
        <span
          ><v-text-field v-model.number="sm" label="sm" type="number" outlined
        /></span>
        <span
          ><v-text-field
            v-model.number="cols"
            label="cols"
            type="number"
            outlined
        /></span>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  props: {
    icols: { type: Number, default: 0 },
    ilg: { type: Number, default: 0 },
    imd: { type: Number, default: 0 },
    ism: { type: Number, default: 0 },
    index: { type: Number, default: 0 },
  },
  data() {
    const cols = this.icols
    const md = this.imd
    const lg = this.ilg
    const sm = this.ism
    return {
      cols,
      lg,
      md,
      sm,
    }
  },
  computed: {
    counter() {
      const data = '' + (this.index + 1)
      return data.padStart(2, '0')
    },
  },
}
</script>
