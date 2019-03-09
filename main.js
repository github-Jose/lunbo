// 用状态机来理解轮播，现在包含三种状态，current、leave、stay。
$(`.image:nth-child(1)`).addClass('current').siblings().addClass('stay')

let n = 1;
let imgLength = $('.image').length
let timer = setInterval(() => {
  becomeLeave(getNode(n)).one('transitionend', (e) => {
    becomeStay(e.currentTarget)
  })
  becomeCurrent(getNode(n + 1))
}, n * 3000)

// 当用户没有浏览当前页面时，浏览器的setInterval会出错，为了减小页面占用内存或cpu
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    window.clearInterval(timer)
  } else {
    console.log('dayui')
    timer = setInterval(() => {
      becomeLeave(getNode(n)).one('transitionend', (e) => {
        becomeStay(e.currentTarget)
      })
      becomeCurrent(getNode(n + 1))
    }, n * 3000)
  }
})













// 函数

// 取得n
function getChild(num) {
  let i = num % imgLength
  if (i === 0) {
    return n = 4
  } else {
    return n = i
  }
}

function becomeCurrent(node) {
  return $(node).removeClass('stay').addClass('current')
}

function becomeLeave(node) {
  return $(node).removeClass('current').addClass('leave')
}

function becomeStay(node) {
  return $(node).removeClass('leave').addClass('stay')
}
// 获取节点
function getNode(n) {
  return `.image:nth-child(${getChild(n)})`
}