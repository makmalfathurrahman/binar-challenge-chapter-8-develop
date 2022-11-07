import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [lvl, setLevel] = useState(0);
  const [showData, setShowData] = useState(false);
  const [list, setList] = useState([]);
  const [criteria, setCriteria] = useState("username");

  const onSubmit = (e) => {
    e.preventDefault();
    setList((prev) => [
      ...prev,
      {
        username,
        email,
        experience,
        lvl,
      },
    ]);
    setShowData(true);
    // console.log({ username, email, experience, lvl });
  };

  const SearchPlayers = (e) => {
    setList((prev) => {
      const data = prev.filter((player) => player[criteria] === e.target.value);
      if (data.length > 0) {
        return data;
      }
      return [...prev];
    });
  };

  const UserData = () => {
    if (showData) {
      return (
        <div>
          <h4 className="mt-5 text-center">Players List</h4>
          <div className="row justify-content-center mb-5">
            <div className="col-auto">
              {list.map((data, index) => {
                return (
                  <table key={index} className="container table ">
                    <thead>
                      <tr>
                        <td>
                          <strong>username</strong>
                        </td>
                        <td>:</td>
                        <td>{data.username}</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>email</strong>
                        </td>
                        <td>:</td>
                        <td>{data.email}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>experience</strong>
                        </td>
                        <td>:</td>
                        <td>{data.experience}</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>
                          <strong>level</strong>
                        </td>
                        <td>:</td>
                        <td>{data.lvl}</td>
                      </tr>
                    </tfoot>
                  </table>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="form-submit">
      <div className="container input-group mt-5">
        <select
          className="form-select mr-5"
          aria-label="Default select example"
          onChange={(e) => setCriteria(e.target.value)}
        >
          <option value="username" selected>
            username
          </option>
          <option value="email">email</option>
          <option value="experience">experience</option>
          <option value="lvl">level</option>
        </select>
        <input
          type="text"
          className="form-control  w-50"
          placeholder="Search"
          onChange={SearchPlayers}
        />
      </div>
      {<UserData />}
      <Form className="container mb-5">
        <h3 className="mt-5 text-left">Add Players</h3>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="experience"
            onChange={(e) => setExperience(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="level"
            onChange={(e) => setLevel(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
