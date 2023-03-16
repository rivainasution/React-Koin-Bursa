export default function NumberBehindComma(data, number){
    const convertToNumber = Number(data)
    return convertToNumber.toFixed(number)
}