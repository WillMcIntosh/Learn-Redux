import React from 'react';

const Comments = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    // get text out of inputs using refs
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  },

  renderComment(comment, i) {
    return(
      <div className="comment" key={i}>
        <strong>{comment.user}</strong>
        {comment.text}
        <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
      </div>
    )
  },

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form onSubmit={this.handleSubmit} ref="commentForm" className="comment-form">
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
});

export default Comments;
