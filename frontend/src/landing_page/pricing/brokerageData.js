export const brokerageData = {
  equity: {
    headers: ["", "Equity delivery", "Equity intraday", "F&O - Futures", "F&O - Options"],
    rows: [
      {
        label: "Brokerage",
        values: [
          "Zero Brokerage",
          "0.03% or ₹20/executed order whichever is lower",
          "0.03% or Rs. 20/executed order whichever is lower",
          "Flat Rs. 20 per executed order",
        ],
      },
      {
        label: "STT/CTT",
        values: [
          "0.1% on buy & sell",
          "0.025% on sell",
          "0.02% on sell",
          ["0.125% of the intrinsic value on options that are bought and exercised","0.1% on sell side (on premium)",],
        ],
      },
      {
        label: "Transaction charges",
        values: [
          ["NSE: 0.00297%", "BSE: 0.00375%"],
          ["NSE: 0.00297%", "BSE: 0.00375%"],
          ["NSE: 0.00173%","BSE: 0"],
          ["NSE: 0.03503% (on premium)","BSE: 0.0325% (on premium)"],
        ],
      },
      {
        label: "GST",
        values: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ]
      },
      {
        label: "SEBI charges",
        values: [
          "₹10 / crore",
          "₹10 / crore",
          "₹10 / crore",
          "₹10 / crore",
        ]
      },
      {
        label: "Stamp charges",
        values: [
          "0.015% or ₹1500 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
          "0.002% or ₹200 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
        ]
      }
    ],
  },

  currency: {
    headers: ["", "Currency Futures", "Currency Options"],
    rows: [
      {
        label: "Brokerage",
        values: [
          "0.03% or ₹ 20/executed order whichever is lower",
          "₹ 20/executed order",
        ],
      },
      {
        label: "STT/CTT",
        values: [
          "No STT",
          "	No STT",
        ]
      },
      {
        label: "Transaction charges",
        values: [
          ["NSE: 0.00035%","BSE: 0.00045%"],
          ["NSE: 0.0311%","BSE: 0.001%"],
        ]
      },
      {
        label: "GST",
        values: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ]
      },
      {
        label: "SEBI charges",
        values: [
          "₹10 / crore",
          "₹10 / crore",
        ]
      },
      {
        label: "Stamp charges",
        values: [
          "0.0001% or ₹10 / crore on buy side",
          "0.0001% or ₹10 / crore on buy side",
        ]
      }
    ],
  },

  commodity: {
    headers: ["", "Commodity Futures", "Commodity Options"],
    rows: [
      {
        label: "Brokerage",
        values: [
          "0.03% or Rs. 20/executed order whichever is lower", 
          "₹ 20/executed order"],
      },
      {
        label: "STT/CTT",
        values: [
          "0.01% on sell side (Non-Agri)",
          "0.05% on sell side",
        ]
      },
      {
        label: "Transaction charges",
        values: [
          ["MCX: 0.0021%","NSE: 0.0001%"],
          ["MCX: 0.0418%","NSE: 0.001%"]
        ]
      },
      {
        label: "GST",
        values: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ]
      },
      {
        label: "SEBI charges",
        values: [
          ["Agri: ₹1 / crore","Non-agri: ₹10 / crore"],
          "₹10 / crore",
        ]
      },
      {
        label: "Stamp charges",
        values: [
          "0.002% or ₹200 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
        ]
      }
    ],
  },
};
