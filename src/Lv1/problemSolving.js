
const func1 = () =>{
    /** N 이하의 자연수 중에서 3의 배수이거나 5의 배수인 수를 모두 합한 값을 반환하는 함수 func1(int N)을 작성하라. N은 10만 이하의 자연수이다.
     *  fun1(16) = 60
     *  func1(34567) = 278812814
     *  func1(27639) = 178254968
     *
     *  */
    const number = 27639;
    let result =0;
    for(let i= 0; i<number; i++ ){
        if(i%3 === 0 || i%5 === 0){
            result+=i
        }
    }
}

const func2 = () =>{
    /** 주어진 길이 N의 int 배열 arr에서 합이 100인 서로 다른 위치의 두 원소가 존재하면 1을, 존재하지 않으면 0을 반환하는 함수 func2(int arr[],int N)을 작성하라.
     *  arr의 각 수는 0 이상 100 이하이고 N은 1000 이하이다.
     *  fun2([1,52,48],3) = 1
     *  func2([50,42],2) = 0
     *  func2([4,13,63,87],4) = 1
     *
     *  */
    let result =0;
    const arr = [52,42];
    const n = 2;
    let sum =0;

    for(let i=0; i<n; i++){
        sum += arr[i];
        if(sum >= 100){
            result = 1
            break;
        }
    }
}

const func3 =() =>{
    /** N이 제곱수이면 1을 반환하고 제곱수가 아니면 0을 반환하는 함수 func3(int N)을 작성하라. N은 10억 이하의 자연수이다.
     *  func3(9) = 1
     *  func3(693953651) = 0
     *  func3(756580036) = 1
     *
     *  */
    let result =0;

    result = Math.sqrt(756580036)
    if(Number.isInteger(result) === true)
        return 1
    else
        return 0;

}

const func4 =() =>{
    /** N 이하의 수 중에서 가장 큰 2의 거듭제곱수를 반환하는 함수 func4(int N)을 작성하라. N은 10억 이하의 자연수이다.
     *  func4(5) = 4
     *  func4(97615282) = 67108864
     *  func4(1024) = 1024
     *
     *  */
    let result =0;

    for( let i= 1024; i>0; i--){
        if(!(i & (i - 1))){
            result = i;
            break;
        }
    }
}

const func5 =() =>{
    /** 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
        별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
     * [제한 조건]
     * n과 m은 각각 1000 이하인 자연수입니다.
     **/

    const a=5;
    const b=3;
    let star = '';
    for(let i=0; i<b; i++){
        star = '';
        for(let j=0; j<a; j++){
            star += '*';
        }
        console.log(star)
    }

    /** 다른 사람 풀이
     *  const row = '*'.repeat(a)
        for(let i =0; i < b; i++){
          console.log(row)
       }
       repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.
     */
}
export const problemSolving = () => {
    const result = 0;

    return result;
}

