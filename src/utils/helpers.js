// This file is helper functions that could be used through the project for reusabilty. 
// Developer can add any new function needed and export it to be reused. 

export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

