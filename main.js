let nquestions = 0;
$.getJSON("data.json", function(data) {
    // now you can do something with this data. 
    // remember you can only work with the data in this callback
    // data.title has the title
    // maybe you want to loop through data.questions? 
    $( "body" ).append( "<header> <h1>"+data.title+"</h1> </header>");
    data.questions.forEach( (q, i) => {
        nquestions += 1;
        $( "body" ).append("<div class='question'>"+q.question_name+"</div>");
        $( "body" ).append("<div class='qgrid' id='"+q.id+"'></div>");

        for(let k = 0; k<2; k++) {
            $("#"+q.id).append("<ul class='qrow'></ul>");
        }

        q.answers.forEach( (a, j) => {

            if (j < 2) {
                $("#"+q.id+" ul.qrow:nth-child(1)")
                .append("<li> <label> <img src='"+a.img_url
                 +"'/> <p>"+a.text+"</p> <input type='radio' name='"+q.name
                 +"' value='"+a.outcome+"'/> </label> </li>");
            }
            else {
                $("#"+q.id+" ul.qrow:nth-child(2)")
                .append("<li> <label> <img src='"+a.img_url
                 +"'/> <p>"+a.text+"</p> <input type='radio' name='"+q.name
                 +"' value='"+a.outcome+"'/> </label> </li>");
            }
        });
    });
    $("body").append("<button id='endButton'>Get Result</button>");
});


$(document).ready(function(){
    $('#endButton').on('click', function(e) {
        // gather all checked radio-button values
        var choices = $("input[type='radio']:checked").map(function(i, radio) {
        return $(radio).val();
        }).toArray();

        console.log(choices);
        console.log(nquestions);

        if (choices.length < nquestions) {
            var qleft = nquestions-choices.length;
            alert("You haven't answered " + qleft + " questions!");
            return;
        };

        var a = 0 , b = 0, c = 0, d = 0;
        choices.forEach(element => {
            if (element == '1') a++;
            else if(element == '2') b++;
            else if (element == '3') c++;
            else if (element == '4') d++;
        });

        let sum = 1*a + 2*b + 3*c + 4*d;
        console.log(sum);
        let max_element = Math.max(a, b, c, d);
        var result;

        if (sum == 15) {
            result = "Psi U Basement";
        }
        else if (sum == 9) {
            result = "The Green";
        }
        else if (sum == 20) {
            result = "Lol, As if you study";
        }
        else if (max_element == a) {
            result = 'Sanborn Library';
        } else if (max_element == b) {
            result = 'FFB';
            
        } else if (max_element == c) {
            result = 'Tower Room';
            
        } else if (max_element == d) {
            result = 'Kresge Library';
            
        }
        else {
            alert("Error");
            return;
        }

        $( "body" ).find("div.result").remove();
        $( "body" ).append( "<div class='result'>"+result+"</div>");
        $(".result").hide();
        $(".result").show(3000).slideDown();
    }); 


    $('label').click(function()
        {
            newid = $(this).parent().parent().parent().attr('id')
            $("#" + newid).find("label").css("opacity", 0.5);
            $("#" + newid).find("label").find("img").css("border", "0px solid #a3152c");
            $("#" + newid).find("label").find("p").css("color", "grey");

            $(this).css("opacity", 1);
            $(this).find("img").css("border", "10px solid #a3152c");
            $(this).find("p").css("color", "red");
    }); 
});