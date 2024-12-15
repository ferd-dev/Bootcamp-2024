class Card extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'card');

        const header = document.createElement('div');
        header.setAttribute('class', 'card-header');
        header.textContent = 'JalaSoft';

        const body = document.createElement('div');
        body.setAttribute('class', 'card-body');

        const image = document.createElement('img');
        image.src = this.getAttribute('image') || '';
        image.alt = this.getAttribute('name') || 'Profile Picture';

        const name = document.createElement('div');
        name.setAttribute('class', 'card-name');
        name.textContent = this.getAttribute('name') || '';

        const footer = document.createElement('div');
        footer.setAttribute('class', 'card-footer');
        footer.textContent = this.getAttribute('role') || '';

        body.appendChild(image);
        body.appendChild(name);

        wrapper.appendChild(header);
        wrapper.appendChild(body);
        wrapper.appendChild(footer);

        const style = document.createElement('style');
        style.textContent = `
            .card {
                display: block;
                background-color: #fff;
            }

            .card-header {
                background-color: #fff;
                padding: 5px;
                text-align: center;
                color: #000;
                font-size: 54px;
                font-weight: bold;
            }

            .card-body {
                padding: 20px;
                margin-left: 2px;
                text-align: center;
                background-color: #000;
                color: #fff;
            }

            .card-body img {
                width: 100%;
                border-radius: 20%;
            }

            .card-name {
                margin-top: 30px;
                font-size: 40px;
                font-weight: bold;
            }

            .card-footer {
                background-color: #ff0000;
                color: #fff;
                padding: 10px;
                margin-left: 2px;
                text-align: center;
                font-weight: bold;
                font-size: 30px;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }
}

customElements.define('jala-card', Card);