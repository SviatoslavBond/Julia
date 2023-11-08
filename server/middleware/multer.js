import multer from 'multer';
import fs from 'fs';

const storageConfig = multer.diskStorage({
	destination: (req, file, cb) => {
		const { categoryfolder, foldername } = req.body;

		if (!fs.existsSync(`public/${categoryfolder}/${foldername}`)) {
			fs.mkdirSync(`public/${categoryfolder}/${foldername}`);
		}
		cb(null, `public/${categoryfolder}/${foldername}`);
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	}
});
export const uploadImages = multer({ storage: storageConfig });