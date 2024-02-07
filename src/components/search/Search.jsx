export function Search({ search, setSearch }) {
    return (
        <div className="search">
            <h2>Pequisar</h2>
            <input type="text" name="pesquisar" id="pesquisar" 
            value={search} onChange={(e) => setSearch(e.target.value) }
            placeholder="Digite para pesquisar" />
        </div>
    )
}