export const delay = (timeout = 0) =>
  new Promise(resolve => setTimeout(resolve, timeout));

export const getQueryString = name => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = decodeURI(window.location.search.substr(1)).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};
