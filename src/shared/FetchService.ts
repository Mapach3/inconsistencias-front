import { getToken } from "../helpers/token-helper";

class FetchService {
  static getHeaders() {
    const headers = new Headers();
    headers.append("Content-Type", "aplication/json");

    const jwtToken = getToken;
    if (jwtToken) {
      headers.append("Authorization", `Bearer ${jwtToken}`);
    }

    return headers;
  }

  static async processResponse<T>(response: Response) {
    if (response.status === 200) {
      return (await response.json()) as T;
    }

    return {} as T;
  }
}

export default FetchService;
