import 'vue'

declare module 'vue' {
  interface HTMLAttributes extends interface {
    vModel?: unknown
  }
}