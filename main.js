$('#endButton').on('click', function(e) {
    // gather all checked radio-button values
    var choices = $("input[type='radio']:checked").map(function(i, radio) {
      return $(radio).val();
    }).toArray();

    if (choices.length < 5) {
        var qleft = 5-choices.length;
        alert("You haven't answered " + qleft + " questions!");
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

    if (max_element == a) {
        alert("a");

    } else if (max_element == b) {
        alert("b");
        
    } else if (max_element == c) {
        alert("c");
        
    } else if (max_element == d) {
        alert("d");
        
    }
    else {
        alert("Error");
    }
    
    // now you have an array of choices = ["valueofradiobox1", "valueofradiobox2", "valueofradiobox2"]
    // you'll need to do some calculations with this
    // a naive approach would be to just choose the most common option - seems reasonable
});


$('label').click(function()
    {
        newid = $(this).parent().parent().parent().attr('id')
        $("#" + newid).find("label").css("opacity", 0.1);

        $(this).css("opacity", 1);
        $(this).css("border", "3px solid #a3152c");
}); 