import { url } from '../config';

import axios from 'axios';
axios.defaults.withCredentials = true;

export default class Semesters {
	static async GetAll() {
		try {
			const res = await axios.get(url+`api/semesters`);
			console.log(res);
			return res.data;
		} catch (err) {
			console.log(err);
			return []	
		}
	}

	static async Add (data)  {
		try {
			let responce = await axios.post(url + 'api/semesters/add', data);
			alert('Semester Added Successfull');
			
		} catch (err) {
			if (err.responce) {
			}
			console.error(err);
		}
	};

	static async Update (data) {
		try {
			let responce = await axios.post(url + 'api/semesters/update/'+data.id, data);
			alert('Semester Updated Successfull');
		} catch (err) {
			if (err.responce) {
			}
			console.error(err);
		}
	};

}
