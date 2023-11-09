import jsonwebtoken from "jsonwebtoken";

const verifyJWT = (token) => {
  return new Promise((resolve,reject) => {
    jsonwebtoken.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if(err){
        return reject(err)
      }
      resolve(decoded)
    })
  })
}

const isLoggedIn = async(req, res, next) => {
  const token =  req.headers["authorization"];
  if(!token){
    return res.redirect("/login");
  }
  try {
    const decodedToken = await verifyJWT(token);
    req.user = decodedToken;
    next();
  } catch (err) {
    return res.redirect("/login");
  }


  const verifyLoginToken = async (token) => {
    try {
      const decodedToken = jsonwebtoken.verify(token, process.env.JWT_SECRET);
      const userId = decodedToken.userId;
      const sessionId = decodedToken.sessionId;

      const dbResult = await db.query('SELECT * FROM sessions WHERE userId = ? AND sessionId = ?', [userId, sessionId])
      const session = dbResult[0];

      if(!session || session.expiration < Date.now()){
        return null;
      }

      return decodedToken;
    } catch (error) {
      return null;
    }
  }
}

const validateSessionId  = async (sessionId, currentSessionId) => {
  const session = currentSessionId[0];
  if(!session || session.expiration < Date.now()){
    return false;
  }

  return true;
}

const refreshJWTToken = async (token) => {
  const decodedToken = verifyToken(token);
  if (!decodedToken) {
    throw new Error('Invalid token');
  }

  const userId = decodedToken.userId;
  const sessionID = decodedToken.sessionID;

  const result = await db.query('SELECT * FROM sessions WHERE user_id = ? AND session_id = ?', [userId, sessionID]);
  const session = result[0];

  if (!session || session.expiration < Date.now()) {
    throw new Error('Invalid session');
  }

  await db.query('DELETE FROM sessions WHERE session_id = ?', [sessionID]);

  const newSessionID = generateSessionID();

  await db.query('INSERT INTO sessions (user_id, session_id, expiration) VALUES (?, ?, ?)', [userId, newSessionID, Date.now() + 60 * 60 * 1000]); // 1 hour

  const payload = {
    userId,
    sessionID: newSessionID,
  };

  const newToken = signToken(payload);

  return newToken;
};


export default isLoggedIn;