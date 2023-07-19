document.addEventListener('DOMContentLoaded', () => {
  const data = [
    ['寛大性', 'ケチ', '太っ腹', 77, 23],
    ['人間関係依存度', '義理堅い', '冷淡', 43, 57],
    ['責任感', '誠実', '浮つき', 11, 89],
    ['社交性', '人懐っこい', 'とっつきにくい', 80, 20],
  ];

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
