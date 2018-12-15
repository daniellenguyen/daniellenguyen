function titlebar(pos)
{
  const speed = 500;
  const msg1 = "(✿ ^‿^ )|";
  const msg2 = "(✿ ^‿^ )ノ   ❇   ✴ ❁";
  const msg3 = "(✿ ^‿^ )|    ❇   ✴ ❁";
  const msg4 = "(✿ ^‿^ )ノ✽ ✧ ❇ ♥ ✴ ❁";
  let msg = "";
  if(pos == 0) {
    msg = msg1;
    pos = 1;
  }
  else if(pos == 1) {
    msg = msg2;
    pos = 2;
  }
  else if(pos == 2) {
    msg = msg3;
    pos = 3;
  }
  else if(pos == 3) {
    msg = msg4;
    pos = 0;
  }
  document.title = msg;
  timer = window.setTimeout("titlebar("+pos+")",speed);
}

titlebar(0);
