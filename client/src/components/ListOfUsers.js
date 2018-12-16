import React from 'react';
import propTypes from 'prop-types'

const ListOfUsers = (props) => {
  return (
  <div>

    {props.vehicles.map((car, i) => {
      return (
        <div key={i}>
      <li>{car.year}</li>
      <li>{car.make}</li>
      <li>{car.model}</li>
      <a href="">Details</a>
      <button>Delete</button>
    </div>
      )
    })}
  </div>
  )
};

ListOfUsers.propTypes = {
  vehicles: propTypes.array,

};

export default ListOfUsers;