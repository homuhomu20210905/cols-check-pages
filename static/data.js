export default {
  columns() {
    return { cols: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }
  },
  setColumns(a, b) {
    a.cols = b.cols
    a.xl = b.xl
    a.lg = b.lg
    a.md = b.md
    a.sm = b.sm
    a.xs = b.xs
    return a
  },
}
