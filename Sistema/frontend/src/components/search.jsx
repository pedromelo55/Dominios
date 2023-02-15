const SearchBar = () => (
    <form action="/" method="get">

		<div style={{backgroundColor: 'green', display:'flex', width: '100%', height:'20%', alignItems:'center', justifyContent:'center'}}>
        
            <label htmlFor="header-search">
                <span style={{ backgroundColor: 'blue',textAlign:'start', marginBottom: '10px', fontSize:'18px' }}>Pesquisar relatório por número</span>
            </label>
            <input
                type="text"
                placeholder="Digite o número do relatório"
                name="s" 
                style={{fontFamily: 'tisa_sans_probold', width: '100%',  padding: '10px', border: 'none', marginBottom: '10px', borderRadius: '5px'}}
            />
            <button type="submit"
                    style={{fontFamily: 'tisa_sans_probold', borderRadius: '5px'}}
                    >Procurar
            </button>
        </div>
    </form>
);

export default SearchBar;