function ContactUsAndFooter({children,ContactUsAndFooterRef}) {
    return (
        <section ref={ContactUsAndFooterRef} className="contact-us-and-footer">
            {children}
        </section>
    );
}

export default ContactUsAndFooter;