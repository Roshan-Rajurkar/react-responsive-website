import React, { useState } from "react";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Hello my name is ${firstName} ${lastName} having email ${email} like to say : 
      ${message}`
    );
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div>
        <h1 className="text-center">Contact Me</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Firstname
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Roshan"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput3" class="form-label">
                  Lastname
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Rajurkar"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="write message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-secondary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
