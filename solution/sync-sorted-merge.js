'use strict'
var arraySort = require('array-sort');

module.exports = (logSources, printer) => {
    const strippedLogs = []

    for(let log in logSources) {
        strippedLogs.push(logSources[log].last)
    }

    const sortedLogs = arraySort(strippedLogs, 'date')

    for(let log in sortedLogs) {
        let logEntry = sortedLogs[log]
        printer.print(logEntry)    
    }
    printer.done()
}