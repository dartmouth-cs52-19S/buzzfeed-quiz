$('#endButton').on('click', function(e) {
    // gather all checked radio-button values
    var choices = $("input[type='radio']:checked").map(function(i, radio) {
      return $(radio).val();
    }).toArray();

    if (choices.length < 5) {
        var qleft = 5-choices.length;
        alert("You haven't resulted " + qleft + " questions!");
        return;
    };

    console.log(choices);
    var a = 0 , b = 0, c = 0, d = 0;
    choices.forEach(element => {
        if (element == '1') a++;
        else if(element == '2') b++;
        else if (element == '3') c++;
        else if (element == '4') d++;
    });
    max_element = Math.max(a, b, c, d);
    var result;
    if (max_element == a) {
        result = 'Sanborn';
        

    } else if (max_element == b) {
        result = 'FFB';
        
    } else if (max_element == c) {
        result = 'Tower';
        
    } else if (max_element == d) {
        result = 'Kresge';
        
    }
    else {
        alert("Error");
        return;
    }

    $( "body" ).append( "<div class='result'>"+result+"</div>");
    
    
    // now you have an array of choices = ["valueofradiobox1", "valueofradiobox2", "valueofradiobox2"]
    // you'll need to do some calculations with this
    // a naive approach would be to just choose the most common option - seems reasonable
});


$('label').click(function()
    {
        newid = $(this).parent().parent().parent().attr('id')
        $("#" + newid).find("label").css("opacity", 0.5);
        $("#" + newid).find("label").find("img").css("border", "0px solid #a3152c");

        $(this).css("opacity", 1);
        $(this).find("img").css("border", "10px solid #a3152c");
}); 