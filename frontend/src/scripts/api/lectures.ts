import { url } from '../config';

import axios from 'axios';
axios.defaults.withCredentials = true;

export default class Lectures {
	static async GetAll() {
		try {
			const res = await axios.get(url+`api/lectures`);
			return res.data;
		} catch (err) {
			console.log(err);
			return [];
		}
	}

	static async Find(staff) {
		try {
			const res = await axios.get(url+`api/lectures/staff/${staff}`);
			console.log( res.data);
			return res.data;
		} catch (err) {
			console.log(err);
			return []	
		}
	}

	static async Add (data)  {
		try {
			let responce = await axios.post(url + 'api/lectures/add', data);
			alert('Lecture Added Successfull');
			
		} catch (err) {
			if (err.responce) {
			}
			console.error(err);
		}
	};

	static async Update (data) {
		try {
			let responce = await axios.post(url + 'api/lectures/update/'+data.id, data);
			alert('Lecture Updated Successfull');
		} catch (err) {
			if (err.responce) {
			}
			console.error(err);
		}
	};

}
