import axios from "axios";
export const baseUrl = "https://elearning-hub-boboc1998.vercel.app";

export const getAll = async (url) => {
  const res = await fetch(`${baseUrl}/${url}`, {
    method: "GET",
  });
  const data = await res.json();
  return data;
};

export const getFetchData = async (url, token) => {
  const res = await fetch(`${baseUrl}/${url}`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });

  const data = await res.json();
  return data;
};

export const postData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(post),
  });

  const data = await res.json();
  return data;
};

export const formDataPost = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/${url}`, {
    method: "POST",
    headers: {
      Authorization: token,
    },
    body: post,
  });

  const data = await res.json();
  return data;
};

export const putData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/${url}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(post),
  });

  const data = await res.json();
  return data;
};

export const patchData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/${url}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(post),
  });

  const data = await res.json();
  return data;
};

export const deleteData = async (url, token) => {
  const res = await fetch(`${baseUrl}/${url}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  const data = await res.json();
  return data;
};

export const uploadFile = async (url, file, token) => {
  const res = await fetch(`${baseUrl}/${url}`, {
    method: "POST",
    body: file,
  });

  const data = await res.json();
  return data;
};
