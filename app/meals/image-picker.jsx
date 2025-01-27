'use client'

import classes from './image-picker.module.css'
import {useRef} from "react";
import {useState} from "react";
import Image from "next/image";

export default function ImagePicker({label , name}){

    const [pickImage , setPickImage] = useState('')

    const imageInputRef = useRef();

    function handlePickClick(){
        imageInputRef.current.click();
    }

    function handleImageChange(event){
        const file = event.target.files[0];

        if(!file){
            return ;
        }

        const reader = new FileReader();

        reader.onload = (url) => {
           setPickImage(reader.result)
        }

        reader.readAsDataURL(file);
    }

    return <div className={classes.picker}>
        <label htmlFor="image">{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickImage && <p>No image pick yet!</p>}
                {pickImage && <Image src={pickImage}  fill alt={'pick image'}/>}
            </div>
            <input
                width={100}
                height={100}
                className={classes.input}
                type="file"
                id={'image'}
                accept="image/png , image/jpeg,"
                name={name}
                ref={imageInputRef}
                onChange={handleImageChange}
            />
          <button onClick={handlePickClick} className={classes.button} type={'button'} >
              Pick an Image
          </button>
        </div>
    </div>
}