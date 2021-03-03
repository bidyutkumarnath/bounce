function bounceoff(b,c){
    if (b.x - c.x < c.width/2 + b.width/2
      && c.x - b.x < c.width/2 + b.width/2) {
    b.velocityX = b.velocityX * (-1);
    c.velocityX = c.velocityX * (-1);
  }
  if (b.y - c.y < c.height/2 + b.height/2
    && c.y - b.y < c.height/2 + b.height/2){
    b.velocityY = b.velocityY * (-1);
    c.velocityY = c.velocityY * (-1);
  }
  }