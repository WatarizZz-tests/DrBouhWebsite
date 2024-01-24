import "./FormStyles.css";
import React, { useState } from 'react';
import { collection, addDoc} from 'firebase/firestore';
import {db} from '../firebase';
import { useNavigate } from "react-router-dom";


const Form = () => {
  
  const [adressemail,setAdresseMail]= useState("");
  const [numerodetelephone,setNumeroDeTelephone]= useState("");
  const [description,setDescription]= useState("");
  const [nometprenom,setNomEtPrenom]= useState("");
const navigate = useNavigate();

  
  const listeRendezVousRef = collection(db,"rdv");
  const act = "actif";

  const onSubmitrdv = async (e) => {
    e.preventDefault();
    try {
      await addDoc(listeRendezVousRef, {
        named:nometprenom,
        mail:adressemail,
        phone:numerodetelephone,
        desc:description,
        date: new Date().toLocaleDateString(),
        statut: act,
        daterdv: "",
        
        
      });
    } catch (err) {
      console.error(err);
  }
  navigate("/RendezVousPris")
}


  return (
    <div className="form">
        <form>
            <label>Nom et Prenom</label>
            <input type="text" onChange={(e) => setNomEtPrenom(e.target.value)} required></input>
            <label>Adresse Mail</label>
            <input type="email" onChange={(e) => setAdresseMail(e.target.value)} required></input>
            <label>Numero de telephone</label>
            <input type="number" maxLength={11} onChange={(e) => setNumeroDeTelephone(Number(e.target.value))} ></input>
            <label>Description de la maladie</label>
            <textarea rows="6" placeholder="Décrivez vos symptomes" onChange={(e) => setDescription(e.target.value)} />
            <button  className="btn" onClick={onSubmitrdv }>Submit</button>
            </form>
      
    </div>
  )
}

export default Form;