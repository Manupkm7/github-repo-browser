import axios from "axios";
import React from "react";

const Repositories = (data) => {
  console.log(data.data);

  return (
    <ul class="collection">
      {data.data.length !== 0  && (data?.data || []).map((item) => {
        <li class="collection-item avatar" key={item.id}>
          <img src="images/yuna.jpg" alt="" class="circle" />
          <span class="title">Name: {item.name}</span>
          <p>Forks: {item.forks}</p>
          <a href="#!" class="secondary-content">
            <i class="material-icons">grade</i>
          </a>
        </li>
      })}
    </ul>
  );
};

export default Repositories;
