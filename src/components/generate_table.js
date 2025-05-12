import React from "react";
import "./table.css";
/**
 * Componente genérico para renderizar uma tabela a partir de um array de objetos JSON.
 *
 * @param {Object[]} data - Array de objetos JSON com os dados.
 * @param {string[]} [columns] - Opcional. Array com as chaves dos objetos que serão exibidas como colunas.
 *                               Se não informado, usa todas as chaves do primeiro objeto.
 * @param {string} [keyField] - Opcional. Nome da propriedade para usar como key no <tr>. Se não informado, usa índice.
 */

export default function TabelaGenerica(data, columns, keyField) {
  if (!data || data.length === 0) {
    return <p>Nenhum dado disponível.</p>;
  }

  // Se não recebeu colunas, pega as chaves do primeiro objeto
  const cols = columns && columns.length > 0 ? columns : Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          {cols.map((col) => (
            <th className={"th_" + col} key={col}>
              {col.charAt(0).toUpperCase() + col.slice(1)}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr
            key={keyField && item[keyField] ? item[keyField] : index}
            style={{ borderBottom: "1px solid #ddd" }}
          >
            {cols.map((col) => (
              <td className={"td_" + col} key={col} style={{ padding: "8px" }}>
                {item[col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
