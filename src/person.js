import React, { Component } from 'react';

class Person extends Component {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("walk method is invoked");
    }
}

export default Person;