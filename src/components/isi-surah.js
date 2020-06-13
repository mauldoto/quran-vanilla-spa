class IsiSurah extends HTMLElement {
    set isiSurah(surah){
        this._isiSurah = surah;
        this.render();
    }

    render(){
        this._isiSurah.forEach(item => {
            const newChildElement = document.createElement('div');
            newChildElement.setAttribute('class', 'flex flex-col mx-6 md:mx-32 mt-16')
            newChildElement.innerHTML = `
                <p class="text-4xl text-right mb-2"> ${item.ar} - <span class="text-xl">${item.nomor}</span></p>
                <p class="mb-6">"${item.id}"</p>
                <hr>  
            `
            this.appendChild(newChildElement);
        })
        
    }

}

customElements.define('isi-surah', IsiSurah);