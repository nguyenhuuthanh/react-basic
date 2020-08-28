import React from 'react';

class ComponentState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      name: 'ReactJS',
    };

    // This binding is necessary to make `this` work in the callback
    // https://reactjs.org/docs/handling-events.html
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  /**
   * We use setState to update local state
   */
  handleChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <section>
        <h1>Hello, Components and Props</h1>
        <h2>Now it is {this.state.date.toLocaleDateString()}.</h2>
        <input
          value = {this.state.name}
          onChange = {this.handleChangeName}
        />
      </section>
    );
  }
}

export default ComponentState;