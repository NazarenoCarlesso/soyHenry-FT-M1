const layout = [
    [{ type: 'VIP', booked: false }, { type: 'VIP', booked: true }, { type: 'VIP', booked: true }, { type: 'VIP', booked: false }],
    [{ type: 'NORMAL', booked: false }, { type: 'VIP', booked: true }, { type: 'VIP', booked: false }, { type: 'NORMAL', booked: false }],
    [{ type: 'NORMAL', booked: false }, { type: 'NORMAL', booked: true }, { type: 'NORMAL', booked: true }, { type: 'NORMAL', booked: false }],
    [{ type: 'ECONOMIC', booked: true }, { type: 'NORMAL', booked: true }, { type: 'NORMAL', booked: true }, { type: 'ECONOMIC', booked: false }],
    [{ type: 'ECONOMIC', booked: false }, { type: 'ECONOMIC', booked: true }, { type: 'ECONOMIC', booked: false }, { type: 'ECONOMIC', booked: false }]
]

const checkSeatStatus = (string, number) => {
    if (typeof string !== 'string') throw TypeError('First parameter is not a string')
    if (typeof number !== 'number') throw TypeError('Second parameter is not a number')

    const row = getRowNumber(string)
    // console.log(`row: ${row}, number ${number}`)

    return layout[row][number].booked
}

const getRowNumber = (letter) => {
    return letter.charCodeAt(0) - 65
}

const book = (string, number) => {
    const seat = checkSeatStatus(string, number)
    if(seat) return `Seat in ${string}${number} is already booked`

    const row = getRowNumber(string)
    layout[row][number].booked = true

    return `Seat in ${string}${number} successfully booked`
}

module.exports = {
    checkSeatStatus,
    getRowNumber,
    book
}