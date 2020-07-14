import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value,                /* setting value as a props to be futher used in children component */
    //     tags: ["tag1", "tag2", "tag3"]          /* new list object in state */
    // }


    // styles = {            One way to style is define the property as such and give reference to it 
    //     fontSize: 20
    // }


    // renderTags() {                                 /* method to control the state for tags (array) */
    //     if (this.state.tags.length === 0) {
    //         return (
    //             <p>There are no tags!!</p>
    //         );
    //     }
    // }

    // constructor() {                                   /* this is one solution to bind event handlers to 'this'*/
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }


    // handleIncrement = (product) => {                       /* using an arrow function is cleaner than adding a custom constructor and rebinding every evend handler manually */
    //     console.log("Increment Clicked", this)
    //     // this.setState({ value: this.state.value + 1 })   /* this is how we update    state, we must explicitly tell react what is changed*/
    // }                                                    /* pass an object as an argument to setState, and props of the obj will be merged in state or override it if already exist */

    // handleIncrement() {
    //     console.log("Increment clicked", this.state.count)    /* we'll notice that "this" is undefined here, we don't have access to the state proprty */
    // }                                                         /* this can be sloved using bind method or using arrow function for event handling*/

    render() {
        // console.log(this.props)
        return (
            <React.Fragment>
                {/* {this.props.children}                rendering children prop  */}
                {/* <span style={{ fontSize:50 }} className="badge badge-primary m-2">{this.formatCount()}</span><button className="btn btn-secondary m-2">Increment</button>  using styles and css css classes*/}
                {/* <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span><button className="btn btn-secondary m-2">Increment</button>  using styles and css css classes*/}
                <div className="container row">
                    <div className="col-1">
                        <span className={this.badgeClasses()}>
                            {this.formatCount()}
                        </span>
                    </div>
                    <div className="col-11">
                        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary m-2">
                            <i className="fas fa-plus fa-xs"></i>
                        </button>
                        <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary" disabled={this.props.counter.value === 0 ? 'disabled' : ''}>
                            <i className="fas fa-minus fa-xs"></i>
                        </button>
                        <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)} >   {/* raising an event to counters component, and getting a reference to the specific method */}
                            <i className="fas fa-times fa-lg"></i>
                        </button>
                    </div>
                    {/* <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}  getting each list item as a single tag (string) and mapping it to js object and each child in a array or itrator shud have unique key 
                </ul> */}
                    {/* <span>
                    {this.state.tags.length === 0 && "Please create new tags"}             understanding operand ( && ) truthy and falsy in JS 
                </span> */}
                </div>
            </React.Fragment>
        );
    }

    badgeClasses() {                                         /* seperate method to handle badge class w.r.t the count value */
        let badgeClasses = "badge m-2 badge-";
        badgeClasses += this.props.counter.value === 0 ? "warning" : "primary";
        return badgeClasses;
    }

    formatCount() {                                         /* seperate method to handle count value */
        const { value: count } = this.props.counter
        return count === 0 ? 'Zero' : count
    }
}

export default Counter;