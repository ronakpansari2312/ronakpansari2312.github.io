function myFunction() 
{
     var picture = prompt("Please enter main picture url"); 
     var name = prompt("please enter name of author");  
     var upicture = prompt("please enter user picture url");        
     var caption = prompt("please enter your caption");

     var cln = $("#wah").clone();
     cln.attr("id","z1");
     $("#c").append(cln);
    
       
    $("#z1 #pic").attr("src",picture); 
    $("#z1 #nm").text(name); 
    $("#z1 #usp").attr("src",upicture); 
    $("#z1 #caption1").text(caption);
    
    
    //$("#wah").clone().appendTo("#c");
    
}







    