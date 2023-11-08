import express from 'express';
import { uploadImages } from './middleware/multer.js';
import cors from 'cors'
import { startApp } from './utils/conectDB.js';
import { fileURLToPath } from 'url';
import path from 'path';
import storyRouter from './routes/story-routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8089;
const app = express();
app.use(express.json());
startApp(app, PORT);
app.use(cors());
app.use(storyRouter)

app.use(express.static(__dirname));


app.post("/upload", uploadImages.array("photos"), function (req, res) {
	let filedata = req.files;
	const paths = filedata.map(file => {
		return file.path
	})
	if (!filedata) {
		res.status(500).json('Fail saving images')
	}
	res.json(paths)
});





