function play_single_sound(){document.getElementById("audiotag1").play()}function gano(){"TURING"==$("#screen-one .letters-container").find(".letter-answer").text()?(alert("Felicitaciones!!, continua con el siguiente nivel"),$("#screen-one").addClass("hidden"),$("#screen-two").removeClass("hidden")):console.log("NO")}function isWinnerTwo(){"MURRAY"==$("#screen-two .letters-container").find(".letter-answer").text()?(alert("Felicitaciones!!, continua con el siguiente nivel"),$("#screen-two").addClass("hidden"),$("#screen-three").removeClass("hidden")):console.log("NO")}function isWinnerThree(){"ADA"==$("#screen-three .letters-container").find(".letter-answer").text()?alert("Felicitaciones!!, continua con el siguiente nivel"):console.log("NO")}$(".btnn").on("click",function(e){e.preventDefault(),$("#intro").addClass("hidden"),$("#screen-one").removeClass("hidden"),play_single_sound()}),$("#screen-one .options-container").on("click",".letter-option",function(e){e.preventDefault(),$("<div class='btn btn-success letter-answer'>"+$(this).text()+"</div>").appendTo("#screen-one .letters-container"),$(this).remove(),gano()}),$("#screen-one .letters-container").on("click",".letter-answer",function(e){e.preventDefault(),$("<div class='btn btn-primary letter-option'>"+$(this).text()+"</div>").appendTo("#screen-one .options-container"),$(this).remove(),gano()}),$("#screen-two .options-container").on("click",".letter-option",function(e){e.preventDefault(),$("<div class='btn btn-success letter-answer'>"+$(this).text()+"</div>").appendTo("#screen-two .letters-container"),$(this).remove(),isWinnerTwo()}),$("#screen-two .letters-container").on("click",".letter-answer",function(e){e.preventDefault(),$("<div class='btn btn-primary letter-option'>"+$(this).text()+"</div>").appendTo("#screen-two .options-container"),$(this).remove(),isWinnerTwo()}),$("#screen-three .options-container").on("click",".letter-option",function(e){e.preventDefault(),$("<div class='btn btn-success letter-answer'>"+$(this).text()+"</div>").appendTo("#screen-three .letters-container"),$(this).remove(),isWinnerThree()}),$("#screen-three .letters-container").on("click",".letter-answer",function(e){e.preventDefault(),$("<div class='btn btn-primary letter-option'>"+$(this).text()+"</div>").appendTo("#screen-three .options-container"),$(this).remove(),isWinnerThree()});