Clear Bookmarklet
=================

Adds an HTML list to [Clear](http://realmacsoftware.com/clear). Launch the bookmarklet and then tap the list you want to add.

```
javascript:(function(d%2Ce)%7Bfunction%20h(b)%7Breturn(b.innerText%7C%7Cb.textContent).replace(%2F%5Cs%2B%2Fg%2C%22%20%22).trim()%7Dfunction%20f(b%2Ca)%7Ba%3Da.map%3Fa.map(encodeURIComponent).join(%22%2C%22)%3AencodeURIComponent(a)%3Breturn%20b%2B%22%3D%22%2Ba%7Dfunction%20k(b)%7Bvar%20a%3Db.currentTarget%2Cc%3DArray.prototype.slice.call(a.children).map(h)%3Be.getSelection().selectAllChildren(a)%3Bb.stopPropagation()%3Bb.preventDefault()%3Bg(%22remove%22)%3Be.location%3D%22clearapp%3A%2F%2Flist%2Fcreate%3F%22%2Bf(%22listName%22%2Cd.title)%2B%22%26%22%2Bf(%22tasks%22%2Cc)%7Dfunction%20g(b)%7Bfor(var%20a%3Dd.querySelectorAll(%22ul%2Col%2Cdl%22)%2Cc%3D0%3Bc%3Ca.length%3B%2B%2Bc)a%5Bc%5D%5Bb%2B%22EventListener%22%5D(%22click%22%2Ck%2C!0)%7Dg(%22add%22)%7D)(document%2Cwindow)
```
