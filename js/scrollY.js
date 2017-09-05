function scrollY(outerTab, insideBox) {
  var tab = outerTab
  var box = insideBox
  var tabWidth = tab.clientHeight
  console.log(tab)
  console.log(box)
  // 初始化insideBox的长度 = 其下子元素的长度之和
  var boxWidth = 0
  for (var i = 0; i < box.children.length; i++) {
    boxWidth += box.children[i].clientHeight
  }
  box.style.height = boxWidth + 'px'

  // 判断是否需要移动
  if (tabWidth >= boxWidth) {
    return
  }

  var touch = {}
  var startOffsetLeft
  var maxLeft = 0
  var maxRight = -(boxWidth - tabWidth)
  var speed = 5
  var isMouseDown

  // PC端移动
  box.addEventListener('mousedown', (e) => {
    isMouseDown = true
    box.style.transition = ''
    touch.x1 = e.pageY
    startOffsetLeft = box.getBoundingClientRect().top
  })
  box.addEventListener('mousemove', (e) => {
    if (!isMouseDown) {
      return
    }
    e.preventDefault()
    // 得到移动距离
    touch.x2 = e.pageY
    touch.deltaX = touch.x2 - touch.x1 + startOffsetLeft - tab.getBoundingClientRect().top

    // 如果超过起始 0 的情况
    if (touch.deltaX > maxLeft) {
      touch.deltaX /= speed
    }

    // 如果超过末尾长度的情况
    if (touch.deltaX < maxRight) {
      touch.deltaX = (touch.deltaX - maxRight) / speed + maxRight
    }
    box.style.transform = 'translate3d(0, ' + touch.deltaX + 'px, 0)'
  })
  box.addEventListener('mouseup', (e) => {
    var move
    box.style.transition = '0.2s ease-in-out'
    if (touch.deltaX > maxLeft) {
      move = maxLeft
    }
    if (touch.deltaX < maxRight) {
      move = maxRight
    }
    box.style.transform = 'translate3d(0, ' + move + 'px, 0)'
    isMouseDown = false
  })

  // 移动端移动
  box.addEventListener('touchstart', function(e) {
    box.style.transition = ''
    touch.x1 = e.touches[0].pageY
    startOffsetLeft = box.getBoundingClientRect().top
  })
  box.addEventListener('touchmove', function(e) {
    e.preventDefault()
    // 得到移动距离
    touch.x2 = e.touches[0].pageY
    touch.deltaX = touch.x2 - touch.x1 + startOffsetLeft - tab.getBoundingClientRect().top

    // 如果超过起始 0 的情况
    if (touch.deltaX > maxLeft) {
      touch.deltaX /= speed
    }

    // 如果超过末尾长度的情况
    if (touch.deltaX < maxRight) {
      touch.deltaX = (touch.deltaX - maxRight) / speed + maxRight
    }
    box.style.transform = 'translate3d(0, ' + touch.deltaX + 'px, 0)'
  })

  box.addEventListener('touchend', function(e) {
    var move
    box.style.transition = '0.2s ease-in-out'
    if (touch.deltaX > maxLeft) {
      move = maxLeft
    }
    if (touch.deltaX < maxRight) {
      move = maxRight
    }
    box.style.transform = 'translate3d(0, ' + move + 'px, 0)'
  })
}