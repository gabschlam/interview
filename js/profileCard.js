// Create HTML template
const template = document.createElement('template');
let linkButton;
// Initialize template's innerHTML with profile card
template.innerHTML = `
    <link rel="stylesheet" href="../styles/styles.css" >
    <label class="switch">
      <input class="switch-input" type="checkbox" />
      <span class="switch-label"></span> 
      <span class="switch-handle"></span> 
    </label>
    <div class="profile-card">
        <img class="profile-pic"/>
        <div>
            <h2></h2>
            <div class="profile-info">
                <i class="jobTitle"><slot name="jobTitle" /></i>
                <p><slot name="email" /></p>
                <p><slot name="age" /></p>
                <p><slot name="description" /></p>
            </div>
            <button class="draw-border" id="button"><slot name="button" /></button>
        </div>
    </div>
    <br>
`;

// Declare class
class ProfileCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h2').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('img').src = this.getAttribute('img');

    linkButton = this.getAttribute('link');
  }

  render() {

    // Show profile info
    const info = this.shadowRoot.querySelector('.profile-info');

    info.style.display = 'block';
  }

  goToLink() {
    window.open(linkButton, "_blank");
  }

  switchMode() {
    var element = this.shadowRoot.querySelector('.profile-card');
    element.classList.toggle("profile-card-dark-mode");
  }

  connectedCallback() {
      this.render();
      this.shadowRoot.querySelector('#button').addEventListener('click', () => this.goToLink());
      this.shadowRoot.querySelector('.switch-input').addEventListener('click', () => this.switchMode());
  }
}

window.customElements.define('profile-card', ProfileCard);