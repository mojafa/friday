import { url } from '../config';

import axios from 'axios';
axios.defaults.withCredentials = true;

export default class Shedules {
	static async GetAll() {
		try {
			const res = await axios.get(url+`api/schedules`);
			console.log(res);
			return res.data;
		} catch (err) {
			console.log(err);
			return []	
		}
	}

	static async Add (data)  {
		try {
			let responce = await axios.post(url + 'api/schedules/add', data);
			alert('Shedules Added Successfull');
			
		} catch (err) {
			if (err.responce) {
			}
			console.error(err);
		}
	};

	static async Update (data) {
		try {
			let responce = await axios.post(url + 'api/schedules/update/'+data.id, data);
			alert('Shedules Updated Successfull');
		} catch (err) {
			if (err.responce) {
			}
			console.error(err);
		}
	};

}
