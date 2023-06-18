export function Paginator({page, setPage, onChange, total, el_per_page}){
    const total_pages = total / el_per_page;

    let r = [];
    for(let i =1;i<total_pages;i++){
        r.push(<div className={`p-2 w-10 m-2 rounded cursor-pointer border shadow ${i === page ? 'bg-indigo-300': ''}`} onClick={() => onChange(i)}>{i}</div>)
    }

    return <div className="flex flex-wrap mt-5">
        {r}
    </div>



}