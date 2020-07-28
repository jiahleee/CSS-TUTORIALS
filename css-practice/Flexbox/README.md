<img width="949" alt="flexbox" src="https://user-images.githubusercontent.com/61108479/88616191-74d24880-d0ce-11ea-98a5-b9ad767d56ce.png">

# flexbox

### 1.사용하겠다고 선언하기

    -display:flex/inline-flex;
     정렬을 하고자 하는 요소들을 감싸는 부모 요소에 display:flex 선언한다.

### 2.어느방향으로 정렬할지 선언(가로방향?세로방향?)

    .flexbox{
       display:flex;
       flex-direction:row; /column; / row-reverse; /column-reverse;   
    }

### ● 중요 ●
    flex 사용시 눈에 보이지 않는 두개의 Axis(축)가 생긴다.
    direction을 무엇으로 설정하느냐에 따라서 생기는 Axis가 다르다.
    1.flex direction 방향에 따라서 main axis가 생긴다.
    2.main과 수직을 이루는 방향으로 cross axis가 생긴다.

    row:왼->오로 흐르는 방향의 main이 생김. so,위->아래로 흐르는 cross가 생김
    column:위->아래로 흐르는 main이 생김. 왼->오로 흐르는 cross가 생김.

    (+@ row-reverse는 오->왼:main 위->아래:cross
        column-reverse는 아래->위:main 왼->오:cross)

### 3.한줄안에 모든요소 정렬? or 여러줄에 정렬?

    부모요소에 display:flex 를 주고, flex-wrap:nowrap을 주면
    wrap하지 않고 자식의 사이즈를 줄여서라도 한줄로 정렬해 버리는 것.

    한줄정렬 x,두줄 만들어서라도 자식요소의 크기 보존 ->flex-wrap: wrap;

    main axis 기준으로 정렬할 떄: justify-content:center/flex-start,flex-end
    cross axis 기준으로 정렬할 때: A)align-items/B)align-content:center/......

             A) 주로 많이 사용, 하나의 cross axis
             B) flex-wrap:wrap;일 때 사용
                (cross axis 가 여러줄이라서 두개이상 생겨서
                 근데 여러 줄 안쓰고 하나로 쓰겠다는 것.)
              
### order을 사용하여 요소의 순서 변경 가능


