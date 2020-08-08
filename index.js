console.log('test')

function countTime(action, time) {
  return new Promise(function (resolve) {
    action()
    setTimeout(resolve, time)
  })
}

async function runTimeline() {
  for (let i = 0; i < 10; i++) {
    await countTime(() => console.log(i), 1000)
  }
}

module.exports = runTimeline
