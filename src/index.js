// Default exports -> import .... from '';
// Named exports -> impirt {...} from '';
import React from 'react';
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
// import Teacher, { promote } from './learnings/Teacher'   Importing Teacher class and { promote } fun from the module
//import App from './App'
//import Counters from './components/counters'
import '../src/index.css'
import Movies from './components/movies'





// const teacher = new Teacher();
// teacher.walk()
// teacher.teach()
// promote()

ReactDOM.render(<Movies />, document.getElementById("root"))



