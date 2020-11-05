import service from "./httpService";
import { apiUrl } from "../config.json";

export function getGenres() {
  return service.get(`${apiUrl}/genres`);
}
