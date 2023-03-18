export default function NameFormat(trx, id, setName, setPages){
    function clickHandle(){
        setName(id);
        setPages('Detail');
    }
    return <span onClick={clickHandle} className='t-pointer'>{trx}</span>
}