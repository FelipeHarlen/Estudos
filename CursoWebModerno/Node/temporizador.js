const schedule = require('node-schedule')

const tarefa_1 = schedule.scheduleJob('*/5 * 13 * * 2', function(){
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function(){
    tarefa_1.cancel()
    console.log('Cancelamento da Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 13
regra.second = 30

const tarefa_2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2!', new Date().getSeconds())
})