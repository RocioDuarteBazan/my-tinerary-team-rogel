import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import userActions from '../redux/actions/userAction';
import Swal from 'sweetalert2';
import reactionActions from "../redux/actions/reactionActions";
import MyReactions from "./MyReactions";

export default function Details() {
    const dispatch = useDispatch()
    const { updateMyProfile } = userActions;
    let { myUser, token } = useSelector( store => store.userReducer);
    let {allReactions} = useSelector (store => store.reactionReducer);
    console.log(allReactions);
    let [yesButton , setYesButton] = useState (false);
    const [like, setLike] = useState(true)
    const {getUserReactions,deleteReaction} = reactionActions
    let id 

    useEffect(() => {
        id = myUser.id
        dispatch(getUserReactions({id, token}));
    }, [])

    function readButton(){
        setYesButton(!yesButton)
    }

    async function updateUser() {
        try {
            const { value: formValues } = await Swal.fire({
                title: 'Update User',
                showCancelButton: true,
                confirmButtonText: 'Update',
                html:
                    '<input placeHolder="Name" id="name" class="swal2-input">' +
                    '<input placeHolder="LastName"id="lastName" class="swal2-input">' +
                    '<input placeHolder="Photo Url"id="photo" class="swal2-input">' +
                    '<input placeHolder="Age"id="age" class="swal2-input">',
                focusConfirm: false,
                preConfirm: () => {
                    let name = document.getElementById('name').value
                    let lastName = document.getElementById('lastName').value
                    let photo = document.getElementById('photo').value
                    let age = document.getElementById('age').value

                    let data = {
                        id: myUser._id,
                        user: {
                        }
                    }
                    if (name !== '') {
                        data.user.name = name
                    }
                    if (lastName !== '') {
                        data.user.lastName = lastName
                    }
                    if (photo !== '') {
                        data.user.photo = photo
                    }
                    if (age !== '') {
                        data.user.age = age
                    }
                    dispatch(updateMyProfile(data))
                }
            })

            if (formValues) {
                Swal.fire(JSON.stringify(formValues))
            }

        } catch (error) {
            console.log(error)
        }
    }

    function destroyReactionUser(e) {
        e.preventDefault()
        Swal.fire({
           title: 'Are you sure?',
           text: "You won't be able to revert this!",
           icon: 'warning',
           showCancelButton: true,
           confirmButtonColor: '#3085d6',
           cancelButtonColor: '#d33',
           confirmButtonText: 'Yes, delete it!'
        })
           .then((result) => {
              if (result.isConfirmed) {
                  dispatch(deleteReaction({ id: e.target.name, token }))
                 Swal.fire({
                    title: 'Deleted!',
                    text: "Your reaction has been deleted.",
                    icon: 'success',
                 })
              }
           })
     }

    return (
        <>
        <div className='container-card'>
            <div className="card">
                <div className="imgbox">
                    <div className="img"> <img src={myUser.photo} alt="photo_user" /></div>
                </div>
                <div className="details">
                    <h2 className="title">{myUser.name}</h2>
                    <h2 className="title">{myUser.age}</h2>
                    <h2 className="title">{myUser.lastName}</h2>
                    <div>
                        <button className='bottom-cards' onClick={updateUser} >Update Profile</button>
                    </div>
                    <div>
                        <button className='bottom-cards' onClick={readButton} >My Reactions</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            {
             allReactions.map(reaction => <MyReactions item = {reaction.showId || reaction.itineraryId} name={reaction.name} icon={reaction.icon} fx={destroyReactionUser} tgt={reaction._id}/>)
            }
        </div>
        </>
    );
}