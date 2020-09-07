Server Check Discord Bot
=============

# 사용법


DataSet.json 을 아래 형태로 작성
<pre>
   <code>
   {
    "token" : "%token%", //디스코드 토큰아이디
    "ID" : "%channel ID%", //채널 ID
    "URL" : "%URL%" //서버의 상태를 확인할 URL
   }
   </code>
  
</pre>

루트 폴더에서 터미널 실행 후 아래 명령어 실행
<pre>
    <code>
    npm start
    </code>

</pre>

### 주의
단순히 서버의 루트만 보낼 것이 아니라.. 단순히 http status code인 200을 반환하는 라우팅을 만들어야 함.

#### express(Node.js) 예시

<pre>
   app.get('/check', (req, res) => {
  
  res.status(200);
  res.end();

  
}) 
</pre>
이때 URL은 (route)/check 형태임.
