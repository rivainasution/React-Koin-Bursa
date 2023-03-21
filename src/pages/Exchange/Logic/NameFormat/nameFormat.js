export default function NameFormat(name, id, url, setName, setPages, setUrl){
    function clickHandle(){
        setName(id);
        setPages('Market');
        setUrl(url);
    }
    return <span onClick={clickHandle} className='t-pointer'>{name}</span>
}