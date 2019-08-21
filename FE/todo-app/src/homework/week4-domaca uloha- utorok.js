import React, { Component } from "react";
import ReactDOM from "react-dom";

//Vytvorte si component, ktorý má state
// State má mať property users, kde je jednotlivý user objekt
// Jednotlivý user má mať tieto property: name (string), email (string), age (number) a enabled (boolean)
// Pomocou .map() vypíšte v Componente userov – pre každého usera vypíšte meno, email a vek
// Ak je user !enabled (jeho konto nie je povolené), vypíšte údaje sivým textom, inak čiernym 

class App extends Component {
  state = {
    users: [
      {
        name: "John",
        email: "john@dummy.com",
        age: 25,
        enabled: true
      },
      {
        name: "Amy",
        email: "amy@dummy.com",
        age: 31,
        enabled: false
      },
      {
        name: "Susan",
        email: "susan@dummy.com",
        age: 29,
        enabled: false
      },
      {
        name: "Nick",
        email: "nick@dummy.com",
        age: 34,
        enabled: true
      }
    ]
  };

  render() {
    const { users } = this.state;
    console.log(users);
    console.log(JSON.stringify(users));
    return (
      <>
        {users.map(user => {
          const { name, email, age, enabled } = user;
          const userColor = enabled ? "black" : "grey";
          return (
            <div style={{ padding: "10px", color: userColor }}>
              Name: {name}
              <br />
              E-mail: {email}
              <br />
              Age: {age}
              <br />
              Enabled: {JSON.stringify(enabled)}
            </div>
          );
        })}
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
