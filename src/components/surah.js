class Surah extends HTMLElement {
    set surah(surah){
        this._surah = surah;
        this.render();
    }

    render(){
        const {arti, asma, audio, ayat, nama, nomor, type } = this._surah;
        this.innerHTML = `
        <a href="/#!/surah/${nomor}">
        <div class="card-item">
            <div>${nama}</div>
            <div class="text-xl">${asma}</div>
            <div class="mb-4">${arti}</div>
            <hr>
            <div class="flex flex-wrap justify-center  mx-2 my-2 text-xs">
                <span class="bg-purple-200 mx-2 my-1 rounded-full p-2 ">#${type}</span>
                <span class="bg-purple-200 mx-2 my-1 rounded-full p-2 ">#surah ke-${nomor}</span>
                <span class="bg-purple-200 mx-2 my-1 rounded-full p-2 ">#${ayat}</span>
            </div>
        </div>
        </a>
        `
    }

}

customElements.define('surah-item', Surah);