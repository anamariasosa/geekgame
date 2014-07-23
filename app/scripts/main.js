function play_single_sound() {
  document.getElementById('audiotag1').play();
}

var set = false;

setInterval(function() {
  if (set){
    var snd = new Audio("images/button-28.mp3");
    snd.play()
    set = false;
  }
},40)


$(".btnn").on("click", function(e) {
  e.preventDefault()
  $("#intro").addClass("hidden")
  $("#screen-one").removeClass("hidden")
  
  play_single_sound();
})

// Sube las letras e invoca la función ganó, borra las letras
$("#screen-one .options-container").on("click", ".letter-option",function(e) {
  set = true;
  e.preventDefault()
  $("<div class='btn btn-success letter-answer'>"+$(this).text()+"</div>").appendTo("#screen-one .letters-container")
  $(this).remove()
  gano()
})
// Bajar las letras, borra las letras
$("#screen-one .letters-container").on("click", ".letter-answer",function(e) {
  e.preventDefault();
  $("<div class='btn btn-primary letter-option'>"+$(this).text()+"</div>").appendTo("#screen-one .options-container");
  $(this).remove();
  gano();
  // playsound();
})
 // NIVEL DOS
$("#screen-two .options-container").on("click", ".letter-option",function(e) {
  set = true;
  e.preventDefault()
  $("<div class='btn btn-success letter-answer'>"+$(this).text()+"</div>").appendTo("#screen-two .letters-container")
  $(this).remove()
  isWinnerTwo()
})
// Bajar las letras, borra las letras
$("#screen-two .letters-container").on("click", ".letter-answer",function(e) {
  e.preventDefault()
  $("<div class='btn btn-primary letter-option'>"+$(this).text()+"</div>").appendTo("#screen-two .options-container")
  $(this).remove()
  isWinnerTwo()
})
// NIVEL TRES
$("#screen-three .options-container").on("click", ".letter-option",function(e) {
  set= true;
  e.preventDefault()
  $("<div class='btn btn-success letter-answer'>"+$(this).text()+"</div>").appendTo("#screen-three .letters-container")
  $(this).remove()
  isWinnerThree()
})
// Bajar las letras, borra las letras
$("#screen-three .letters-container").on("click", ".letter-answer",function(e) {
  e.preventDefault()
  $("<div class='btn btn-primary letter-option'>"+$(this).text()+"</div>").appendTo("#screen-three .options-container")
  $(this).remove()
  isWinnerThree()
})
// NIVEL CUATRO
$("#screen-four .options-container").on("click", ".letter-option",function(e) {
  set= true;
  e.preventDefault()
  $("<div class='btn btn-success letter-answer'>"+$(this).text()+"</div>").appendTo("#screen-four .letters-container")
  $(this).remove()
  isWinnerFour()
})
// Bajar las letras, borra las letras
$("#screen-four .letters-container").on("click", ".letter-answer",function(e) {
  e.preventDefault()
  $("<div class='btn btn-primary letter-option'>"+$(this).text()+"</div>").appendTo("#screen-four .options-container")
  $(this).remove()
  isWinnerFour()
})

// NIVEL Cinco
$("#screen-five .options-container").on("click", ".letter-option",function(e) {
  set= true;
  e.preventDefault()
  $("<div class='btn btn-success letter-answer'>"+$(this).text()+"</div>").appendTo("#screen-five .letters-container")
  $(this).remove()
  isWinnerFive()
})
// Bajar las letras, borra las letras
$("#screen-five .letters-container").on("click", ".letter-answer",function(e) {
  e.preventDefault()
  $("<div class='btn btn-primary letter-option'>"+$(this).text()+"</div>").appendTo("#screen-five .options-container")
  $(this).remove()
  isWinnerFive()
})

// NIVEL SEIS
$("#screen-sixth .options-container").on("click", ".letter-option",function(e) {
  set= true;
  e.preventDefault()
  $("<div class='btn btn-success letter-answer'>"+$(this).text()+"</div>").appendTo("#screen-sixth .letters-container")
  $(this).remove()
  isWinnerSixth()
})
// Bajar las letras, borra las letras
$("#screen-sixth .letters-container").on("click", ".letter-answer",function(e) {
  e.preventDefault()
  $("<div class='btn btn-primary letter-option'>"+$(this).text()+"</div>").appendTo("#screen-sixth .options-container")
  $(this).remove()
  isWinnerSixth()
})

// NIVEL SIETE
$("#screen-seven .options-container").on("click", ".letter-option",function(e) {
  set= true;
  e.preventDefault()
  $("<div class='btn btn-success letter-answer'>"+$(this).text()+"</div>").appendTo("#screen-seven .letters-container")
  $(this).remove()
  isWinnerSeven()
})
// Bajar las letras, borra las letras
$("#screen-seven .letters-container").on("click", ".letter-answer",function(e) {
  e.preventDefault()
  $("<div class='btn btn-primary letter-option'>"+$(this).text()+"</div>").appendTo("#screen-seven .options-container")
  $(this).remove()
  isWinnerSeven()
})

// NIVEL OCHO
$("#screen-eight .options-container").on("click", ".letter-option",function(e) {
  set= true;
  e.preventDefault()
  $("<div class='btn btn-success letter-answer'>"+$(this).text()+"</div>").appendTo("#screen-eight .letters-container")
  $(this).remove()
  isWinnerEight()
})
// Bajar las letras, borra las letras
$("#screen-eight .letters-container").on("click", ".letter-answer",function(e) {
  e.preventDefault()
  $("<div class='btn btn-primary letter-option'>"+$(this).text()+"</div>").appendTo("#screen-eight .options-container")
  $(this).remove()
  isWinnerEight()
})

// NIVEL NUEVE
$("#screen-nine .options-container").on("click", ".letter-option",function(e) {
  set= true;
  e.preventDefault()
  $("<div class='btn btn-success letter-answer'>"+$(this).text()+"</div>").appendTo("#screen-nine .letters-container")
  $(this).remove()
  isWinnerNine()
})
// Bajar las letras, borra las letras
$("#screen-nine .letters-container").on("click", ".letter-answer",function(e) {
  e.preventDefault()
  $("<div class='btn btn-primary letter-option'>"+$(this).text()+"</div>").appendTo("#screen-nine .options-container")
  $(this).remove()
  isWinnerNine()
})

// NIVEL DIEZ
$("#screen-ten .options-container").on("click", ".letter-option",function(e) {
  set= true;
  e.preventDefault()
  $("<div class='btn btn-success letter-answer'>"+$(this).text()+"</div>").appendTo("#screen-ten .letters-container")
  $(this).remove()
  isWinnerTen()
})
// Bajar las letras, borra las letras
$("#screen-ten .letters-container").on("click", ".letter-answer",function(e) {
  e.preventDefault()
  $("<div class='btn btn-primary letter-option'>"+$(this).text()+"</div>").appendTo("#screen-ten .options-container")
  $(this).remove()
  isWinnerTen()
})

// AVANZAR DE NIVEL
function gano () {
 if ($("#screen-one .letters-container").find(".letter-answer").text() == "TURING"){
  alert("¡¡Felicitaciones!!, continua con el siguiente nivel")
  $("#screen-one").addClass("hidden")
  $("#screen-two").removeClass("hidden")
 }
}

function isWinnerTwo () {
 if ($("#screen-two .letters-container").find(".letter-answer").text() == "MURRAY"){
  alert("¡¡Felicitaciones!!, continua con el siguiente nivel")
  $("#screen-two").addClass("hidden")
  $("#screen-three").removeClass("hidden")
 }
}

function isWinnerThree () {
 if ($("#screen-three .letters-container").find(".letter-answer").text() == "ADA"){
  alert("¡¡Felicitaciones!!, continua con el siguiente nivel")
  $("#screen-three").addClass("hidden")
  $("#screen-four").removeClass("hidden")
 }
}
function isWinnerFour () {
 if ($("#screen-four .letters-container").find(".letter-answer").text() == "BABBAGE"){
  alert("¡¡Felicitaciones!!, continua con el siguiente nivel")
  $("#screen-four").addClass("hidden")
  $("#screen-five").removeClass("hidden")
 }
}

function isWinnerFive () {
 if ($("#screen-five .letters-container").find(".letter-answer").text() == "NEUMANN"){
  alert("¡¡Felicitaciones!!, continua con el siguiente nivel")
  $("#screen-five").addClass("hidden")
  $("#screen-sixth").removeClass("hidden")
 }
}

function isWinnerSixth () {
 if ($("#screen-sixth .letters-container").find(".letter-answer").text() == "COLOSSUS"){
  alert("¡¡Felicitaciones!!, continua con el siguiente nivel")
  $("#screen-sixth").addClass("hidden")
  $("#screen-seven").removeClass("hidden")
 }
}

function isWinnerSeven () {
 if ($("#screen-seven .letters-container").find(".letter-answer").text() == "TRANSISTOR"){
  alert("¡¡Felicitaciones!!, continua con el siguiente nivel")
  $("#screen-seven").addClass("hidden")
  $("#screen-eight").removeClass("hidden")
 }
}

function isWinnerEight () {
 if ($("#screen-eight .letters-container").find(".letter-answer").text() == "EDWARD"){
  alert("¡¡Felicitaciones!!, continua con el siguiente nivel")
  $("#screen-eight").addClass("hidden")
  $("#screen-nine").removeClass("hidden")
 }
}

function isWinnerNine () {
 if ($("#screen-nine .letters-container").find(".letter-answer").text() == "JOBS"){
  alert("¡¡Felicitaciones!!, continua con el siguiente nivel")
  $("#screen-nine").addClass("hidden")
  $("#screen-ten").removeClass("hidden")
 }
}

function isWinnerTen () {
 if ($("#screen-ten .letters-container").find(".letter-answer").text() == "ENIAC"){
  $("#screen-ten").addClass("hidden")
  $("#screen-fin").removeClass("hidden")
 }
}