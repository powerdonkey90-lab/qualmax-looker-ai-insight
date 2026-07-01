const insightData = {
  score: 90,
  grade: "A GRADE · STABLE",
  summary: [
    "🟢 오늘 업무는 전일 대비 변화가 없습니다.",
    "🟡 이번주 업무는 월 기준으로 집계됩니다.",
    "🏆 NEPTUNE 프로젝트가 가장 높은 비중입니다.",
    "👤 이정욱 P 담당자의 업무 비중이 가장 높습니다.",
    "⚠ 설계 업무 비중이 70%입니다."
  ],
  action: [
    "NEPTUNE 프로젝트 진행 현황을 우선 점검하세요.",
    "담당자별 업무 편중 여부를 확인하세요.",
    "신규 프로젝트 업무 등록 현황을 검토하세요."
  ],
  lastUpdate: new Date().toLocaleString("ko-KR")
};

function render() {

  document.querySelector(".score").innerText =
    insightData.score;

  document.querySelector(".grade").innerText =
    insightData.grade;

  const summary =
    document.getElementById("summary-list");

  summary.innerHTML = "";

  insightData.summary.forEach(item => {

    const li = document.createElement("li");

    li.innerText = item;

    summary.appendChild(li);

  });

  const action =
    document.getElementById("action-list");

  action.innerHTML = "";

  insightData.action.forEach(item => {

    const li = document.createElement("li");

    li.innerText = item;

    action.appendChild(li);

  });

  document.getElementById("last-update").innerText =
    "Last Update : " + insightData.lastUpdate;

}

render();
