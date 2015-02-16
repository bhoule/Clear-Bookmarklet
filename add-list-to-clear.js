(function(document, window) {
'use strict';

function toArray(notQuiteArray) {
    return Array.prototype.slice.call(notQuiteArray);
}

function trimText(text) {
    return text.replace(/\s+/g,' ').trim();
}

function trimNodeText(node) {
    return trimText(node.innerText||node.textContent);
}

function param(key, val) {
    if (val.map) {
        val = val.map(encodeURIComponent).join(',');
    } else {
        val = encodeURIComponent(val);
    }
    return key + '=' + val;
}

function sendToClear(listName, tasks) {
    window.location = 'clearapp://list/create?'+param('listName',listName)+'&'+param('tasks',tasks);
}

function selectNode(node) {
    window.getSelection().selectAllChildren(node);
}

function onClick(event) {
    var list = event.currentTarget;
    var tasks = toArray(list.children).map(trimNodeText);
    selectNode(list);
    event.stopPropagation();
    event.preventDefault();
    clickListeners('remove');
    sendToClear(document.title, tasks);
}

function clickListeners(addOrRemove) {
    var lists = document.querySelectorAll('ul,ol,dl');
    for (var i=0; i<lists.length; ++i) {
        lists[i][addOrRemove+'EventListener']('click', onClick, true);
    }
}

clickListeners('add');

})(document, window);
