export default function PriceFormat(trx){
    if (trx > 0){
        return <span className="text-success">+{trx}</span>
    }
    return <span className="text-danger">{trx}</span>
}