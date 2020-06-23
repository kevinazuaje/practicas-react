import React, { Component } from "react";
import UserCard from "../Molecules/UserCard";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  render() {
    const { users } = this.state;
    return (
      <div className="ed-grid">
        <h1>Usuarios</h1>
        <div>
          {users.map((u) => (
            <UserCard
              key={u.id}
              name={u.name}
              email={u.email}
              username={u.username}
            />
          ))}
        </div>
      </div>
    );
  }
}
