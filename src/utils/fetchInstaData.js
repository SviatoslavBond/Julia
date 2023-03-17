import axios from "axios";
const TOKEN = 'IGQVJYT2hjdmdqOGh6ekMxMzlvZAk1tTFZAkeWNSeEVVY01tSUtIVWZAZAdllmaVVfakM3b2pqWmVjWDFKTFNqZAVlieXVBRFVfVXMwYnVsN2RRY2pRMUlBenIyTjRPNUl4NVdpa3lmWFR2bWRqbmtYVXZAKWgZDZD';
const baseEndPoint = "https://graph.instagram.com";
const fields = 'id,media_type,media_url,timestamp,thumbnail_url,permalink,caption';
const limit = 9;

export const fetchInstaData = async () => {

	const data = await axios.get(`${baseEndPoint}/me/media?fields=${fields}&limit=${limit}&access_token=${TOKEN}`)
	return data;

}

