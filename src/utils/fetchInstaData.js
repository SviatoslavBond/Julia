import axios from "axios";
const baseEndPoint = "https://graph.instagram.com";
const fields = 'id,media_type,media_url,timestamp,thumbnail_url,permalink,caption';
const limit = 9;

export const fetchInstaData = async () => {

	const data = await axios.get(
		`${baseEndPoint}/me/media?
		fields=${fields}&
		limit=${limit}&
		access_token=${process.env.REACT_APP_INSTA_KEY}`)

	return data;

}

