import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import reactionActions from '../redux/actions/reactionActions'

export default function Reaction(props) {
    const { token, id } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    let { eventId, type } = props
    const { getReaction, updateReaction } = reactionActions
    const [reactions, setReaction] = useState([])
    const [like, setLike] = useState(true)

    useEffect(() => {
        reactioness()
    }, [like])

    async function reactioness() {
        let res = await dispatch(getReaction({eventId, type}));
        console.log(res.payload);
        setReaction(res.payload.response)
    }

    async function likeEvent(e) {
        let name = e.target.name
        let data = {
            token,
            name,
            id: eventId,
            type,
        }
        try {
            await dispatch(updateReaction(data))
            setLike(!like)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {reactions.success &&
                reactions.response.map((reaction) => {
                    let res = reaction.userId.find(user => user._id === id)
                    return (
                        <div key={reaction._id}>
                            {
                                res ? (
                                    <>
                                        <img src={reaction.icon} name={reaction.name} alt={reaction.name} width='25px' onClick={likeEvent} />
                                          <p>{reactions.size[reaction.name]}</p>
                                    </>
                                ) : (
                                    <>
                                        <img src={reaction.iconBack} name={reaction.name} alt={reaction.name} width='25px' onClick={likeEvent} />
                                        <p>{reactions.size[reaction.name]}</p>
                                    </>
                                )
                            }
                        </div>
                    )
                })
            }
        </>
    )
}