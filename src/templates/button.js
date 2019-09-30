import { html } from 'lit-html'
import store from '../store'

const clickHandler = {
  handleEvent(e) {
    store.update({
      message: new Date().getTime()
    })
  }
};

export default html`
  <button @click=${clickHandler}></button>
`
