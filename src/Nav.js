import React from 'react';
import GalleryOption from './GalleryOption';

function Nav(props){
    const buttonArray = [{id: 'water', buttonName: 'Water'},  {id: 'flower', buttonName: 'Flower'}, {id: 'sun', buttonName: 'Sun'}, {id: 'birds', buttonName: 'Birds'}]
    return (
      <nav>
        <ul>
            {buttonArray.map(buttonInfo => {
                return <GalleryOption id={buttonInfo.id} clickButton={props.changeArt} name={buttonInfo.buttonName}/>
                 
            })}
            {/* <GalleryOption id={'candy'} clickButton={props.changeArt} name={'Candy'}/>
            <GalleryOption id={'flower'} clickButton={props.changeArt} name={'Flower'}/>
            <GalleryOption id={'monkey'} clickButton={props.changeArt} name={'Monkey'}/> */}
        </ul>
      </nav>
    );
}

export default Nav;