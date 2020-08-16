function countTime(action = () => {}, timeInterval) {
  return new Promise(function (resolve) {
    action()
    setTimeout(resolve, timeInterval)
  })
}

async function setTimeline(timeEvent) {
  for (let i = 0; i < timeEvent.length; i++) {
    const repeat = timeEvent[i].repeat > 1 ? timeEvent[i].repeat : 1
    const timeInterval =
      timeEvent[i].timeInterval > 0 ? timeEvent[i].timeInterval : 1
    for (let j = 0; j < repeat; j++) {
      await countTime(timeEvent[i].action, timeInterval)
    }
  }
}

module.exports = setTimeline
