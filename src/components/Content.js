import '../styles.scss';

function Content() {
    return (
        <div className="Content">
            <div className="title">
                <p>PERSONLIG TRÄNARE</p>
                <h1>ALI YUSEFI</h1>
            </div>
            <div className="mainContent">
                <p>Jag är en certifierad personlig tränare. Jag har en passion för hälsa och fitness och jag är här för att hjälpa dig nå dina mål.
                Att börja på din träningsresa kan vara överväldigande, men jag lovar att jag kommer att finnas vid din sida för att stödja och coacha dig genom varje 
                steg på vägen. Min filosofi är att träning inte bara handlar om att bygga en stark och frisk kropp, utan också att främja en positiv livsstil 
                och en stark självbild.
                </p>

                <p>Skicka dina kontaktuppgifter så kommer jag höra av mig för att boka en tid.</p>
                <button><a href="/kontakt">Kontakta mig</a></button>
            </div>

            <hr></hr>

            <div className="fillerContent">
                <h1>UTBILDNINGAR</h1>
                <p>Kostrådgivare med Kognitiv inriktning - The Academy</p>
                <p>Konditionsträning - The Academy</p>
            </div>
        </div>
    );
}

export default Content;



