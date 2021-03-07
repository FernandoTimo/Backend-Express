import { customID } from './Identificadores';
import fs from 'fs';
/**
 *  Guarda cualquier tipo de archivos en la ruta indicada, los renombra con un id por de 6 dígitos y mantiene la extension del archivo
 * @param {{ files: File }} files Archivo proveniente de request.files, este será procesado y almacenado en la ruta indicada o en 'public/files'
 * @param {{ path:String, validExt:[String], maxSize: Kb }} opts Path, extensiones aceptadas y tamaño máximo en kilobits del archivo.
 */
export const SaveFile = async (files, opts) => {
  if (typeof files !== 'object' || !Object.entries(files).length)
    throw new TypeError('Invalid object');
  opts.path = opts.path ?? 'public/files';
  const paths = Object.entries(files).map((file) => {
    const ext = file[1].name.split('.').pop().toLowerCase();
    if (opts.validExt && !opts.validExt.includes(ext))
      throw new Error('Invalid extension');
    const size = file[1].size / 1000;
    if (opts.maxSize && size > opts.maxSize) throw new Error('Invalid size');
    const path = `${opts.path}/${customID()}.${ext}`;
    if (fs.existsSync(path)) throw new Error('File already exist');
    !fs.existsSync(opts.path) && fs.mkdirSync(opts.path, { recursive: true });
    file[1].mv(path);
    return path;
  });
  return paths.length === 1 ? paths.toString() : paths;
};
