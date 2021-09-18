export enum ClientRoutes {
  DASHBOARD = "/",
  LOGIN = "/login",
  LOGOUT = "/logout",

  IMPORTAR = "/importar",
  ARCHIVOS = "/archivos",
}

export enum TipoProcesamiento {
  REGLAS_REDUNDANTES = 'ReglasRedundates',
  REGLAS_CONFLICTIVAS = 'ReglasConflictivas',
  REGLAS_INCENOTRAS = 'ReglasIncluidasEnOtras',
  REGLAS_CONDICIONESSI = 'CondicionesSiInnecesarias',
}

export const TipoProcesamientoLabel = {
  [TipoProcesamiento.REGLAS_REDUNDANTES]: "Reglas Redundantes",
  [TipoProcesamiento.REGLAS_CONFLICTIVAS]: "Reglas Conflictivas",
  [TipoProcesamiento.REGLAS_INCENOTRAS]: "Reglas Incluidas en Otras",
  [TipoProcesamiento.REGLAS_CONDICIONESSI]: "Condiciones Si Innecesarias"
}
