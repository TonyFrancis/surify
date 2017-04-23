import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Card, CardHeader } from 'material-ui/Card';

class Activity extends React.Component {
  render() {
    return (
      <div>
        <Link to={'/home'}>Home</Link>
        {this.props.activity.map((elem, index) => {
          return (
            <Card key={index}>
              <CardHeader
                title={elem.value}
              />
            </Card>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activity: state,
  };
};

Activity.propTypes = {
  activity: React.PropTypes.array.isRequired,
};
export default Activity = connect(mapStateToProps)(Activity);
