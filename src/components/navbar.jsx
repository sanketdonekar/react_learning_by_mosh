import React from 'react'

// class Navbar extends Component {
//     render() {
//         return (
//             <div>
//                 <nav className="navbar navbar-light bg-light">
//                     <a className="navbar-brand" href="">
//                         Navbar
//                     <span className="badge badge-pill badge-secondary m-2">{this.props.totalCounters} // this.props works in class components!! 
//                         </span>
//                     </a>
//                 </nav>
//             </div>
//         );
//     }
// }

// export default Navbar;

// if the component has only single render method n doesn't have any helper methods, state, 
// instead we have only props. so this can be converted into stateless functional component 

// Note : We can not use lyfe-cycle hooks in state-less functional component, its only used in class component



const Navbar = /*(props)*/({ totalCounters }) => {             /*using object distructuring to distructure props argument */
    return (
        <div>
            <nav className="na vbar navbar-light bg-light">
                <a className="navbar-brand ml-2" href="">
                    Navbar
                    <span className="badge badge-pill badge-secondary m-2">{totalCounters}{/* {props.totalCounters} */} {/*for functional component, we use props.object n pass the object as a argurment to the function */}
                    </span>
                </a>
            </nav>
        </div>
    );
}

export default Navbar;


