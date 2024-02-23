import React, { useState } from "react";

function UserCreateBody() {
  const [fullname, setFullname] = useState("");    
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const submitValidation = (e) => {
    e.preventDefault();
    if (fullname === "" || email === "" || phone === "" || password === "") {
      setErr(true);
      return;
    }

    let User = {
      name: fullname,
      phone: phone,
      email: email,
      password: password,                     
    }
    
    fetch("http://159.65.21.42:9000/register", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(User),
    })
    .then((resp) => resp.json())
    .then((data) => {
      alert("New User Created");
      console.log(data);
    })
    .catch((err) => console.log(err));
  }

  return (
    <div className="user_create_bg">
      <div className="user_create_content">
        <h1>CREATE NEW USER</h1>  
        <form className="user_admin_form" onSubmit={submitValidation}>
          <div className="form_group">
            <label>Full Name</label>
            <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)}/>
            {err && fullname === "" ? <span>Full Name Required</span> : null}
          </div>                    
          <div className="form_group">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            {err && email === "" ? <span>Email Required</span> : null}
          </div>
          <div className="form_group">
            <label>Phone Number</label>
            <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            {err && phone === "" ? <span>Phone Number Required</span> : null}
          </div>
          <div className="form_group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            {err && password === "" ? <span>Password Required</span> : null}
          </div>
          <button>Create User</button>
        </form>             
      </div>
    </div>
  );
}


export default UserCreateBody;