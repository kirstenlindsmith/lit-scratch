import { html } from 'lit-html'
import button from './button'
import store from '../store/index'

const mainTemplate = (store) => () => html`
  <div>
    ${button}
    ${button}
    ${store.state.message}
  </div>
`

export default mainTemplate(store)
