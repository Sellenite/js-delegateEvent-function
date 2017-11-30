# js-delegateEvent-function
A delegateEvent function base on javascript（事件代理）
 
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
