export const encodeUrlParams = (params) => 
  Object.entries(params).map(item => item.map(encodeURIComponent).join("=")).join("&");