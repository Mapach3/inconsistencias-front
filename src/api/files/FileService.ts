import { API_URL } from "../../general-config";
import FetchService from "../../shared/FetchService";

class FileService {
  static async uploadRuleFile(formData: FormData) {
    const headers = FetchService.getHeaders();
    const response = await fetch(`${API_URL}/archivo`, {
      headers,
      body: formData,
      method: "POST",
    });

    return FetchService.processResponse(response);
  }
}

export default FileService;
