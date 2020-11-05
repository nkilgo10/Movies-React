import service from "./httpService";
import { apiUrl } from "../config.json";

const endpoint = `${apiUrl}/users`;

export function register(user) {
  return service.post(endpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
