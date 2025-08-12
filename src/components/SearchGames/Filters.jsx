export function Filters({ orderOption, onOrderChange, gamesPerPage, onGamesPerPageChange, totalGames }) {
  return (
    <div className="top-controls">
      <p className="total-jogos">Total de jogos: {totalGames}</p>

      <div className="filter-container">
        <label>Ordenar por:</label>
        <select value={orderOption} onChange={(e) => onOrderChange(e.target.value)}>
          <option value="default">Padrão</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="id">Por ID</option>
        </select>
      </div>

      <div className="filter-container">
        <label htmlFor="itemsPerPage">Itens por página:</label>
        <select
          id="itemsPerPage"
          value={gamesPerPage}
          onChange={(e) => onGamesPerPageChange(Number(e.target.value))}
        >
          <option value={24}>24</option>
          <option value={48}>48</option>
          <option value={72}>72</option>
          <option value={96}>96</option>
        </select>
      </div>
    </div>
  );
}
