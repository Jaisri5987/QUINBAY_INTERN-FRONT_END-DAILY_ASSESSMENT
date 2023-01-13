function my_javascript()
{
   alert("added successfully");   
}


function save(event)
{
  event.preventDefault();
    var forms=document.getElementById("addmobileform");
    var input=forms.querySelectorAll("input,select");
    let output={};

    
    for( var inputNode of input)
    {
        let value=inputNode?inputNode.value:null;
        if(!value)
        {
            alert(inputNode.id+"PLEASE FILL THE FIELDS");
            document.getElementById(inputNode.id).focus();
            return;
        }
        output[inputNode.id]=inputNode.value;
    }
    alert("Inputs are added successfully");
    console.log("inputs are added!!!"+JSON.stringify(output));

}