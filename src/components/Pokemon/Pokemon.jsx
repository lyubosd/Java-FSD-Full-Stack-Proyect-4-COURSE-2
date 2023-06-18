

const getImgURL = (id) => {
    id = id.length < 3 ? '0'.repeat(3 - id.length) + id : id;
    console.log(id);
    return `${location.protocol}//${location.host}/images/${id}.png`
}
export function Pokemon({id, name, base, types}){
    return (
        <div className="shadow-xl text-left w-40 p-10 m-10" style={{width: 250}}>
            <img src={getImgURL(String(id))} alt=""/>
            <table className="w-full">
                <tbody>
                <tr><td>Name: </td><td><b>{name}</b></td></tr>
                <tr><td>HP: </td><td><b>{base.HP}</b></td></tr>
                <tr><td>Attack: </td><td><b>{base.Attack}</b></td></tr>
                <tr><td>Defense: </td><td><b>{base.Defense}</b></td></tr>
                <tr><td>SP. Attack: </td><td><b>{base['Sp. Attack']}</b></td></tr>
                <tr><td>SP. Defense: </td><td><b>{base['Sp. Defense']}</b></td></tr>
                <tr><td>Speed: </td><td><b>{base.Speed}</b></td></tr>
                <tr><td>Type: </td><td><b>{types.reduce((ac, type) => ac + type +',')}</b></td></tr>
                </tbody>
            </table>
        </div>
    )
}