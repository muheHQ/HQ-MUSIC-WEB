/* eslint-disable */
// 因为ts不认识 .jpg   .txt 等文件
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "element-plus"