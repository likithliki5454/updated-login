import React from "react";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
      name: "",
      email: "",
      password: "",
      phone: "",
      items: [],
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    localStorage.removeItem("Outputdata");
  }
  handleChange1(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
      name: event.target.value,
    });
  }
  handleChange2(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
      email: event.target.value,
    });
  }
  handleChange3(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
      password: event.target.value,
    });
  }
  handleChange4(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
      phone: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      var newdata = [...this.state.items];

      newdata.push({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
      });
      this.setState(
        {
          items: newdata,
        },
        () => {
          this.postdata();
        }
      );
      alert("Form is submited");
    }
  }

  postdata = () => {
    localStorage.setItem("Outputdata", JSON.stringify(this.state.items));
    window.location.href = "/Table";
  };
  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["phone"]) {
      isValid = false;
      errors["phone"] = "Please enter your phone number.";
    }

    if (typeof input["phone"] !== "undefined") {
      var patternn = new RegExp(/^[0-9\b]+$/);
      if (!patternn.test(input["phone"])) {
        isValid = false;
        errors["phone"] = "Please enter valid phone number.";
      } else if (input["phone"].length !== 10) {
        isValid = false;
        errors["phone"] = "Please enter valid phone number.";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <div id="bd">
        <div id="bodyy">
          <h1>FILL THE FORM</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <br />
              <input
                type="text"
                name="name"
                value={this.state.input.name}
                onChange={this.handleChange1}
                placeholder="Enter your name"
                id="name"
              />

              <div className="danger">{this.state.errors.name}</div>
            </div>
            <br />

            <div>
              <label htmlFor="email">Email Address:</label>
              <br />
              <input
                type="text"
                name="email"
                value={this.state.input.email}
                onChange={this.handleChange2}
                placeholder="Enter your email"
                id="email"
              />

              <div className="danger">{this.state.errors.email}</div>
            </div>
            <br />

            <div>
              <label htmlFor="password">Password :</label>
              <br />
              <input
                type="password"
                name="password"
                value={this.state.input.password}
                onChange={this.handleChange3}
                placeholder="Enter your password"
                id="password"
              />

              <div className="danger">{this.state.errors.password}</div>
            </div>
            <br />

            <div>
              <label htmlFor="Phone">Phone Number:</label>
              <br />
              <input
                type="text"
                name="phone"
                value={this.state.input.phone}
                onChange={this.handleChange4}
                placeholder="Enter your phone number"
                id="phone"
              />

              <div className="danger">{this.state.errors.phone}</div>
            </div>
            <br />

            <input type="submit" value="Submit" className="btn" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;