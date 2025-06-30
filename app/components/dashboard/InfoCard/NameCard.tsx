

export default function Namecard({name, amount,percent}:{name:string, amount:number, percent:string}) {
    return (
        <div className="p-1 border rounded-md text-black text-l  md:text-2xl grid grid-cols-3">
            <span className="text-left m-2 ">{name}</span>
            <span className="text-left m-2 ">Paid: ${amount}</span>
            <span className="text-right m-2"> Worth: %{percent}</span>
        </div>
    );
}