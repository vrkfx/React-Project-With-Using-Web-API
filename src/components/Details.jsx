import React from "react";

const Details = (props) => {
    return (
        <div>
            {props.responseObj.cod === 200 ?
                <div>
                    <h3>{props.responseObj.name}</h3>
                    <h3>It's {props.responseObj.main.temp} degrees with {props.responseObj.weather[0].description}</h3>
                </div>
                : null}
        </div>

    )
}

export default Details;


