import { API_URL } from "../../general-config";
import FetchService from "../../shared/FetchService";

class LoginService{

    static async logInWithUsernameAndPassword( usuario:string, contraseña: string){
        const headers = FetchService.getHeaders();
        const body = JSON.stringify({usuario: usuario, contraseña: contraseña});
        const response = await fetch(`${API_URL}/Login/login`,{
            headers,
            body,
            method: 'POST'
        });

        return FetchService.processLoginResponse(response);
    }


}

export default LoginService;