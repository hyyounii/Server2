function signup() {
  const userid = document.getElementById("userid").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const url = document.getElementById("url").value;

  fetch("http://127.0.0.1:8080/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userid,
      password,
      name,
      email,
      url,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(JSON.stringify(data, null, 2));
      // 이미 존재하는 회원일 때
      if (JSON.stringify(data).includes("이미")) {
        alert("이미 가입된 회원입니다. 로그인 페이지로 이동합니다.");
        location.href = "index.html";
        return;
      }
      // 회원가입 성공했을 때
      if (data.token != undefined) {
        localStorage.setItem("token", data.token); // ← 토큰 저장
        alert("회원가입이 완료되었습니다!");
        location.href = "index.html"; // 로그인 페이지로 이동
        return;
      }
    })
    .catch((error) => {
      console.error("에러 발생:", error);
    });
}

// fetch 사용해서 token넘기기
