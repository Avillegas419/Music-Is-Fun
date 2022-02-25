import { ProxyState } from "../AppState.js";
import Song from "../Models/Song.js";
import { sandBoxApi } from "./AxiosService.js"


class PlaylistsService {
  async getPlaylist() {
    const res = await sandBoxApi.get()
    console.log(res.data);
  }

  async saveSong() {
    let song = ProxyState.nowPlaying
    const res = await sandBoxApi.post('', song)
    console.log(res.data);
    ProxyState.playlist = [...ProxyState.playlist, new Song(res.data)]
  }
}

export const playlistsService = new PlaylistsService()
