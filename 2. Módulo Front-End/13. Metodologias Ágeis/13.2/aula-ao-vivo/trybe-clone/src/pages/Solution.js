import React from 'react';

class Solution extends React.Component {
  render() {
    // eslint-disable-next-line
    const { match: { params: { solutionId } } } = this.props;

    return (
      <p>
        {solutionId}
      </p>);
  }
}

export default Solution;
