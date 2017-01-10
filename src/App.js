import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: "this is the state text",
      cat: 0
    }
  }
  update(e) {
    this.setState({txt: e.target.value})
  }
  render() {
    let txt = this.state.txt
    return (
      <div>
        <h1>{txt}</h1>
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
      </div>
    )
  }
}

const Widget = (props) =>
 <input type="text" onChange={props.update} />

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired,
}

App.defaultProps = {
  txt: "this is the default text"
}

//const App = () => <h1>Hello Stateless</h1>

export default App