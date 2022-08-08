const feeds = (req, res) => {
  res.json([
    {
      id: 1,
      userName: '2021bong',
      imageSrc: './img/board_img.png',
      imgAlt: '과일 스티커',
      likeCount: 123,
      content: '공부화이팅~~😀😀😀',
      allComment: 3,
      createdTime: 1,
    },
    {
      id: 2,
      userName: 'justcode_bong',
      imageSrc: './img/board2_img.jpg',
      imgAlt: '마루는 강쥐 - 마루',
      likeCount: 1127482,
      content: '마루는 강쥐 보시나요? 아주 재밌어요 기절합니당 ㅎㅎㅎㅎ',
      allComment: 322,
      createdTime: 13,
    },
    {
      id: 3,
      userName: 'tomato2022',
      imageSrc: './img/board3_img.png',
      imgAlt: '토마토 캐릭터',
      likeCount: 1,
      content: '울퉁불퉁 멋진 몸매에 빨간 옷을 입고',
      allComment: 11,
      createdTime: 24,
    },
    {
      id: 4,
      userName: 'catperson',
      imageSrc:
        'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
      imgAlt: '썬글라스를 쓴 고양이',
      likeCount: 239,
      content: '고양이가 최고야 지구는 고양이꺼야',
      allComment: 53,
      createdTime: 1,
    },
    {
      id: 5,
      userName: 'devil_23',
      imageSrc:
        'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
      imgAlt: '썬글라스를 쓴 고양이',
      likeCount: 0,
      content: '흙염룡이 날뛴다 . . .',
      allComment: 0,
      createdTime: 48,
    },
  ]);
};

module.exports = { feeds };
