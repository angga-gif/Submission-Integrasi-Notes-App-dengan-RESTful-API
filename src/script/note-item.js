class NoteItem extends HTMLElement {
    _shadowRoot = null;
    _style = null;
    _note = {
      idTeam: null,
      strTeam: null,
      strDescriptionEN: null,
      strTeamBadge: null,
    };
  
    constructor() {
      super();
  
      this._shadowRoot = this.attachShadow({ mode: 'open' });
      this._style = document.createElement('style');
    }
  
    _emptyContent() {
      this._shadowRoot.innerHTML = '';
    }
  
    set note(value) {
      this._note = value;
  
      // Render ulang
      this.render();
    }
  
    get note() {
      return this._note;
    }
  
    _updateStyle() {
      this._style.textContent = `
        :host {
          display: block;
          border-radius: 8px;
          
          box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
          overflow: hidden;
        }
  
        .fan-art-club {
          width: 100%;
          max-height: 450px;
          
          object-fit: cover;
          object-position: center;
        }
  
        .club-info {
          padding: 16px 24px;
        }
  
        .club-info__title h2 {
          font-weight: lighter;
        }
  
        .club-info__description p {
          display: -webkit-box;
          margin-top: 10px;
          
          overflow: hidden;
  
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5; /* number of lines to show */
        }
      `;
    }
  
    render() {
      this._emptyContent();
      this._updateStyle();
  
      this._shadowRoot.appendChild(this._style);

    }
  }
  
  customElements.define('note-item', NoteItem);
  