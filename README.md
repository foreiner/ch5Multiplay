# 김종하 멀티서버 개인과제
## 게임 인스턴스 생성

    initServer()
    .then(() => {
        server.listen(config.server.port, config.server.host, () => {
        console.log(`서버가 ${config.server.host}:${config.server.port}에서 실행 중입니다.`);
        console.log(server.address());
        createGameSession();
        });

1개의 인스턴스를 만들어야 함으로 그냥 서버 시작할때 생성함.

## 유저 접속

    export const addUser = (socket, uuid) => {
    const user = new User(uuid, socket, uuid,uuid,0,0,0);
    console.log(userSessions);
    userSessions.push(user);
    return user;
    };

유저 생성과 동시에 세션에 푸시해서 넣어버림
## 유저 위치 업데이트

    const timeDiff = (Date.now() - this.lastUpdateTime + latency) / 1000; 
    
    const distance = this.speed * timeDiff;
    
    const direcitonX = this.x !== this.lastX ? Math.sign(this.x - this.lastX) : 0;
    const direcitonY = this.y !== this.lastY ? Math.sign(this.y - this.lastY) : 0;
    return {
      x: this.x + direcitonX * distance,
      y: this.y + direcitonY * distance,
    };

핑을 사용해 계산한 레이턴시로 대충 미래를 그렸다.
10개를 접속해도 그냥 똑같아 보이길래 그냥 this.x랑 this.y 쓰려다가 다시 넣었다.

## 문제점
### npm init -y 부터 시작하기를 실패했다.
 - 파일 구조만 가지고 처음부터 만들기 시작했다.
 - 버그 리스트가 한 화면에 안들어오자 강의 내용에서 조금씩 가져다가 넣었다.
 - 버그가 사라졌는데 작동도 안되었다.
 - 금요일 새벽 3시쯤에 강의 코드 통쨰로 복사해서 필수 기능이 작동하도록 수정했다.

### 의문스러운 이해도
 - 아무튼 처음부터 하려고 시도한 탓인지 강의 코드에서 바로 찾아서 고칠 수 있었지만 이것이 강의에서 보여준 코드 자체에 익숙해진건지 프로토나 클래스에 대한 이해도가 높아진건지 알수가 없다.
 - DB 연동을 하지 못했고 애초에 클라이언트를 종료했을때 캐릭터가 그대로 남아있었다. end나 close 이벤트로 확인하면 될꺼 같았는데 애초에 게임을 꺼버려도 계속 핑을 주고받을수 있었다. 아니면 핑도 제대로 작동을 안하고 있는 거거나.
 - 아무튼 게임을 끄고 다시켜도 그자리에 남아있었다.