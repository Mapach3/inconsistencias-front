import { getToken } from "../helpers/token-helper";
import { ResponseGenericApi } from "../models/models";

class FetchService {
  static getHeaders() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const jwtToken = getToken;
    if (jwtToken) {
      headers.append("Authorization", `Bearer ${jwtToken}`);
    }

    return headers;
  }

  static async processResponse(response: Response) {
    const apiResponse: ResponseGenericApi = await response.json();

    if (apiResponse.codeError === "0"){
      return apiResponse;
    }else{
      throw new Error(`${apiResponse.errorMessage} - Error ${apiResponse.codeError}`);
    }
  }
  
  static async processLoginResponse(response: Response){
    debugger;
    if (response.status === 200){
      return await response.json() as ResponseGenericApi;
    }

    if (response.status === 401){
      throw new Error("Credenciales Inválidas");
    }
  }
}

export default FetchService;
