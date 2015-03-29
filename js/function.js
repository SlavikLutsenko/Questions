function $(query) {
  var el
  if (typeof query == 'string') {
    el = document.querySelector(query)
  }
  else {
    el = query
  }
  el.$ = function(query) {
    return $(document.querySelector(query))
  }
  el.addEl = function(element) {
    this.appendChild(element)
    return this
  }
  el.addClass = function(className) {
    if (this.className.search(className) == -1) {
      this.className += ' ' + className
    }
    return this
  }
  el.rmClass = function(className) {
    this.className = this.className.replace(RegExp('\\s?' + className + '\\s?', 'g'), '')
    return this
  }
  el.setAttr = function(attr, value) {
    this.setAttribute(attr, value)
    return this
  }
  el.getAttr = function(attr) {
    return this.getAttribute(attr)
  }
  el.rmAttr = function(attr) {
    this.removeAttribute(attr)
    return this
  }
  el.html = function(str) {
    if (str == null) {
      return this.innerHTML
    }
    this.innerHTML = str
    return this
  }
  el.text = function(str) {
    if (str == null) {
      return this.innerText
    }
    this.innerText = str
    return this
  }
  el.clear = function() {
    el.html('')
    return this
  }
  el.parent = function() {
    return $(this.parentNode)
  }
  return el
}

$.newEl = function(nameEl) {
  return $(document.createElement(nameEl))
}
