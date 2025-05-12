import React, { useState } from "react";

import { getDespesas, getOrcamento } from "../../service/db";
import TabelaGenerica from "../../components/generate_table";

function FinancialPage() {
  const [subPage, setSubPage] = useState("despesas");

  let table;

  switch (subPage) {
    case "despesas":
      table = TabelaGenerica(getDespesas());
      break;
    case "orcamento":
      table = TabelaGenerica(getOrcamento());
      break;
    default:
      table = <div>Error</div>;
      break;
  }

  return (
    <div className="App">
      <div id="SubPageContainer">
        <div className="subpage_nav">
          <h2>Financeiro </h2>
          <nav className="subpage_button">
            <button onClick={() => setSubPage("despesas")}>Despesas</button>
            <button onClick={() => setSubPage("orcamento")}>Orçamentos</button>
          </nav>
        </div>

        <div id="Table">{table}</div>
      </div>
    </div>
  );
}

export default FinancialPage;
