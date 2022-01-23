import { url } from '../config';
import { goto } from '$app/navigation';

import axios from 'axios';
axios.defaults.withCredentials = true;

export default class Faculty {

	static async GetAll(data) {

		try {
			let responce = await axios.post(url + 'api/user/add', user);
			let staff = {
				staffNumber: data.staffNumber,
				user: responce.data._id,
				faculty: data.faculty
			};
			let response2 = await axios.post(url + 'api/staff/add', staff);

			alert('Student Added Successfull');
			setTimeout(() => {
				goto('/admin/user/staff');
			}, 500);
		} catch (err) {
			if (err.responce) {
			}
			console.error(err);
		}
	}

}
