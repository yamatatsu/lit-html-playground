class HogeLogger extends HTMLElement {
  constructor(props) {
    super()
  }

  connectedCallback() {
    console.log('hogeeeeeee!!!!!')
    console.log(this.getAttribute('hogeAttr'))
  }
}

customElements.define('hoge-logger', HogeLogger)
