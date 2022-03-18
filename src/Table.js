import React from "react";
import "./Table.css";
class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    console.log(localStorage.getItem("Outputdata"));
    var itemsdata = localStorage.getItem("Outputdata");
    var itemsdetails = JSON.parse(itemsdata);
    this.setState({
      items: itemsdetails,
    });
  }
  render() {
    return (
      <div id="Table">
        <table className="table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone Number</th>
            </tr>

            {this.state.items.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;