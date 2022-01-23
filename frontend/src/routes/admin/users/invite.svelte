<script>
	import Layout from '../../../components/admin/layout.svelte'
</script>
<svelte:head>
	<style>
        body{
            background-color: #f5f5f5;
        }
    </style>
</svelte:head>
<Layout>
    <div class="container d-flex justify-content-center">
        <ul class="nav secondary-nav alternate ">
            <li class="nav-item"><a class="nav-link " href="/admin/users/students">Student</a></li>
            <li class="nav-item"><a class="nav-link" href="/admin/users/staff">Staff</a></li>
            <li class="nav-item"><a class="nav-link" href="/admin/users/administrator">Administator</a></li>
            <li class="nav-item"><a class="nav-link" href="/admin/users/add">Add User</a></li>
            <li class="nav-item"><a class="nav-link active" href="/admin/users/invite">Invite User</a></li>
        </ul>
    </div>
	<div class="bg-white shadow-sm rounded p-4 mb-4">
        <h3 class="text-5 font-weight-400 d-flex align-items-center mb-4">Invite New User</h3>
        <hr class="mb-4 mx-n4">
        <form id="loginForm" method="post">
            <div class="row">
                <div class="col-sm-4">
                    <div class="form-group text-left">
                        <label class="" for="emailAddress">First Name</label>
                        <input type="text" class="form-control" id="emailAddress" required>
                    </div>
                    <div class="form-group text-left">
                        <label class="" for="emailAddress">Last Name</label>
                        <input type="text" class="form-control" id="emailAddress" required>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group text-left">
                        <label class="" for="emailAddress">Role</label>
                        <input type="text" class="form-control" id="emailAddress" required>
                    </div>
                    <div class="form-group text-left">
                        <label class="" for="emailAddress">Email </label>
                        <input type="text" class="form-control" id="emailAddress" required>
                    </div>

                </div>
                <div class="col-sm-4">
                    <div class="form-group text-left">
                        <label class="" for="emailAddress">Default Password</label>
                        <input type="text" class="form-control" value="12345678" readonly>
                    </div>

                    <button class="btn btn-primary btn-block">Send Invite</button>

                </div>
            </div>
        </form>
        
    </div>
</Layout>

