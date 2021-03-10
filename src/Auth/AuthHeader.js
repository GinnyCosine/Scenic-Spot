const GetAuthorizationHeader = () => {
  /* Change to your own AppID and AppKey */
  const AppID = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF';
  const AppKey = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF';
  const GMTString = new Date().toGMTString();
  const hmacsha1 = require('hmacsha1');
  const hash = hmacsha1(AppKey, `x-date: ${GMTString}`);
  const Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${hash}"`;
  return { 'Authorization': Authorization, 'x-Date': GMTString }; 
};

export default GetAuthorizationHeader;
