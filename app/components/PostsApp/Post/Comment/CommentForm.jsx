import React, { Component } from 'react'; // traemo el componente React
import PropTypes from 'prop-types';
import Input from 'react-toolbox/lib/input';// los input de texto
import { Button } from 'react-toolbox/lib/button';//los button
import { fromJS } from 'immutable';// implementamos immutable

class CommentForm extends Component {// le agregamos las caracteristicas de Component

    static propTypes = {
      createComment : PropTypes.func.isRequired,
    }
    static defaultComment = fromJS({// funcion que ajusta los valores por defecto
      date:'',
      name:'',
      email:'',
      country:'',
      age:'',
      //showComment: false,

    });
    state = {// estaso inicial del componente
      commentState : CommentForm.defaultComment,// es el estado por defecto
    };
// creamos las funciones de interaccion
  handleOnChange = (key, value) => {// si algo cambia
    console.log(key,value); // vemos los valores recibidos
    //creamos un comment del cual le copiamos el estado
    //inicial ajustanadole los valores recibidos
    const commentState = this.state.commentState.set(key,value);
    this.setState({commentState});// ajustamo el valor inicial al nuevo comentario
  }
  // handleShowComment = () =>{
  //   console.log("entramos a la funcion mostrar commentarios");
  //   this.setState({showComment: !this.state.showComment});
  //   console.log(this.state.showComment);
  //   //                   !this.state.showComment.get());
  // }
  handleCreateComment = () => {
    const { createComment } = this.props; // <<< No sé que estoy haciendo aqui.
    // creo que se declara como una funcion de props que recibe comentarios

    // ajusto en el nuevo comment la fecha actual de creacion
    const comment = this.state.commentState.set('date',Date());
    console.log(comment);
    createComment(comment);// le envio el comentario
  };

  isValid = () =>{
    let valid = true;
    //para ver el estado
    console.log(this.state.commentState.valueSeq().toJS());
    this.state.commentState.valueSeq().forEach(i => { valid = i !== ''});
    console.log(valid);
    return valid;
  };
  render(){
    console.log(this.state.commentState.toJS());
    return( // retornamos una funcion
      <div>
        <div>
          <Input
            label = "Name" //identificador
            type = "text"// tipo de input
            required
            value={this.state.commentState.get('name')}
            //con bind le digo que el name es el name
            //que esta por fuera de la funcion
            onChange ={this.handleOnChange.bind(this,'name')}
          />
        </div>
        <div>
          <Input
            label = "Email"
            type = "email"
            required
            value ={this.state.commentState.get('email')}
            onChange={this.handleOnChange.bind(this,'email')}
          />
        </div>
        <div>
          <Input
            label="Country"
            type="text"
            value={this.state.commentState.get('country')}
            disabled={this.state.name === ''}
            onChange={this.handleOnChange.bind(this, 'country')}
          />
        </div>
        <div>
          <Input
            label="Age"
            type="number"
            value={this.state.commentState.get('age')}
            disabled={this.state.name === ''}
            onChange={this.handleOnChange.bind(this, 'age')}
          />
        </div>
        <Button
          icon = "send"
          label= "Comment"
          onClick={this.handleCreateComment}
          disabled={!this.isValid()}
        />
      </div>

    );
  }
}
export default CommentForm;
// exportamos para poder llamaralo desde otro componente
