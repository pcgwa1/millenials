// Get navigation location depth
function getPathDepth(location) {
  let pathArr = (location || {}).pathname.split('/');
  pathArr = pathArr.filter(n => n !== '');
  return pathArr.length;
}

export default getPathDepth;
