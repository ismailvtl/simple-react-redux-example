import React from 'react'
import { connect } from "react-redux";

const DisplayLocationComponent = (props) => {
   return ( 
   <fieldset>
    <legend>Component: DisplayLocationComponent</legend>
    <p>This component will display redux store <kbd>location</kbd>: {props.details.location}</p>
    </fieldset>
    );
}
 
function mapStateToProps(state) {
 return {
        details: state.details
    }
}

export default connect(mapStateToProps)(DisplayLocationComponent)