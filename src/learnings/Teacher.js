import Person from './Person'

export function promote() { console.log("Checking function import") }

class Teacher extends Person {
    constructor(name, degree) {
        super(name)
        this.degree = degree;
    }

    teach() {
        console.log("Teacher is teaching")
    }
}

export default Teacher;