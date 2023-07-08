import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "", // New field for the dropdown option
    code: "", // New field for the user code input
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    if (input.name === "role" && input.value === "user") {
      // Clear the code field when role changes to "user"
      setData({ ...data, [input.name]: input.value, code: "" });
    } else {
      setData({ ...data, [input.name]: input.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sign in
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className={styles.input}
            />
            <input
              type="Phone Np"
              placeholder="Phone No"
              name="Phone No"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {/* New dropdown input for role selection */}
            <select
              name="role"
              onChange={handleChange}
              value={data.role}
              required
              className={styles.input}
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            {data.role === "user" && (
              <input
                type="text"
                placeholder="Enter Code"
                name="code"
                onChange={handleChange}
                value={data.code}
                required
                className={styles.input}
              />
            )}
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
