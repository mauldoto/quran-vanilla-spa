import './surah.js';


class ListSurah extends HTMLElement {
    set listSurah(surah){
        this._listSurah = surah;
        this.render();
    }

    render(){
        this.innerHTML = '';
        this._listSurah.forEach(element => {
            const surahElement = document.createElement('surah-item');
            surahElement.surah = element;
            this.appendChild(surahElement);
        });

    }
}

customElements.define('list-surah', ListSurah);