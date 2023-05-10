var f_n  = document.getElementById('name');
var m_id = document.getElementById('mail');
var btn = document.getElementById('submit');
var list = document.getElementById('output_screen');

list.addEventListener('click',delete_details);
list.addEventListener('click',edit_details);

btn.addEventListener('click',show_details);
function show_details(e){
    e.preventDefault();
    var li = document.createElement('li');
    li.id = 'booking_details';
    li.appendChild(document.createTextNode(f_n.value));
    li.appendChild(document.createTextNode(' - '));
    li.appendChild(document.createTextNode(m_id.value));
    li.appendChild(document.createTextNode(' '));
    var edit = document.createElement('button');
    edit.id='edit';
    edit.textContent='Edit Button'
    edit.style.borderColor = "green";
    li.appendChild(edit);
    var dte = document.createElement('button');
    dte.id='del';
    dte.textContent='Delete Button';
    dte.style.borderColor = "red";
    li.appendChild(dte);
    list.appendChild(li);
    result = {
        'Name':f_n.value,
        'mail_id':m_id.value,
    };
    var object = JSON.stringify(result);
    localStorage.setItem(m_id.value,object);
}
function delete_details(e){
    if (e.target.id=='del'){
        if(confirm('Are you sure?')){
            var x = e.target.parentElement;
            item = x.childNodes[2].data;
            list.removeChild(x);
            localStorage.removeItem(item);
        }
    }
}

function edit_details(e){
    if (e.target.id=='edit'){
        var x = e.target.parentElement;
        f_n.value=x.childNodes[0].data;
        m_id.value=x.childNodes[2].data;
        list.removeChild(x);
        localStorage.removeItem(x.childNodes[2].data);
    }
}
