import { PaymentSummaryModel } from "../definitions/PaymentSummaryModel";

// utils/calculatePaymentSummary.ts
export function calculatePaymentSummary(data: PaymentSummaryModel[], total: number) {
    const amountPaid = data.reduce((sum, entry) => sum =+ entry.total_amount_paid, 0);
    const remainder = total - amountPaid;
    const percentagePaid = Number(((amountPaid / total) * 100).toFixed(1));
  
    return { amountPaid, remainder, percentagePaid };
  }
   