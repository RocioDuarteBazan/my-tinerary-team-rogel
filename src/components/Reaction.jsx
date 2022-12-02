import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import reactionActions from '../redux/actions/reactionActions'


export default function Reaction(props) {
    const { token, id } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    let { itineraryId } = props
    const { getReaction, updateReaction } = reactionActions
    const [reactions, setReaction] = useState([])
    const [like, setLike] = useState(true)
    const [change, setChange] = useState()


    useEffect(() => {
        reactioness()

    }, [like, change])

    async function reactioness() {
        let res = await dispatch(getReaction(itineraryId))
        setReaction(res.payload.response)
    }

    async function likeItinerary(e) {
        let name
        let icon
        let iconBack
        reactions.data.map(react => {
            if (react.name === e.target.name) {
                name = react.name
                icon = react.icon
                iconBack = react.iconBack
            }
        })

        let data = {
            token,
            id: itineraryId,
            name,
        }
        try {
            await dispatch(updateReaction(data))
            setLike(!like)
        } catch (error) {
            console.log(error)
        }
    }

    let fulField = reactions.data

    return (
        <>
            {fulField?.map((reaction) => (
                <>
                    <img src={fulField.some((h) => h.userId?._id === id) ? reaction.icon : reaction.iconBack} name={reaction.name} alt={reaction.name} key={reaction._id} width='25px' onClick={(e) => likeItinerary(e)} />
                </>
            )
            )
            }
        </>
    )
}