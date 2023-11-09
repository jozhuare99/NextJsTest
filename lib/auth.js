import jsonwebtoken from 'jsonwebtoken';

export function isAuthenticated(request){
  const token = request.headers['authorization'];
  if(!token){
    return false;
  }
  try {
    const decodedToken = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    console.log(decodedToken);
  } catch (error) {
    return false
  }
  return true
}