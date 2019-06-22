import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions/';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id,  formValues)
  }

  render () {
    const stream = this.props.stream

    if (!stream) {
      return <div>loading</div>;
    }
    return (
      <div>
        <h3>edit stream</h3>
        <StreamForm initialValues={ _.pick(stream, 'title', 'description') } onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

//don't forget that ownProps is available!!!
//taking component level state and mapping it to store level
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchStream, editStream } )(StreamEdit);