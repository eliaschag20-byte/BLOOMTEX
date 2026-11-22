// Resuelve rutas de /public respetando el base '/BLOOMTEX/' de Vite.
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
