document.addEventListener('DOMContentLoaded', () => {
  const selectedValues = {};
  const valueOrder = [];

  const data = [
    ['item_1', 'value_1', '一緒に夏祭りに来た友達が現金を忘れたみたいで、立て替えてあげた。', '友達の分の出費をその都度メモ。後で請求する。', '大体の金額で返してくれれば問題なし。楽しい思い出が作れたし、最悪返ってこなくてもいいよ。'],
    ['item_2', 'value_2', 'あまり親しくない友達からお金を貸して欲しいと頼まれた。生活ができないくらい困っているみたい。', '困っているなら助けたい！最悪返ってこなくてもいいから、貸す。', '返済する期限を決め、絶対返すことを条件に貸す。'],
    ['item_3', 'value_3', '友達とランチ。お会計が別でできなかったので、友達に立て替えてもらった。', 'お店を出てすぐにお金を返す。', '後日返す。'],
    ['item_4', 'value_4', '生活費がどうしても足りない。', '友達からお金を借りる。', '業者から借金する。'],
    ['item_5', 'value_5', 'グループワークの課題で物を買うことになった。何をいくつ買うかはまだ分からない。', '事前にメンバーから集金して、そこからお金を出す。', 'とりあえず全部自分が立て替えて、後から他のメンバーから徴収する。'],
    ['item_6', 'value_6', '飲み会が終わり、お会計の時間。以前貸したお金がまだ返ってきていない人がいて、その人は手持ちのお金がなくて困っている。', '追加でお金を貸したくないと思う。自分は立て替えてあげず、他の人が立て替えるのを待つ。', 'とりあえずスムーズに会計を済ませたいので、立て替えてあげる。'],
    ['item_7', 'value_7', '友達の行きつけのバーに行ったら、友達がお金を払ってくれた。', '自分の分がいくらだったか聞いて、お金を返す。', 'ラッキー、と思う。'],
    ['item_8', 'value_8', '友達とショッピングに来た。手持ちのお金はあまり多くない。そんな時、ギリギリ手持ちのお金で買える洋服に一目惚れしてしまった。', '買う。その後、お金が足りなくなったら友達に立て替えてもらう。', '買わない。今度来た時にあったら買おうと思う。'],
  ];

  const main = document.querySelector('question');

  data.forEach(([itemId, valueId, question, caption1, caption2]) => {
    valueOrder.push(valueId);
    const item = document.createElement('div');
    item.id = itemId;
    item.className = 'item';

    let questionParagraph = document.createElement('p');
    questionParagraph.className = 'question';
    questionParagraph.textContent = question;
    item.appendChild(questionParagraph);

    let selectArea = document.createElement('div');
    selectArea.className = 'select_area';

    ['+3', '+2', '+1', '0', '-1', '-2', '-3'].forEach((value, index) => {
      let label = document.createElement('label');

      let input = document.createElement('input');
      input.type = 'radio';
      input.name = valueId;
      input.value = value;
      input.className = 'hidden-radio';
      label.appendChild(input);

      let span = document.createElement('span');
      span.className = `custom-radio ${(index < 3) ? 'green-radio' : (index > 3) ? 'purple-radio' : ''} ${['size45', 'size35', 'size30', 'size25', 'size30', 'size35', 'size45'][index]} ${(index == 6) ? 'last-radio' : ''}`;
      label.appendChild(span);

      selectArea.appendChild(label);
    });

    item.appendChild(selectArea);

    let captionArea = document.createElement('div');
    captionArea.className = 'caption_area';

    let captionParagraph1 = document.createElement('p');
    captionParagraph1.className = 'caption';
    captionParagraph1.textContent = caption1;
    captionArea.appendChild(captionParagraph1);

    let captionParagraph2 = document.createElement('p');
    captionParagraph2.className = 'caption';
    captionParagraph2.textContent = caption2;
    captionArea.appendChild(captionParagraph2);

    item.appendChild(captionArea);

    main.appendChild(item);
  });

  const items = document.querySelectorAll('.item');

  items.forEach((item) => {
    const radioButtons = item.querySelectorAll('input[type="radio"]');

    radioButtons.forEach((radioButton) => {
      radioButton.addEventListener('change', function () {
        if (this.checked) {
          selectedValues[this.name] = this.value;

          const orderedValues = valueOrder.map(valueId => selectedValues[valueId] || '');
          console.log(orderedValues);
        }
      });
    });
  });
});
