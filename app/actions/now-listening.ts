const LASTFM_API = "https://ws.audioscrobbler.com/2.0/";
const LASTFM_API_KEY = process.env.LASTFM_API_KEY;
const LASTFM_USERNAME = "ocordova";
const LASTFM_ENDPOINT = `${LASTFM_API}?method=user.getRecentTracks&api_key=${LASTFM_API_KEY}&format=json&user=${LASTFM_USERNAME}&limit=1`;

export interface NowListening {
  artist: string;
  title: string;
  date?: Date;
  cover: string;
  url: string;
  isPlaying?: boolean;
  album: string;
}

export async function getNowListening(): Promise<NowListening | undefined> {
  try {
    const response = await fetch(LASTFM_ENDPOINT);
    const data = await response.json();

    const track = data.recenttracks.track[0];
    const date = track.date?.uts
      ? new Date(Number(track.date?.uts) * 1000)
      : undefined;
    const artist = track.artist["#text"];
    const title = track.name;
    const cover = track.image[2]["#text"];
    const isPlaying = track["@attr"]?.nowplaying;
    const album = track.album["#text"];
    const url = track.url;

    return {
      artist,
      title,
      date,
      cover,
      url,
      isPlaying,
      album,
    };
  } catch (error) {
    console.error(error);
    return;
  }
}
