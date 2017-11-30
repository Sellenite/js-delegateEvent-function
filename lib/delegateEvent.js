/*
 * @Author: Sellenite 
 * @Date: 2017-11-30 18:53:54 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-30 23:05:42
 */
(function () {
    /* dependences */
    function getElement(element) {
        if (element.charAt(0) === '#') {
            var result = []
            result.push(document.getElementById(element.substring(1)))
            return result
        } else {
            return getByClass(element)
        }
    }

    function getByClass(element) {
        var className = element.substring(1)
        if (document.getElementsByClassName) {
            return document.getElementsByClassName(className)
        } else {
            var result = []
            var tags = document.getElementsByTagName('*')
            for (var i = 0, len1 = tags.length; i < len1; i++) {
                var classNames = tags[i].className.split(' ')
                for (var j = 0, len2 = classNames.length; j < len2; j++) {
                    if (className === classNames[j]) {
                        result.push(tags[i])
                    }
                }
            }
            return result
        }
    }

    /* main */
    function delegateEvent(parent, child, type, fn) {
        parent = getElement(parent)
        for (var i = 0, length = parent.length; i < length; i++) {
            if (document.addEventListener) {
                parent[i].addEventListener(type, eventFN)
            } else {
                parent[i].attachEvent('on' + type, eventFN)
            }
        }

        function eventFN(e) {
            var e = e || window.event
            var target = e.target || e.srcElement
            if (matchSelector(target, child)) {
                typeof fn === 'function' && fn.call(target, e)
            }
        }

        function matchSelector(target, child) {
            if (child.charAt(0) === '#') {
                return child.substring(1) === target.id
            } else if (child.charAt(0) === '.') {
                return target.className.indexOf(child.substring(1)) !== -1
            } else {
                return child.toLowerCase() === target.tagName.toLowerCase()
            }
        }
    }

    _globals = (function () {
        return this || (0, eval)("this");
    }())

    if (typeof module !== "undefined" && module.exports) {
        module.exports = delegateEvent
    } else if (typeof define === "function" && define.amd) {
        define(function () {
            return delegateEvent
        })
    } else {
        _globals.delegateEvent = delegateEvent
    }
})()