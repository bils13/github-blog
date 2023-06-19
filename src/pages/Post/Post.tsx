import React from 'react'
import { Header } from '../../components/Header/Header'
import { Summary } from './components/Summary/Summary'
import { PostCard } from './components/Post/Post'

export const Post = () => {
    return (
        <React.Fragment>  
            <Header />
            <Summary />
            <PostCard />
        </React.Fragment>
    )
}