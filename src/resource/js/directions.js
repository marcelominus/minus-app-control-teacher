//Importamos CONSTANTES DE DIRECCION
import { IP_SERVER } from "./constants";

//Direccion de URL para el envio de informacion
export const direccion_admin_login = `${IP_SERVER}/api/login/`;

//Direccion de URL para peticion de materias de DOCENTE
export const direccion_admin_inscription = `${IP_SERVER}/api/inscription/inscription-read`;
export const direccion_admin_create_data = `${IP_SERVER}/api/data/data-create`;

//Direccion de URL para petiticion de informacion DOCENTE
export const direccion_admin_read_select = `${IP_SERVER}/api/data/data-read-month`;
export const direccion_admin_read_picker = `${IP_SERVER}/api/data/data-read-unique`;

//Direccion de URL para peticion de Creacion de CLAIM
export const direccion_admin_create_support = `${IP_SERVER}/api/support/support-create`;