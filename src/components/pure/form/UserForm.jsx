import React, { useRef } from "react";
import PropTypes from "prop-types";
import { User } from "../../../models/user.class";

const UserForm = ({ add }) => {
  const nameRef = useRef("");
  const emailRef = useRef("");

  const addUser = (e) => {
    e.preventDefault();
    const newUser = new User(
      nameRef.current.value,
      emailRef.current.value,
      false
    );
    add(newUser);
  };
  return (
    <form
  
      className="d-fex flex-column justify-content-center alitgn-items-center m-3 w-100 h-50" style={{margin:'auto'}}
      onSubmit={addUser}
    >
      <div className="mb-3">
        <label for="exampleInputEmail" className="form-label">
          User address
        </label>
        <input
          ref={nameRef}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail" className="form-label">
          Email address
        </label>
        <input
          ref={emailRef}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>

      <div className="d-flex flex-column justify-content-between ">
        <button className="btn btn-dark mb-2" type="submit">
          Add User
        </button>
        <button className="btn btn-danger ml-2" type="reset">
          Reset
        </button>
      </div>
    </form>
  );
};

UserForm.propTypes = {
  add: PropTypes.func.isRequired,
};

export default UserForm;
