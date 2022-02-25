export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this.id = data.trackId?.toString() || data.id;
  }

  get Template() {
    return `
    <div class="col-8 bg-light shadow rounded-2 m-2" onclick="app.songsController.setNowPlaying('${this.id}')">
    <h2>${this.title}</h2>
    <img  class= "img-fluid" src="${this.albumArt}">
    <h5>${this.album}</h5>
    <p>${this.artist}</p>
    <p>$${this.price}</p>
  </div>

        `;
  }
  get NowPlayingTemplate() {
    return `
    <div class="col-8 bg-light shadow rounded-2 m-2">
    <h2>${this.title}</h2>
    <img  class= "img-fluid" src="${this.albumArt}">
    <h5>${this.album}</h5>
    <p>${this.artist}</p>
    <p>$${this.price}</p>
    <audio controls src="${this.preview}"></audio>
    <button class "btn btn-primary" onclick="app.playlistsController.saveSong()"> Like</button>
  </div>

        `;
  }
  get playlistTemplate() {
    return `

        `;
  }
}
