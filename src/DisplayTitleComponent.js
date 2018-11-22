import React from 'react'
import { connect } from "react-redux";

const DisplayTitleComponent = (props) => {
   return ( 
   <fieldset>
    <legend>Component: DisplayTitleComponent</legend>
    <p>This component will display redux store <kbd>title:</kbd> {props.details.title}</p>
    </fieldset>
);
}
 
function mapStateToProps(state) {
 return {
        details: state.details
    }
}

export default connect(mapStateToProps)(DisplayTitleComponent)