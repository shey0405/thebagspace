import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { receiverFetch } from '../../actions';
import ReceiverListItem from './ReceiverListItem';

class ReceiverList extends Component {
  componentWillMount() {
    this.props.receiverFetch();

  }

  renderItem(receiver) {
    return <ReceiverListItem receiver={receiver} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.receivers}
        renderItem={this.renderItem}
      />
    );
  }
}

const mapStateToProps = state => {
  const receivers = _.map(state.receivers, (val, uid) => {
    return { ...val, uid };
  });

  return { receivers };
};

export default connect(mapStateToProps, { receiverFetch })(ReceiverList);
