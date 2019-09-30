import { html } from 'lit-html'
import store from '../store'

const clickHandler = {
  handleEvent(e) {
    store.update(state => {
      console.log(state.message)
      state.message = `new thing ${Math.random()}`
    })
  },
  capture: true,
};

export default html`
  <button @click=${clickHandler}></button>
`
