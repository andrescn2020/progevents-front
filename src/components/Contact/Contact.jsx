import React from 'react'
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)



const Contact = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const sendEmail = (data, event) => {
        event.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_EMAIL_ID, import.meta.env.VITE_TEMPLATE_ID, event.target, import.meta.env.VITE_ACCES_KEY)
            .then(response => {
                MySwal.fire({
                    title: "",
                    html: <i>Mensaje Enviado!</i>,
                    icon: 'success'
                })
            })
            .catch(error => {
                MySwal.fire({
                    title: "Ocurrio un error",
                    html: <i>Por favor vuelva a intentarlo</i>,
                    icon: "error"
                })
            })
        reset();
    };

    return (
        <div className='formandtitle-container'>
            <h3 className='form-title'>Para consultas y solicitudes para agregar algun evento nuevo no dudes en contactarme!</h3>
            <form className="background" onSubmit={handleSubmit(sendEmail)}>
                <div className="container-form">
                    <div className="screen">
                        <div className="screen-header">
                            <div className="screen-header-left">
                                <div className="screen-header-button close"></div>
                                <div className="screen-header-button maximize"></div>
                                <div className="screen-header-button minimize"></div>
                            </div>
                            <div className="screen-header-right">
                                <div className="screen-header-ellipsis"></div>
                                <div className="screen-header-ellipsis"></div>
                                <div className="screen-header-ellipsis"></div>
                            </div>
                        </div>
                        <div className="screen-body">
                            <div className="screen-body-item">
                                <div className="app-form">
                                    <div className="app-form-group">
                                        <input className="app-form-control" name='nombre' type="text" placeholder="NOMBRE..." {...register("nombre", {
                                            required: true,
                                            maxLength: 16
                                        })} />
                                        {errors.nombre ? <p style={{color: "red"}}>Este campo es obligatorio debe tener un maximo de 16 caracteres</p> : null}
                                    </div>
                                    <div className="app-form-group">
                                        <input className="app-form-control" name='asunto' type="text" placeholder="ASUNTO..." {...register("asunto")} />
                                    </div>
                                    <div className="app-form-group">
                                        <input className="app-form-control" name='mail' type="text" placeholder="MAIL..." {...register("email", {
                                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                                        })} />
                                        {errors.email ? <p style={{color: "red"}}>Este campo no cumple con el formato requerido</p> : null}
                                    </div>
                                    <div className="app-form-group message">
                                        <input className="app-form-control" name='mensaje' type="text" placeholder="MENSAJE..." {...register("descripcion")} />
                                    </div>
                                    <div className="app-form-group buttons">
                                        <input type="submit" value="Enviar" className="app-form-button" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}

{/* <form className='form-container' onSubmit={handleSubmit(sendEmail)}>
             <h3 className='form-title'>Si tienes algun evento que quieras agregar no dudes en contactarme!</h3>
             <div className='nombre-container'>
                 <input className='nombre' placeholder="NOMBRE" type="text" {...register("nombre", {
                     required: true,
                     maxLength: 16
                })} />
                 {errors.nombre?.type === "required" && <p>El campo nombre es requerido</p>}
             </div>
             <div className='asunto-container'>
                 <input className='asunto' placeholder="ASUNTO" type="text" {...register("asunto")} />
             <div className='mail-container'>
                 <input className='mail' placeholder="MAIL" type="text" {...register("email", {
                     pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                 })} />
                 {errors.email?.type === "pattern" && <p>El formato del email es incorrecto</p>}
             </div>
             <div className='message-container'>
                 <textarea className='mensaje' placeholder="MENSAJE" type="text" {...register("descripcion")} />
             </div>
             <div className='submit-button-container'>
                 <input className='submit-button' type="submit" value="Enviar" />
             </div>
         </form> */}

export default Contact;