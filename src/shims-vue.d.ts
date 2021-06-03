declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>

  export interface HTMLAttributes {
    vModel?: string;
  }
  export default component
}

