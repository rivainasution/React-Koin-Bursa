export default function TimeHandle(time) {
    let newTime = time.toString();
    let hr = newTime.slice(0,2);
    let mnt = newTime.slice(2,4);
    let scn = newTime.slice(4,6);
    return <span>{hr}:{mnt}:<span className="text-secondary">{scn}</span></span>
}