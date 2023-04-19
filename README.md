# ssed(sentence semantic error determiner)
#### 📝문장의 오류 판단기



### 01 개발 목표

##### 문장의 오류 판단기의 필요성

- 현재 국내에서 사용되는 문장 맞춤법 교정기에서는 문장의 오류 판단 불가능

​	 ex ) 코끼리가 하늘을 날다. - 문장의 맞춤법(O), 문법성 판단(X)

- 사용자가 입력한 문장 내에서 문법성 오류의 존재 여부를 딥러닝 모델을 통해 판단

- 문장의 앞뒤 문맥을 파악 후, 문장의 오류 유무를 판단할 수 있는 딥러닝 모델 필요



​		그림 1. 딥러닝을 이용한 문장의 오류 판단기 실행 모습

<img src="/Users/nohda/local_code/sw_2_project/ssed/img/image-20230419144318373.png" alt="image-20230419144318373" style="zoom:50%;" />





### 02 딥러닝 학습 방법 및 결과

##### 딥러닝 모델 학습 방법

###### Step 01 문법성 판단에 적합한 딥러닝 사전 학습 모델 선정

- 고려 사항 : 사전 학습 데이터 셋 크기, 문장 tokenizing 방법

  

  표 1. 사전 학습 딥러닝 모델 정보

###### <img src="/Users/nohda/local_code/sw_2_project/ssed/img/그림1.png" alt="그림1" style="zoom:22%;" />	

​	표 2.  사전 학습 딥러닝의 tokenizing 결과

<img src="/Users/nohda/local_code/sw_2_project/ssed/img/그림2.png" alt="그림2" style="zoom: 25%;" />



###### Step 02 선정된 딥러닝 모델에 각각 2가지의 미세 조정 수행

- 국립국어원 한국어 기초 사전의 예문 데이터를 크롤링하여 약 63만 문장 데이터 셋 구축, 딥러닝 모델에 정문만을 이용하여 추가 학습 진행

- 국립국어원에서 공개한 문법성 판단 말뭉치인 CoLA(Corpus of Linguistic Acceptability) 데이터 셋을 통하여 문장의 오류 분류 학습 진행

  ​	

  ​	그림 2. 한국어 기초 사전 예문 데이터

  <img src="/Users/nohda/local_code/sw_2_project/ssed/img/그림3.png" alt="그림3" style="zoom:50%;" />

  

  ​	표 3  . CoLA 데이터 셋 예시 (Lable → 1 : 문법성 문장,  0 : 비문법성 문장)

<img src="/Users/nohda/local_code/sw_2_project/ssed/img/그림4.png" alt="그림3" style="zoom: 25%;" />



###### Step 03 각 모델에 대한 CoLA 데이터 셋의 5가지 오류(구문 오류, 형태 오류, 의미 오류, 시제 오류, 오타 오류)를 통해 정성 평가 진행 후 최종 모델 선정



###### Step 04 각 모델의 정량적 평가를 통해 비중 선택 후 앙상블을 통한 결과 도출

- 딥러닝 성능 평가 지표
  - Accuracy : 예측 값이 전체 값에서 맞은 값
    $$
    Accuracy =  \frac{(𝑻𝑷+𝑻𝑵)}{(𝑻𝑷+𝑻𝑵+𝑭𝑷+𝑭𝑵)}
    $$
    

  - 매튜상관계수 (MCC, Matthews Correlation Coefficient)
    $$
    MCC =  \frac{𝑻𝑷×𝑻𝑵−𝑭𝑷×𝑭𝑵}{\sqrt{(𝑻𝑷+𝑭𝑷)(𝑻𝑷+𝑭𝑵)(𝑻𝑵+𝑭𝑷)(𝑻𝑵+𝑭𝑵)}}
    $$
    

  표 4, 성능 지표 Confusion Matrix

  <img src="/Users/nohda/local_code/sw_2_project/ssed/img/그림5.png" alt="그림5" style="zoom:22%;" />



#### **딥러닝** **모델 학습 결과**

- 단일 모델에 대한 미세조정 학습 결과 KoElectra 모델이 SOTA 기록

- ELECTRA 모델의 weight의 비중을 높이 설정하여 다른 모델의 성능과 함께 사용 

  - EX) KoElectra : tunib-Electra : KoCharElectra = 3:1:1

  표 5 . 단일 모델 학습 결과<img src="/Users/nohda/local_code/sw_2_project/ssed/img/그림6.png" alt="그림6" style="zoom:25%;" />

  

  표 6 . 앙상블 모델 학습 결과

  <img src="/Users/nohda/local_code/sw_2_project/ssed/img/그림7.png" alt="그림7" style="zoom:25%;" />



### **03** **웹 구현 및 기술 스택**

**Framework**

- React, Django, AWS를 통해 웹 구현 및 클라우드 서비스 구현

**기술 스택**

- Deep Learning : Pytorch 1.9.0+cu111

- GPU : CUDA GForce GTX 1080 

- IDLE : Visual Studio Code

- Framework : Django, React

  

  그림 3 . 사용된 프레임 워크 입력과 출력 구조

<img src="/Users/nohda/local_code/sw_2_project/ssed/img/그림8.png" alt="그림8" style="zoom:25%;" />

### **04** **웹 구현 화면 및 구성**

##### **User Interface**

- **Header, Reader, Help** 3가지 section으로  구성



- **Header**
  - 프로그램의 시작 화면
  - 하단의 이동하기 버튼 또는 스크롤을 이용하여 **Reader**로 이동 가능

![화면1](/Users/nohda/local_code/sw_2_project/ssed/img/화면1.png)



- **Reader**
  - 사용자의 문장 입력 및 오류 검사 버튼, 결과 확인, 수정
  - 문장의 오류 검사가 필요한 문장을 입력 후 검사하기 버튼을 클릭하여 검사 진행
  - 검사가 끝난 후 수정하기 버튼을 클릭하면 재 검색

![화면2](/Users/nohda/local_code/sw_2_project/ssed/img/화면2.png)

- **Help**
  - 사용자에게 프로그램 사용법 제공
  - 프로그램에 사용된 딥러닝 모델 학습 방법 기술

![화면3](/Users/nohda/local_code/sw_2_project/ssed/img/화면3.png)