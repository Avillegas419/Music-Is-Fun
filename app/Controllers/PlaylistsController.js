import { ProxyState } from "../AppState.js";
import { playlistsService } from "../Services/PlaylistsService.js";


async function _getPlaylist() {
  try {
    await playlistsService.getPlaylist()
  } catch (error) {
    console.error(error);

  }
}

function _drawPlaylist() {
  let template = ''
  ProxyState.playlist.forEach(p => {
    template += p.Template
  })
  document.getElementById('playlist') = template
}

export class PlaylistsController {
  constructor() {
    _getPlaylist()
    ProxyState.on("playlist", _drawPlaylist)

  }
  async saveSong() {
    try {
      await playlistsService.saveSong()
    } catch (error) {
      console.error(error);
    }

  }
}

