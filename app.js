//fetch DOM elem
var btnAdd = document.querySelector('.button');
var btnRemove = document.querySelector('#button-remove');
var list = document.querySelector('#list');
var input = document.querySelector('#user-input');

//show modal either as success or danger
function modal(state) {
  var div = document.createElement('div');
  var anchor = document.querySelector('.modal');

  if (state == 'success') {
    div.className = 'modal'
    div.id = 'modal-success'
    div.textContent = 'Item added successfully!';
    anchor.parentNode.replaceChild(div, anchor);
    setTimeout(hideModal, 3000);
  }
  if (state == 'danger') {
    div.className = 'modal'
    div.id = 'modal-danger'
    div.textContent = 'Item removed!';
    anchor.parentNode.replaceChild(div, anchor);
    setTimeout(hideModal, 3000);
  }
};
//remove all list-items
function removeAllItems() {
  if (document.querySelector('.list-item')) {
    var elem = document.querySelectorAll('.list-item');
    for (let i = 0; i < elem.length; i++) {
      elem[i].remove();
    }
    modal('danger');
  }
  else {
    return
  }
};

//clears input after submit
function clearField() {
  document.getElementById('user-input').value = '';
};

//main function to add item to list
function addItem() {
    var text = document.getElementById('user-input').value;
    if (text == '') {
        return
    }
    else {
      //construct li
      var li = document.createElement('li');
      li.className = 'list-item';
      li.innerHTML = text;

      //construct span
      var span = document.createElement('span');
      span.className = 'close';
      span.innerHTML = '\u00D7';
      li.appendChild(span);
      
      //append li to document
      document.getElementById('list').appendChild(li);

      //add close button / function
      var close = document.getElementsByClassName("close");
      for (var i = 0; i < close.length; i++) {
        close[i].onclick = function () {
          var elem = this.parentElement;
          elem.remove();
        }
      }

      //clear user input field
      clearField();
      modal('success');
    }  
}; 

function hideModal() {
  document.querySelector('.modal').style.display = 'none';
}

//Toggles class for element 'li'
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
});

//event add list-items
btnAdd.addEventListener('click', addItem);

//Enter button support
input.addEventListener("keyup", function(e){
  if (e.keyCode == 13) {
    addItem();
  }
});

//event remove all list-items
btnRemove.addEventListener('click', removeAllItems);


