import React from 'react'
import { connect } from "react-redux";

const DisplayNameComponent = (props) => {
  return ( 
    <fieldset>
    <legend>Component: DisplayNameComponent</legend>
    <p>This component will display redux store <kbd>name:</kbd> {props.details.name}</p>
    </fieldset>
  );
}

function mapStateToProps(state) {
 return {
        details: state.details
    }
}

export default connect(mapStateToProps)(DisplayNameComponent)