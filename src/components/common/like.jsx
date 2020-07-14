import React from 'react';

const Like = (props) => {
    let classes = "fa-heart fa"
    if (!props.liked) classes += "r"
    return (
        <i className={classes} onClick={props.onClick} style={{ cursor: "pointer" }} ></i>
    );
}

export default Like;