<template>
  <div class="text-center">
    <v-dialog
      :value="dialog"
      width="500"
      @input="$emit('input', $event.target.value)"
    >
      <v-card>
        <v-card-title class="text-h5">一括入力 </v-card-title>

        <v-card-text>
          <v-row>
            <v-col cols="12">
              <span
                ><v-text-field
                  v-model.number="lg"
                  label="lg"
                  type="number"
                  outlined
              /></span>
              <span
                ><v-text-field
                  v-model.number="md"
                  label="md"
                  type="number"
                  outlined
              /></span>
              <span
                ><v-text-field
                  v-model.number="sm"
                  label="sm"
                  type="number"
                  outlined
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
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="info" text @click="setEmit"> 中断 </v-btn>
          <v-btn color="primary" text @click="reflect"> 反映 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    view: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    console.log('data run..' + this.view)
    const cols = 1
    const md = 1
    const lg = 1
    const sm = 1

    return {
      dialog: this.view,
      cols,
      md,
      lg,
      sm,
    }
  },
  methods: {
    setEmit() {
      this.dialog = !this.dialog
      // this.$emit('closed', this.dialog)
    },
    reflect() {
      console.log('custom-dialog reflect...')
      this.$emit('reflect', {
        cols: this.cols,
        md: this.md,
        lg: this.lg,
        sm: this.sm,
      })
      this.setEmit()
    },
  },
}
</script>
