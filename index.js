let result = Array. from (document.getElementsByClassName("result"));
  let soestImage = Array.from (document.getElementsByClassName("soest")) ;
  let hammImage = Array.from (document.getElementsByClassName("hamm")) ;

  let soestScore = Math.floor(Math.random() * 6); 
  let hammScore = Math.floor(Math.random() * 6); 

  soestImage[0].src = "./images/" + soestScore + ".png";
  
  hammImage[0].src = "./images/" + hammScore + ".png";
  
  if (soestScore > hammScore) {
    result[0].textContent = "Soest wins, Khanh will be happy!";
    result[0].style.color = "Red"; 
  } else if (hammScore > soestScore) {
    result[0].textContent = "Hamm wins, Khanh will be sad!";
    result[0].style.color = "Blue"; 
  } else {
    result[0].textContent = "Draw! No winner this time.";
    result[0].style.color = "green"; 
  }
  