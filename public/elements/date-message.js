import { html, render } from '/lib/lit-html/lit-html.js'

class MyDateElement extends HTMLElement {
  constructor() {
    super()
    this.now = new Date()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    render(this.template(), shadowRoot)
  }

  connectedCallback() {
    console.log('date element is connected')
  }

  template() {
    return html`
      <p>
        現在日時は
        <time datetime="${this.now.toISOString()}"
          >${this.now.toLocaleString()}</time
        >
        です。
      </p>
    `
  }
}

customElements.define('date-message', MyDateElement)
