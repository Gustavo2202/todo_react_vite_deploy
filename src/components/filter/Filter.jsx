export const Filter = ( {filterSe, setFilter, setOrdem}) => {
    return (
        <div className="filter">
            <h2>Filtar</h2>
            <div className="filter-options">
                <div>
               <p>Status</p>
                <select value={filterSe}  onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">Todas</option>
                    <option value="completed">Completa</option>
                    <option value="incompleted">InCompleta</option>
                </select>
                </div>
                <div className="ordernacao">
                    
                    <p>Ordem alfabetica</p>
                    <button onClick={() =>setOrdem("asc")}>ASC</button>
                    <button  onClick={() =>setOrdem("desc")}>DESC</button>
                </div>
            </div>
        </div>
    )
}