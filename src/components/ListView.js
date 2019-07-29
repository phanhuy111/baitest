import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListView extends Component {

  render() {
    return (
      <div className="listview">
        {
          this.props.data.map((a, i) => {
            return (
              <div className="row" key={a}>
                <Link to={`/detail/${i.name}`}>{i.name}</Link>
              </div>
            )
          })

        }
      </div>
    );
  }
}

export default ListView;
