import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';

class PostForm extends Component {

  static propTypes = {
    createPost: PropTypes.func.isRequired,
  };

  state = {
    title: '',
    body: '',
  };
  handleShowComment = () =>{
    console.log("entramos a la funcion mostrar commentarios");
    //const showComment = this.state.showComment.set(
    //                   !this.state.showComment.get());
  }

  onTitleChange = (title) => {
    // this.setState({ title: title });
    this.setState({ title });
  }

  onBodyChange = (body) => {
    this.setState({ body });
  }

  handleCreatePost = () => {
    const { createPost } = this.props;
    const post = Object.assign({}, this.state, { date: Date() });
    // console.log(post);
    createPost(post);
  };

  render() {
    return (
      <div>
        <Input
          label="Title"
          onChange={this.onTitleChange}
          value={this.state.title}
        />
        <Input
          label="Body"
          onChange={this.onBodyChange}
          value={this.state.body}
        />
        <Button
          icon="add"
          label="Create post"
          onClick={this.handleCreatePost}
        />
        <Button
          icon = "visibility"
          label = "Ver"
          onClick={this.handleShowComment}
          //disabled={!this.isValid()}
        />
      </div>
    );
  }
}

export default PostForm;
