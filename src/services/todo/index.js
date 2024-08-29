import { axiosInstance } from "../../api/axios";

async function create(formData) {
  try {
    const response = await axiosInstance.post("todos/", formData);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function update(formData, id) {
  try {
    const response = await axiosInstance.patch("todos/" + id, formData);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function excluir(id) {
  try {
    const response = await axiosInstance.delete("todos/" + id);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function getOne(id) {
  try {
    const response = await axiosInstance.get("todos/" + id);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function listar() {
  try {
    const response = await axiosInstance.get("todos/");

    return response;
  } catch (error) {
    return error?.response;
  }
}

export const todo = { create, update, listar, excluir, getOne };
