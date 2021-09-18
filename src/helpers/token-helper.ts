export const getToken: string | undefined =
  localStorage.getItem("InconsistenciasAPP.JWT") || undefined;

  
  export const usuario = localStorage.getItem("InconsistenciasAPP.Usuario");
  
  export const getUsuario: string | undefined = usuario || undefined;
  
