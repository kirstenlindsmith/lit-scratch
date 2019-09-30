import { html } from 'lit-html'
import store from '../store'

const clickHandler = {
  handleEvent(e) {
    store.update(() => ({ message: new Date().getTime() }))
  },
  capture: true,
};

export default html`
  <button @click=${clickHandler}></button>
`
