import React from "react";
import { connect } from "react-redux";

class UserDetails extends React.Component {

  storeDetails(){
    this.props.dispatch({
      type: 'SHOW_DETAILS',
      payload: {
        name: this.name.value,
        title: this.title.value,
        location: this.location.value
      }
    })
  }

  render() {
    return (
      <div className="input-group">
            <input ref={elem => this.name = elem} type="text" placeholder="Full Name"/>
            <input ref={elem => this.title = elem} type="text" placeholder="Job Title"/>
            <input ref={elem => this.location = elem} type="text" placeholder="Location"/>
            <button onClick={this.storeDetails.bind(this)}>Store User Info (No Validation Applied)</button>
            <span>Store Object</span> {JSON.stringify(this.props.details)}
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
        details: state.details
    }
}

export default connect(mapStateToProps)(UserDetails);
