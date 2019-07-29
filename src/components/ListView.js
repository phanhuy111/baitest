import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListView extends Component {

  render() {
    return (
      <div className="listview">
        {
          this.props.data.length !== 0 && this.props.data.length !== undefined ? (this.props.data.map((a, i) => {
            return (
              <div className="row" key={i}>
                <Link to={`/detail/${a.name}`}>{i.name}</Link>
              </div>
            )
          })): 'NO Data Available'
        }
      </div>
    );
  }
}

export default ListView;
