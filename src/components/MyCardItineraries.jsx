import React from 'react'
import './MyCard.css'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import citiesAction from '../redux/actions/citiesAction';

export default function MyCard(props) {
    let { tinerary } = props
    const dispatch = useDispatch();
    const { deleteItinerariesUser, updateItinerariesUser } = citiesAction
    const { token } = useSelector(store => store.userReducer)

    async function deleteUser() {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    dispatch(deleteItinerariesUser({id: tinerary._id, token}))
                }
            })

        } catch (error) {
            console.log(error)
        }
    }

    async function updateUser() {
        try {
            const { value: formValues } = await Swal.fire({
                title: 'Itineraries edition',
                showCancelButton: true,
                confirmButtonText: 'Update',
                html:
                    '<input placeHolder="Name" id="name" class="swal2-input">' +
                    '<input placeHolder="Description"id="description" class="swal2-input">' +
                    '<input placeHolder="Photo 1 Url" id="photo1" class="swal2-input">' +
                    '<input placeHolder="Photo 2 Url" id="photo2" class="swal2-input">' +
                    '<input placeHolder="Photo 3 Url" id="photo3" class="swal2-input">' +
                    '<input placeHolder="Price"id="price" class="swal2-input">' +
                    '<input placeHolder="Duration"id="duration" class="swal2-input">',
                focusConfirm: false,
                preConfirm: () => {
                    let name = document.getElementById('name').value
                    let description = document.getElementById('description').value
                    let photo1 = document.getElementById('photo1').value
                    let photo2 = document.getElementById('photo2').value
                    let photo3 = document.getElementById('photo3').value
                    let photo = []
                    let price = document.getElementById('price').value
                    let duration = document.getElementById('duration').value

                    let data = {
                        id: tinerary._id,
                        itinerarie: {

                        }
                    }

                    if (name !== '') {
                        data.itinerarie.name = name
                    }
                    if (description !== '') {
                        data.itinerarie.description = description
                    }

                    if (photo1 !== '') {
                        photo.push(photo1)
                    } else {
                        photo.push(tinerary.photo[0])
                    }
                    if (photo2 !== '') {
                        photo.push(photo2)
                    } else {
                        photo.push(tinerary.photo[1])
                    }
                    if (photo3 !== '') {
                        photo.push(photo3)
                    } else {
                        photo.push(tinerary.photo[2])
                    }

                    if (photo !== []) {
                        data.itinerarie.photo = photo
                    } else {
                        data.itinerarie.photo = tinerary.photo
                    }

                    if (price !== '') {
                        data.itinerarie.price = price
                    }

                    if (duration !== '') {
                        data.itinerarie.duration = duration
                    }

                    dispatch(updateItinerariesUser({data, token}))
                }
            })

            if (formValues) {
                Swal.fire(JSON.stringify(formValues))
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='container-card'>
            <div className="card">
                <div className="imgbox">
                    <div className="img"> <img src={tinerary.photo[0]} alt="" /></div>
                </div>
                <div className="details">
                    <h2 className="title">{tinerary.name}</h2>
                    <span className="caption">{tinerary.duration}</span>
                    <div className="gap-4">
                        <button className='bottom-cardsOne' onClick={deleteUser}>Delete</button>
                        <button className='bottom-cards' onClick={updateUser}>Edition</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
