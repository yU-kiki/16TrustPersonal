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
    ['FRUT', '自己完結、不思議ちゃん'],
    ['FRUH', 'つかみどころのない人'],
    ['FRST', '損する聖人'],
    ['FRSH', '実はしっかり、人気者'],
    ['FGUT', '拗らせばらまき人間'],
    ['FGUH', '見返りを求めない、助け合い'],
    ['FGST', '優しくありつづける'],
    ['FGSH', '暖かい人格者'],
    ['KRUT', '悲しきモンスター'],
    ['KRUH', '典型的なダメ人間'],
    ['KRST', '真面目君は損したくない'],
    ['KRSH', '生きるのが上手'],
    ['KGUT', '粘着人間'],
    ['KGUH', '愛するよりも、愛されたい'],
    ['KGST', '人間不信な優しい人'],
    ['KGSH', '義理堅いサムライ']
  ]

  const typeArea = document.querySelector('.type_area');
  const typeCode = data_type[data_num[0]][0];
  const typeText = data_type[data_num[0]][1];

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
  result16type.textContent = typeCode;
  typeArea.appendChild(result16type);

  const resultImg = document.createElement('img');
  resultImg.className = 'result-img';
  resultImg.src = `./img/${typeCode.toLowerCase()}.png`;
  typeArea.appendChild(resultImg);

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
});
