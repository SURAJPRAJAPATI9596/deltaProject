import { useState } from "react";

function listingsData() {
  return fetch("http://localhost:8080/api/listings")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

async function getShowData(showId) {
  return fetch(`http://localhost:8080/api/listings/${showId}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

async function getEditData(showId) {
  return fetch(`http://localhost:8080/api/listings/${showId}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

async function deleteData(delId) {
  return fetch(`http://localhost:8080/api/listings/${delId}`)
    .then((res) => {
      res.json();
      console.log(delId);
    })
    .then((data) => {
      return data;
    });
}

export { listingsData, getShowData, getEditData, deleteData };
