// export {getUserLang};


export default function getUserLang(){
  let userLang = navigator.language;

  switch (userLang) {
    case "ko-KR":
    case "ko":
      userLang = "ko";
      break;
    case "en-US":
    case "en":
      userLang = "en";
      break;
    case "id-ID":
    case "id":
      userLang = "id";
      break;
    default: userLang = "en";
  }
  return userLang
}
