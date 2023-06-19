import React from 'react'
import { ProfileCard as BackgroundCard } from '../../../../components/Summary/Summary.style'
import { Labels, Links, ProfileCard } from './Summary.style'

export const Summary = () => {
    return (
        <React.Fragment>
            <BackgroundCard height='180px'>
                <ProfileCard>
                    <Labels>
                        <label>Voltar</label>
                        <label>Ver no github</label>
                    </Labels>
                    <h1>JavaScript data types and data structures</h1>
                    <Links>
                        <p>cameronwll</p>
                        <p>Há 1 dia</p>
                        <p>5 comentários</p>
                    </Links>
                </ProfileCard>
            </BackgroundCard>
        </React.Fragment>
    )
}