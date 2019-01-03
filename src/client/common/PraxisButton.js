import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles/_praxis-button.scss';

const Button = props => {
  let buttonStyles = `button ${props.color}`;

  return (
    <button
      id={props.id}
      onClick={props.onClick}
      style={props.style}
      styleName={buttonStyles}
      type={props.type}
    >
      {props.icon && <img styleName="icon" src={props.icon} />}
      <span>{props.text}</span>
    </button>
  );
};

const options = {
  allowMultiple: true,
};

export default CSSModules(Button, styles, options);
