import { useState } from "react";

function listingsData() {
  return fetch("/api/listings")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

async function getShowData(showId) {
  return fetch(`/api/listings/${showId}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

async function getEditData(showId) {
  return fetch(`/api/listings/${showId}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

async function deleteData(delId) {
  return fetch(`/api/listings/${delId}`)
    .then((res) => {
      res.json();
      console.log(delId);
    })
    .then((data) => {
      return data;
    });
}

async function getReviewData(id) {
  return fetch(`/api/listings/${id}/reviews`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
}

export { listingsData, getShowData, getEditData, deleteData, getReviewData };
