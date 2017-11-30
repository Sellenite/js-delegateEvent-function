# js-delegateEvent-function
A delegateEvent function base on javascript

Also support IE8
#### 用法：
```javascript
delegateEvent('.parent', '.child', 'click', function () {
    console.log(this)
})

delegateEvent('.parent', 'div', 'mousemove', function () {
    console.log(this.tagName)
})

delegateEvent('#parent', '.child', 'click', function (e) {
    console.log(e.currentTarget)
})
```
