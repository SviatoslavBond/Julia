
import mongoose from 'mongoose';
const URL = 'mongodb://localhost:27017/stories';


export const startApp = (app, PORT) => {

	mongoose.connect(URL)
		.then(client => {
			console.log(`Succesful conection to DB`)
		})
		.catch(err => {
			console.log(`DB conection error ${err}`);
		})

	app.listen(PORT, (err) => {
		if (err) {
			console.log('Server started with error');
		} else {
			console.log(`Server started port > ${PORT}`);
		}
	})
}
