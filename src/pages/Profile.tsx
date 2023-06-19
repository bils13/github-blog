import React from 'react'
import { Header } from '../components/Header/Header'
import { Summary } from '../components/Summary/Summary'
import { Search } from '../components/Search/Search'
import { Card } from '../components/Card/Card'

export const Profile = () => {
    return (
        <React.Fragment>
            <Header />
            <Summary />
            <Search />
            <Card />
        </React.Fragment>
    )
}