import React from 'react';

class Contact extends React.Component {

  render() {
    const { data } = this.props;

    function formatDate (date) {
      date = date.split('T')[0].split('-');
      
      let dia = date[2];
      let mes = date[1];
      let ano = date[0];

      return dia + '/' + mes + '/' + ano;
    }

    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar" data-testid="contact-avatar">
          <img src={data.avatar} alt={data.name} />
        </span>
        <span className="contact__data" data-testid="contact-name">{data.name}</span>
        <span className="contact__data" data-testid="contact-phone">{data.phone}</span>
        <span className="contact__data" data-testid="contact-country">{data.country}</span>
    <span className="contact__data" data-testid="contact-date">{formatDate(data.admissionDate)}</span>
        <span className="contact__data" data-testid="contact-company">{data.company}</span>
        <span className="contact__data" data-testid="contact-department">{data.department}</span> 
      </article>
    );
  }
}

export default Contact;
