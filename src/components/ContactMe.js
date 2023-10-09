import '../styles.scss';

function ContactMe() {
    return (
        <div className="contactMe">
			<h1>KONTAKT</h1>
            <p>Vad kul att du vill komma i kontakt med mig. Skicka dina uppgifter så kommer jag att höra av mig så snabbt jag kan!</p>
            <hr></hr>
            <form>
                <input 
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Namn"
                    value=""
                />
                <input 
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Email"
                    value=""
                />
                <input
                    name="phone"
                    id="phone"
                    type="number"
                    placeholder="Telefon"
                    value=""
                />
                <button>Skicka</button>
            </form>
        </div>
    );
}

export default ContactMe;
