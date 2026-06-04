import '../styles/pricing/BrokerageTable.css'

const BrokerageTable = ({ data }) => {
  return (
    <div className="container brokerage-wrapper">
      {/* Header */}
      <div className="row brokerage-header">
        {data.headers.map((header, index) => (
          <div className="col brokerage-cell header-cell" key={index}>
            {header}
          </div>
        ))}
      </div>

      {/* Rows */}
      {data.rows.map((row, rowIndex) => (
        <div className="row brokerage-row" key={rowIndex}>
          <div className="col brokerage-cell label-cell">
            {row.label}
          </div>

          {row.values.map((value, i) => (
            <div className="col value-cell" key={i}>
              {Array.isArray(value) ? (
                <div className="stacked-values">
                  {value.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              ) : (
                value
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BrokerageTable;
