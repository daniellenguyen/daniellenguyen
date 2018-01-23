function titlebar(pos)
{
  const speed = 500;
  const msg1 = "(✿ ◕‿◕ )__\\";
  const msg2 = "(✿ ◕‿◕ )__/`    ❇   ✴ ❁";
  const msg3 = "(✿ ◕‿◕ )__\\    ❇   ✴ ❁";
  const msg4 = "(✿ ◕‿◕ )__/`✽ ✧ ❇ ♥ ✴ ❁";
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
