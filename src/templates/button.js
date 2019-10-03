import { html } from 'lit-html'
import store from '../store/index'

const clickHandler = {
  handleEvent(e) {
    store.update({
      message: new Date().getTime()
    })
  }
};

export default (className) => html`
  <button class="${className}" @click=${clickHandler}></button>
`
