import { ImPhone } from "react-icons/im";
import { ImUser } from "react-icons/im";

import { contact_card, icon, button } from "./Contact.module.css";

function Contact({ id, name, number, deleteContact }) {
  return (
    <div className={contact_card}>
      <div>
        <p>
          <ImUser className={icon} />
          {name}
        </p>
        <p>
          <ImPhone className={icon} />
          {number}
        </p>
      </div>
      <div>
        <button
          className={button}
          type="button"
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Contact;
