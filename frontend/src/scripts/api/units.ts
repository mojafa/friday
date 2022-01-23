import { url } from '../config';

import axios from 'axios';
axios.defaults.withCredentials = true;

export default class Units {
	static async GetAll() {
		try {
			const res = await axios.get(url+`api/units`);
			return res.data;
		} catch (err) {
			console.log(err);
			return []	
		}
	}

	static async Find(faculty, year, sem) {
		try {
			const res = await axios.post(url+`api/units/find`,{course:faculty, year:year, semester:sem});
			return res.data;
		} catch (err) {
			console.log(err);
			return []	
		}
	}

	static async Add (data)  {
		try {
			let responce = await axios.post(url + 'api/units/add', data);
			alert('Course Added Successfull');
			
		} catch (err) {
			if (err.responce) {
			}
			console.error(err);
		}
	};

	static async Update (data) {
		try {
			let responce = await axios.post(url + 'api/units/update/'+data.id, data);
			alert('Course Updated Successfull');
		} catch (err) {
			if (err.responce) {
			}
			console.error(err);
		}
	};

}
