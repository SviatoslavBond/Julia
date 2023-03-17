import axios from "axios";
const TOKEN = 'IGQVJXdGc2T2JwMkI1dTJaSHE1NVFnUk1udzFVcmJMNjRtc2ZASVjIxRlprSXVMYTNWOU9nT0x2bm5QamhXT1EybkJwRUNyQXVPVU1ielV0UmU5WmxwVm15blBHN1BnX0taTWE2RWZA3';
const baseEndPoint = "https://graph.instagram.com";
const fields = 'id,media_type,media_url,timestamp,thumbnail_url,permalink,caption';
const limit = 9;

export const fetchInstaData = async () => {

	const data = await axios.get(`${baseEndPoint}/me/media?fields=${fields}&limit=${limit}&access_token=${TOKEN}`)
	return data;

}

