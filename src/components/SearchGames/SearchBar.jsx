export function SearchBar({ value, onChange, onSearch }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Digite o seu SteamID"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={onSearch}>Buscar</button>
    </div>
  );
}
