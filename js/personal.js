function display(name,info){
	document.getElementById("title-info").innerHTML = name;
	document.getElementById(info).style.display = "block";
	document.getElementById("hello").style.display = "none";
}

function hide(id){
	document.getElementById(id).style.display = "none";
}
function flip(num){
	var flipper = document.getElementById("down"+num);
	if (flipper.style.display == "none"){
		flipper.style.display = "block";
		document.getElementById("up"+num).style.display = "none";
	}
	else{
		flipper.style.display = "none";
		document.getElementById("up"+num).style.display = "block";
	}
}

$(document).ready(function(){
    $("#hide1, #up1, #down1").click(function(){
        $("#project1").toggle("slow");
    });
    $("#hide2, #up2, #down2").click(function(){
        $("#project2").toggle("slow");
    });
    $("#hide3, #up3, #down3").click(function(){
        $("#project3").toggle("slow");
    });
    
});

/*<figure class="fig1">
                        <img class="collection-1" alt="Hi!" src="images/dominoes/collection1.png">
                        <figcaption class="cap1">The human player's tile collection before game-play (with buttons)</figcaption>
                    </figure>
                    <figure class="fig2">
                        <img class="collection-2" alt="Hi!" src="images/dominoes/collection2.png">
                        <figcaption class="cap2">The computer player's tile collection before game-play (sans buttons)</figcaption>
                    </figure>

*/