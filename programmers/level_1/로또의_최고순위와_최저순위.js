function solution(lottos, win_nums) {
  var answer;
  var rank = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };
  var zeroCnt = lottos.filter((v) => v === 0).length;
  var cnt = 0;

  // 일치하는 숫자의 개수 구하기
  for (var a of win_nums) {
    for (var b of lottos) {
      if (a == b) {
        cnt++;
      }
    }
  }

  // 최고 순위 = [일치하는 숫자의 개수 + 0의 개수]
  // 최저 순위 = [일치하는 숫자의 개수]
  answer = [rank[cnt + zeroCnt], rank[cnt]];
  return answer;
}
