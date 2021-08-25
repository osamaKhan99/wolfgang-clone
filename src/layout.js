import React from 'react'
import Header from './widgets/navbar'

export default function Layout(props) {
    return (
        <div>
            <Header/>
            <div>
                {props.children}
            </div>
        </div>
    )
}
