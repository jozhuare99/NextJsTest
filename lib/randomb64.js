

export default function generateRandomKey(length){
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321-/+=';
  let randomString = '';
  for(let i = 0; i < length;i++){
    randomString += characters[Math.floor(Math.random() * characters.length)];
  }
  return randomString;
};