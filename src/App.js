import React, { Component } from 'react';
import Navbar from './components/navbar'
import Counters from './components/counters'
import './App.css';
import { once } from 'lodash';



class App extends Component {

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
  };

  // Understaing Lifecycle Hook: 
  //  1) MOUNTING PHASE

  // 1.1) constructor(props) {                        the constructor is called once & it is the right place to initialize the properties of this class
  //   super(props);
  //   console.log('App-Console', this.props);         
  // }

  // 1.2) componentDidMount() {         this method is called after our component is rendered into the DOM & ia perfect place to make ajax call to get data from the server
  //    ajax call   
  //    this.setState({movies from server})                   
  //   console.log('App-Mounted');
  // };

  //  1.3) render () {                        // All its childrens are also called recursively
  //     console.log('App-Render')
  //   }
  // order of the methods called in the MOUNTING PHASE is constructor > render & its childrens  > componendDidMount


  // 2) Update Phase :  Happens whenever the state or props of the component is changes 
  //  Our entire component tree is rendered i.e a react element is rendered (virtual DOM) not entire DOM !!

  // 3) Unmount Phase : 
  // componentWillUnmount () {       this method is called just before a component is removed from the DOM (usually in the child component)
  //   console.log("counter - Unmount")   react will the compare the old and the new DOM and update the view
  // }



  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }
    counters[index].value--;
    this.setState({ counters })
  };

  handleDelete = (counterId) => {                          /* this is an event handler for onDelete */
    console.log('handle delete invoked', counterId)
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({ counters })
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement} />
        </main>
      </React.Fragment>
    );
  }

}

export default App;
