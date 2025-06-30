import * as React from 'react';
import supabase from "@/utils/supabase/supabaseClient";
import { clsx } from 'clsx';

export default async function DataTable() {
  const db = await supabase();
  const { data: payment_history } = await db.from("payment_history").select();
  const rows: PaymentHistory[] = payment_history ?? [];
  return (
    <div className='p-2'>
      <h1 className="text-2xl font-mono mb-2">Transaction History</h1>
      <table className="round-l text-sm h-content table-fixed bg-white w-full">
        <thead>
          <tr>
            <th className="text-left p-3 text-md font-extralight">SENT BY</th>
            <th className="text-left p-3 font-extralight">AMOUNT PAID</th>
            <th className="text-left p-3 font-extralight">AMOUNT DUE</th>
            <th className="text-left p-3 font-extralight">DATE DUE</th>
            <th className="text-left p-3 font-extralight">NOTE</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row:PaymentHistory) => (
            <tr key={row.transaction_id} className="[&:nth-child(odd)]:bg-[#F1F5F8]">
              <td className="py-2 pl-4">{row.sent_by}</td>
              <td className="py-2 pl-4 text-red-600">-${row.amount_paid}</td>
              <td className="py-2 pl-4 text-green-600">${row.amount_due}</td>
              <td className="py-2 pl-4">{row.due_date}</td>
              <td
                className={clsx(
                  "py-2 pl-4",
                  { "text-purple-600": row.note === "Zelle" }
                )}
              >
                {row.note}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
