import React,{ Component } from 'react'; // ademas agregamos Component
import PropTypes from 'prop-types';
import style from './style';
import { Button } from 'react-toolbox/lib/button';//agregamos para el boton
import Comment from './Comment/Comment';
import CommentForm from './Comment/CommentForm';
//import About from '../About/About';

// ahora Post ya no sera estático

class Post extends Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
  }
  state = {
    className: '',// tipo string
    comments : [],//tipo array
    commentsCount: 0,//contamos cuanto comentarios hay
    showComment: false,
  };
  handleShowComment = () =>{
     console.log("entramos a la funcion mostrar commentarios");
     this.setState({showComment: !this.state.showComment});
     console.log(this.state.showComment);
     //                   !this.state.showComment.get());
   }

  handleCreateComment = (comment) => {// para crear un comenario
    const commentItem = (
      <Comment
        key={this.state.commentsCount}//asignamos a key en valor de contador
        name={comment.get('name')}
        email={comment.get('email')}
        country={comment.get('country')}
        age={comment.get('age')}
        date={comment.get('date')}

        //{ ...comment}
      />
    );
    // creamos el especie de array donde vamos
    //a guardar los comentarios
    const comments = this.state.comments.concat(commentItem);
    // donde le decimos que tome el valor del estado inicial
    // de .comments y lo concatene con el nuevo item comentario

    this.setState({
      comments,
      commentsCount: this.state.commentsCount+1,
    });
  };

  handleOnClick = () => {
    this.setState(
      { // si el className es igual al condition1 entonce style.condition2
        //si no igual a condition1
        className:this.className===style.condition1 ?
          style.condition2 : style.condition1,
      },
    );
  };

  render() {
    //vemos la cantidad de cometarios
    console.log(this.state.comments);
    const { body }=  this.props;
    return (
      <div className={this.state.className}>
        <h1 className={style.h1Class}>
          {this.props.title}
        </h1>
        <div>
          {body || (<About />)}
        </div>
        {
          this.state.showComment ?
          this.state.comments
          : null
        }
        {
          this.state.commentsCount < 1 ?
          'This post has not comments'
          : null
        }
        <div>
          <Button
            icon = "visibility"
            label = "Ver"
            onClick={this.handleShowComment}
            disabled={this.state.commentsCount < 1 }
          />
        </div>

        <CommentForm
          createComment={this.handleCreateComment}
        />
        {/* {this.state.comments} */}

      </div>
    );

  }

}


// const Post = ({ title, body, date }) => (
//   <div>
//     <h1 className={style.h1}>{title}</h1>
//     <h3>{date}</h3>
//     <p>{body}</p>
//   </div>
// );
//
// Post.propTypes = {
//   title: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
// };

export default Post;
