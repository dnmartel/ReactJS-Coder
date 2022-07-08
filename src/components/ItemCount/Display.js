import React from 'react';

const style = {
    h3: {
        margin: "0 1em"
    }

}


const Display = ({ valor }) => {
    return (
        <h3 style={style.h3} >
            {valor}
        </h3>
    );
}

export default Display;
