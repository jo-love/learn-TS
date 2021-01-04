enum LanguageCode {
  korean = "ko",
  english = "en",
  spanish = "es",
}

const code: LanguageCode = LanguageCode.korean;

enum Answer {
  Yes = "Y",
  No = "N",
}

function yesOrNo(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("딩동댕");
  } else if (answer === Answer.No) {
    console.log("땡");
  }
}

yesOrNo(Answer.Yes);
yesOrNo("Yes"); //오류발생. 이넘을 사용했기 때문에 이념의 데이터만 넣어야한다.
 