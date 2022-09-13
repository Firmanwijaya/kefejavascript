// Conditional / Flow Control
// 1. IF ELSE
// Syntax: (Basic) => if ( conditional === true ) { ...action }
// Example:
if (1 > 2) {
  // console.log('Pernyataan ini benar');
}
// Syntax: (With Default Value) => if ( conditional === true ) { ...action } else { ...action }
if (5 > 6) {
  // console.log('Pernyataan ini benar');
} else {
  // console.log('Default Value');
}
// Syntax: (With Any Condition) => if ( conditional === true ) { ...action } else if ( conditional === true ) { ...action }
if (1 > 2) {
  // console.log('Pernyataan Pertama');
} else if (3 < 4) {
  // console.log('Pernyataan Kedua');
}

// 2. SWITCH
// Syntax: (Basic) => switch(key) { case value: action; break; }
switch (10) {
  case 10:
    // console.log('Pernyataan Benar');
    break;
}

// Syntax: (With Default Value) => switch(key) { case value: action; break; default: action; break; }
switch (10) {
  case 0:
    // console.log('Pernyataan Benar');
    break;
  default:
    // console.log('Pernyataan Default');
    break;
}

// Syntax: (With Any Condition) => switch(key) { case value: action; break; case value: action; break; }
switch (10) {
  case 0:
    // console.log('Pernyataan Pertama');
    break;
  case 10:
    // console.log('Pernyataan Kedua');
    break;
}

// Example
if (1 < 2 && 2 < 3) {
  // console.log('Pernyataan ini benar');
}

// Nested Condition
let gender = 'Pria';
let isMarried = false;

switch (gender) {
  case 'Pria':
    console.log('Pria');

    if (isMarried) {
      console.log('Bapak-Bapak');
    } else {
      console.log('Bujang');
    }

    break;
  case 'Wanita':
    console.log('Wanita');

    switch (isMarried) {
      case true:
        console.log('Ibu-Ibu');
        break;
      default:
        console.log('Gadis');
        break;
    }
    break;
}

// Ternary ( Advance )
// Syntax: condition ? action if true: action if false
// 1
3 > 4 ? console.log('Benar') : null;
// 2
3 < 4 ? (3 > 4 ? console.log('Benar') : null) : null;

// If syntax
// 1
if (3 > 4) {
  console.log('Benar');
} else {
  null;
}
// 2
if (3 < 4) {
  if (3 > 4) {
    console.log('Benar');
  } else {
    null;
  }
} else {
  null;
}
