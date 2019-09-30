import { html } from 'lit-html'
import button from './button'
import store from '../store'

const mainTemplate = (store) => () => html`
  <div>
    ${store.state.message}
    ${button}
    ${button}
  </div>
`

export default mainTemplate(store)
