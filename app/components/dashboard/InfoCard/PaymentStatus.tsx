export default function PaymentStatus({remainder, amountPaid}:{remainder:number, amountPaid:number}) {
    return (
        <div className="flex flex-row gap-3 md:items-center">
            <div className="border-solid border-2 text-red-600 text-l md:text-3xl  p-6 px-6 rounded-xl align-middle text-center">
                <h2>Amount Owed</h2>
                <span>{`$${remainder}`}</span>
            </div>
            <div className="border-solid border-2 text-green-600 text-l md:text-3xl  p-6 px-6  rounded-xl align-middle text-center">
                <h2>Amount Paid</h2>
                <span>{`$${amountPaid}`}</span>
            </div>
        </div>
    );
}