import { PaymentSummaryModel } from "@/app/lib/definitions/PaymentSummaryModel";
import supabase from "@/utils/supabase/supabaseClient"; 
import PaymentStatus from "./PaymentStatus";
import { calculatePaymentSummary } from "@/app/lib/data/calculatePaymentSummary";
import NameCardList from "./NameCardList";
import EquityGaugeClient from "../Stats/GuageWrapper";

export default async function InfoCard(){
    const db = await supabase();
    let { data, error } = await db.rpc('get_payment_summary')
    if (error) console.error(error)
    else console.log(data)
    console.log("gey")
    console.log(data)

    const total = 158260;
    const { amountPaid, remainder } = calculatePaymentSummary(data,total);


    const percentagePaid = Number(((total - remainder) / total * 100).toFixed(1));
    return(
        <div className="p-2">
            <div className='flex flex-col rounded-l md:flex-row md:shadow-md md:justify-around gap-4 p-6 mb-4 text-gray-800 bg-gray-100'>
                <EquityGaugeClient value={percentagePaid}></EquityGaugeClient>
                <PaymentStatus remainder={remainder} amountPaid={amountPaid}></PaymentStatus>
                <NameCardList data={data} total={total}></NameCardList>
            </div>
        </div>
    );
}