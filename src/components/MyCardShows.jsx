import React from 'react'
import './MyCard.css'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import hotelsAction from '../redux/actions/hotelsAction';

export default function MyCard(props) {
    let { show } = props
    const dispatch = useDispatch();
    const { deleteShowUser, updateShowUser } = hotelsAction
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
                    dispatch(deleteShowUser({id: show._id, token}))
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function updateUser() {
        try {
            const { value: formValues } = await Swal.fire({
                title: 'Shows edition',
                showCancelButton: true,
                confirmButtonText: 'Update',
                html:
                    '<input placeHolder="Name" id="name" class="swal2-input">' +
                    '<input placeHolder="Description"id="description" class="swal2-input">' +
                    '<input placeHolder="Photo Url"id="photo" class="swal2-input">' +
                    '<input placeHolder="Price"id="price" class="swal2-input">' +
                    '<input placeHolder="Date"id="date" class="swal2-input">',
                focusConfirm: false,
                preConfirm: () => {
                    let name = document.getElementById('name').value
                    let description = document.getElementById('description').value
                    let photo = document.getElementById('photo').value
                    let price = document.getElementById('price').value
                    let date = document.getElementById('date').value

                    let data = {
                        id: show._id,
                        shows: {

                        }
                    }

                    if (name !== '') {
                        data.shows.name = name
                    }
                    if (description !== '') {
                        data.shows.description = description
                    }

                    if (photo !== '') {
                        data.citie.photo = photo
                    }

                    if (price !== '') {
                        data.shows.price = price
                    }

                    if (date !== '') {
                        data.shows.date = date
                    }

                    dispatch(updateShowUser({data, token}))
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
                    <div className="img"> <img src={show.photo} alt="" /></div>
                </div>
                <div className="details">
                    <h2 className="title">{show.name}</h2>
                    <span className="caption">{show.date}</span>
                    <div className="gap-4">
                        <button className='bottom-cardsOne' onClick={deleteUser}>Delete</button>
                        <button className='bottom-cards' onClick={updateUser}>Edition</button>
                    </div>
                </div>
            </div>
        </div>
    )
}