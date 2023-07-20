function processData(data) {
  // console.log(data);
  const processedData = [];
  const sumData = [];
  for (let i = 0; i < 4; i++) {
    const value = parseInt(data[i]) + parseInt(data[i + 4]);
    sumData.push(value);
  }

  const binaryStr = sumData.map(val => (val >= 0 ? '1' : '0')).join('');
  const decimal = parseInt(binaryStr, 2);
  processedData.push(decimal);
  for (const value of sumData) {
    const result = Math.round((value / 6) * 50 + 50);
    processedData.push(result, 100 - result);
  }
  // console.log(processedData)
  return processedData;
}


document.addEventListener('DOMContentLoaded', () => {
  const orderedValues = JSON.parse(localStorage.getItem('selectedValues'));
  const data_num = processData(orderedValues);
  const traits = [
    ['寛大性', 'ケチ', '太っ腹'],
    ['人間関係依存度', '義理堅い', '冷淡'],
    ['責任感', '誠実', '浮つき'],
    ['社交性', '人懐っこい', 'とっつきにくい']
  ];
  const data = [];
  for (let i = 0; i < traits.length; i++) {
    const trait = traits[i];
    const value1 = data_num[i * 2 + 1];
    const value2 = data_num[i * 2 + 2];
    data.push([...trait, value1, value2]);
  }

  const data_type = [
    ['FRUT', '自己完結、不思議ちゃん', 'このタイプの人はお金が返ってこなくても、自分が返さなくても良いと考えます。自分がお金に困っていても、それほど困っていないと感じています。', 3],
    ['FRUH', 'つかみどころのない人', 'このタイプの人はお金を貸したり借りたりしますが、返ってこなくても良いと感じています。同様に、自分が返すことも少ないです。', 3],
    ['FRST', '損する聖人', 'このタイプの人は自己犠牲的で、自分がなぜお金を貸すのか理解できないこともあります。それでも、借りたお金は必ず返すという誠実さを持っています。', 1],
    ['FRSH', '実はしっかり、人気者', 'このタイプの人は交友関係が広く、他人が返さないときも気にしません。しかし、自分が借りたときは必ず返す誠実さを持っています。', 2],
    ['FGUT', '拗らせばらまき人間', 'このタイプの人は困っている人を見捨てられず、自分が貸したお金が返ってこないと不安になることもあります。しかし、自分が借りたお金は返さないという傾向があります。', 3],
    ['FGUH', '見返りを求めない、助け合い', 'このタイプの人は人々が助け合って生きることを望み、困った人を見捨てることができません。自分も困ったときは他人を頼ります。', 2],
    ['FGST', '優しくありつづける', 'このタイプの人は人間関係を重視し、相手とのバランスが取れないこともありますが、それでも優しさを保つことができます。', 1],
    ['FGSH', '暖かい人格者', 'このタイプの人は困っている人を見捨てることができず、人間の暖かさを理解しています。また、困ったときには他人を頼る能力も持っています。', 1],
    ['KRUT', '悲しきモンスター', 'このタイプの人は他人を信用せず、人に頼ることができません。それでも手を差し伸べてくれる人を裏切ることがあります。', 3],
    ['KRUH', '典型的なダメ人間', 'このタイプの人は他人に貸すときはきちんと返済を求めます。しかし、自分が借りるときはルーズな態度を示します。表面的には良いですが、その背後には注意が必要な性格があります。', 0],
    ['KRST', '真面目君は損したくない', 'このタイプの人は損をしたくないと強く感じており、人付き合いが苦手で他人を頼るのが難しいです。しかし、借りたお金はきちんと返す誠実さを持っています。', 0],
    ['KRSH', '生きるのが上手', 'このタイプの人は生きるのが上手で、お金の貸し借りを面倒と感じています。しかし、困ったときには他人を頼ることができる魅力を持っています。', 0],
    ['KGUT', '粘着人間', 'このタイプの人は他人を評価する傾向があり、借りたお金を友情の証とみなします。そのため、返さなくても大丈夫だと考えます。', 2],
    ['KGUH', '愛するよりも、愛されたい', 'このタイプの人は自己中心的で、人間関係に依存してお金を借りたり貸したりします。人間関係を利用する傾向があります。', 0],
    ['KGST', '人間不信な優しい人', 'このタイプの人は人間関係を重視し、自分が貸したお金は必ず返します。しかし、他人が自分にお金を貸してくれないことに疑問を持つこともあります。', 1],
    ['KGSH', '義理堅いサムライ', 'このタイプの人は人間関係を重視し、お金を借りたときは必ず返す義理堅さを持っています。', 2]
  ]

  const typeArea = document.querySelector('.type_area');
  const typeCode = data_type[data_num[0]][0];
  const typeText = data_type[data_num[0]][1];
  const typeDescription = data_type[data_num[0]][2];
  const typeNum = data_type[data_num[0]][3];

  const resultTitle = document.createElement('p');
  resultTitle.className = 'result-title';
  resultTitle.textContent = 'あなたの信頼タイプ:';
  typeArea.appendChild(resultTitle);

  const resultType = document.createElement('p');
  resultType.className = 'result-type';
  resultType.textContent = typeText;
  typeArea.appendChild(resultType);

  const result16type = document.createElement('p');
  result16type.className = 'result-16type';
  if (typeNum == 0) {
    result16type.classList.add('red-color');
  } else if (typeNum == 1) {
    result16type.classList.add('blue-color');
  } else if (typeNum == 2) {
    result16type.classList.add('yellow-color');
  } else if (typeNum == 3) { 
    result16type.classList.add('green-color');
  }
  result16type.textContent = typeCode;
  typeArea.appendChild(result16type);

  const resultImg = document.createElement('img');
  resultImg.className = 'result-img';
  resultImg.src = `./img/${typeCode}.png`;
  typeArea.appendChild(resultImg);

  const resultDescription = document.createElement('span');
  resultDescription.className = 'result-description';
  resultDescription.textContent = typeDescription;
  typeArea.appendChild(resultDescription);

  const detailArea = document.querySelector('.detail_area');

  data.forEach(([traitName, traitText1, traitText2, value1, value2]) => {
    const traitItem = document.createElement('div');
    traitItem.className = 'trait_item';

    const traitNameElement = document.createElement('p');
    traitNameElement.textContent = traitName;
    traitItem.appendChild(traitNameElement);

    const traitDetail = document.createElement('div');
    traitDetail.className = 'trait-detail';

    const traitText1Element = document.createElement('p');
    traitText1Element.className = 'trait-text';
    traitText1Element.textContent = `${value1}%`;
    traitDetail.appendChild(traitText1Element);

    const bar = document.createElement('div');
    bar.className = 'bar';
    const barElement = document.createElement('div');
    barElement.className = value1 >= 50 ? 'bar-left' : 'bar-right';
    const value = value1 >= 50 ? value1 : value2;
    barElement.style.width = `calc(24.5rem * ${value / 100})`;
    bar.appendChild(barElement);
    traitDetail.appendChild(bar);

    const traitText2Element = document.createElement('p');
    traitText2Element.className = 'trait-text';
    traitText2Element.textContent = `${value2}%`;
    traitDetail.appendChild(traitText2Element);

    traitItem.appendChild(traitDetail);

    const traitType = document.createElement('div');
    traitType.className = 'trait-type';

    const traitType1Element = document.createElement('p');
    traitType1Element.textContent = traitText1;
    traitType.appendChild(traitType1Element);

    const traitType2Element = document.createElement('p');
    traitType2Element.textContent = traitText2;
    traitType.appendChild(traitType2Element);

    traitItem.appendChild(traitType);

    detailArea.appendChild(traitItem);
  });

  var twitterLink = document.createElement('a');
  twitterLink.href = "https://twitter.com/share?ref_src=twsrc%5Etfw";
  twitterLink.className = "twitter-share-button";
  twitterLink.dataset.showCount = "false";
  twitterLink.dataset.size = "large";
  twitterLink.dataset.text = `私の信頼タイプは、${typeText}(${typeCode})でした。\n#メディアアート実践 #16TrustPersonalities #LenLen`;
  twitterLink.textContent = "ツイートする";

  document.body.appendChild(twitterLink);

  var scriptTag = document.createElement('script');
  scriptTag.async = true;
  scriptTag.src = "https://platform.twitter.com/widgets.js";
  scriptTag.charset = "utf-8";

  document.body.appendChild(scriptTag);
});
