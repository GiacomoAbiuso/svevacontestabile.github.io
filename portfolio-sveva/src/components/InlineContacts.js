import "./InlineContacts.css";

function InlineContacts({ contacts = [], title = "Contacts", intro }) {
  return (
    <div className="inline-contacts">
      <hr className="inline-contacts__rule" />
      <div className="inline-contacts__content">
        <h2>{title}</h2>
        {intro ? <p className="inline-contacts__intro">{intro}</p> : null}
        <div className="inline-contacts__list">
          {contacts.map((contact, index) => (
            <a
              key={`${contact.label}-${index}`}
              className="inline-contacts__link"
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noreferrer" : undefined}
            >
              <span className="inline-contacts__icon" aria-hidden="true">
                {contact.icon}
              </span>
              <span className="inline-contacts__text">
                <span className="inline-contacts__label">{contact.label}</span>
                <span className="inline-contacts__value">{contact.value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InlineContacts;
