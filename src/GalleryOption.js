import React from 'react';

function GalleryOption(props){
    return (
      <li>
        <button id={props.id} onClick={props.clickButton}>
          {props.name}
        </button>
      </li>
    );
}

export default GalleryOption;