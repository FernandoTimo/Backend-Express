import { GenerarID } from './ids';
export const SaveFile = (File, id, path, extensions) => {
  let ext = File.name.split('.').pop().toLowerCase();
  if (extensions && extensions.indexOf(ext) < 0) {
    throw new Error(
      `'${ext}' No es una extension admitida, estas son las extensions: ${extensions.join(
        ' | '
      )}`
    );
  }
  let filename = `${GenerarID(id)}.${ext}`;
  let url = `${path}/${filename}`;
  imagen.mv(`public/${url}`);
  return url;
};
