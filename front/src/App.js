import './App.css';
import sentence_home from './default.png';
import sentence_input from  './input.png';
import sentence_result from './result.png';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-dark">
        <div className="nav-item">Home</div>
        <div className="nav-item">문장 오류 검사하기</div>
        <div className="nav-item">Help</div>
        <div class="nav-link dropdown-toggle nav-item" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          개발자의 다른 페이지 구경
        </div>
      </nav>
      <header className="App-header">
        <div className="header">
          <p>딥러닝을 이용한 문장의 오류 판단기</p>
        </div>
        <p className="info">아래 버튼을 눌러 이동하세요.</p>
        <button type="button" class="btn btn-primary btn-lg" >이동하기</button>
  
      </header>
      <section className="section_disply">
        <p className="title">문장의 오류 판단기</p>
        <p>아래 박스에 입력하세요.</p>
        {/* <div className="input_box"></div> */}
        <div class="input-group mb-3">
          <input type="text" class="input_box" placeholder=" 문장을 입력하세요." aria-label="Recipient's username" aria-describedby="button-addon2" />
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-primary section_btn" type="button">검사하기</button>
        </div>
      </section>

      <footer className="help_disply">
        <p className="help_title">딥러닝을 이용한 문장의 오류판단기란?</p>
        <p>사용자가 입력한 문장 내에서 문법성 오류의 존재 여부를 딥러닝 모델을 통해 판단할 수 있는 프로그램입니다.</p>
        <div className="help_dec">
          <h5>💡 학습 방법 </h5>
          <p >문법성 판단에 적합한 사전학습된 모델 중 정량적 평가를 통하여 사전학습된 딥러닝 모델을 선택하였습니다.
            또한 문법성 판단 말뭉치인 CoLA(Corpus of Linguistic Acceptability) 데이터셋에 존재하는 오류를 
            5가지(구문오류, 형태오류, 의미오류, 시제오류, 오타오류)로 설정하였습니다.
            <br />
            선정된 딥러닝 모델에 두 가지 방법의 미세조정을 실시하였습니다.
            </p> 
            <p>
            1. 국립국어원 한국어 기초 사전의 예문 데이터를 크롤링하여 약 63만 문장을 도출 후 딥러닝 모델에 정문 추가 학습 진행
            <br />
            2. CoLA 데이터셋을 통하여 문장의 오류 분류를 위한 학습을 진행
            </p> 
            <p>
            각 모델에 대한 CoLA 데이터 셋의 문장의 오류 결과를 정성평가 하여 딥러닝 모델을 최종 선정하였습니다.
            마지막으로 각 모델의 정량적 평가의 비중을 설정 후 앙상블을 통해 모델의 예측 결과를 출력합니다.
            </p> 
        </div>
        <div className="help_dec">
          <h5 >💡 문장의 오류 판단기 사용법</h5>
          <div className=" help_section">
            <p className="help_text">1. 문장을 입력란에 입력하세요.</p>
            <p className="help_text">2. 검사하기 버튼을 클릭하세요.</p>
            <p className="help_text">3. 문장의 오류 판단 결과를 확인할 수 있습니다.</p>
          </div>
          <div className=" help_section">
            <img src={sentence_home}   className="sentence help_border" alt="logo" />
            <img src={sentence_input}  className="sentence help_border" alt="logo" />
            <img src={sentence_result} className="sentence " alt="logo" />
          </div>
        </div>

      </footer>
      
    </div>
  );
}

export default App;
