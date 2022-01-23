import { url } from '../config';
import { goto } from '$app/navigation';

import axios from 'axios';
axios.defaults.withCredentials = true;

export default class Faculty {

	static async GetAll() {
		try {
			const res = await axios.get(url+`api/faculties`);
			console.log(res);
			return res.data;
		} catch (err) {
			console.log(err);
			return []	
		}
	}

}
