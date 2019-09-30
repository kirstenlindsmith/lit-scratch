import { render } from 'lit-html'
import template from './templates'
import store from './store'

const renderApp = () => {
  render(template(store), document.body)
}

store.subscribe(renderApp)
renderApp()
