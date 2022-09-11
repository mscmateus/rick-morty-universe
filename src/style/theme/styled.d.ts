import 'styled-components'

declare module 'styled-components' {
   export interface DefaultTheme {
      title: string,
      colors: {
         primary: string,
         secundary: string,
         green: string,

         background: string,
         text: string,
         'text-main': string
      }
   }
}