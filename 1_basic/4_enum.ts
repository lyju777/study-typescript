/**
 * Enum
 */

/**
 * API 요청
 * 상태는 4가지 상태
 *
 * DONE - 요청 완료 상태
 * ERROR - 에러가 생긴 상태
 * LOADING - 로딩상태
 * INITIAL -초기상태
 */
function runWork() {
  let state = "INTITAL";

  try {
    state = "LOADING";
    //작업을 한다.

    state = "DONE";
  } catch (e) {
    state = "ERROR";
  } finally {
    return state;
  }
}

console.log(runWork() === "DONE");

enum State {
  DONE = "DONE",
  LOADING = "LOADING",
  ERROR = "ERROR",
  INITIAL = "INITIAL",
}

function runWork3() {
  let state = State.INITIAL;

  try {
    state = State.LOADING;
    //작업을 한다.

    state = State.DONE;
  } catch (e) {
    state = State.INITIAL;
  } finally {
    return state;
  }
}

console.log(runWork3() === State.DONE);
console.log(runWork3());
