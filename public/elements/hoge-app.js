import { html, render } from '/lib/lit-html/lit-html.js'
import '/elements/date-message.js'
import '/elements/hoge-logger.js'

class MyAppElement extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' })

    render(
      html`
        <style>
          p {
            color: ${this.getAttribute('color') || '#00f'};
          }
        </style>

        <p>This is a custom element!</p>
        <date-message />
        <hoge-logger hogeAttr="hoge??" />
      `,
      shadowRoot,
    )
  }

  connectedCallback() {
    console.log('my-app element is connected')
  }
}

customElements.define('hoge-app', MyAppElement)
