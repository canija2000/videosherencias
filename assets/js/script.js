// Class Multimedia

class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
        this.setUrl = (newUrl) => _url = newUrl;
    }
    setInicio() {
        return `Este método es para realizar un cambio en la URL del video`;
    }
}
// clase hija Reproductor
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        let _id = id;
        this.getId = () => _id;
    }
    playMultimedia() {
        displayVideoI.displayVideo(this.getUrl(), this.getId());
        return `El video con ID ${this.getId()} se está reproduciendo`;
    }
    setInicio(time) {
        let originalUrl = this.getUrl(); 
        let modifiedUrl = `${originalUrl}&amp;start=${time}`; 
        // url modificado al agregar el parametro start
        this.setUrl(modifiedUrl);
        // se vuelve a llamar el método playMultimedia para que se actualice el video
        this.playMultimedia();
        
}
}


// IIFE para mostrar el video en el DOM
let displayVideoI = (() => {
    let displayVideo = (url, id) => {
        let video = document.getElementById(id);
        video.setAttribute('src', url);
    }
    return {
        displayVideo: displayVideo
    }
})();

// instancia de la clase Reproductor

let videomusica = new Reproductor('https://www.youtube.com/embed/TvRBkoLeFCY?si=9jHmh7e5coyxRKap', 'musica');
let videserie = new Reproductor('https://www.youtube.com/embed/eRygz2hep5s?si=WfspPZrHbzsmJQfL', 'series');
let videopelicula = new Reproductor('https://www.youtube.com/embed/gKcOjnDJfzk?si=X3H67wPTZ-J-LSRW', 'peliculas');


videomusica.playMultimedia();
videserie.playMultimedia();
videopelicula.playMultimedia();

// Start at X

videomusica.setInicio(30);




