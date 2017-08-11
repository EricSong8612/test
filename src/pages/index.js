import React from 'react';
import Link from 'gatsby-link';

const Flavour = props =>
  <Link to={props.to} >
    <div>
      <img src={props.url} alt={props.name}/>
      <div >{props.name}</div>
    </div>
  </Link>

export default () =>
 <div  >
   <Flavour
     name='black raspberry'
     url='https://s3.amazonaws.com/pinkberry-menu/blackberry.jpg'
     to='blackraspberry'
   />
   <Flavour
     name='power berry'
     url='https://s3.amazonaws.com/pinkberry-menu/strawberry.jpg'
     to='powerberry'
   />
   <Flavour
     name='pomegranate'
     url='https://s3.amazonaws.com/pinkberry-menu/pomegranate.jpg'
     to='pomegranate'
   />
   <Flavour
     name='original'
     url='https://s3.amazonaws.com/pinkberry-menu/original.jpg'
     to='original'
   />
   <Flavour
     name='blood orange'
     url='https://s3.amazonaws.com/pinkberry-menu/bloodorange.jpg'
     to='bloodorange'
   />
 </div>
