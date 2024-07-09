import axios from "axios";
import { Buffer } from "buffer";
import dotenv from "dotenv";

dotenv.config();

const clientId = process.env.SPOTIFY_CLIENT_ID!;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;

async function getAccessToken(): Promise<string> {
  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    "grant_type=client_credentials",
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(clientId + ":" + clientSecret).toString("base64"),
      },
    }
  );
  return response.data.access_token;
}

async function getTrackTitle(spotifyUrl: string): Promise<void> {
  const trackId = spotifyUrl.split("/").pop()?.split("?")[0];
  if (!trackId) {
    console.error("URL inválida");
    return;
  }

  const accessToken = await getAccessToken();
  const response = await axios.get(
    `https://api.spotify.com/v1/tracks/${trackId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const track = response.data;
  const trackTitle = track.name;
  const artistName = track.artists
    .map((artist: { name: any }) => artist.name)
    .join(", ");
  const albumName = track.album.name;
  const releaseYear = track.album.release_date.split("-")[0];

  const fullTitle = `${trackTitle} - ${artistName} - ${albumName} (${releaseYear})`;
  console.log(`Título da faixa: ${fullTitle}`);
}

const spotifyUrl =
  "https://open.spotify.com/intl-pt/track/1Lo0QY9cvc8sUB2vnIOxDT?si=9ecd33d37b724fc0";
getTrackTitle(spotifyUrl).catch(console.error);
