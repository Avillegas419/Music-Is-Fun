import { ProxyState } from "../AppState.js";
import songService from "../Services/SongsService.js";

//Private
/**Draws the Search results to the page */
function _drawResults() {
  let template = ''
  ProxyState.songs.forEach(s => template += s.Template)
  document.getElementById('songs').innerHTML = template
}

function _drawnowPlaying() {
  let nowPlaying = ProxyState.nowPlaying
  if (nowPlaying.title) {
    document.getElementById('now-playing').innerHTML = nowPlaying.NowPlayingTemplate
  } else {
    document.getElementById('now-playing').innerHTML = '<h2> Select a song </h2>'
  }
}
/**Draws the Users saved songs to the page */
function _drawPlaylist() { }

//Public
export default class SongsController {
  constructor() {
    ProxyState.on('songs', _drawResults)
    ProxyState.on('nowPlaying', _drawnowPlaying)
    console.log("your controllers is connected");
    //TODO Don't forget to register your listeners and get your data
  }

  /**Takes in the form submission event and sends the query to the service */
  search(e) {
    //NOTE You dont need to change this method
    e.preventDefault();
    try {
      console.log(e);
      songService.getMusicByQuery(e.target.query.value);
    } catch (error) {
      console.error(error);
    }
  }


  setNowPlaying(id) {
    console.log(id);
    songService.setNowPlaying(id)
  }
  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
   * @param {string} id
   */
  addSong(id) { }

  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  removeSong(id) { }
}
