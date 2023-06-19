import { SearchForm, SearchInput } from "./Search.style"

export const Search = () => {
    return (
        <SearchForm>
            <div>
                <h2>Publicações</h2>
                <h3>6 publicações</h3>
            </div>
            <SearchInput placeholder="Buscar conteúdo"/>
        </SearchForm>
    )
}