export default function MaxSupply(trx){
    if(trx <= 0){
        return <span className="text-info">Unlimited</span>
    }
    return <span>{trx}</span>
}