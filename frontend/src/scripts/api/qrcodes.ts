import { url } from '../config';

import axios from 'axios';
axios.defaults.withCredentials = true;

export default class Courses {
	static async GetAll() {
		try {
			const res = await axios.get(url+`api/qrcodes`);
			return res.data;
		} catch (err) {
			console.log(err);
			return []	
		}
	}

	static async Find(lession) {
		try {
			const res = await axios.get(url+`api/qrcodes/find/${lession}`);
			return res.data;
		} catch (err) {
			console.log(err);
			return []	
		}
	}

	static async Add (data)  {
		try {
			let responce = await axios.post(url + 'api/qrcodes/add', data);
			alert('Course Added Successfull');
			
		} catch (err) {
			if (err.responce) {
			}
			console.error(err);
		}
	};

	static async Get (data)  {
		try {
			const res = await axios.get(url+`api/qrcodes/qrcode/${data}`);
			return res.data;
		} catch (err) {
			console.log(err);
			return null	
		}
	};

	static async Update (data) {
		try {
			let responce = await axios.post(url + 'api/qrcodes/update/'+data.id, data);
			alert('Course Updated Successfull');
		} catch (err) {
			if (err.responce) {
			}
			console.error(err);
		}
	};

}
