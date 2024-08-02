import ContactForm from "../../components/ContactForm/ContactForm";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../ContactPage/ContactPage.scss";

function ContactPage() {
  return (
    <div className="contact-page">
      <Header />
      <ContactForm className="form" />
      <Footer />
    </div>
  );
}

export default ContactPage;
