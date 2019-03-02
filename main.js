 // 用状态机来理解轮播，现在包含三种状态，current、leave、stay。
$(`.image:nth-child(1)`).addClass('current').siblings().addClass('stay')

let n = 1;
let imgLength = $('.image').length
setInterval(() => {
    becomeLeave(getNode(n)).one('transitionend', (e) => {
        becomeStay(e.currentTarget)
    })
    becomeCurrent(getNode(n+1))
}, n * 3000)
















// 函数

// 取得n
function getChild(num){
    let i = num % imgLength
    if (i === 0) {
        return n = 4
    } else {
        return n = i
    }
}

function becomeCurrent(node){
    return $(node).removeClass('stay').addClass('current')
}

function becomeLeave(node) {
    return $(node).removeClass('current').addClass('leave')
}

function becomeStay(node) {
    return $(node).removeClass('leave').addClass('stay')
}
// 获取节点
function getNode(n){
    return `.image:nth-child(${getChild(n)})`
}