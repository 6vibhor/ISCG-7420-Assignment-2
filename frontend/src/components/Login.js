import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../request";

function Login() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({ email: "", password: "", user: "" });
  const loginAreas = {
    admin: "/admin/semester",
    lecture: "/lecture/home",
    student: "/student/home",
  };
  const loginUser = async (event) => {
    event.preventDefault();
    const { ok, data } = await apiClient.get("auth/", info);

    if (!ok) {
      alert(data.error);
    }

    if (ok) {
      navigate(loginAreas[info.user]);
    }
  };
  const handleChange = ({ target: { value, name } }) => {
    let old = { ...info };
    old[name] = value;
    setInfo(old);
  };
  return (
    <>
      <div className="contianer-fluid" style={{ backgroundColor: "lightgray" }}>
        <div className="row d-flex justify-content-center">
          <div class="col-xl-12">
            <div class="card container mt-5 col-md-4 shadow">
              <div class="card-body">
                <form
                  class="form-horizontal form-material"
                  onSubmit={loginUser}
                >
                  <h3>Login</h3>
                  <div class="form-group mb-4">
                    <label class="col-md-12">Select User</label>

                    <div class="col-md-12 border-bottom">
                      <select
                        required
                        id="inputState"
                        className="form-control"
                        name="user"
                        onChange={handleChange}
                        class="form-select shadow-none p-0 border-0 form-control-line"
                      >
                        <option defaultValue>Choose User</option>
                        <option value="admin">Admin</option>
                        <option value="lecture">Lecture</option>
                        <option value="student">Student</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group mb-4">
                    <label for="example-email" class="col-md-12 p-0">
                      Email
                    </label>
                    <div class="col-md-12 border-bottom p-0">
                      <input
                        type="email"
                        class="form-control p-0 border-0"
                        id="example-email"
                        name="email"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group mb-4">
                    <label class="col-md-12 p-0">Password</label>
                    <div class="col-md-12 border-bottom p-0">
                      <input
                        type="password"
                        class="form-control p-0 border-0"
                        name="password"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div class="form-group mb-4">
                    <div class="col-sm-12">
                      <button class="btn btn-success">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Login;
