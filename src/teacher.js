import React, { Component } from 'react';

import Person from './Person';

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log("teach is invocked");
    }
}

export default Teacher;