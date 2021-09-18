import { API_URL } from "../../general-config";
import FetchService from "../../shared/FetchService";

class FileService {
  static async uploadRuleFile(formData: FormData,opcion: number) {
    const headers = FetchService.getHeaders();
    headers.delete("Content-Type");
    const response = await fetch(`${API_URL}/Archivo/procesarArchivoPorArchivo?opcion=${opcion}`, {
      headers,
      body: formData,
      method: "POST",
    });

    return FetchService.processResponse(response);
  }
}

export default FileService;
