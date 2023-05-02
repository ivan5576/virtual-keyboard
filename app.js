const KEY_BTNS = [
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
    EN: '↑',
  },
  {
    key: 'Shift',
    code: 'ShiftRight',
    EN: 'Shift',
  },
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
    EN: '←',
  },
  {
    key: 'ArrowDown',
    code: 'ArrowDown',
    EN: '↓',
  },
  {
    key: 'ArrowRight',
    code: 'ArrowRight',
    EN: '→',
  },
  {
    key: 'Control',
    code: 'ControlRight',
    EN: 'Ctrl',
  },
];

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

  function addButton(row) {
    let char = '';
    for (let i = 0; i < row.length; i += 1) {
      char += `<div class="char ${row[i].code}" id="${row[i].code}"><p class="char__name">${row[i].EN}</p></div>`;
    }
    document.querySelector('.keyboard').innerHTML = char;
  }
  addButton(KEY_BTNS);

  // for (let i = 0; i < row5.length; i++) {
  //   row5[i].EN = `${row5[i].key}`;
  // }
  // console.log(row5);
}

addKeyboard();

// Events when press button on physial keyboard

document.addEventListener('keydown', (event) => {
  document.getElementById(event.code).classList.add('active');
  const textarea = document.querySelector('textarea');
  const index = KEY_BTNS.findIndex((object) => object.code === event.code);
  if (event.code === 'Enter') {
    textarea.value += '\n';
    return;
  } if (event.code === 'Tab') {
    event.preventDefault();
    textarea.value += '    ';
  } else if (event.key === 'Alt') {
  } else if (event.key === 'Control') {
  } else if (event.key === 'Meta') {
  } else if (event.key === 'Shift') {
  } else if (event.key === 'Delete') {
    const begin = textarea.value.slice(0, textarea.selectionStart);
    const end = textarea.value.slice(textarea.selectionStart + 1, textarea.value.length);
    textarea.value = begin + end;
    console.log(end);
    textarea.value = textarea.value.slice(0, textarea.selectionStart);
  } else if (event.key === 'CapsLock') {
  } else if (event.key === 'Backspace') {
    const begin = textarea.value.slice(0, textarea.selectionStart - 1);
    const end = textarea.value.slice(textarea.selectionStart, textarea.value.length);
    textarea.value = begin + end;
  } else {
    textarea.value += KEY_BTNS[index].EN;
  }
});

document.addEventListener('keyup', (event) => {
  document.getElementById(event.code).classList.remove('active');
});

// Events when click mouse

document.querySelector('.keyboard').addEventListener('click', (event) => {
  console.log(event.target.id);
  // textarea.
});

// document.querySelector('.keyboard').addEventListener('mouseout', (event) => {
//   document.getElementById(event.target.id).classList.remove('active');
// });
