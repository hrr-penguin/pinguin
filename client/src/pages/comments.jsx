import React from 'react';
import Util from '../service.js';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: null
    };

  }

  componentWillMount() {
    Util.getComments()
      .then(function(data){
        this.setState({comments: data});
        console.log('comments data: ', data);
      });
  }

  render() {
    let count = 0;
    let comments = this.state.comments;
    return (
      <div>
          {
            comments.map( (comment) => {
              return (
                <div className="comment" key={count++}>
                  <ul >
                    <li>{comment.comment}</li>
                  </ul>
                </div>
              )
            })
          }
      </div>
    )
  }
}

export default Comments;