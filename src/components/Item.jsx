import { useState } from "react";
import Modal from "./Modal";
import "./Item.css"

function Item({ itemData }) {
  const item = itemData.data['0'];
  const [modal, setModal] = useState(false);
  const link = itemData.links['0']['href'];

  return (
    <div onClick={() => setModal(true)}>
      <img src={link}/>
      <Modal openModal={modal} closeModal={() => setModal(false)}>
        <p>NASA ID: <span>{item.nasa_id}</span></p>
        <p>Date Created: <span>{item.date_created}</span></p>
        <img src={link}/>
        <p>{item.title}</p>
        {item.keywords ? item.keywords.map((v, i) => {
          return (<span key={i}>{v} </span>)
        }) : ""}
        <p>{item.description}</p>
      </Modal>
    </div>
  )
}

export default Item;
