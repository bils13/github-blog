import { BrowserRouter, Routes, Route} from "react-router-dom"
import { defaultTheme } from '../styles/themes/default'
import { GlobalStyle } from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { Profile } from "../pages/Profile"
import { Post } from "../pages/Post/Post"

export const Routers = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="post" element={<Post />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default Routers