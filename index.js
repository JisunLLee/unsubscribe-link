
const userLang = getUserLang();
Lang = {
    lng: "en",
    debug: true,
    resources: {
      ko: {
        translation: {
          title: "[DuelNet] Email 수신거부",
          content: "좋은 하루 되세요",
          btn_unsubscribe: "수신거부"
        }
      },
      en: {
        translation: {
          title: "[DuelNet] Email unsubscribe",
          content: "Are you sure unsubscribe?",
          btn_unsubscribe: "unsubscribe"
        }
      },
      id: {
        translation: {
          title: "[DuelNet] Berhenti berlangganan email",
          content: "Apakah Anda ingin berhenti berlangganan?",
          btn_unsubscribe: "Memantul"
        }
      }
    }
};


updateContent(userLang);

function updateContent(userLang) {
  document.getElementById("title").innerHTML = Lang.resources[userLang].translation.title;
  document.getElementById("content").innerHTML = Lang.resources[userLang].translation.content;
  document.getElementById("btn_unsubscribe").innerHTML = Lang.resources[userLang].translation.btn_unsubscribe;
}

function getUserLang(){
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


