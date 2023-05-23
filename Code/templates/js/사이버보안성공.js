/*!
* Start Bootstrap - Simple Sidebar v6.0.6 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector('#sidebarToggle');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', event => {
      event.preventDefault();
      document.body.classList.toggle('sb-sidenav-toggled');
    });
  }

});

function clickBtn() {
  const number = document.getElementsByName("number");
  let flag = true;
  for (let i = 0; i < number.length; i++) {
    if (number[i].checked == false) {
      flag = false;
    }
  }
  let result;
  if (flag == true) {
    result='/result/요구만족.html';
  } else {
    result = '/result/사이버보안성공.html';
  }
  // 결과를 다음 페이지로 전달
  window.location.href =  result;
}
// URL에서 쿼리 매개 변수 읽기
const urlParams = new URLSearchParams(window.location.search);
const result = urlParams.get("result");

// 결과 표시
const resultElement = document.getElementById("output");
resultElement.textContent = result;
 
  