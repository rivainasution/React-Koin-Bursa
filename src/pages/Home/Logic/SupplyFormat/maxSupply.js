export default function MaxSupply(trx){
    if(trx <= 0){
        return <span className="bg-warning text-light p-2">Unlimited</span>
    }
    return <span>{trx}</span>
}