
// creamos el componente que rederizará el formulario

import React from 'react'; // llamamos libreria React
import PropTypes from 'prop-types';// //para evaluar prop-types


function Comment ({
  date,name,email,country, age, // recibimos  los props para el componente
}) {
    return (// mostramos los props recibi
      <div>
        <div>
          <p>{date}</p>
        </div>
        <div>
          <p>{name}</p>
        </div>
        <div>
          <p>{email}</p>
        </div>
        <div>
          <p>{country}</p>
        </div>
        <div>
          <p>{age}</p>
        </div>
      </div>
    );
}
Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
export default Comment;
