function countTime(action, timeInterval) {
  return new Promise(function (resolve) {
    action()
    setTimeout(resolve, timeInterval)
  })
}

async function runTimeline(timeEvent) {
  for (let i = 0; i < timeEvent.length; i++) {
    const repeat = timeEvent[i].repeat > 1 ? timeEvent[i].repeat : 1
    for (let j = 0; j < repeat; j++) {
      await countTime(timeEvent[i].action, timeEvent[i].timeInterval)
    }
  }
}

module.exports = runTimeline
