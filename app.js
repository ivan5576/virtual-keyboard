function addKeyboard() {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  document.body.append(wrapper);

  const title = document.createElement('h1');
  title.className = 'title';
  title.innerHTML = 'Виртуальная клавиатура';
  wrapper.append(title);

  const textarea = document.createElement('textarea');
  textarea.className = 'textarea';
  wrapper.append(textarea);

  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  wrapper.append(keyboard);

  function createKeyboardRow() {
    const keyboardRow = document.createElement('div');
    keyboardRow.className = 'keyboard__row';
    keyboard.append(keyboardRow);
  }

  for (let i = 0; i < 5; i += 1) {
    createKeyboardRow();
  }

  const row1 = [
    {
      key: '`',
      code: 'Backquote',
      EN: '`',
    },
    {
      key: '1',
      code: 'Digit1',
      EN: '1',
    },
    {
      key: '2',
      code: 'Digit2',
      EN: '2',
    },
    {
      key: '3',
      code: 'Digit3',
      EN: '3',
    },
    {
      key: '4',
      code: 'Digit4',
      EN: '4',
    },
    {
      key: '5',
      code: 'Digit5',
      EN: '5',
    },
    {
      key: '6',
      code: 'Digit6',
      EN: '6',
    },
    {
      key: '7',
      code: 'Digit7',
      EN: '7',
    },
    {
      key: '8',
      code: 'Digit8',
      EN: '8',
    },
    {
      key: '9',
      code: 'Digit9',
      EN: '9',
    },
    {
      key: '0',
      code: 'Digit0',
      EN: '0',
    },
    {
      key: '-',
      code: 'Minus',
      EN: '-',
    },
    {
      key: '=',
      code: 'Equal',
      EN: '=',
    },
    {
      key: 'Backspace',
      code: 'Backspace',
      EN: 'Backspace',
    },
  ];
  const row2 = [
    {
      key: 'Tab',
      code: 'Tab',
      EN: 'Tab',
    },
    {
      key: 'q',
      code: 'KeyQ',
      EN: 'q',
    },
    {
      key: 'w',
      code: 'KeyW',
      EN: 'w',
    },
    {
      key: 'e',
      code: 'KeyE',
      EN: 'e',
    },
    {
      key: 'r',
      code: 'KeyR',
      EN: 'r',
    },
    {
      key: 't',
      code: 'KeyT',
      EN: 't',
    },
    {
      key: 'y',
      code: 'KeyY',
      EN: 'y',
    },
    {
      key: 'u',
      code: 'KeyU',
      EN: 'u',
    },
    {
      key: 'i',
      code: 'KeyI',
      EN: 'i',
    },
    {
      key: 'o',
      code: 'KeyO',
      EN: 'o',
    },
    {
      key: 'p',
      code: 'KeyP',
      EN: 'p',
    },
    {
      key: '[',
      code: 'BracketLeft',
      EN: '[',
    },
    {
      key: ']',
      code: 'BracketRight',
      EN: ']',
    },
    {
      key: '\\',
      code: 'Backslash',
      EN: '\\',
    },
    {
      key: 'Delete',
      code: 'Delete',
      EN: 'Del',
    },
  ];
  const row3 = [
    {
      key: 'CapsLock',
      code: 'CapsLock',
      EN: 'CapsLock',
    },
    {
      key: 'a',
      code: 'KeyA',
      EN: 'a',
    },
    {
      key: 's',
      code: 'KeyS',
      EN: 's',
    },
    {
      key: 'd',
      code: 'KeyD',
      EN: 'd',
    },
    {
      key: 'f',
      code: 'KeyF',
      EN: 'f',
    },
    {
      key: 'g',
      code: 'KeyG',
      EN: 'g',
    },
    {
      key: 'h',
      code: 'KeyH',
      EN: 'h',
    },
    {
      key: 'j',
      code: 'KeyJ',
      EN: 'j',
    },
    {
      key: 'k',
      code: 'KeyK',
      EN: 'k',
    },
    {
      key: 'l',
      code: 'KeyL',
      EN: 'l',
    },
    {
      key: ';',
      code: 'Semicolon',
      EN: ';',
    },
    {
      key: "'",
      code: 'Quote',
      EN: "'",
    },
    {
      key: 'Enter',
      code: 'Enter',
      EN: 'Enter',
    },
  ];
  const row4 = [
    {
      key: 'Shift',
      code: 'ShiftLeft',
      EN: 'Shift',
    },
    {
      key: 'z',
      code: 'KeyZ',
      EN: 'z',
    },
    {
      key: 'x',
      code: 'KeyX',
      EN: 'x',
    },
    {
      key: 'c',
      code: 'KeyC',
      EN: 'c',
    },
    {
      key: 'v',
      code: 'KeyV',
      EN: 'v',
    },
    {
      key: 'b',
      code: 'KeyB',
      EN: 'b',
    },
    {
      key: 'n',
      code: 'KeyN',
      EN: 'n',
    },
    {
      key: 'm',
      code: 'KeyM',
      EN: 'm',
    },
    {
      key: ',',
      code: 'Comma',
      EN: ',',
    },
    {
      key: '.',
      code: 'Period',
      EN: '.',
    },
    {
      key: '/',
      code: 'Slash',
      EN: '/',
    },
    {
      key: 'ArrowUp',
      code: 'ArrowUp',
      EN: '&uarr;',
    },
    {
      key: 'Shift',
      code: 'ShiftRight',
      EN: 'Shift',
    },
  ];
  const row5 = [
    {
      key: 'Control',
      code: 'ControlLeft',
      EN: 'Ctrl',
    },
    {
      key: 'Meta',
      code: 'MetaLeft',
      EN: 'Win',
    },
    {
      key: 'Alt',
      code: 'AltLeft',
      EN: 'Alt',
    },
    {
      key: ' ',
      code: 'Space',
      EN: ' ',
    },
    {
      key: 'Alt',
      code: 'AltRight',
      EN: 'Alt',
    },
    {
      key: 'ArrowLeft',
      code: 'ArrowLeft',
      EN: '&larr;',
    },
    {
      key: 'ArrowDown',
      code: 'ArrowDown',
      EN: '&darr;',
    },
    {
      key: 'ArrowRight',
      code: 'ArrowRight',
      EN: '&rarr;',
    },
    {
      key: 'Control',
      code: 'ControlRight',
      EN: 'Ctrl',
    },
  ];

  function addButton(row, rowNum) {
    let char = '';

    for (let i = 0; i < row.length; i += 1) {
      char += `<div class="char ${row[i].code}"><p class="char__name">${row[i].EN}</p></div>`;
    }
    document.querySelectorAll('.keyboard__row')[rowNum].innerHTML = char;
  }
  addButton(row1, 0);
  addButton(row2, 1);
  addButton(row3, 2);
  addButton(row4, 3);
  addButton(row5, 4);

  // for (let i = 0; i < row5.length; i++) {
  //   row5[i].EN = `${row5[i].key}`;
  // }
  // console.log(row5);
}

addKeyboard();
