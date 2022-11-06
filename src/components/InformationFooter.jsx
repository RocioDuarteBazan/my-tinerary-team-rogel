import React, { Fragment } from 'react'

export default function InformationFooter(props) {
    let {title} = props;

    return (
        <>
            <div className="topic">{title}</div>
        </>
    )
}
