import React from 'react'

export default function ContactFooter(props) {

    let { divClass, url, text} = props

    return (
        <div className={divClass}>
            <a href={url}>{text}</a>
        </div>
    )
}
