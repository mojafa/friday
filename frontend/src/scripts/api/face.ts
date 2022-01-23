import { url } from '../config';
import { user } from '../state';
import FormData  from 'form-data';
import axios from 'axios';
import {dataURLToBlob} from 'blob-util';
axios.defaults.withCredentials = true;

export default class Face {

	static async Add (image , fileName)  {
		const form = new FormData();
		var blob = dataURLToBlob(image);
		console.log(fileName)
		form.append('image', blob, fileName+'.png');
		try {
			let responce = await axios.post(url + 'api/faces/add', form);
			alert('Faces Added Successfull');
			
		} catch (err) {
			if (err.responce) {
			}
			console.error(err);
		}
	};

	static async Validate (image ,fileName)  {
		const form = new FormData();
		var blob = dataURLToBlob(image);
		form.append('image', blob, fileName+'.png');
		try {
			let responce = await axios.post(url + 'api/faces/verify', form);
			alert('Faces Sent Successfull');
			
		} catch (err) {
			if (err.responce) {
			}
			console.error(err);
		}
	};

}
