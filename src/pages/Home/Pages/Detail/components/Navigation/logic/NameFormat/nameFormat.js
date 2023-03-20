export default function NameFormat(trx, setPageId, setPage){
    function clickHandle(){
        setPageId(trx.toLowerCase());
        setPage('Market');
    }
    return <span onClick={clickHandle} className='t-pointer'>{trx}</span>
}