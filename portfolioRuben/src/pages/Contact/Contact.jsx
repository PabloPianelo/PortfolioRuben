import { Mail, Linkedin, Github } from "lucide-react";
import "./Contact.css";
import { toast, Toaster } from "sonner";
const Contact = () => {
  const handleCopyEmail = async (email) => {
    try {
      await navigator.clipboard.writeText(email);
      toast.success("Correo electrónico copiado al portapapeles");
    } catch (err) {
      console.error("Error al copiar el texto: ", err);
      toast.error("No se pudo copiar el correo electrónico");
    }
  };
  const contactMethods = [
    {
      icon: <Mail className="icon" />,
      label: "Email",
      href: "#contact",
      value: "lopezzamora2212@gmail.com",
      description: "Contactame por correo directo",
    },
    // {
    //   icon: <Linkedin className="icon" />,
    //   label: "LinkedIn",
    //   value: "Pablo Pianelo",
    //   href: "https://www.linkedin.com/in/pablopianeloalonso/",
    //   description: "Conectemos profesionalmente",
    // },
  ];

  return (
    <section id="contact" >
      <div className="contact-container">
        <div className="contact-header">
          <h2>Hablemos</h2>
          <div className="underline"></div>
          <p>
            ¿Tienes un proyecto interesante? Me encantaría colaborar en el desarrollo de soluciones innovadoras para la agricultura sostenible.
          </p>
        </div>

        <Toaster position="bottom-right" richColors />
        <div className="contact-methods">
          {contactMethods.map((method, index) => (
            <div
              key={method.label}
              className="contact-method"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon-container">
                <div className="icon-background">{method.icon}</div>
              </div>
              <h3>{method.label}</h3>
              <p>{method.description}</p>
              <a
                onClick={
                  method.label === "Email"
                    ? () => handleCopyEmail(method.value)
                    : null
                }
                href={method.href}
                target={method.label !== "Email" ? "_blank" : undefined}
                rel={
                  method.label !== "Email" ? "noopener noreferrer" : undefined
                }
              >
                {method.value}
              </a>
            </div>
          ))}
        </div>

        <div className="footer-button">
          <a href="mailto:lopezzamora2212@gmail.com" className="contact-button">
            <Mail className="icon-small" />
            Enviar Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
