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
    },
    {
      key: '1',
      code: 'Digit1',
    },
    {
      key: '2',
      code: 'Digit2',
    },
    {
      key: '3',
      code: 'Digit3',
    },
    {
      key: '4',
      code: 'Digit4',
    },
    {
      key: '5',
      code: 'Digit5',
    },
    {
      key: '6',
      code: 'Digit6',
    },
    {
      key: '7',
      code: 'Digit7',
    },
    {
      key: '8',
      code: 'Digit8',
    },
    {
      key: '9',
      code: 'Digit9',
    },
    {
      key: '0',
      code: 'Digit0',
    },
    {
      key: '-',
      code: 'Minus',
    },
    {
      key: '=',
      code: 'Equal',
    },
    {
      key: 'Backspace',
      code: 'Backspace',
    },
  ];
  const row2 = [
    {
      key: 'Tab',
      code: 'Tab',
    },
    {
      key: 'q',
      code: 'KeyQ',
    },
    {
      key: 'w',
      code: 'KeyW',
    },
    {
      key: 'e',
      code: 'KeyE',
    },
    {
      key: 'r',
      code: 'KeyR',
    },
    {
      key: 't',
      code: 'KeyT',
    },
    {
      key: 'y',
      code: 'KeyY',
    },
    {
      key: 'u',
      code: 'KeyU',
    },
    {
      key: 'i',
      code: 'KeyI',
    },
    {
      key: 'o',
      code: 'KeyO',
    },
    {
      key: 'p',
      code: 'KeyP',
    },
    {
      key: '[',
      code: 'BracketLeft',
    },
    {
      key: ']',
      code: 'BracketRight',
    },
    {
      key: '\\',
      code: 'Backslash',
    },
    {
      key: 'Delete',
      code: 'Delete',
    },
  ];
  const row3 = [
    {
      key: 'CapsLock',
      code: 'CapsLock',
    },
    {
      key: 'a',
      code: 'KeyA',
    },
    {
      key: 's',
      code: 'KeyS',
    },
    {
      key: 'd',
      code: 'KeyD',
    },
    {
      key: 'f',
      code: 'KeyF',
    },
    {
      key: 'g',
      code: 'KeyG',
    },
    {
      key: 'h',
      code: 'KeyH',
    },
    {
      key: 'j',
      code: 'KeyJ',
    },
    {
      key: 'k',
      code: 'KeyK',
    },
    {
      key: 'l',
      code: 'KeyL',
    },
    {
      key: ';',
      code: 'Semicolon',
    },
    {
      key: "'",
      code: 'Quote',
    },
    {
      key: 'Enter',
      code: 'Enter',
    },
  ];
  const row4 = [
    {
      key: 'Shift',
      code: 'ShiftLeft',
    },
    {
      key: 'z',
      code: 'KeyZ',
    },
    {
      key: 'x',
      code: 'KeyX',
    },
    {
      key: 'c',
      code: 'KeyC',
    },
    {
      key: 'v',
      code: 'KeyV',
    },
    {
      key: 'b',
      code: 'KeyB',
    },
    {
      key: 'n',
      code: 'KeyN',
    },
    {
      key: 'm',
      code: 'KeyM',
    },
    {
      key: ',',
      code: 'Comma',
    },
    {
      key: '.',
      code: 'Period',
    },
    {
      key: '/',
      code: 'Slash',
    },
    {
      key: 'ArrowUp',
      code: 'ArrowUp',
    },
    {
      key: 'Shift',
      code: 'ShiftRight',
    },
  ];
  const row5 = [
    {
      key: 'Control',
      code: 'ControlLeft',
    },
    {
      key: 'Meta',
      code: 'MetaLeft',
    },
    {
      key: 'Alt',
      code: 'AltLeft',
    },
    {
      key: ' ',
      code: 'Space',
    },
    {
      key: 'Alt',
      code: 'AltRight',
    },
    {
      key: 'ArrowLeft',
      code: 'ArrowLeft',
    },
    {
      key: 'ArrowDown',
      code: 'ArrowDown',
    },
    {
      key: 'ArrowRight',
      code: 'ArrowRight',
    },
    {
      key: 'Control',
      code: 'ControlRight',
    },
  ];

  function addButton(row, rowNum) {
    let char = '';

    for (let i = 0; i < row.length; i += 1) {
      char += `<div class="char ${row[i].code}"><p class="char__name">${row[i].key}</p></div>`;
    }
    document.querySelectorAll('.keyboard__row')[rowNum].innerHTML = char;
  }
  addButton(row1, 0);
  addButton(row2, 1);
  addButton(row3, 2);
  addButton(row4, 3);
  addButton(row5, 4);
}

addKeyboard();
