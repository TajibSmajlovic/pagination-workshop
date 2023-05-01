import "./Table.css";

export const Table = ({ columns, data }) => (
  <table>
    <thead>
      <tr className='table-header'>
        {columns.map((column, index) => (
          <th key={index}>{column.label}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map((column, columnIndex) => (
            <td key={columnIndex}>{row[column.key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
