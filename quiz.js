// Quiz Questions Database
const quizQuestions = [
    // General & Procedures Questions
    {
        category: "general",
        question: "Je wordt voor de kwartaalmeetings ingepland en je ontvangt een sms de dag ervoor. Deze meeting is verplicht en zorg ervoor dat je stipt op tijd bent.",
        type: "single",
        options: ["True", "False"],
        correct: 0,
        feedback: "Dit is correct. De kwartaalmeetings zijn verplicht en je moet stipt op tijd zijn."
    },
    {
        category: "general",
        question: "Wat met huisdieren?",
        type: "single",
        options: [
            "Je mag de klant vragen om alle huisdieren op te sluiten in een afgesloten ruimte tijdens je interventie.",
            "Huisdieren mogen bij wet nooit opgesloten worden op vraag van de installateur."
        ],
        correct: 0,
        feedback: "Je mag de klant vragen om alle huisdieren op te sluiten in een afgesloten ruimte tijdens je interventie."
    },
    {
        category: "general",
        question: "De klant is niet thuis, wat nu?",
        type: "single",
        options: [
            "Gewoon 15 minuten wachten, probleemmelder naar planning, daarna vertrek je naar de volgende klant.",
            "Je vult een 'klant niet thuis' kaartje in en je trekt hier een foto van, en steekt het in de brievenbus. Je trekt ook een foto van het huis/gevel met een zichtbaar huisnummer.",
            "De afspraak in dit geval is gewoon bellen naar planning."
        ],
        correct: 1,
        feedback: "Je vult een 'klant niet thuis' kaartje in en trekt een foto, steekt het in de brievenbus. Je trekt ook een foto van het huis/gevel met zichtbaar huisnummer."
    },
    {
        category: "general",
        question: "Hoe moet ik mijn bedrijfswagen parkeren?",
        type: "single",
        options: [
            "Tijdens mijn opdracht mag ik parkeren op de parkeerplaats voor mindervaliden ook al heb ik geen mindervalidenkaart.",
            "Enkel tijdens mijn opdracht mag ik uitzonderlijk dubbel parkeren met een Unit-T kaartje achter de voorruit.",
            "Houd je altijd aan de wetgeving. Alle info staat op de Hive via een toolbox 'Parkeren met dienstwagens'"
        ],
        correct: 2,
        feedback: "Houd je altijd aan de wetgeving. Alle info staat op de Hive via een toolbox 'Parkeren met dienstwagens'"
    },
    {
        category: "general",
        question: "Ik ben ziek, wat moet ik doen?",
        type: "single",
        options: [
            "Ik bel mijn Fieldcoach voor 8 uur.",
            "Ik stuur een SOS PM naar mijn Fieldcoach en ik stuur een PM naar de planning.",
            "Alles is online, als ik mijn taak niet accepteer weet de planning dat ik er niet ben",
            "Ik stuur een SOS PM naar mijn Fieldcoach en ik bel naar de planning."
        ],
        correct: 1,
        feedback: "Ik stuur een SOS PM naar mijn Fieldcoach en ik stuur een PM naar de planning."
    },
    {
        category: "general",
        question: "Welke werkuren of shiften kennen we bij Unit-T bij de afdeling 'Telecom'?",
        type: "multiple",
        options: [
            "De vroege shift van 06:30h tot 15:00h",
            "De late shift van 11:00h tot 19:30h",
            "De normale shift van 08:00h tot 16:30h"
        ],
        correct: [1, 2],
        feedback: "De late shift van 11:00h tot 19:30h en de normale shift van 08:00h tot 16:30h"
    },
    {
        category: "general",
        question: "Wat is de juiste uitspraak?",
        type: "single",
        options: [
            "Tracht je aan te passen aan de klant, m.a.w. spreek de taal van de klant.",
            "Tracht zo technisch mogelijk te spreken, op die manier geef je een professionele indruk bij de klant.",
            "Ik praat altijd in een zo éénvoudig mogelijke taal met de klant."
        ],
        correct: 0,
        feedback: "Tracht je aan te passen aan de klant, m.a.w. spreek de taal van de klant."
    },
    {
        category: "general",
        question: "Welke uitspraak is juist over The Hive?",
        type: "multiple",
        options: [
            "De Hive is de nieuwe benaming van de vroegere 'Klantenservice' die je op www.Telenet.be kan vinden.",
            "The Hive is een kennisdatabank om interne kennis en expertise te kunnen bewaren en delen.",
            "Dankzij de Hive zal de produktiviteit stijgen en de te volgen procedures staan er éénduidig beschreven.",
            "De Hive is een kennisdatabank op maat van de klant die je éénvoudig kan opzoeken via google."
        ],
        correct: [1, 2],
        feedback: "The Hive is een kennisdatabank om interne kennis en expertise te kunnen bewaren en delen. Dankzij de Hive zal de produktiviteit stijgen."
    },
    {
        category: "general",
        question: "Op je Track Record vind je...",
        type: "multiple",
        options: [
            "...wie je Field coach is.",
            "...jouw meldingen",
            "...jouw waarnemingen en kan je deze tekenen.",
            "...hoeveel TV boxen je deze week verbruikt hebt."
        ],
        correct: [0, 1, 2],
        feedback: "Op je Track Record vind je wie je Field coach is, jouw meldingen, en jouw waarnemingen die je kan tekenen."
    },
    {
        category: "general",
        question: "Je veroorzaakt schade bij de klant, wat nu?",
        type: "single",
        options: [
            "Verwittig je Field Coach en vul de schadedocumenten in.",
            "Laat de klant bellen naar schadebeheer van Unit-T of mailen naar schadebeheer@unit-t.eu",
            "Elke klant heeft een verplichte verzekering voor schade aangericht door derden, je hoeft dus niets te doen."
        ],
        correct: 0,
        feedback: "Verwittig je Field Coach en vul de schadedocumenten in."
    },
    {
        category: "general",
        question: "Aan de deur van de klant hangt een kaartje 'sleutel bij de geburen'. Welke actie onderneem je?",
        type: "single",
        options: [
            "Je mag alleen installeren als de eigenaar van het huis aanwezig is.",
            "Je mag installeren, de buurman mag naar huis, als je klaar bent ga je naar de buurman voor een handtekening.",
            "Als de buurman op de hoogte is van alle info en aanwezig blijft in de woning mag je installeren."
        ],
        correct: 2,
        feedback: "Als de buurman op de hoogte is van alle info en aanwezig blijft in de woning mag je installeren."
    },
    {
        category: "general",
        question: "Welke uitspraak is juist over sociale media?",
        type: "single",
        options: [
            "Ik maak zelf reklame voor Telenet op Twitter.",
            "Vandaag was ik bij een vrolijke humoristische klant, ik zet mijn verhaal met plezier op Facebook.",
            "Ik krijg via Facebook mooie reklame van Telenet over supersnel internet, ik mag deze delen met mijn vrienden.",
            "Positieve ervaringen zet ik altijd op Facebook, negatieve bespreek ik met mijn Fieldcoach."
        ],
        correct: 2,
        feedback: "Ik krijg via Facebook mooie reklame van Telenet over supersnel en betrouwbaar internet, ik mag deze delen met mijn vrienden."
    },
    {
        category: "general",
        question: "Een kennis van mijn beste vriend heeft problemen met internet. Welke uitspraak is juist?",
        type: "single",
        options: [
            "Klant is Koning! Ik kijk even in Spot om te zien of ik gemakkelijk kan helpen.",
            "Als Erkend Installateur heb ik het recht om Ants te gebruiken als ik service wil aanbieden.",
            "Ik mag Spot & Ants enkel gebruiken voor problemen op te lossen die case gerelateerd zijn."
        ],
        correct: 2,
        feedback: "Ik mag Spot & Ants enkel gebruiken voor problemen op te lossen die case gerelateerd zijn."
    },

    // Electricity & Safety Questions
    {
        category: "electricity",
        question: "Een generator levert momenteel een vermogen van 4,8kW bij een spanning van 240V. Welke stroom vloeit er op dat moment?",
        type: "single",
        options: ["200 mA", "10 A", "20 A", "2 A"],
        correct: 2,
        feedback: "P = U x I, dus I = P / U = 4800W / 240V = 20A"
    },
    {
        category: "electricity",
        question: "Welke uitspraak is juist bij het aansluiten van een dropkabel?",
        type: "single",
        options: [
            "In beide gevallen draag je veiligheidshandschoenen nieuwbouw of niet.",
            "Draag altijd handschoenen om de dropkabel aan te sluiten aan de NIU, dit hoeft niet bij de tap.",
            "Draag altijd handschoenen om de dropkabel aan te sluiten aan de tap, dit hoeft niet bij de NIU.",
            "In beide gevallen is er elektrocutiegevaar, draag altijd handschoenen tenzij het een nieuwbouw is."
        ],
        correct: 0,
        feedback: "In beide gevallen draag je veiligheidshandschoenen nieuwbouw of niet."
    },
    {
        category: "electricity",
        question: "Waarvoor dient een multimeter?",
        type: "single",
        options: [
            "Weerstand meten",
            "Alle antwoorden zijn correct",
            "Spanning meten",
            "Kortsluiting opsporen",
            "Stroom meten"
        ],
        correct: 1,
        feedback: "Een multimeter kan gebruikt worden voor alle genoemde metingen."
    },
    {
        category: "electricity",
        question: "Vanaf welke stroomsterkte wordt de stroomdoorgang door het lichaam gevaarlijk voor een mens?",
        type: "single",
        options: ["100 mA", "10mA", "100mV", "10mV"],
        correct: 1,
        feedback: "Vanaf 10mA wordt stroomdoorgang gevaarlijk voor de mens."
    },
    {
        category: "electricity",
        question: "Na een visuele controle (eventueel gebruik van een hamer) mag ik met een ladder op een houten paal.",
        type: "single",
        options: ["True", "False"],
        correct: 1,
        feedback: "Het beklimmen van een houten paal is altijd verboden."
    },
    {
        category: "electricity",
        question: "Hoe stel je de draaischakelaar van de multimeter in om de spanning van een stopcontact te meten?",
        type: "single",
        options: ["200 V AC", "20 V DC", "500 V DC", "400 V AC"],
        correct: 3,
        feedback: "Voor een stopcontact (230V AC) gebruik je de 400V AC instelling."
    },
    {
        category: "electricity",
        question: "Wat is het nut van een aarding in een elektrische installatie?",
        type: "single",
        options: [
            "Verliesstroom naar de aarde leiden",
            "Alle antwoorden zijn correct",
            "Deze meet de verliesstroom die eventueel aanwezig kan zijn",
            "De elektrische installatie beschermen tegen kortsluiting"
        ],
        correct: 0,
        feedback: "Het hoofddoel van aarding is verliesstroom naar de aarde leiden."
    },
    {
        category: "electricity",
        question: "In geval van een gevaarlijke lekstroom (>10mA) door de dropkabel monteer je deze geel-zwarte filter op de tap.",
        type: "single",
        options: ["True", "False"],
        correct: 0,
        feedback: "Dit is correct. Bij gevaarlijke lekstroom plaats je een geel-zwarte filter."
    },
    {
        category: "electricity",
        question: "Hoeveel mA is 9 A?",
        type: "single",
        options: ["0,9 mA", "900 mA", "9000 mA", "0,009 mA"],
        correct: 2,
        feedback: "9 A = 9000 mA (1 A = 1000 mA)"
    },
    {
        category: "electricity",
        question: "Wat is de formule (Wet van Ohm)?",
        type: "single",
        options: ["I = U / R", "I = U x R", "R = I / U", "P = U x I"],
        correct: 0,
        feedback: "De wet van Ohm is I = U / R (of U = I x R)"
    },
    {
        category: "electricity",
        question: "Hoe kan je blanke koperen geleiders herkennen?",
        type: "multiple",
        options: [
            "Ze zijn koperkleurig maar hangen nooit binnen ons bereik.",
            "Ze zijn altijd geïsoleerd met een zwarte vinyl mantel.",
            "Ze zijn groenachtig van kleur. Ik moet zeker 50 cm van deze geleiders verwijderd blijven.",
            "Ze zijn groenachtig van kleur. Ik mag een hoogtewerker inboeken indien ik de veiligheidsafstand niet kan respecteren."
        ],
        correct: [2, 3],
        feedback: "Blanke koperen geleiders zijn groenachtig van kleur en je moet 50cm afstand houden."
    },
    {
        category: "electricity",
        question: "Vanaf welke hoogte is een valharnas verplicht?",
        type: "single",
        options: [
            "Vanaf 2 meter hoofdhoogte",
            "Vanaf 2 meter voethoogte",
            "Vanaf 2 meter heuphoogte",
            "Vanaf 2 meter borsthoogte"
        ],
        correct: 1,
        feedback: "Vanaf 2 meter voethoogte is het dragen van een valbeveiliging verplicht."
    },
    {
        category: "electricity",
        question: "De rode EN groene led van de lektester branden gelijk wanneer:",
        type: "single",
        options: [
            "de stroom hoger is dan 10mA",
            "de stroom gelijk is aan 10mA",
            "de stroom hoger is dan 100mA",
            "de stroom gelijk is aan 100mA"
        ],
        correct: 1,
        feedback: "De rode en groene led branden gelijk bij precies 10mA."
    },
    {
        category: "electricity",
        question: "Een verliesstroomschakelaar zal de stroom onderbreken als...",
        type: "single",
        options: [
            "Als er een overbelasting is.",
            "Als het gemeten verschil tussen ingaande en uitgaande stroom een vooraf ingestelde waarde overschrijdt",
            "Als de spanning van het net daalt onder een bepaalde minimumwaarde.",
            "Als de spanningsschommelingen op het net te groot zijn."
        ],
        correct: 1,
        feedback: "Een verliesstroomschakelaar onderbreekt bij verschil tussen ingaande en uitgaande stroom."
    },

    // Network & Coax Questions
    {
        category: "network",
        question: "De NIU (Network Interface Unit) is altijd het eerste onderdeel van de installatie.",
        type: "single",
        options: ["True", "False"],
        correct: 0,
        feedback: "De NIU is inderdaad altijd het eerste onderdeel van de installatie."
    },
    {
        category: "network",
        question: "Welke uitspraak is juist over waardemateriaal?",
        type: "single",
        options: [
            "Een NIU is waardemateriaal net zoals een stekkerblok.",
            "Een HDMI kabel is waardemateriaal, net zoals een TV box",
            "Pluggen en schroeven behoren tot grijpmateriaal en moet je niet afmelden."
        ],
        correct: 2,
        feedback: "Pluggen en schroeven behoren tot grijpmateriaal en moet je niet afmelden."
    },
    {
        category: "network",
        question: "Welke stelling is correct als we overgaan naar een hogere modulatietechniek (vb QAM16 -> QAM64)?",
        type: "single",
        options: [
            "US SND mag lager liggen dan bij een lagere modulatietechniek.",
            "Maximum capaciteit(inhoud) van een digitaal gemoduleerde drager daalt.",
            "Het datasignaal is gevoeliger aan ruissignalen.",
            "Hoe meer een coaxkabel zal verzwakken."
        ],
        correct: 2,
        feedback: "Bij hogere modulatie is het datasignaal gevoeliger aan ruissignalen."
    },
    {
        category: "network",
        question: "Waarvan is de verzwakking van een coaxkabel afhankelijk?",
        type: "single",
        options: [
            "Temperatuur, lengte/dikte, frequentie (hoe hoger de frequentie, hoe hoger de verzwakking)",
            "Temperatuur, type diëlektricum, frequentie (hoe hoger de frequentie, hoe lager de verzwakking)",
            "Temperatuur, lengte/dikte, frequentie (hoe hoger de frequentie, hoe lager de verzwakking)",
            "Lengte, type diëlektricum, frequentie (hoe hoger de frequentie, hoe hoger de verzwakking)"
        ],
        correct: 0,
        feedback: "Verzwakking hangt af van temperatuur, lengte/dikte, en frequentie (hoger = meer verzwakking)."
    },
    {
        category: "network",
        question: "Welke filter plaatsen we bij een klant met enkel het Compact signaal zonder NIU?",
        type: "single",
        options: ["RPA12", "HP87", "Geen", "HP47"],
        correct: 1,
        feedback: "HP87 filters worden geplaatst bij bestaande aansluitingen zonder NIU."
    },
    {
        category: "network",
        question: "Wanneer plaatsen we een RPA 12 filter?",
        type: "single",
        options: [
            "Wanneer de signalen op de STB te laag zijn",
            "Deze plaatsen we niet meer",
            "Wanneer de RX op de modem te laag is",
            "Wanneer de TX op de modem te laag is",
            "Wanneer de RX op de modem te hoog is",
            "Wanneer de TX op de modem te hoog is"
        ],
        correct: 3,
        feedback: "RPA 12 filter plaatsen we wanneer de TX op de modem te laag is."
    },
    {
        category: "network",
        question: "Welke acties voer je uit als je een kabelaansluiting moet uitvoeren zonder producten bij een grondnet?",
        type: "multiple",
        options: [
            "Ik mag enkel de KA uitvoeren als de klant thuis is",
            "Een f-connector plaatsen",
            "Een SAP-ID aanbrengen",
            "De dropkabel tot aan de tap brengen",
            "Dropkabel dan aansluiten met antidieffilter + massascheider"
        ],
        correct: [1, 2, 3, 4],
        feedback: "De dropkabel tot aan de tap brengen, een f-connector plaatsen, een SAP-ID aanbrengen, dropkabel dan aansluiten met antidieffilter + massascheider."
    },
    {
        category: "network",
        question: "Welke acties voer je uit als je een kabelaansluiting moet uitvoeren met producten bij een luchtnet?",
        type: "multiple",
        options: [
            "De dropkabel aansluiten met de juiste filter (TOF/RPA)",
            "Een f-connector plaatsen",
            "De andere bestelde producten installeren",
            "De dropkabel tot aan de tap brengen",
            "Een SAP-ID aanbrengen"
        ],
        correct: [0, 1, 2, 3, 4],
        feedback: "De dropkabel tot aan de tap brengen, een f-connector plaatsen, een SAP-ID aanbrengen, de dropkabel aansluiten met de juiste filter (TOF/RPA), de andere bestelde producten installeren."
    },
    {
        category: "network",
        question: "Wat is altijd de kostprijs van een kabelaansluiting?",
        type: "single",
        options: ["€30", "€50", "€75", "€100"],
        correct: 1,
        feedback: "De kostprijs van een kabelaansluiting is altijd €50."
    },
    {
        category: "network",
        question: "Welk SAP ID is correct? Onze klant woont op huisnummer 10 bus 4. Dit appartement bevindt zich op de 2de verdieping (Telenet gebied)?",
        type: "single",
        options: ["10-2/456", "10/2-456", "10/4-456", "10/2/456"],
        correct: 1,
        feedback: "Het correcte SAP ID is 10/2-456. Formaat: huisnummer/verdieping-gebied."
    },
    {
        category: "network",
        question: "Welke type boor is dit voor steenwerk?",
        type: "single",
        options: ["Een ijzerboor", "Een houtboor", "Een klopboor", "Een steenboor"],
        correct: 3,
        feedback: "Dit is een steenboor voor boren in steen en beton."
    },
    {
        category: "electricity",
        question: "Tijdens het boren met de klopboormachine moet ik mijn gehoorbescherming dragen.",
        type: "single",
        options: ["True", "False"],
        correct: 0,
        feedback: "Ja, bij gebruik van een klopboormachine moet je altijd gehoorbescherming dragen."
    },
    {
        category: "network",
        question: "Bij voorkeur doe je de boring...",
        type: "single",
        options: ["Van buiten naar binnen toe", "Van binnen naar buiten toe"],
        correct: 0,
        feedback: "Bij voorkeur boor je van buiten naar binnen toe."
    },
    {
        category: "network",
        question: "Bij een gevelboring...",
        type: "multiple",
        options: [
            "Noteer je op je eKC dat de klant verantwoordelijk is voor eventuele schade die veroorzaakt wordt door het boren",
            "Gebruik ik de nodige PBM's",
            "Heb ik aandacht voor gevoelige gevelstenen",
            "Gebruik ik mijn leidingzoeker",
            "Stuur ik een SOS Fieldcoach zodat deze het gat kan komen boren"
        ],
        correct: [0, 1, 2, 3],
        feedback: "Bij gevelboring gebruik je de nodige PBM's, leidingzoeker, noteer schade-verantwoordelijkheid en heb aandacht voor gevoelige gevelstenen."
    },
    {
        category: "network",
        question: "Hoeveel verzwakt een 4-weg splitter?",
        type: "single",
        options: ["7,2 dB", "4 dB", "3,6 dB", "12 dB"],
        correct: 0,
        feedback: "Een 4-weg splitter verzwakt ongeveer 7,2 dB (2x 3,6 dB)."
    },
    {
        category: "network",
        question: "De klant veroorzaakt ingress wegens losse connectoren. Tussen welke frequenties kan je deze verstoring meten?",
        type: "single",
        options: [
            "Van 120 MHz tem 458 MHz",
            "Van 5 MHz t.e.m. 65 MHz",
            "Ingress zal nooit een verstoring veroorzaken",
            "Van 458 MHz tem 858 MHz",
            "Van 5 MHz tem 25 MHz"
        ],
        correct: 1,
        feedback: "Ingress bevindt zich tussen 5MHz en 65MHz (upstream frequenties)."
    },
    {
        category: "network",
        question: "Hoe controleer je of de klant zijn installatie vrij is van ingress?",
        type: "single",
        options: [
            "Je meet aan de NIU zijde",
            "Je sluit je Deviser aan op het punt zo dicht mogelijk bij het Telenetnetwerk (tapzijde)",
            "Je meet alleen aan de modem",
            "Je koppelt eerst alles los van de klant"
        ],
        correct: 1,
        feedback: "Je sluit je Deviser aan op het punt zo dicht mogelijk bij het Telenetnetwerk, dus aan de tapzijde van de dropkabel. Laat de volledige RF van de klant aangesloten en de NIU onder spanning."
    },
    {
        category: "network",
        question: "Bij gebruik van QAM256 tov QAM64 zal er meer data verstuurd kunnen worden en hogere snelheden gehaald worden, maar minder zekerheid of de data correct aankomt.",
        type: "single",
        options: ["True", "False"],
        correct: 0,
        feedback: "Bij hogere modulatie (QAM256) kan meer data verstuurd worden en hogere snelheden gehaald worden, maar er is minder zekerheid of de data correct aankomt en meer impact van instraling/ingress."
    },
    {
        category: "network",
        question: "Via Ants merk je 7 downstream kanalen in 'Partial Service'. Welke actie onderneem je?",
        type: "single",
        options: [
            "Vervang de oude TOF filter door een TOF-ITC. Onder de 334 MHz zijn er nu docsis kanalen toegevoegd. Als de klant iDTV wenst plaatsen we geen TOF-ITC filter.",
            "Geen enkele actie, dit is normaal want analoge TV is verdwenen op de kabel.",
            "Deze klant heeft duidelijk een HP110 MHz filter, neem deze weg voor een betere upstream."
        ],
        correct: 0,
        feedback: "Vervang de oude TOF filter door een TOF-ITC. Onder de 334 MHz zijn er nu docsis kanalen toegevoegd. Als de klant iDTV wenst plaatsen we geen TOF-ITC filter."
    },

    // WiFi & Internet Questions
    {
        category: "wifi",
        question: "Welk IP-adres is publiek?",
        type: "single",
        options: ["178.11.157.17", "169.254.1.116", "172.16.152.99", "192.168.9.29"],
        correct: 0,
        feedback: "178.11.157.17 is een publiek IP-adres."
    },
    {
        category: "wifi",
        question: "Wat is de meest destructieve vorm van interferentie voor WiFi toestellen in de 5GHz?",
        type: "single",
        options: ["Verzadiging", "Non-wifi", "Er is geen interferentie in de 5 GHz-band", "Overlapping"],
        correct: 1,
        feedback: "Non-wifi interferentie is het meest destructief voor 5GHz WiFi."
    },
    {
        category: "wifi",
        question: "Wat is het maximum uitzendvermogen waarmee men in Europa wifi mag uitzenden op 2,4GHz?",
        type: "single",
        options: ["100 milliWatt", "200 milliWatt", "1 Watt", "100 Watt"],
        correct: 0,
        feedback: "In Europa is het maximum 100 milliWatt voor 2,4GHz WiFi."
    },
    {
        category: "wifi",
        question: "In welke IP-range begint een fixed IPv4 adres bij Telenet:",
        type: "single",
        options: [
            "178.166.x.x of 141.134.x.x",
            "81.82.x.x of 81.83.x.x",
            "172.168.x.x of 169.254.x.x",
            "142.136.x.x of 146.122.x.x"
        ],
        correct: 1,
        feedback: "Fixed IP adressen bij Telenet beginnen met 81.82.x.x of 81.83.x.x"
    },
    {
        category: "wifi",
        question: "De klant zijn computer krijgt een 169.254.0.1 IP adres, wat is er mis?",
        type: "single",
        options: [
            "De HGW is ingesteld in een ander subnet.",
            "Het IP is hetzelfde als het IP van de HGW.",
            "De PC is verbonden met een ongeprovisioneerde modem.",
            "Het DORA proces is niet of onvolledig doorlopen."
        ],
        correct: 3,
        feedback: "169.254.x.x is een APIPA adres, het DHCP (DORA) proces is niet volledig doorlopen."
    },
    {
        category: "wifi",
        question: "Welke van volgende mogelijkheden is de best geëncrypteerde manier om een wifi netwerk te beveiligen?",
        type: "single",
        options: ["WPA2 AES", "AD-HOC", "WEP", "WPA2 TKIP"],
        correct: 0,
        feedback: "WPA2 AES is de beste encryptie voor WiFi beveiliging."
    },
    {
        category: "wifi",
        question: "Waar moeten we op letten bij het plaatsen van powerlines?",
        type: "single",
        options: [
            "Alle antwoorden zijn correct",
            "Alle connectoren (coax) moeten steeds sleutelvast aangedraaid worden",
            "Co-existence proberen we te vermijden",
            "De verbinding dient minstens 40 Mbps te zijn",
            "Niet in een stekkerblok aansluiten, maar rechtstreeks in het stopcontact"
        ],
        correct: 0,
        feedback: "Alle genoemde punten zijn belangrijk bij het plaatsen van powerlines."
    },
    {
        category: "wifi",
        question: "Wanneer plaatsen we steeds een Wi-Fi powerline kit bij de klant?",
        type: "single",
        options: [
            "Wanneer de STB dient aangesloten te worden met UTP, ook al staat de modem in dezelfde ruimte en is zijn bereik voldoende",
            "Wanneer de klant hierom vraagt voor zijn buren",
            "Wanneer het bereik van de modem (HGW) onvoldoende is en er een UTP-kabel van aan de modem aanwezig is",
            "Enkel op repair wanneer het bereik van de modem (HGW) onvoldoende is, er geen UTP-kabel van de modem aanwezig is en de klant het licht niet inziet van plumepods plaats ik deze basis hardware"
        ],
        correct: 3,
        feedback: "Enkel op repair wanneer het bereik van de modem (HGW) onvoldoende is, er geen UTP-kabel van de modem aanwezig is en de klant het licht niet inziet van plumepods plaats ik deze basis hardware."
    },
    {
        category: "wifi",
        question: "Hoeveel is 800 kB/sec uitgedrukt in Mbps?",
        type: "single",
        options: ["80 Mbps", "64 Mbps", "6,4 Mbps", "8 Mbps"],
        correct: 2,
        feedback: "800 KB/s x 8 = 6400 Kbps = 6,4 Mbps"
    },
    {
        category: "wifi",
        question: "Bij een throughput van 200 Mbps duurt een data-overdracht van 200 MB:",
        type: "single",
        options: ["12 seconden", "8 seconden", "4 seconden", "0,5 seconden", "1 seconde"],
        correct: 1,
        feedback: "200 MB = 1600 Mb, 1600 Mb / 200 Mbps = 8 seconden"
    },
    {
        category: "wifi",
        question: "Welk IP adres is privaat?",
        type: "single",
        options: [
            "192.168.10.203",
            "81.82.12.1.9",
            "178.123.14.6",
            "10.256.129.13",
            "169.168.10.203"
        ],
        correct: 0,
        feedback: "192.168.x.x is een privaat IP-adres bereik."
    },
    {
        category: "wifi",
        question: "Wat is de maximale lengte van een UTP kabel gebruikt voor GbE (1000BASE-T)?",
        type: "single",
        options: ["100m", "250m", "75m", "50m", "25m"],
        correct: 0,
        feedback: "De maximale lengte voor een UTP kabel is 100 meter."
    },
    {
        category: "wifi",
        question: "Wat doet een DNS server?",
        type: "single",
        options: [
            "Het routeert het internet verkeer.",
            "Het deelt MAC adressen uit.",
            "Het vertaalt een website adres naar een ip adres en andersom.",
            "Het geeft elke modem een IP adres."
        ],
        correct: 2,
        feedback: "Een DNS server vertaalt website adressen naar IP adressen en andersom."
    },
    {
        category: "wifi",
        question: "Wat is een 'normale' DHCP cyclus voor IPv4?",
        type: "single",
        options: [
            "Offer > Request > Ack > Discover",
            "Discover > Offer > Request > Ack",
            "Request > Offer > Ack > Discover",
            "Discover > Request > Offer > Ack"
        ],
        correct: 1,
        feedback: "De DHCP cyclus is: Discover > Offer > Request > Ack (DORA)"
    },
    {
        category: "wifi",
        question: "Op welke frequentie werkt de IEEE 802.11ac wifi standaard?",
        type: "single",
        options: ["5 GHz", "7 GHz", "2,4 GHz", "2,4 GHz en 5 GHz"],
        correct: 0,
        feedback: "802.11ac werkt alleen op 5 GHz."
    },
    {
        category: "wifi",
        question: "Wat kan het gevolg zijn van bv. een normaal werkende mobiele telefoon die met een AP verbonden is op de rand van het bereik?",
        type: "single",
        options: [
            "Alle antwoorden zijn correct",
            "De verbinding van andere toestellen wordt verbroken",
            "De verbinding van alle andere toestellen kan aanzienlijk trager zijn",
            "Het AP verandert van kanaal"
        ],
        correct: 2,
        feedback: "De verbinding van alle andere toestellen kan aanzienlijk trager zijn."
    },
    {
        category: "wifi",
        question: "Welke uitspraak is juist i.v.m. Wap's en Pods?",
        type: "multiple",
        options: [
            "Er is weinig verschil tussen het installeren van Wap's en Pods, het voornaamste verschil is dat de Pods superieur zijn t.o.v de waps",
            "De connectie kan via UTP maar ook via Mesh(wifi) en is niet alleen intelligent maar ook zelf controlerend en optimaliserend. De pods bewaken constant de apparaten en stuurt deze zodat de beleving van de klant optimaal is",
            "De connectie tot de acces points (IHC 1.0) loopt via UTP of PWL, deze acces points zenden op hun beurt wifi uit zonder rekening te houden met de positie van de apparaten of belasting van het netwerk",
            "Plume Pods plaatsen we vaak dichter bij elkaar tegen de binnenmuren van het huis. Indien je een pod verder moet plaatsen is het interessant om deze te verbinden met UTP met de modem"
        ],
        correct: [1, 2, 3],
        feedback: "De connectie kan via UTP/Mesh en is intelligent/optimalisserend. Acces points (IHC 1.0) via UTP/PWL zonder rekening te houden met apparaten. Pods dichter bij elkaar tegen binnenmuren."
    },
    {
        category: "wifi",
        question: "Welk IP-adres krijgt een computer via UTP of WiFi van een HGW modem (ongeacht provisioneringsstatus)?",
        type: "single",
        options: ["172.16.1.xxx", "172.16.0.xxx", "169.254.xxx.xxx", "192.168.0.xxx", "192.168.1.xxx"],
        correct: 3,
        feedback: "Op een HGW modem krijg je via UTP en WiFi steeds een 192.168.x.x IP adres. De provisioneringsstatus heeft geen invloed op het IP adres bij een HGW modem."
    },
    {
        category: "wifi",
        question: "Wat is voor PC1 de 'Default gateway'?",
        type: "single",
        options: ["WM (HGW)", "CCAP", "TFTP Server", "Node"],
        correct: 0,
        feedback: "De HGW (modem) is de default gateway voor PC1."
    },
    {
        category: "wifi",
        question: "Wat is de beste verkorte weergave van volgend IPv6 adres: 2001:0db8:0000:0000:b450:0000:0000:00b4?",
        type: "single",
        options: ["2001:db8::b450::b4", "2001:db8:0:0:b45::b4", "2001:db8::b45:0000:0000:b4", "2001:db8::b450:0:0:b4"],
        correct: 3,
        feedback: "IPv6 (128 bit) hexadecimaal. Leading nullen mogen weggelaten worden. 1x mag een segment nullen weggelaten worden."
    },
    {
        category: "wifi",
        question: "Welke analysetool gebruiken we voor de instellingen van een Powerline na te kijken en/of aan te passen?",
        type: "single",
        options: ["C@fé", "Spot", "De online tool van de fabrikant", "Ants", "Smartfix"],
        correct: 1,
        feedback: "We gebruiken Spot om powerline instellingen te bekijken en aan te passen."
    },
    {
        category: "wifi",
        question: "We stellen het Wi-Fi kanaal in op kanaal 124. Wat zijn hiervan de gevolgen?",
        type: "single",
        options: [
            "De modem zal, in het geval hij op kanaal 124 blijft staan, 1 Watt vermogen uitsturen",
            "De modem kan plots op een ander kanaal staan bv. ch36",
            "Alle antwoorden zijn correct",
            "De klant moet bij herstart van de modem 10 min wachten voor hij via Wi-Fi kan verbinden op de 5 GHz band"
        ],
        correct: 2,
        feedback: "Alle antwoorden zijn correct bij DFS kanaal 124."
    },
    {
        category: "wifi",
        question: "Hoeveel 2,4 GHz wifi kanalen ondersteunt onze Mercury v1 (WM3.0)? En hoeveel zijn er in de Europese standaard beschikbaar?",
        type: "single",
        options: [
            "14 kanalen beschikbaar, WM3.0 ondersteunt er 13",
            "13 kanalen beschikbaar, WM3.0 ondersteunt er 13",
            "13 kanalen beschikbaar, WM3.0 ondersteunt er 11",
            "11 kanalen beschikbaar, WM3.0 ondersteunt er 11"
        ],
        correct: 2,
        feedback: "13 kanalen beschikbaar in Europa, WM3.0 ondersteunt er 11."
    },
    {
        category: "wifi",
        question: "De klant heeft een Marakele modem. Hoe zorg je ervoor dat de klant het fixed IP op zijn router krijgt?",
        type: "single",
        options: [
            "Het eerste toestel dat een IP adres aanvraagd zal het Fixed IP krijgen + MAC-bridging inschakelen in SPOT",
            "Het HFC MAC adres van de modem ingeven via 'Mijn telenet' + MAC-bridging inschakelen in SPOT",
            "Het MAC adres van de LAN poort van de modem ingeven via 'Mijn telenet' + MAC-bridging inschakelen in SPOT",
            "Het MAC adres van het toestel dat het fixed IP moet krijgen ingeven via MAC-bridging in SPOT"
        ],
        correct: 3,
        feedback: "Het MAC adres van het toestel dat het fixed IP moet krijgen ingeven via MAC-bridging in SPOT."
    },
    {
        category: "wifi",
        question: "Welke van onderstaande adressen is een geldig IPv6 adres?",
        type: "single",
        options: [
            "2001:0DB8:0000:0000:0230:0BAE:5670:CA7F",
            "2013:0G02::897:9A37",
            "2003:0BC8:0230:1234:5670:1234",
            "2007::89AD:1287:73CD::0B08"
        ],
        correct: 0,
        feedback: "IPv6 (128 bit) hexadecimaal. Leading nullen mogen weggelaten worden. 1x mag een segment nullen weggelaten worden."
    },

    // TV & STB Questions
    {
        category: "tv",
        question: "Wat is de juiste commerciële naam voor de EOS box?",
        type: "single",
        options: ["Telenet Yelo Box", "Telenet TV Box", "Horizon Go Box", "Telenet Go Box"],
        correct: 1,
        feedback: "De EOS box heet commercieel de Telenet TV Box."
    },
    {
        category: "tv",
        question: "Wat melden we af bij het installeren van de Telenet TV Box?",
        type: "single",
        options: [
            "Bekabeling (coaxsnoer, HDMI-kabel, UTP-kabel)",
            "Telenet TV Box",
            "Alle antwoorden zijn correct",
            "Remote"
        ],
        correct: 2,
        feedback: "Bij installatie melden we alles af: TV Box, bekabeling en remote."
    },
    {
        category: "tv",
        question: "Tussen welke waardes moeten de signalen zitten voor iDTV?",
        type: "single",
        options: [
            "Tussen de -4dBmV en +17dBmV Ber > 1E-5",
            "Tussen de -8dBmV en +13dBmV met een BER > 1E-4",
            "Tussen de -8dBmV en +13dBmV met een BER < 1E-5",
            "Tussen de 0dBmV en +13dBmV met een BER > 1E-²"
        ],
        correct: 2,
        feedback: "Voor iDTV: tussen -8dBmV en +13dBmV met een BER < 1E-5"
    },
    {
        category: "tv",
        question: "Één van de vier tuners geeft een serieuze afwijking weer in het service menu. Hoe kunnen we dit oplossen?",
        type: "single",
        options: [
            "De STB is niet interactief, dit kan storingen veroorzaken op de tuner",
            "De HDMI-kabel is van slechte kwaliteit, de klant zal deze moeten vervangen",
            "In dit geval zal je 2 STB's moeten afmelden. Eén als Return NOK en één als geïnstalleerd",
            "Er is een slecht contact aanwezig op de installatie, we zullen alle connecties moeten nakijken"
        ],
        correct: 2,
        feedback: "In dit geval zal je 2 STB's moeten afmelden. Eén als Return NOK en één als geïnstalleerd."
    },
    {
        category: "tv",
        question: "Er is wel nog beeld op de TV, maar het menu en de zapbalk zijn niet meer zichtbaar op de HD DC (AD2200). Wat is de oorzaak?",
        type: "single",
        options: [
            "Een instelling van de TV is niet correct",
            "De STB is defect",
            "De kabel tussen de TV en de STB is defect",
            "Een instelling van de STB staat verkeerd",
            "De STB is aangesloten via SCART en HDMI op hetzelfde moment"
        ],
        correct: 4,
        feedback: "De STB is aangesloten via SCART en HDMI op hetzelfde moment."
    },
    {
        category: "tv",
        question: "Hoe kun je het service menu openen op een EOS STB?",
        type: "single",
        options: [
            "Via deze toetsten op de display: Back + Pijltje naar boven",
            "Via deze toetsen op de remote 'up / up / left / ... / right / right'",
            "Via een spraakcommando op de remote",
            "Via deze toetsen op de remote 'up / up / ... / left / right / right'",
            "Via deze toetsten op de display: Back + Pijltje naar links"
        ],
        correct: 1,
        feedback: "Via deze toetsen op de remote 'up / up / left / ... / right / right'"
    },
    {
        category: "tv",
        question: "In welke range ligt het IP-adres van een Sipadan? We zoeken een IP-adres dat zorgt voor de interactiviteit.",
        type: "single",
        options: [
            "10.140.X.X - 10.180.X.X",
            "192.160.X.X - 192.200.X.X",
            "192.168.81.82 - 192.168.81.83",
            "10.160.X.X - 10.200.X.X"
        ],
        correct: 3,
        feedback: "Het IP-adres van een Sipadan ligt tussen 10.160.X.X - 10.200.X.X"
    },
    {
        category: "tv",
        question: "De klant heeft recent wat zitten wijzigen aan de instellingen op zijn Telenet TV Box. De TV-Gids is plots volledig gewijzigd en staat super groot. Wat kan je ondernemen?",
        type: "single",
        options: [
            "Ik voer een Factory Reset uit op de Telenet TV Box",
            "Ik sluit de Telenet TV Box via Scart aan",
            "Ik ga naar de instellingen op de televisie en zet de HDMI UHD Color setting uit",
            "Ik wijzig de resolutie van de Telenet TV Box naar 720p",
            "Ik ga naar de instellingen en zet 'TV gids voor blinden en slechtzienden' op Uit"
        ],
        correct: 4,
        feedback: "Ga naar de instellingen en zet 'TV gids voor blinden en slechtzienden' op Uit"
    },
    {
        category: "tv",
        question: "Welke uitspraak is juist over TOF filters?",
        type: "single",
        options: [
            "Deze oude TOF filter met 2 ringen moet je altijd verwijderen",
            "We hebben geen analoge TV meer, dus de TOF filter heeft geen enkele functie meer, je bent verplicht om alle TOF filters op de tap te verwijderen",
            "Dit is de TOF-ITC filter, de enige juiste TOF filter die we nog mogen monteren"
        ],
        correct: 2,
        feedback: "Dit is de TOF-ITC filter, de enige juiste TOF filter die we nog mogen monteren."
    },

    // Telephone Questions
    {
        category: "telephone",
        question: "De belspanning wordt bij Telenet opgewekt in de...?",
        type: "single",
        options: ["Switch", "CCAP", "Modem", "Telefoon"],
        correct: 2,
        feedback: "De belspanning wordt opgewekt in de modem."
    },
    {
        category: "telephone",
        question: "Klant kan zijn berichten op de berichtendienst niet meer beluisteren. Hoe komt dit?",
        type: "single",
        options: [
            "Berichtendienst staat vol, je hoort ook een onderbroken kiestoon.",
            "Geen van deze antwoorden is correct.",
            "EMTA gedeelte van de modem is stuk, hier dient de modem geswapt te worden.",
            "Dit komt omdat Ik de modem vervangen heb, ik instrueer de klant om zijn telefoonopties terug in te stellen."
        ],
        correct: 3,
        feedback: "Na modemvervanging moet de klant zijn telefoonopties opnieuw instellen."
    },
    {
        category: "telephone",
        question: "Klant kan zonder problemen oproepen ontvangen, maar als hij zelf een nummer intoetst blijft hij constant de kiestoon horen.",
        type: "single",
        options: [
            "De nummerportering is nog niet in orde, ik contacteer rHD.",
            "Ik kijk de instellingen van het telefoontoestel na, mogelijks staat deze op pulse ingesteld ipv op toon kiezen.",
            "Ik vervang de modem.",
            "Er staan ingesproken berichten op de klant zijn voicemail."
        ],
        correct: 1,
        feedback: "Het telefoontoestel staat waarschijnlijk op pulse in plaats van toon kiezen."
    },

    // Calculation/Math Questions
    {
        category: "calculation",
        question: "Hoeveel GB is 7100000 kB?",
        type: "single",
        options: ["71 GB", "7.1 GB", "0.71 GB", "710 GB"],
        correct: 1,
        feedback: "7100000 kB = 7100 MB = 7.1 GB"
    },
    {
        category: "calculation",
        question: "Hoelang duurt een data-overdracht van 200 MB bij een throughput van 200 Mbps?",
        type: "single",
        options: ["1 seconde", "8 seconden", "16 seconden", "200 seconden"],
        correct: 1,
        feedback: "200 MB = 1600 Mb, dus 1600 Mb / 200 Mbps = 8 seconden"
    },
    {
        category: "calculation",
        question: "Hoeveel data verbruiken we (in MB) per uur, wanneer we muziek afspelen in de standaard kwaliteit (96 kbps)?",
        type: "single",
        options: ["43.2 MB/u", "96 MB/u", "432 MB/u", "4.32 MB/u"],
        correct: 0,
        feedback: "96 kbps x 3600 sec = 345600 kbit/u, gedeeld door 8 = 43200 KB/u = 43.2 MB/u"
    },
    {
        category: "calculation",
        question: "Hoe lang duurt een dataoverdracht van 18 GB tegen 5 MB/s?",
        type: "single",
        options: ["30 minuten", "45 minuten", "1 uur", "1.5 uur"],
        correct: 2,
        feedback: "18 GB = 18000 MB, dus 18000 MB / 5 MB/s = 3600 seconden = 1 uur"
    },
    {
        category: "calculation",
        question: "Hoeveel data verbruikt een gemiddeld gezin per maand bij Netflix streaming? (7 GB/uur Ultra HD, 3 uur/avond, 30 dagen)",
        type: "single",
        options: ["210 GB", "420 GB", "630 GB", "840 GB"],
        correct: 2,
        feedback: "7 GB/u x 3 uur = 21 GB/dag x 30 dagen = 630 GB/maand"
    },
    {
        category: "calculation",
        question: "Hoeveel is 7 GB/uur in Mbps?",
        type: "single",
        options: ["7.77 Mbps", "15.55 Mbps", "31.11 Mbps", "62.22 Mbps"],
        correct: 1,
        feedback: "7 GB/u = 7000 MB/u = 56000 Mb/u = 56000/3600 = 15.55 Mbps"
    },
    {
        category: "calculation",
        question: "Hoeveel data verbruiken we (in MB) per uur bij muziek in beste kwaliteit (320 kbps)?",
        type: "single",
        options: ["72 MB/u", "144 MB/u", "288 MB/u", "320 MB/u"],
        correct: 1,
        feedback: "320 kbps x 3600 sec = 1152000 kbit/u, gedeeld door 8 = 144000 KB/u = 144 MB/u"
    },
    {
        category: "calculation",
        question: "Hoe lang duurt een dataoverdracht van 11 GB tegen 3 MB/s?",
        type: "single",
        options: ["3067 seconden", "3367 seconden", "3667 seconden", "3967 seconden"],
        correct: 2,
        feedback: "11 GB = 11000 MB, dus 11000 MB / 3 MB/s = 3667 seconden"
    },
    {
        category: "calculation",
        question: "Hoeveel is 700 MB/uur in Mbps?",
        type: "single",
        options: ["0.78 Mbps", "1.56 Mbps", "3.11 Mbps", "6.22 Mbps"],
        correct: 1,
        feedback: "700 MB/u = 5600 Mb/u = 5600/3600 = 1.56 Mbps"
    },

    // Unit Conversion Questions
    {
        category: "calculation",
        question: "5,227 MΩ = ? kΩ",
        type: "single",
        options: ["5227 kΩ", "522.7 kΩ", "52270 kΩ", "0.5227 kΩ"],
        correct: 0,
        feedback: "5,227 MΩ = 5227 kΩ (1 MΩ = 1000 kΩ)"
    },
    {
        category: "calculation",
        question: "1,27 kA = ? mA",
        type: "single",
        options: ["127000 mA", "1270000 mA", "12700 mA", "127 mA"],
        correct: 1,
        feedback: "1,27 kA = 1270 A = 1270000 mA"
    },
    {
        category: "calculation",
        question: "418 MHz = ? Hz",
        type: "single",
        options: ["418000 Hz", "4180000 Hz", "41800000 Hz", "418000000 Hz"],
        correct: 3,
        feedback: "418 MHz = 418000000 Hz (1 MHz = 1000000 Hz)"
    },
    {
        category: "calculation",
        question: "59300 kHz = ? MHz",
        type: "single",
        options: ["5.93 MHz", "59.3 MHz", "593 MHz", "0.593 MHz"],
        correct: 1,
        feedback: "59300 kHz = 59.3 MHz (1000 kHz = 1 MHz)"
    },
    {
        category: "calculation",
        question: "0,001271 kA = ? mA",
        type: "single",
        options: ["127.1 mA", "1271 mA", "12.71 mA", "12710 mA"],
        correct: 1,
        feedback: "0,001271 kA = 1.271 A = 1271 mA"
    },
    {
        category: "calculation",
        question: "3173 W = ? MW",
        type: "single",
        options: ["0.003173 MW", "0.03173 MW", "3.173 MW", "0.0003173 MW"],
        correct: 0,
        feedback: "3173 W = 0.003173 MW (1 MW = 1000000 W)"
    },
    {
        category: "calculation",
        question: "390 Ω = ? MΩ",
        type: "single",
        options: ["0.39 MΩ", "0.039 MΩ", "0.0039 MΩ", "0.00039 MΩ"],
        correct: 3,
        feedback: "390 Ω = 0.00039 MΩ (1 MΩ = 1000000 Ω)"
    },
    {
        category: "calculation",
        question: "23200000 Hz = ? MHz",
        type: "single",
        options: ["2.32 MHz", "23.2 MHz", "232 MHz", "0.232 MHz"],
        correct: 1,
        feedback: "23200000 Hz = 23.2 MHz"
    },
    {
        category: "calculation",
        question: "2600 mW = ? W",
        type: "single",
        options: ["2.6 W", "26 W", "0.26 W", "260 W"],
        correct: 0,
        feedback: "2600 mW = 2.6 W (1000 mW = 1 W)"
    },
    {
        category: "calculation",
        question: "3800 mW = ? W",
        type: "single",
        options: ["0.38 W", "3.8 W", "38 W", "380 W"],
        correct: 1,
        feedback: "3800 mW = 3.8 W"
    },
    {
        category: "calculation",
        question: "4,346 kW = ? mW",
        type: "single",
        options: ["434600 mW", "4346000 mW", "43460 mW", "434.6 mW"],
        correct: 1,
        feedback: "4,346 kW = 4346 W = 4346000 mW"
    },
    {
        category: "calculation",
        question: "1100 mV = ? kV",
        type: "single",
        options: ["0.0011 kV", "0.011 kV", "0.11 kV", "1.1 kV"],
        correct: 0,
        feedback: "1100 mV = 1.1 V = 0.0011 kV"
    },
    {
        category: "calculation",
        question: "2400000 kHz = ? GHz",
        type: "single",
        options: ["0.24 GHz", "2.4 GHz", "24 GHz", "240 GHz"],
        correct: 1,
        feedback: "2400000 kHz = 2400 MHz = 2.4 GHz"
    },
    {
        category: "calculation",
        question: "0,004346 kW = ? mW",
        type: "single",
        options: ["43.46 mW", "434.6 mW", "4346 mW", "43460 mW"],
        correct: 2,
        feedback: "0,004346 kW = 4.346 W = 4346 mW"
    },
    {
        category: "calculation",
        question: "8,802 V = ? mV",
        type: "single",
        options: ["880.2 mV", "8802 mV", "88020 mV", "88.02 mV"],
        correct: 1,
        feedback: "8,802 V = 8802 mV (1 V = 1000 mV)"
    },

    // Ohm's Law Questions
    {
        category: "electricity",
        question: "Tussen de klemmen van een accu van 6 volt sluiten we een weerstand van 4 ohm aan. Hoeveel stroom gaat er nu door de weerstand lopen?",
        type: "single",
        options: ["0.5 A", "1.0 A", "1.5 A", "2.0 A"],
        correct: 2,
        feedback: "I = U / R = 6 V / 4 Ω = 1.5 A"
    },
    {
        category: "electricity",
        question: "In een transistorschakeling kon over een weerstand van 2,2 kilo-ohm een spanning worden gemeten van 8,3 volt. Hoeveel stroom loopt er door deze weerstand?",
        type: "single",
        options: ["2.77 mA", "3.77 mA", "4.77 mA", "5.77 mA"],
        correct: 1,
        feedback: "I = U / R = 8.3 V / 2200 Ω = 0.00377 A = 3.77 mA"
    },
    {
        category: "electricity",
        question: "Bereken de weerstand van een lampje van 6 V dat een stroom van 100mA opneemt.",
        type: "single",
        options: ["40 ohm", "50 ohm", "60 ohm", "70 ohm"],
        correct: 2,
        feedback: "R = U / I = 6 V / 0.1 A = 60 ohm"
    },
    {
        category: "electricity",
        question: "Een stofzuiger heeft een weerstand van 50 ohm. Bereken de stroomsterkte als je het toestel aansluit op de netspanning van 230V",
        type: "single",
        options: ["3.6 A", "4.6 A", "5.6 A", "6.6 A"],
        correct: 1,
        feedback: "I = U / R = 230 V / 50 Ω = 4.6 A"
    },
    {
        category: "electricity",
        question: "We nemen een weerstand met een waarde van 12 Ω en laten daar een stroom doorheen vloeien van 3 A. Wat is de spanning?",
        type: "single",
        options: ["24 V", "30 V", "36 V", "42 V"],
        correct: 2,
        feedback: "U = I × R = 3 A × 12 Ω = 36 V"
    },
    {
        category: "electricity",
        question: "Hoe groot is de weerstand van een soldeerbout, als hij bij een spanning van 230 V een stroom van 2 A opneemt?",
        type: "single",
        options: ["105 ohm", "115 ohm", "125 ohm", "135 ohm"],
        correct: 1,
        feedback: "R = U / I = 230 V / 2 A = 115 ohm"
    },
    {
        category: "electricity",
        question: "Een generator levert momenteel een vermogen van 4,6kW bij een spanning van 230V. Welke stroom vloeit er op dat moment?",
        type: "single",
        options: ["10 A", "15 A", "20 A", "25 A"],
        correct: 2,
        feedback: "I = P / U = 4600 W / 230 V = 20 A"
    },
    {
        category: "electricity",
        question: "Een strijkijzer van 2,2 kW is aangesloten op 220V. Welke stroom vloeit er door de weerstand?",
        type: "single",
        options: ["8 A", "10 A", "12 A", "14 A"],
        correct: 1,
        feedback: "I = P / U = 2200 W / 220 V = 10 A"
    },
    {
        category: "electricity",
        question: "Een motor trekt een stroom van 12A als deze is aangesloten op een spanningsbron van 127V. Welk vermogen levert deze motor?",
        type: "single",
        options: ["1324 W", "1424 W", "1524 W", "1624 W"],
        correct: 2,
        feedback: "P = I × U = 12 A × 127 V = 1524 W"
    },

    // Additional Technical Questions
    {
        category: "network",
        question: "Het metalen deksel is infeite een soort 'kooi van Faraday'. De kern onder het vijsje noemen we in de elektronica een antenne. Een antenne kan straling zenden maar ook ontvangen. Een goed kontakt tussen de massa van de coax en het metalen deksel zal vermijden dat het catv doosje straling kan ontvangen. Kom je bij de klant een catv doosje tegen zonder metalen deksel, dan moet je een nieuw catv doosje plaatsen. Is deze uitleg waar of niet waar?",
        type: "single",
        options: ["True", "False"],
        correct: 0,
        feedback: "Dit is correct. Het metalen deksel werkt als Faraday kooi en voorkomt stoorsignalen."
    },
    {
        category: "network",
        question: "Welke uitspraak is juist over WO-NIU?",
        type: "multiple",
        options: [
            "De WO-NIU is de enige NIU die je na een garage NIU extra mag plaatsen in de woonkamer",
            "Een RG11 mag je nooit rechtstreeks aansluiten op een WO NIU, maak gewoon een 'overgang' naar RG6",
            "De WO NIU mag je nooit inbouwen in vochtige muren. De reden is dat ze niet roestvrij zijn"
        ],
        correct: [1, 2],
        feedback: "Een RG11 mag je nooit rechtstreeks aansluiten op een WO NIU, maak een overgang naar RG6. De WO NIU mag je nooit inbouwen in vochtige muren omdat ze niet roestvrij zijn."
    },
    {
        category: "telephone",
        question: "Een toestel met een RJ11 aansluiting is altijd een analoog toestel. Een toestel met alleen RJ45 aansluitingen is een digitaal toestel. Klopt deze uitspraak?",
        type: "single",
        options: ["True", "False"],
        correct: 0,
        feedback: "Dit klopt. RJ11 = analoog toestel, RJ45 alleen = digitaal toestel."
    },
    {
        category: "network",
        question: "Via Ants meet ik een TX=40dBmV en RX=0dBmV. Na een interne verhuis is mijn dropkabel 5 meter langer. Via ants meet ik nu...",
        type: "single",
        options: ["TX=41dBmV RX=0 dBmV", "TX=39dBmV RX=0dBmV", "TX=41dBmV RX=-1dBmV", "TX=40dBmV RX=1dBmV"],
        correct: 2,
        feedback: "5 meter extra kabel: TX stijgt met ~1dB (meer weerstand), RX daalt met ~1dB (meer verzwakking)."
    },
    {
        category: "network",
        question: "De TX moet liggen tussen 25dBmV en 47 dBmV.",
        type: "single",
        options: ["True", "False"],
        correct: 0,
        feedback: "Correct, de TX moet tussen 25dBmV en 47dBmV liggen."
    },
    {
        category: "telephone",
        question: "Na het vormen van het nummer 1244 krijg je te horen 'het opgegeven nummer is ...', dit is de lijnidentificatietest. Voor PXM is dit 1924 of soms #31*1924# (een robot stem zegt het juiste Prox. nummer).",
        type: "single",
        options: ["True", "False"],
        correct: 0,
        feedback: "Correct, 1244 is voor lijnidentificatietest, 1924 of #31*1924# voor PXM."
    },
    {
        category: "network",
        question: "Is deze kleurencode juist voor coax connectoren?",
        type: "single",
        options: ["True", "False"],
        correct: 0,
        feedback: "De kleurencode voor coax connectoren is correct."
    },
    {
        category: "network",
        question: "De paarse connector is voor RG59 met dubbel vlechtwerk, doorzichtig diëlektricum en geen folie. Het vlechtwerk moet je achteruit plooien alvorens de connector te bevestigen. Gebruik met je compressietang plunger A.",
        type: "single",
        options: ["True", "False"],
        correct: 0,
        feedback: "Correct, paarse connector voor RG59 met deze specificaties en plunger A."
    },
    {
        category: "network",
        question: "Via Ants zie je een foutmelding dat de modem op een verkeerde node staat. Welke actie onderneem je?",
        type: "single",
        options: [
            "Deze modem staat op een verkeerde node, gebruik de probleemmelder",
            "De modem registreert maar heeft een te hoge TX, kijk alle connecties na",
            "Wegens te veel verbruik (telemeter) heeft de klant beperkt toegang tot het internet"
        ],
        correct: 0,
        feedback: "Deze modem staat op een verkeerde node, gebruik de probleemmelder."
    },
    {
        category: "network",
        question: "Waarom moet je verplicht een PM sturen bij het verwijderen van een HP?",
        type: "single",
        options: [
            "Door wegname van de HP filter kan er ingress op de lijn komen. Dankzij uw PM is de netwerktechnieker op de hoogte van de wegname van de HP filter. Op deze manier gaat de technieker veel tijd besparen",
            "Dit moet enkel bij een HP 47, niet voor een HP 87 of HP 110",
            "Bij wegname HP filter moet je een SOS Field coach sturen, uw FC zal je binnen de 10 minuten contacteren",
            "Je bent helemaal niet verplicht om een PM te sturen"
        ],
        correct: 0,
        feedback: "Door wegname van de HP filter kan er ingress op de lijn komen. Dankzij uw PM is de netwerktechnieker op de hoogte van de wegname van de HP filter."
    },
    {
        category: "network",
        question: "Ik meet met de Deviser downstream signalen, wat is er hier aan de hand?",
        type: "single",
        options: [
            "De klant heeft een HP110 omdat hij duidelijk veel ingress veroorzaakt, melden via PM aan iHD",
            "Het tweede upstream kanaal komt niet door, er staat dus een HP47 bij de klant",
            "Het tweede downstream kanaal komt niet door, er staat dus een RPA12 bij de klant",
            "Duidelijk een TOF-ITC"
        ],
        correct: 3,
        feedback: "Dit is duidelijk een TOF-ITC filter die bepaalde kanalen blokkeert."
    },
    {
        category: "network",
        question: "De klant wenst geen wifi van Telenet maar heeft zijn eigen professionele draadloze router (merk Ubiquity). Welke modem geef je deze klant?",
        type: "single",
        options: [
            "Kijk naar modempolicy (Hive), in dit geval dus een Marakele modem",
            "De MV2+ want de klant heeft een duurdere router",
            "MV2 modem (wifi5) is voldoende, zijn draadloze router zal wel wifi 6 hebben",
            "De Mercury MV1 is meer dan voldoende"
        ],
        correct: 0,
        feedback: "Kijk naar modempolicy (Hive), in dit geval dus een Marakele modem."
    },
    {
        category: "general",
        question: "Klant wenst een installatie met internet. De tap bevindt zich op 10 meter hoogte tegen de gevel van een oud herenhuis. De drop van de klant is met een AD filter aangesloten op de tap. Welke outcome selector gebruik je in SFX?",
        type: "single",
        options: ["Postponed", "OK", "Cancel (niet technische cancel)", "NOK"],
        correct: 3,
        feedback: "Je kan de AD nooit verwijderen op 10 meter hoogte (max 8 meter). Vraag een hoogtewerker via PM. Outcome = NOK"
    },
    {
        category: "network",
        question: "Een resultaat via Ants toont een foutmelding. Welke uitspraak is juist?",
        type: "single",
        options: [
            "Klant heeft te veel data gedownload, hij heeft geen access meer tot het internet",
            "De Modem heeft geen 'access' wegens een HP filter, gewoon HP 87 verwijderen",
            "Verkeerde node, stuur een PM naar iHD"
        ],
        correct: 2,
        feedback: "Verkeerde node, stuur een PM naar iHD."
    },
    {
        category: "network",
        question: "In dit voorbeeld zie je een 'open' coaxlijn. Door de marker juist voor de (2de) puls te zetten kan je linksonder aflezen waar de onderbreking zich voordoet. Bij een kortsluiting krijgen we een negatieve puls (naar beneden).",
        type: "single",
        options: ["True", "False"],
        correct: 0,
        feedback: "Dit is correct. Bij open lijn zie je de onderbreking, bij kortsluiting een negatieve puls."
    },
    {
        category: "network",
        question: "Ik mag de 'default gateway' van de router van de klant aanpassen. Alle gegevens hiervoor staan op het etiket van de router.",
        type: "single",
        options: ["True", "False"],
        correct: 1,
        feedback: "False. Je mag de default gateway van de klant zijn router NIET aanpassen."
    },
    {
        category: "network",
        question: "Je plaatst steeds een NIU met twee data-uitgangen (CM1-CM2) als de klant een MBP (modem met batterij) of BuB in gebruik heeft, of een NIU waar 2 modems op hangen.",
        type: "single",
        options: ["True", "False"],
        correct: 0,
        feedback: "True. Bij MBP/BuB of 2 modems gebruik je een NIU met twee data-uitgangen."
    },
    {
        category: "tv",
        question: "Een digibox/digicorder moet steeds achter de WM staan of via een switch. Een TV box mag achter de router van de klant staan (als router IPv6 compatible is).",
        type: "single",
        options: ["True", "False"],
        correct: 0,
        feedback: "True. Digibox/digicorder achter WM, TV box mag achter klant router als IPv6 compatible."
    },
    {
        category: "network",
        question: "Ik kom bij een installatie met allemaal 'losse' en slecht gemonteerde connectoren, ik vervang deze door perfect gemonteerde connectoren en sleutelvast. Wat is nu het gevolg van deze actie?",
        type: "single",
        options: [
            "TX en RX gaan niet wijzigen, alleen de SNR zal beter worden",
            "TX stijgt, RX daalt",
            "TX daalt, RX stijgt",
            "Zowel TX als RX zullen stijgen, uiteraard de SNR ook"
        ],
        correct: 2,
        feedback: "TX daalt, RX stijgt. Betere connectoren = minder verlies = lagere TX en hogere RX."
    }
];

// Quiz State
let currentQuestionIndex = 0;
let selectedAnswers = [];
let score = 0;
let quizStarted = false;
let answeredQuestions = [];
let filteredQuestions = [];
let isExamMode = false;

// Initialize Quiz
function initQuiz() {
    document.getElementById('progressBar').style.width = '0%';
    currentQuestionIndex = 0;
    selectedAnswers = [];
    score = 0;
    answeredQuestions = [];
}

// Start Quiz
function startQuiz() {
    const category = document.getElementById('categorySelect').value;
    
    // Check for study mode
    if (category === 'study') {
        showStudyMode();
        return;
    }
    
    // Check for search mode
    if (category === 'search') {
        showSearchMode();
        return;
    }
    
    // Check if exam mode
    isExamMode = (category === 'exam');
    
    if (isExamMode) {
        // Exam mode: Select random questions from each category
        filteredQuestions = [];
        const categories = ['general', 'electricity', 'network', 'wifi', 'tv', 'telephone', 'calculation'];
        const questionsPerCategory = {
            'general': 6,
            'electricity': 8,
            'network': 8,
            'wifi': 7,
            'tv': 6,
            'telephone': 3,
            'calculation': 6
        };
        
        categories.forEach(cat => {
            const categoryQuestions = quizQuestions.filter(q => q.category === cat);
            const shuffled = categoryQuestions.sort(() => Math.random() - 0.5);
            const selected = shuffled.slice(0, questionsPerCategory[cat]);
            filteredQuestions.push(...selected);
        });
        
        // Shuffle all selected questions
        filteredQuestions.sort(() => Math.random() - 0.5);
    } else if (category === 'all') {
        filteredQuestions = [...quizQuestions];
        // Shuffle questions
        filteredQuestions.sort(() => Math.random() - 0.5);
    } else {
        filteredQuestions = quizQuestions.filter(q => q.category === category);
        // Shuffle questions
        filteredQuestions.sort(() => Math.random() - 0.5);
    }
    
    initQuiz();
    quizStarted = true;
    
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('resultsScreen').style.display = 'none';
    
    displayQuestion();
}

// Display Current Question
function displayQuestion() {
    const question = filteredQuestions[currentQuestionIndex];
    
    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / filteredQuestions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    
    // Update question number
    document.getElementById('questionNumber').textContent = 
        `Vraag ${currentQuestionIndex + 1} van ${filteredQuestions.length}`;
    
    // Update question text
    document.getElementById('questionText').textContent = question.question;
    
    // Create options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        if (question.type === 'multiple') {
            optionDiv.innerHTML = `
                <input type="checkbox" id="option${index}" name="answer" value="${index}">
                <label for="option${index}">${option}</label>
            `;
        } else {
            optionDiv.innerHTML = `
                <input type="radio" id="option${index}" name="answer" value="${index}">
                <label for="option${index}">${option}</label>
            `;
        }
        
        optionDiv.addEventListener('click', function(e) {
            if (e.target.tagName !== 'INPUT') {
                const input = this.querySelector('input');
                if (input.type === 'radio') {
                    input.checked = true;
                } else {
                    input.checked = !input.checked;
                }
            }
            
            // Update selected class
            if (question.type === 'single') {
                document.querySelectorAll('.option').forEach(opt => {
                    opt.classList.remove('selected');
                });
            }
            
            if (this.querySelector('input').checked) {
                this.classList.add('selected');
            } else {
                this.classList.remove('selected');
            }
        });
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Reset feedback
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('feedback').className = 'feedback';
    
    // Update buttons
    updateButtons();
    
    // Restore previous answer if revisiting question
    if (answeredQuestions[currentQuestionIndex]) {
        restorePreviousAnswer();
    }
}

// Restore Previous Answer
function restorePreviousAnswer() {
    const answered = answeredQuestions[currentQuestionIndex];
    const question = filteredQuestions[currentQuestionIndex];
    
    if (question.type === 'multiple') {
        answered.selected.forEach(index => {
            document.getElementById(`option${index}`).checked = true;
            document.getElementById(`option${index}`).parentElement.classList.add('selected');
        });
    } else {
        document.getElementById(`option${answered.selected}`).checked = true;
        document.getElementById(`option${answered.selected}`).parentElement.classList.add('selected');
    }
    
    // Show feedback if already answered
    showFeedback(answered.correct);
}

// Check Answer
function checkAnswer() {
    const question = filteredQuestions[currentQuestionIndex];
    let userAnswer;
    let isCorrect = false;
    
    if (question.type === 'multiple') {
        userAnswer = [];
        document.querySelectorAll('input[name="answer"]:checked').forEach(input => {
            userAnswer.push(parseInt(input.value));
        });
        
        // Check if arrays are equal
        userAnswer.sort();
        const correctAnswer = [...question.correct].sort();
        isCorrect = JSON.stringify(userAnswer) === JSON.stringify(correctAnswer);
    } else {
        const selected = document.querySelector('input[name="answer"]:checked');
        if (selected) {
            userAnswer = parseInt(selected.value);
            isCorrect = userAnswer === question.correct;
        }
    }
    
    if (userAnswer === undefined || (Array.isArray(userAnswer) && userAnswer.length === 0)) {
        alert('Selecteer eerst een antwoord!');
        return;
    }
    
    // Store answer
    answeredQuestions[currentQuestionIndex] = {
        selected: userAnswer,
        correct: isCorrect
    };
    
    // Show feedback
    showFeedback(isCorrect);
    
    // Update score
    if (isCorrect && !answeredQuestions[currentQuestionIndex].scored) {
        score++;
        answeredQuestions[currentQuestionIndex].scored = true;
    }
    
    // Disable options after checking
    document.querySelectorAll('input[name="answer"]').forEach(input => {
        input.disabled = true;
    });
    
    updateButtons();
}

// Show Feedback
function showFeedback(isCorrect) {
    const question = filteredQuestions[currentQuestionIndex];
    const feedbackDiv = document.getElementById('feedback');
    
    feedbackDiv.className = isCorrect ? 'feedback correct' : 'feedback incorrect';
    feedbackDiv.textContent = question.feedback;
    feedbackDiv.style.display = 'block';
    
    // Highlight correct/incorrect options
    if (question.type === 'multiple') {
        question.correct.forEach(index => {
            document.getElementById(`option${index}`).parentElement.classList.add('correct');
        });
    } else {
        document.getElementById(`option${question.correct}`).parentElement.classList.add('correct');
    }
    
    if (!isCorrect) {
        const answered = answeredQuestions[currentQuestionIndex];
        if (question.type === 'multiple') {
            answered.selected.forEach(index => {
                if (!question.correct.includes(index)) {
                    document.getElementById(`option${index}`).parentElement.classList.add('incorrect');
                }
            });
        } else {
            document.getElementById(`option${answered.selected}`).parentElement.classList.add('incorrect');
        }
    }
}

// Update Buttons
function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const checkBtn = document.getElementById('checkBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (answeredQuestions[currentQuestionIndex]) {
        checkBtn.style.display = 'none';
        nextBtn.style.display = 'block';
        
        if (currentQuestionIndex === filteredQuestions.length - 1) {
            nextBtn.textContent = 'Bekijk Resultaten';
        } else {
            nextBtn.textContent = 'Volgende';
        }
    } else {
        checkBtn.style.display = 'block';
        nextBtn.style.display = 'none';
    }
}

// Previous Question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Next Question
function nextQuestion() {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        showResults();
    }
}

// Show Results
function showResults() {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultsScreen').style.display = 'block';
    
    const percentage = Math.round((score / filteredQuestions.length) * 100);
    document.getElementById('finalScore').textContent = `${score} / ${filteredQuestions.length} (${percentage}%)`;
    
    let message = '';
    
    if (isExamMode) {
        // Exam mode: 80% needed to pass
        if (percentage >= 80) {
            message = `✅ GESLAAGD! Je hebt ${percentage}% behaald. Minimaal vereist was 80%.`;
            document.getElementById('finalScore').style.color = '#4caf50';
        } else {
            message = `❌ NIET GESLAAGD. Je hebt ${percentage}% behaald. Minimaal 80% is vereist om te slagen.`;
            document.getElementById('finalScore').style.color = '#f44336';
        }
    } else {
        // Practice mode
        if (percentage >= 90) {
            message = 'Uitstekend! Je hebt een geweldige score behaald!';
        } else if (percentage >= 70) {
            message = 'Goed gedaan! Je hebt een goede score behaald.';
        } else if (percentage >= 50) {
            message = 'Niet slecht, maar er is ruimte voor verbetering.';
        } else {
            message = 'Je moet nog wat meer studeren. Probeer het opnieuw!';
        }
        document.getElementById('finalScore').style.color = '#667eea';
    }
    
    document.getElementById('resultMessage').textContent = message;
}

// Restart Quiz
function restartQuiz() {
    document.getElementById('resultsScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
    initQuiz();
}

// Review Answers
function reviewAnswers() {
    currentQuestionIndex = 0;
    document.getElementById('resultsScreen').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    displayQuestion();
}

// Show Study Mode
function showStudyMode() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultsScreen').style.display = 'none';
    document.getElementById('studyScreen').style.display = 'block';
    
    displayStudyQuestions('all');
}

// Display Study Questions
function displayStudyQuestions(categoryFilter) {
    const studyContent = document.getElementById('studyContent');
    let questions = quizQuestions;
    
    if (categoryFilter !== 'all') {
        questions = quizQuestions.filter(q => q.category === categoryFilter);
    }
    
    const categoryNames = {
        'general': 'Algemeen & Procedures',
        'electricity': 'Elektriciteit & Veiligheid',
        'network': 'Netwerk & Coax',
        'wifi': 'WiFi & Internet',
        'tv': 'TV & STB',
        'telephone': 'Telefonie',
        'calculation': 'Rekenen'
    };
    
    let html = '';
    questions.forEach((question, index) => {
        html += `
            <div class="study-question">
                <div class="category-badge">${categoryNames[question.category]}</div>
                <h3>Vraag ${index + 1}: ${question.question}</h3>
                <div class="study-options">
        `;
        
        question.options.forEach((option, optionIndex) => {
            const isCorrect = question.type === 'multiple' ? 
                question.correct.includes(optionIndex) : 
                question.correct === optionIndex;
            
            html += `
                <div class="study-option ${isCorrect ? 'correct' : ''}">
                    ${isCorrect ? '✓ ' : ''}${option}
                </div>
            `;
        });
        
        html += `
                </div>
                <div class="study-feedback">
                    💡 ${question.feedback}
                </div>
            </div>
        `;
    });
    
    studyContent.innerHTML = html;
}

// Filter Study Questions
function filterStudyQuestions() {
    const selectedCategory = document.getElementById('studyCategoryFilter').value;
    displayStudyQuestions(selectedCategory);
}

// Back to Home
function backToHome() {
    document.getElementById('studyScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
}

// Show Search Mode
function showSearchMode() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultsScreen').style.display = 'none';
    document.getElementById('studyScreen').style.display = 'none';
    document.getElementById('searchScreen').style.display = 'block';
    
    // Clear previous search results
    document.getElementById('searchResults').innerHTML = '';
    document.getElementById('searchInput').value = '';
    document.getElementById('searchCategoryFilter').value = 'all';
    
    // Add event listener for Enter key in search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchQuestions();
        }
    });
}

// Search Questions
function searchQuestions() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const categoryFilter = document.getElementById('searchCategoryFilter').value;
    
    if (searchTerm === '') {
        alert('Voer een zoekterm in!');
        return;
    }
    
    let questions = quizQuestions;
    
    // Filter by category if not "all"
    if (categoryFilter !== 'all') {
        questions = questions.filter(q => q.category === categoryFilter);
    }
    
    // Split search term into individual words
    const searchWords = searchTerm.split(/\s+/).filter(word => word.length > 1);
    
    // Score questions based on relevance
    const scoredResults = questions.map(question => {
        const questionText = question.question.toLowerCase();
        const optionsText = question.options.join(' ').toLowerCase();
        const feedbackText = question.feedback.toLowerCase();
        const allText = [questionText, optionsText, feedbackText].join(' ');
        
        let score = 0;
        let matchedWords = [];
        
        searchWords.forEach(word => {
            // Exact word matches get higher score
            const exactMatches = (allText.match(new RegExp(`\\b${word}\\b`, 'g')) || []).length;
            score += exactMatches * 10;
            
            // Partial matches get lower score
            const partialMatches = (allText.match(new RegExp(word, 'g')) || []).length - exactMatches;
            score += partialMatches * 3;
            
            // Word found in question title gets bonus
            if (questionText.includes(word)) {
                score += 5;
                matchedWords.push(word);
            }
            
            // Word found in correct answer gets bonus
            const correctAnswers = question.type === 'multiple' 
                ? question.correct.map(i => question.options[i]).join(' ').toLowerCase()
                : question.options[question.correct].toLowerCase();
            if (correctAnswers.includes(word)) {
                score += 3;
                matchedWords.push(word);
            }
        });
        
        return {
            question,
            score,
            matchedWords: [...new Set(matchedWords)] // Remove duplicates
        };
    })
    .filter(result => result.score > 0) // Only include questions with matches
    .sort((a, b) => b.score - a.score); // Sort by relevance (highest score first)
    
    const searchResults = scoredResults.map(result => result.question);
    displaySearchResults(searchResults, searchWords.join(' '));
}

// Display Search Results
function displaySearchResults(results, searchTerm) {
    const searchResultsDiv = document.getElementById('searchResults');
    
    const categoryNames = {
        'general': 'Algemeen & Procedures',
        'electricity': 'Elektriciteit & Veiligheid',
        'network': 'Netwerk & Coax',
        'wifi': 'WiFi & Internet',
        'tv': 'TV & STB',
        'telephone': 'Telefonie',
        'calculation': 'Rekenen'
    };
    
    if (results.length === 0) {
        searchResultsDiv.innerHTML = `
            <div class="no-results">
                <h3>Geen resultaten gevonden</h3>
                <p>Probeer een andere zoekterm of kies een andere categorie.</p>
                <p>Zoektips:</p>
                <ul style="text-align: left; max-width: 500px; margin: 0 auto;">
                    <li>Gebruik sleutelwoorden zoals "modem", "kabel", "spanning", "WiFi"</li>
                    <li>Combineer woorden: "IP adres", "modem vervangen", "elektriciteit meten"</li>
                    <li>Zoek op antwoorden: "True", "False", specifieke waardes</li>
                    <li>Probeer verschillende termen: "internet" of "netwerk", "stroom" of "elektriciteit"</li>
                    <li>Filter op categorie voor betere resultaten</li>
                </ul>
            </div>
        `;
        return;
    }
    
    // Add results count
    let html = `<div class="search-results-count">
        ${results.length} resultaten gevonden voor "${searchTerm}"
    </div>`;
    
    results.forEach((question, index) => {
        html += `
            <div class="study-question">
                <div class="category-badge">${categoryNames[question.category]}</div>
                <h3>Vraag ${index + 1}: ${highlightSearchTerm(question.question, searchTerm)}</h3>
                <div class="study-options">
        `;
        
        question.options.forEach((option, optionIndex) => {
            const isCorrect = question.type === 'multiple' ? 
                question.correct.includes(optionIndex) : 
                question.correct === optionIndex;
            
            html += `
                <div class="study-option ${isCorrect ? 'correct' : ''}">
                    ${isCorrect ? '✓ ' : ''}${highlightSearchTerm(option, searchTerm)}
                </div>
            `;
        });
        
        html += `
                </div>
                <div class="study-feedback">
                    💡 ${highlightSearchTerm(question.feedback, searchTerm)}
                </div>
            </div>
        `;
    });
    
    searchResultsDiv.innerHTML = html;
}

// Highlight Search Terms
function highlightSearchTerm(text, searchTerm) {
    if (!searchTerm || searchTerm.length < 2) return text;
    
    // Split search term into words and highlight each
    const searchWords = searchTerm.split(/\s+/).filter(word => word.length > 1);
    let highlightedText = text;
    
    searchWords.forEach(word => {
        // Highlight whole words first (higher priority)
        const wholeWordRegex = new RegExp(`\\b(${word})\\b`, 'gi');
        highlightedText = highlightedText.replace(wholeWordRegex, '<mark style="background-color: #fff3cd; padding: 2px 4px; border-radius: 3px; font-weight: bold;">$1</mark>');
        
        // Then highlight partial matches that aren't already highlighted
        const partialRegex = new RegExp(`(?<!<mark[^>]*>.*?)(${word})(?!.*?</mark>)`, 'gi');
        highlightedText = highlightedText.replace(partialRegex, '<mark style="background-color: #e8f4f8; padding: 1px 2px; border-radius: 2px;">$1</mark>');
    });
    
    return highlightedText;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initQuiz();
});