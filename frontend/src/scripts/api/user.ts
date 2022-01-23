import { url } from '../config';
import { goto } from '$app/navigation';

import axios from 'axios';
axios.defaults.withCredentials = true;

export default class User {
    static  getRole = (role) =>{
        if(role == 1){
            return 'student'
        }else if (role == 2){
            return 'staff'
        }else if (role == 3){
            return 'admin'
        }
    }
	static async AddStudent(data) {
		const user = {
			firstName: data.fname,
			lastName: data.lname,
			email: data.email,
			role: 'studnet',
			isActive: false,
			password: data.password
		};

		try {
			let responce = await axios.post(url + 'api/user/add', user);
			let student = {
				stdNumber: data.studentNumber,
				user: responce.data._id,
				faculty: data.faculty,
				year: data.year,
				semester: data.semester,
				schedule: data.schedule,
				groupName: data.groupName
			};
			let response2 = await axios.post(url + 'api/student/add', student);

			alert('Student Added Successfull');
			setTimeout(() => {
				goto('/admin/user/student');
			}, 500);
		} catch (err) {
			if (err.responce) {
			}
			console.error(err);
		}
	}

	static async AddStaff(data) {

		const user = {
			firstName: data.fname,
			lastName: data.lname,
			email: data.email,
			role: 'staff',
			isActive: false,
			password: data.password
		};

		let error = '';
		try {
			let responce = await axios.post(url + 'api/user/add', user);
			let staff = {
				staffNumber: data.staffNumber,
				user: responce.data._id,
				faculty: data.faculty
			};
			let response2 = await axios.post(url + 'api/staff/add', staff);

			alert('Staff Added Successfull');
			setTimeout(() => {
				goto('/admin/user/staff');
			}, 500);
		} catch (err) {
			if (err.responce) {
			}
			console.error(err);
		}
	}

	static async AddAdmin(data) {
		const user = {
			firstName: data.fname,
			lastName: data.lname,
			email: data.email,
			role: 'admin',
			isActive: false,
			password: data.password
		};

		let error = '';
		try {
			let responce = await axios.post(url + 'api/user/add', user);

			alert('Admin Added Successfull');
			setTimeout(() => {
				goto('/admin/user/admin');
			}, 500);
		} catch (err) {
			if (err.responce) {
			}
			console.error(err);
		}
	}

	static async GetAdmin() {
		try {
			const res = await axios.get(url+`api/users/admin`);
			console.log(res.data);
			return res.data;
		} catch (err) {
			console.log(err);
			return []	
		}
	}

	static async GetStaff() {
		try {
			const res = await axios.get(url+`api/users/staff`);
			console.log(res.data);
			return res.data;
		} catch (err) {
			console.log(err);
			return []	
		}
	}

	static async GetStudents() {
		try {
			const res = await axios.get(url+`api/users/student`);
			console.log(res.data);
			return res.data;
		} catch (err) {
			console.log(err);
			return []	
		}
	}
}
