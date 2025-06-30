type PaymentHistory = {
    transaction_id: number;
    sent_by: string;
    amount_paid: number;
    amount_due: number;
    due_date: string; // or `Date` if you're parsing dates
    note: string;
  };