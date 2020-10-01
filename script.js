var val = 0;

getAll = () => {
    val += 1;

    if (val==2){
        document.getElementById('id').disabled = true;
        document.getElementById('id').value = "";
        document.getElementById('name').disabled = true;
        document.getElementById('name').value = "";
        document.getElementById('password').disabled = true;
        document.getElementById('password').value = "";
        document.getElementById('btn').innerHTML = "Refresh the Page";
    }

    if (val>2){
        location.reload();
    }

    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value.toLowerCase();
    let pswd  = document.getElementById('password').value;

    if ((id>600000 && id<700000)==false){
        document.getElementById('id').style.borderColor = "var(--webred)";
        document.getElementById('id').placeholder = "Enter 6 digit Number !";
        document.getElementById('id').value = "";
    }

    let empval = ['ameya', 'bhaskaran', 'elizabeth', 'govind', 'likesh', 'naveen', 'sabith', 'thankappan', 'vipin', 'vivek'];
    if (empval.includes(name)==false){
        document.getElementById('name').style.borderColor = "var(--webred)";
        document.getElementById('name').placeholder = "Enter First Name !";
        document.getElementById('name').value = "";
    }

    if (pswd!='qwa123'){
        document.getElementById('password').style.borderColor = "var(--webred)";
        document.getElementById('password').placeholder = "Not Defined !";
        document.getElementById('password').value = "";
    }
 }

reGet = (idval) => {
    if (document.getElementById(idval).value==""){
        document.getElementById(idval).style.borderColor = "var(--thickylcol)";
    }
}