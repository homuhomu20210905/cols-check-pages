<template>
  <div class="text-center">
    <v-dialog :value="dialog" width="500" click:outside="setEmit">
      <v-card>
        <v-card-title class="text-h5">一括入力 </v-card-title>

        <v-card-text>
          <v-row>
            <v-col cols="12">
              <span
                ><v-text-field
                  v-model.number="data.xl"
                  label="xl"
                  type="number"
                  :hint="'1ラインに' + 12 / data.xl + '項目表示されます'"
                  outlined
              /></span>
              <span
                ><v-text-field
                  v-model.number="data.lg"
                  label="lg"
                  type="number"
                  :hint="'1ラインに' + 12 / data.lg + '項目表示されます'"
                  outlined
              /></span>
              <span
                ><v-text-field
                  v-model.number="data.md"
                  label="md"
                  type="number"
                  :hint="'1ラインに' + 12 / data.md + '項目表示されます'"
                  outlined
              /></span>
              <span
                ><v-text-field
                  v-model.number="data.sm"
                  label="sm"
                  type="number"
                  :hint="'1ラインに' + 12 / data.sm + '項目表示されます'"
                  outlined
              /></span>
              <span
                ><v-text-field
                  v-model.number="data.xs"
                  label="xs"
                  type="number"
                  :hint="'1ラインに' + 12 / data.xs + '項目表示されます'"
                  outlined
              /></span>
              <span
                ><v-text-field
                  v-model.number="data.cols"
                  label="cols"
                  type="number"
                  :hint="'1ラインに' + 12 / data.cols + '項目表示されます'"
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
import Size from '@/static/data'
export default {
  props: {
    view: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    console.log('data run..' + this.view)
    const data = Size.columns()
    return {
      dialog: this.view,
      data,
    }
  },
  methods: {
    setEmit() {
      this.dialog = !this.dialog
    },
    reflect() {
      console.log('custom-dialog reflect...')
      this.$emit('reflect', this.data)
      this.setEmit()
    },
  },
}
</script>
