import React, { Component } from "react";

export default class TableComponent extends Component {
  render(props) {
    return (
      <table border='1' cellPadding='10px 5px' cellSpacing='0'>
        <thead>
          <tr>
            {this.props.headerArray.map(ele => {
              return (
                <td>
                  <strong>{ele}</strong>
                </td>
              );
            })}
          </tr>
        </thead>

        <tbody>{this.props.children}</tbody>
      </table>
    );
  }
}
