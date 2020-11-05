import service from "./httpService";
import { apiUrl } from "../config.json";

const endpoint = `${apiUrl}/movies`;

export function getMovies() {
  return service.get(endpoint);
}

export function getMovie(id) {
  return service.get(`${endpoint}/${id}`);
}

export function deleteMovie(id) {
  return service.delete(`${endpoint}/${id}`);
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return service.put(`${endpoint}/${movie._id}`, body);
  }

  return service.post(endpoint, movie);
}
