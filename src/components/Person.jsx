import React from "react";

const Person = (props) => {
  const { img, job } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="user" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
      <button>Hire</button>
    </div>
  );
};

export default Person;
