import { PaymentSummaryModel } from "../../../lib/definitions/PaymentSummaryModel";
import Namecard from "./NameCard";

export default function NameCardList({ data, total }: { data: PaymentSummaryModel[], total: number }) {
    console.log("AGGG ")
    console.log(data)
    return (
        <div className="flex flex-col content-center justify-center gap-3">
            {
                data.map((entry: PaymentSummaryModel) => {
                    return(
                    <Namecard key={entry.user_id} name={entry.sent_by} amount={entry.total_amount_paid} percent={(entry.total_amount_paid / total).toFixed(3)}></Namecard>
                    );
                })
            }
        </div>
        
    );
}