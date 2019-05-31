import React from "react";
import { render } from "react-dom";

import "./styles.scss";

const menu = [
  {
    name: "Engineering",
    link: "engineering",
    sub_menu: [
      {
        name: "Data",
        link: "data",
        sub_menu: [
          {
            name: "Science",
            link: "science"
          },
          {
            name: "Operations",
            link: "operations"
          }
        ]
      }
    ]
  },
  {
    name: "Marketing",
    link: "marketing",
    sub_menu: [
      {
        name: "Communication",
        link: "communication",
        sub_menu: [
          {
            name: "Phone",
            link: "phone"
          },
          {
            name: "Email",
            link: "email"
          }
        ]
      }
    ]
  }
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {menu.map(item => (
          item.sub_menu ?
          <Menu name={item.name} link={item.link} sub_menu={item.sub_menu} indentLevel={0}/> :
          <Item name={item.name} link={item.link}/>
        ))}
      </div>
    );
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      hideChild: true
    };
  }

  toggleCollapse() {
    this.setState({ hideChild: !this.state.hideChild });
  }

  calcIndent() {
    let indent = this.props.indentLevel * 25;
    return `${indent}px`;
  }

  render() {
    // collapses any children menu's and their children menu/item components too
    if (this.props.hideChild === true && this.state.hideChild === false) {
      this.setState({ hideChild: true });
    }

    return (
      <div>
        <h1
        onClick={() => this.toggleCollapse()}
        style={{display: this.props.hideChild ? "none" : "block", marginLeft: this.calcIndent()}}
        >{this.props.name}</h1>
        {this.props.sub_menu.map(menu => (
          menu.sub_menu ?
          <Menu name={menu.name} link={menu.link} hideChild={this.state.hideChild} indentLevel={this.props.indentLevel + 1} sub_menu={menu.sub_menu}/> :
          <Item name={menu.name} link={menu.link} hideChild={this.state.hideChild} indentLevel={this.props.indentLevel + 1}/>
        ))}
      </div>
    );
  }
}

class Item extends React.Component {
  calcIndent() {
    let indent = this.props.indentLevel * 25;
    return `${indent}px`;
  }

  render() {
    return (
      <div>
        <h3 style={{display: this.props.hideChild ? "none" : "block", marginLeft: this.calcIndent()}}>
        {this.props.name}
        </h3>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
