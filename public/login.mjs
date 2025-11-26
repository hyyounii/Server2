function login() {
  const userid = document.getElementById("userid").value;
  const password = document.getElementById("password").value;

  fetch("http://127.0.0.1:8080/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userid,
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token == undefined) {
        alert(data.message || "아이디와 비밀번호를 확인하세요.");
        return;
      } else {
        // 로그인 성공
        localStorage.setItem("token", data.token);
        location.href = "post.html";
        return;
      }
    })
    .catch((error) => {
      console.error("에러 발생:", error);
    });
}

function goSignup() {
  location.href = "signup.html"; // 회원가입 페이지로 이동
}
