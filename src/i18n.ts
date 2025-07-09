import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pl: {
    translation: {
      menu: {
        home: 'Strona główna',
        about: 'O nas',
        offer: 'Oferta',
        gallery: 'Galeria',
        pricing: 'Cennik',
        reservation: 'Rezerwacja',
        faq: 'FAQ',
        reviews: 'Opinie',
        academy: 'Akademia Golfa',
        news: 'Aktualności',
        contact: 'Kontakt',
      },
      hero: {
        title: 'Gorko Golf & Country Club',
        subtitle: 'Oaza golfa, relaksu i spotkań w sercu Dolnego Śląska. Poznaj wyjątkowe miejsce, gdzie pasja spotyka się z naturą i elegancją.'
      },
      cta: {
        book: 'Zarezerwuj tee time',
        about: 'Poznaj klub'
      },
      about: {
        title: 'O klubie',
        story: 'Gorko Golf & Country Club to miejsce, gdzie pasja do golfa spotyka się z naturą, relaksem i dobrą energią. Łączymy tradycję z nowoczesnością, tworząc przestrzeń otwartą dla wszystkich – od rodzin, przez firmy, po pasjonatów sportu. Nasz klub to nie tylko pole golfowe, ale także społeczność, która inspiruje do aktywnego wypoczynku i rozwoju.',
        modernTitle: 'Nowoczesna infrastruktura',
        modern: 'Nowoczesne pole golfowe z driving range, chipping & pitching area oraz putting greenem. Idealne miejsce do nauki i doskonalenia gry.',
        eventsTitle: 'Turnieje i wydarzenia',
        events: 'Organizujemy turnieje, akademie golfa, eventy firmowe i rodzinne. Każdy znajdzie tu coś dla siebie!',
        locationTitle: 'Wyjątkowa lokalizacja',
        location: 'Położenie wśród malowniczych wzgórz i zieleni Dolnego Śląska zapewnia wyjątkowy klimat i relaks.'
      },
      mission: {
        title: 'Nasza misja',
        desc: 'Tworzymy miejsce, gdzie każdy – niezależnie od wieku i poziomu zaawansowania – może rozwijać swoją pasję do golfa, aktywnie wypoczywać i budować relacje.',
        story: 'Wierzymy, że golf to nie tylko sport, ale styl życia. Naszą misją jest promowanie aktywności, integracji i szacunku do przyrody. Dbamy o rozwój każdego członka klubu, wspieramy początkujących i motywujemy zaawansowanych.'
      },
      values: {
        title: 'Nasze wartości',
        hospitality: 'Gościnność i otwartość',
        nature: 'Szacunek do natury',
        professionalism: 'Profesjonalizm',
        innovation: 'Innowacyjność'
      },
      forwho: {
        title: 'Dla kogo jest Gorko Golf?',
        families: 'Rodziny',
        familiesDesc: 'Wspólna zabawa, nauka i relaks na świeżym powietrzu.',
        companies: 'Firmy',
        companiesDesc: 'Eventy integracyjne, turnieje i szkolenia dla zespołów.',
        beginners: 'Początkujący',
        beginnersDesc: 'Akademia golfa i wsparcie trenerów na każdym etapie.',
        advanced: 'Zaawansowani',
        advancedDesc: 'Wyzwania, turnieje i doskonałe warunki do gry.'
      },
      invite: {
        title: 'Zapraszamy do Gorko Golf!',
        desc: 'Przyjedź, poznaj nasz klub, spróbuj gry w golfa i poczuj wyjątkową atmosferę. Otwieramy się na wszystkich – bez względu na wiek i doświadczenie!',
        cta: 'Umów się na wizytę'
      },
      galleryTeaser: {
        title: 'Z życia klubu',
        desc: 'Zobacz, jak wygląda codzienność i wyjątkowe chwile na naszym polu golfowym!',
        cta: 'Zobacz galerię'
      },
      tournamentsTeaser: {
        title: 'Turnieje w Gorko Golf',
        desc: 'Zobacz emocje, rywalizację i radość z gry podczas naszych turniejów! Sprawdź galerię zdjęć z ostatnich wydarzeń i poczuj atmosferę sportowej pasji.',
        cta: 'Zobacz wszystkie zdjęcia z turniejów'
      },
      socialSection: {
        title: 'Obserwuj nas na Facebooku'
      },
      reviewTeaser: {
        title: 'Co mówią nasi goście?',
        quote: 'Piękne miejsce, świetna atmosfera i profesjonalna obsługa. Polecam każdemu, kto chce spróbować golfa lub spędzić czas z rodziną!',
        author: 'Anna, Wrocław',
        cta: 'Więcej opinii'
      },
      newsTeaser: {
        title: 'Najnowsze wieści',
        date: '03.11.2024',
        headline: 'Turniej Beginners w Gorko Golf & Country Club!',
        desc: 'Zapraszamy początkujących graczy na wyjątkowy turniej z nagrodami i lunchem! Sprawdź szczegóły i zapisz się już dziś.',
        cta: 'Wszystkie aktualności'
      },
      aboutPage: {
        heroTitle: "Poznaj nasz klub",
        heroDesc: "Gorko Golf & Country Club to miejsce, gdzie pasja spotyka się z naturą i elegancją.",
        historyTitle: "Nasza historia",
        history2012: "Założenie klubu i otwarcie pierwszych 9 dołków.",
        history2016: "Rozbudowa pola do 18 dołków, start Akademii Golfa.",
        history2024: "Nowa era klubu – modernizacja, nowe inwestycje, rekordowa liczba członków.",
        teamTitle: "Nasz zespół",
        quote: "Golf to nie tylko sport – to styl życia, który łączy ludzi.",
        quoteAuthor: "Jan Kowalski, Prezes klubu"
      },
      offerPage: {
        heroTitle: "Nasza oferta",
        heroDesc: "Odkryj szeroką gamę usług i atrakcji dla każdego.",
        offersTitle: "Co oferujemy?",
        whyTitle: "Dlaczego warto wybrać Gorko Golf?",
        why1: "Rodzinna atmosfera i profesjonalna obsługa.",
        why2: "Nowoczesna infrastruktura, piękne widoki i doskonałe warunki do gry.",
        why3: "Turnieje, akademia, eventy, szkolenia i wiele więcej!",
        why4: "Przyjazna społeczność i wsparcie na każdym etapie rozwoju.",
        why5: "Atrakcyjne ceny, elastyczne członkostwo i liczne promocje!",
        cta: "Zarezerwuj termin"
      },
      offer: {
        lessonsTitle: "Lekcje golfa",
        lessonsDesc: "Indywidualne i grupowe lekcje z certyfikowanymi trenerami.",
        tournamentsTitle: "Turnieje",
        tournamentsDesc: "Organizujemy turnieje dla graczy na każdym poziomie.",
        familyTitle: "Eventy rodzinne",
        familyDesc: "Pikniki, animacje i zabawa dla całych rodzin.",
        academyTitle: "Akademia juniora",
        academyDesc: "Zajęcia i szkolenia dla dzieci i młodzieży."
      },
      galleryPage: {
        heroTitle: "Galeria klubu",
        heroDesc: "Zobacz, jak wygląda życie i atmosfera w Gorko Golf!",
        cat_wszystkie: "Wszystkie",
        cat_turnieje: "Turnieje",
        cat_akademia: "Akademia",
        cat_restauracja: "Restauracja",
        cat_zlotuptaka: "Z lotu ptaka",
        cta: "Prześlij swoje zdjęcie"
      },
      pricingPage: {
        heroTitle: "Cennik 2024",
        heroDesc: "Aktualne opłaty za grę, trening, wypożyczenie sprzętu i członkostwo w Gorko Golf & Country Club.",
        greenFeeTitle: "Green Fee",
        greenFeeKarnetTitle: "Green Fee Karnet",
        puttingTitle: "Putting Green & Chipping Area",
        drivingTitle: "Driving Range",
        rentalTitle: "Wypożyczenie sprzętu",
        membershipTitle: "Członkostwo roczne",
        membershipFee: "Roczna klubowa składka członkowska 2025",
        hcpCard: "Karta HCP Polskiego Związku Golfowego",
        membershipNote: "Niższe ceny w turniejach, bezpłatne strefy PG & CA, prawo do zaproszenia raz w roku bezpłatnie 1 osoby na pole do gry oraz na lunch podczas turnieju. Karta uwzględnia posiadane umiejętności tzw. HCP (handicap) – niezbędna w turnieju, ważna wszędzie.",
        ctaPdf: "Pobierz PDF",
        ctaBook: "Zarezerwuj grę",
        table: {
          holes: "Ilość dołków",
          weekday: "Pn–Pt",
          weekend: "So, Ni, Św",
          allDays: "Pn–Ni & Św",
          type: "Typ członkostwa",
          price: "Cena"
        },
        rental: {
          trolley: "Wózek na 9 / 18 dołków",
          melex: "Wózek typu melex",
          melex9: "9 dołków",
          melex18: "18 dołków",
          club: "1 kij golfowy",
          halfSet: "1/2 kompletu kijów",
          fullSet: "Komplet kijów"
        }
      },
      pricing: {
        greenfee: "Green Fee",
        greenfeeDesc: "Wejście na pole golfowe na 18 dołków.",
        lesson: "Lekcja z trenerem",
        lessonDesc: "60 minut indywidualnej nauki.",
        academy: "Akademia juniora",
        academyDesc: "Zajęcia grupowe dla dzieci i młodzieży.",
        rental: "Wypożyczenie sprzętu",
        rentalDesc: "Kije, wózki, buggy."
      },
      contactPage: {
        heroTitle: "Kontakt",
        heroDesc: "Masz pytania? Skontaktuj się z nami!",
        addressLabel: "Adres:",
        address: "Jędrzejowice 20b, 58-203 Dzierżoniów",
        phoneLabel: "Telefon:",
        emailLabel: "Email:",
        hoursLabel: "Godziny otwarcia:",
        hours: "pon. – niedz.: 9:00 – 19:00",
        formName: "Imię i nazwisko",
        formEmail: "Adres e-mail",
        formMessage: "Wiadomość",
        formSend: "Wyślij"
      },
      faqPage: {
        heroTitle: "Najczęściej zadawane pytania",
        heroDesc: "Znajdź odpowiedzi na najpopularniejsze pytania.",
        cta: "Nie znalazłeś odpowiedzi? Skontaktuj się z nami!"
      },
      faq: {
        q1: "Jak mogę zarezerwować tee time?",
        a1: "Rezerwacji można dokonać online przez nasz system rezerwacji lub telefonicznie.",
        q2: "Czy można wypożyczyć sprzęt na miejscu?",
        a2: "Tak, oferujemy wypożyczenie wózków, kijów golfowych oraz buggy.",
        q3: "Czy klub organizuje lekcje dla początkujących?",
        a3: "Tak, prowadzimy Akademię Golfa z kursami dla początkujących i zaawansowanych."
      },
      reviewsPage: {
        heroTitle: "Opinie naszych gości",
        heroQuote: "Golf w Gorko to czysta przyjemność!",
        cta: "Dodaj swoją opinię"
      },
      reviews: {
        r1: "Piękne miejsce, świetna atmosfera i profesjonalna obsługa. Polecam każdemu!",
        r2: "Fantastyczna akademia, dzieciaki zachwycone!",
        r3: "Najlepsze pole golfowe w regionie. Wracam tu co sezon!",
        r4: "Cudowna społeczność i świetne eventy. Zawsze wracam z uśmiechem.",
        r5: "Instruktorzy z pasją, pole w doskonałym stanie. Idealne miejsce na relaks!"
      },
      newsPage: {
        heroTitle: "Aktualności",
        heroDesc: "Bądź na bieżąco z wydarzeniami w klubie.",
        cta: "Zapisz się do newslettera"
      },
      news: {
        n1title: "Turniej Beginners w Gorko Golf & Country Club!",
        n1desc: "Zapraszamy początkujących graczy na wyjątkowy turniej z nagrodami i lunchem!",
        n2title: "Lato 2024 – Akademia Golfa",
        n2desc: "Nowy sezon, nowe możliwości! Dołącz do Akademii Golfa i zdobądź kartę HCP.",
        n3title: "Super Okazja na Długi Weekend!",
        n3desc: "Wykorzystaj długi weekend w Akademii Golfa – specjalne promocje i lekcje dla wszystkich!"
      },
      reservationPage: {
        heroTitle: "Rezerwacja tee time",
        heroDesc: "Zarezerwuj swój termin gry w kilku prostych krokach.",
        formName: "Imię i nazwisko",
        formEmail: "Adres e-mail",
        formDate: "Data gry",
        formTime: "Godzina",
        formTimeSelect: "Wybierz godzinę",
        formPeople: "Liczba graczy",
        formPaymentDesc: "Przy rezerwacji online pobieramy 50% zaliczki przez Stripe. Pozostała kwota płatna na miejscu.",
        formSend: "Rezerwuj i zapłać zaliczkę",
        howTitle: "Jak to działa?",
        how1: "Wypełnij formularz rezerwacji.",
        how2: "Opłać zaliczkę online przez Stripe.",
        how3: "Odbierz potwierdzenie i przyjdź na pole!",
        ctaPricing: "Zobacz cennik",
        ctaContact: "Masz pytania? Skontaktuj się z nami."
      },
      whySection: {
        title: "Dlaczego Gorko Golf?",
        box1Title: "Profesjonalne pole",
        box1Desc: "18-dołkowe pole golfowe, driving range, chipping & pitching area, putting green.",
        box2Title: "Turnieje i wydarzenia",
        box2Desc: "Organizujemy turnieje, akademie, eventy firmowe i rodzinne przez cały sezon.",
        box3Title: "Restauracja z widokiem",
        box3Desc: "Wyjątkowa kuchnia, taras z widokiem na pole, oferta dla gości i grup.",
        box4Title: "Akademia dla każdego",
        box4Desc: "Lekcje z trenerami PGA, kursy dla początkujących i zaawansowanych, juniorzy i seniorzy."
      },
      ctaSection: {
        title: "Dołącz do nas i przeżyj wyjątkowe chwile na polu golfowym!",
        desc: "Zarezerwuj swój tee time, poznaj naszą ofertę lub skontaktuj się z nami – jesteśmy tu dla Ciebie przez cały sezon.",
        book: "Rezerwuj online",
        contact: "Kontakt"
      },
      weather: {
        title: "Pogoda na polu golfowym"
      },
      footer: {
        aboutTitle: "O nas",
        aboutDesc: "Profesjonalne pole golfowe, driving range, chipping & pitching area i putting green.",
        hoursTitle: "Godziny otwarcia",
        hours: "pon. – niedz.: 9:00 – 19:00",
        assocTitle: "Stowarzyszenie",
        assocDesc: "<strong>Stowarzyszenie Miłośników Golfa Gorko Golf & Country Club</strong><br />Jędrzejowice 20b<br />58-203 Dzierżoniów<br />NIP: 882 211 87 14<br />REGON: 022120431",
        contactTitle: "Kontakt",
        copyright: "Wszelkie prawa zastrzeżone."
      }
    }
  },
  en: {
    translation: {
      menu: {
        home: 'Home',
        about: 'About',
        offer: 'Offer',
        gallery: 'Gallery',
        pricing: 'Pricing',
        reservation: 'Reservation',
        faq: 'FAQ',
        reviews: 'Reviews',
        academy: 'Golf Academy',
        news: 'News',
        contact: 'Contact',
      },
      hero: {
        title: 'Gorko Golf & Country Club',
        subtitle: 'An oasis of golf, relaxation and meetings in the heart of Lower Silesia. Discover a unique place where passion meets nature and elegance.'
      },
      cta: {
        book: 'Book tee time',
        about: 'About the club'
      },
      about: {
        title: 'About the club',
        story: 'Gorko Golf & Country Club is a place where a passion for golf meets nature, relaxation and good energy. We combine tradition with modernity, creating a space open to everyone – from families and companies to sports enthusiasts. Our club is not just a golf course, but a community that inspires active recreation and development.',
        modernTitle: 'Modern infrastructure',
        modern: 'A modern golf course with driving range, chipping & pitching area and putting green. The perfect place to learn and improve your game.',
        eventsTitle: 'Tournaments and events',
        events: 'We organize tournaments, golf academies, corporate and family events. Everyone will find something for themselves!',
        locationTitle: 'Unique location',
        location: 'Located among the picturesque hills and greenery of Lower Silesia, it provides a unique atmosphere and relaxation.'
      },
      mission: {
        title: 'Our mission',
        desc: 'We create a place where everyone – regardless of age and skill level – can develop their passion for golf, relax actively and build relationships.',
        story: 'We believe that golf is not just a sport, but a lifestyle. Our mission is to promote activity, integration and respect for nature. We care about the development of every club member, support beginners and motivate advanced players.'
      },
      values: {
        title: 'Our values',
        hospitality: 'Hospitality and openness',
        nature: 'Respect for nature',
        professionalism: 'Professionalism',
        innovation: 'Innovation'
      },
      forwho: {
        title: 'Who is Gorko Golf for?',
        families: 'Families',
        familiesDesc: 'Fun, learning and relaxation in the open air.',
        companies: 'Companies',
        companiesDesc: 'Team-building events, tournaments and training for teams.',
        beginners: 'Beginners',
        beginnersDesc: 'Golf academy and support from coaches at every stage.',
        advanced: 'Advanced',
        advancedDesc: 'Challenges, tournaments and excellent playing conditions.'
      },
      invite: {
        title: 'Welcome to Gorko Golf!',
        desc: 'Come, get to know our club, try golf and feel the unique atmosphere. We are open to everyone – regardless of age and experience!',
        cta: 'Book a visit'
      },
      galleryTeaser: {
        title: 'Club life',
        desc: 'See what everyday life and special moments look like on our golf course!',
        cta: 'See the gallery'
      },
      tournamentsTeaser: {
        title: 'Tournaments at Gorko Golf',
        desc: 'See the excitement, competition and joy of playing during our tournaments! Check out the photo gallery from recent events and feel the atmosphere of sporting passion.',
        cta: 'See all tournament photos'
      },
      socialSection: {
        title: 'Follow us on Facebook'
      },
      reviewTeaser: {
        title: 'What do our guests say?',
        quote: 'Beautiful place, great atmosphere and professional service. I recommend it to anyone who wants to try golf or spend time with family!',
        author: 'Anna, Wroclaw',
        cta: 'More reviews'
      },
      newsTeaser: {
        title: 'Latest news',
        date: '03.11.2024',
        headline: 'Beginners Tournament at Gorko Golf & Country Club!',
        desc: 'We invite beginner players to a special tournament with prizes and lunch! Check the details and sign up today.',
        cta: 'All news'
      },
      aboutPage: {
        heroTitle: "Discover our club",
        heroDesc: "Gorko Golf & Country Club is where passion meets nature and elegance.",
        historyTitle: "Our history",
        history2012: "Club founded and first 9 holes opened.",
        history2016: "Course expanded to 18 holes, Golf Academy launched.",
        history2024: "A new era – modernization, new investments, record number of members.",
        teamTitle: "Our team",
        quote: "Golf is not just a sport – it's a lifestyle that brings people together.",
        quoteAuthor: "Jan Kowalski, Club President"
      },
      offerPage: {
        heroTitle: "Our offer",
        heroDesc: "Discover a wide range of services and attractions for everyone.",
        offersTitle: "What do we offer?",
        whyTitle: "Why choose Gorko Golf?",
        why1: "Family atmosphere and professional service.",
        why2: "Modern infrastructure, beautiful views and excellent playing conditions.",
        why3: "Tournaments, academy, events, training and much more!",
        why4: "Friendly community and support at every stage of development.",
        why5: "Attractive prices, flexible membership and many promotions!",
        cta: "Book a tee time"
      },
      offer: {
        lessonsTitle: "Golf lessons",
        lessonsDesc: "Individual and group lessons with certified coaches.",
        tournamentsTitle: "Tournaments",
        tournamentsDesc: "We organize tournaments for players of all levels.",
        familyTitle: "Family events",
        familyDesc: "Picnics, activities and fun for the whole family.",
        academyTitle: "Junior academy",
        academyDesc: "Classes and training for children and youth."
      },
      galleryPage: {
        heroTitle: "Club gallery",
        heroDesc: "See the life and atmosphere at Gorko Golf!",
        cat_wszystkie: "All",
        cat_turnieje: "Tournaments",
        cat_akademia: "Academy",
        cat_restauracja: "Restaurant",
        cat_zlotuptaka: "Aerial",
        cta: "Send your photo"
      },
      pricingPage: {
        heroTitle: "Price List 2024",
        heroDesc: "Current fees for play, training, equipment rental and membership at Gorko Golf & Country Club.",
        greenFeeTitle: "Green Fee",
        greenFeeKarnetTitle: "Green Fee Pass",
        puttingTitle: "Putting Green & Chipping Area",
        drivingTitle: "Driving Range",
        rentalTitle: "Equipment Rental",
        membershipTitle: "Annual Membership",
        membershipFee: "Annual club membership fee 2025",
        hcpCard: "Polish Golf Association HCP Card",
        membershipNote: "Lower tournament prices, free PG & CA zones, the right to invite one person for free once a year to the course and for lunch during a tournament. The card confirms your HCP (handicap) skills – required for tournaments, valid everywhere.",
        ctaPdf: "Download PDF",
        ctaBook: "Book a tee time",
        table: {
          holes: "Number of holes",
          weekday: "Mon–Fri",
          weekend: "Sat, Sun, Holidays",
          allDays: "Mon–Sun & Holidays",
          type: "Membership type",
          price: "Price"
        },
        rental: {
          trolley: "Trolley for 9 / 18 holes",
          melex: "Melex cart",
          melex9: "9 holes",
          melex18: "18 holes",
          club: "1 golf club",
          halfSet: "1/2 set of clubs",
          fullSet: "Full set of clubs"
        }
      },
      pricing: {
        greenfee: "Green Fee",
        greenfeeDesc: "Access to the 18-hole golf course.",
        lesson: "Lesson with coach",
        lessonDesc: "60 minutes of individual instruction.",
        academy: "Junior academy",
        academyDesc: "Group classes for children and youth.",
        rental: "Equipment rental",
        rentalDesc: "Clubs, trolleys, buggy."
      },
      contactPage: {
        heroTitle: "Contact",
        heroDesc: "Have questions? Contact us!",
        addressLabel: "Address:",
        address: "Jędrzejowice 20b, 58-203 Dzierżoniów",
        phoneLabel: "Phone:",
        emailLabel: "Email:",
        hoursLabel: "Opening hours:",
        hours: "Mon – Sun: 9:00 – 19:00",
        formName: "Full name",
        formEmail: "Email address",
        formMessage: "Message",
        formSend: "Send"
      },
      faqPage: {
        heroTitle: "Frequently asked questions",
        heroDesc: "Find answers to the most popular questions.",
        cta: "Didn't find the answer? Contact us!"
      },
      faq: {
        q1: "How can I book a tee time?",
        a1: "You can book online via our reservation system or by phone.",
        q2: "Can I rent equipment on site?",
        a2: "Yes, we offer rental of trolleys, golf clubs and buggies.",
        q3: "Does the club offer lessons for beginners?",
        a3: "Yes, we run a Golf Academy with courses for beginners and advanced players."
      },
      reviewsPage: {
        heroTitle: "Guest reviews",
        heroQuote: "Golf at Gorko is pure pleasure!",
        cta: "Add your review"
      },
      reviews: {
        r1: "Beautiful place, great atmosphere and professional service. Highly recommended!",
        r2: "Fantastic academy, kids are delighted!",
        r3: "The best golf course in the region. I come back every season!",
        r4: "Wonderful community and great events. Always leave with a smile.",
        r5: "Passionate instructors, perfectly maintained course. Ideal place to relax!"
      },
      newsPage: {
        heroTitle: "News",
        heroDesc: "Stay up to date with club events.",
        cta: "Subscribe to newsletter"
      },
      news: {
        n1title: "Beginners Tournament at Gorko Golf & Country Club!",
        n1desc: "We invite beginner players to a special tournament with prizes and lunch!",
        n2title: "Summer 2024 – Golf Academy",
        n2desc: "New season, new opportunities! Join the Golf Academy and get your HCP card.",
        n3title: "Great Deal for the Long Weekend!",
        n3desc: "Take advantage of the long weekend at the Golf Academy – special promotions and lessons for everyone!"
      },
      reservationPage: {
        heroTitle: "Tee time reservation",
        heroDesc: "Book your game in a few simple steps.",
        formName: "Full name",
        formEmail: "Email address",
        formDate: "Date of play",
        formTime: "Time",
        formTimeSelect: "Select time",
        formPeople: "Number of players",
        formPaymentDesc: "When booking online, we collect a 50% deposit via Stripe. The remaining amount is payable on site.",
        formSend: "Book and pay deposit",
        howTitle: "How does it work?",
        how1: "Fill in the reservation form.",
        how2: "Pay the deposit online via Stripe.",
        how3: "Receive confirmation and come to the course!",
        ctaPricing: "See pricing",
        ctaContact: "Questions? Contact us."
      },
      whySection: {
        title: "Why Gorko Golf?",
        box1Title: "Professional course",
        box1Desc: "18-hole golf course, driving range, chipping & pitching area, putting green.",
        box2Title: "Tournaments & events",
        box2Desc: "We organize tournaments, academies, corporate and family events throughout the season.",
        box3Title: "Restaurant with a view",
        box3Desc: "Unique cuisine, terrace overlooking the course, offer for guests and groups.",
        box4Title: "Academy for everyone",
        box4Desc: "Lessons with PGA coaches, courses for beginners and advanced, juniors and seniors."
      },
      ctaSection: {
        title: "Join us and experience unique moments on the golf course!",
        desc: "Book your tee time, check our offer or contact us – we are here for you all season.",
        book: "Book online",
        contact: "Contact"
      },
      weather: {
        title: "Weather on the golf course"
      },
      footer: {
        aboutTitle: "About us",
        aboutDesc: "Professional golf course, driving range, chipping & pitching area and putting green.",
        hoursTitle: "Opening hours",
        hours: "Mon – Sun: 9:00 – 19:00",
        assocTitle: "Association",
        assocDesc: "<strong>Gorko Golf & Country Club Golf Association</strong><br />Jędrzejowice 20 b<br />58-203 Dzierżoniów<br />NIP 882 211 8714<br />REGON 022120431",
        contactTitle: "Contact",
        copyright: "All rights reserved."
      }
    }
  },
  de: {
    translation: {
      menu: {
        home: 'Startseite',
        about: 'Über uns',
        offer: 'Angebot',
        gallery: 'Galerie',
        pricing: 'Preise',
        reservation: 'Reservierung',
        faq: 'FAQ',
        reviews: 'Bewertungen',
        academy: 'Golfakademie',
        news: 'Neuigkeiten',
        contact: 'Kontakt',
      },
      hero: {
        title: 'Gorko Golf & Country Club',
        subtitle: 'Eine Oase für Golf, Entspannung und Begegnungen im Herzen Niederschlesiens. Entdecken Sie einen einzigartigen Ort, an dem Leidenschaft auf Natur und Eleganz trifft.'
      },
      cta: {
        book: 'Tee Time buchen',
        about: 'Über den Club'
      },
      about: {
        title: 'Über den Club',
        story: 'Gorko Golf & Country Club ist ein Ort, an dem die Leidenschaft für Golf auf Natur, Entspannung und gute Energie trifft. Wir verbinden Tradition mit Moderne und schaffen einen Raum, der für alle offen ist – von Familien über Unternehmen bis hin zu Sportbegeisterten. Unser Club ist nicht nur ein Golfplatz, sondern auch eine Gemeinschaft, die zu aktiver Erholung und Entwicklung inspiriert.',
        modernTitle: 'Moderne Infrastruktur',
        modern: 'Moderner Golfplatz mit Driving Range, Chipping & Pitching Area und Putting Green. Der perfekte Ort zum Lernen und Verbessern des Spiels.',
        eventsTitle: 'Turniere und Events',
        events: 'Wir organisieren Turniere, Golfakademien, Firmen- und Familienevents. Für jeden ist etwas dabei!',
        locationTitle: 'Einzigartige Lage',
        location: 'Die Lage inmitten der malerischen Hügel und des Grüns von Niederschlesien sorgt für ein einzigartiges Klima und Entspannung.'
      },
      mission: {
        title: 'Unsere Mission',
        desc: 'Wir schaffen einen Ort, an dem jeder – unabhängig von Alter und Können – seine Golfleidenschaft entwickeln, aktiv entspannen und Beziehungen aufbauen kann.',
        story: 'Wir glauben, dass Golf nicht nur ein Sport, sondern ein Lebensstil ist. Unsere Mission ist es, Aktivität, Integration und Respekt vor der Natur zu fördern. Wir kümmern uns um die Entwicklung jedes Clubmitglieds, unterstützen Anfänger und motivieren Fortgeschrittene.'
      },
      values: {
        title: 'Unsere Werte',
        hospitality: 'Gastfreundschaft und Offenheit',
        nature: 'Respekt vor der Natur',
        professionalism: 'Professionalität',
        innovation: 'Innovation'
      },
      forwho: {
        title: 'Für wen ist Gorko Golf?',
        families: 'Familien',
        familiesDesc: 'Gemeinsamer Spaß, Lernen und Entspannung an der frischen Luft.',
        companies: 'Firmen',
        companiesDesc: 'Teamevents, Turniere und Schulungen für Teams.',
        beginners: 'Anfänger',
        beginnersDesc: 'Golfakademie und Unterstützung durch Trainer auf jedem Niveau.',
        advanced: 'Fortgeschrittene',
        advancedDesc: 'Herausforderungen, Turniere und hervorragende Spielbedingungen.'
      },
      invite: {
        title: 'Willkommen bei Gorko Golf!',
        desc: 'Kommen Sie vorbei, lernen Sie unseren Club kennen, probieren Sie Golf aus und spüren Sie die besondere Atmosphäre. Wir sind für alle offen – unabhängig von Alter und Erfahrung!',
        cta: 'Termin vereinbaren'
      },
      galleryTeaser: {
        title: 'Clubleben',
        desc: 'Sehen Sie, wie der Alltag und besondere Momente auf unserem Golfplatz aussehen!',
        cta: 'Zur Galerie'
      },
      tournamentsTeaser: {
        title: 'Turniere bei Gorko Golf',
        desc: 'Erleben Sie Emotionen, Wettkampf und Spielfreude bei unseren Turnieren! Schauen Sie sich die Fotogalerie der letzten Events an und spüren Sie die Atmosphäre sportlicher Leidenschaft.',
        cta: 'Alle Turnierfotos ansehen'
      },
      socialSection: {
        title: 'Folgen Sie uns auf Facebook'
      },
      reviewTeaser: {
        title: 'Was sagen unsere Gäste?',
        quote: 'Wunderschöner Ort, tolle Atmosphäre und professioneller Service. Ich empfehle es jedem, der Golf ausprobieren oder Zeit mit der Familie verbringen möchte!',
        author: 'Anna, Breslau',
        cta: 'Weitere Bewertungen'
      },
      newsTeaser: {
        title: 'Neueste Nachrichten',
        date: '03.11.2024',
        headline: 'Anfängerturnier im Gorko Golf & Country Club!',
        desc: 'Wir laden Anfänger zu einem besonderen Turnier mit Preisen und Mittagessen ein! Sieh dir die Details an und melde dich noch heute an.',
        cta: 'Alle Nachrichten'
      },
      aboutPage: {
        heroTitle: "Lernen Sie unseren Club kennen",
        heroDesc: "Gorko Golf & Country Club – wo Leidenschaft auf Natur und Eleganz trifft.",
        historyTitle: "Unsere Geschichte",
        history2012: "Gründung des Clubs und Eröffnung der ersten 9 Löcher.",
        history2016: "Erweiterung auf 18 Löcher, Start der Golfakademie.",
        history2024: "Neue Ära – Modernisierung, neue Investitionen, Rekordzahl an Mitgliedern.",
        teamTitle: "Unser Team",
        quote: "Golf ist nicht nur ein Sport – es ist ein Lebensstil, der Menschen verbindet.",
        quoteAuthor: "Jan Kowalski, Clubpräsident"
      },
      offerPage: {
        heroTitle: "Unser Angebot",
        heroDesc: "Entdecken Sie eine breite Palette an Dienstleistungen und Attraktionen für alle.",
        offersTitle: "Was bieten wir an?",
        whyTitle: "Warum Gorko Golf wählen?",
        why1: "Familiäre Atmosphäre und professioneller Service.",
        why2: "Moderne Infrastruktur, schöne Ausblicke und beste Spielbedingungen.",
        why3: "Turniere, Akademie, Events, Schulungen und vieles mehr!",
        why4: "Freundliche Community und Unterstützung auf jedem Entwicklungsweg.",
        why5: "Attraktive Preise, flexible Mitgliedschaft und viele Aktionen!",
        cta: "Tee Time buchen"
      },
      offer: {
        lessonsTitle: "Golfunterricht",
        lessonsDesc: "Einzel- und Gruppenunterricht mit zertifizierten Trainern.",
        tournamentsTitle: "Turniere",
        tournamentsDesc: "Wir organisieren Turniere für Spieler aller Niveaus.",
        familyTitle: "Familienevents",
        familyDesc: "Picknicks, Animationen und Spaß für die ganze Familie.",
        academyTitle: "Juniorakademie",
        academyDesc: "Kurse und Training für Kinder und Jugendliche."
      },
      galleryPage: {
        heroTitle: "Club-Galerie",
        heroDesc: "Sehen Sie das Leben und die Atmosphäre im Gorko Golf!",
        cat_wszystkie: "Alle",
        cat_turnieje: "Turniere",
        cat_akademia: "Akademie",
        cat_restauracja: "Restaurant",
        cat_zlotuptaka: "Luftaufnahmen",
        cta: "Senden Sie Ihr Foto"
      },
      pricingPage: {
        heroTitle: "Preisliste 2024",
        heroDesc: "Aktuelle Gebühren für Spiel, Training, Ausrüstungsverleih und Mitgliedschaft im Gorko Golf & Country Club.",
        greenFeeTitle: "Green Fee",
        greenFeeKarnetTitle: "Green Fee Karte",
        puttingTitle: "Putting Green & Chipping Area",
        drivingTitle: "Driving Range",
        rentalTitle: "Ausrüstungsverleih",
        membershipTitle: "Jahresmitgliedschaft",
        membershipFee: "Jährlicher Clubbeitrag 2025",
        hcpCard: "HCP-Karte des Polnischen Golfverbands",
        membershipNote: "Niedrigere Preise bei Turnieren, kostenlose PG & CA Zonen, das Recht, einmal im Jahr eine Person kostenlos zum Platz und zum Turnier-Lunch einzuladen. Die Karte bestätigt Ihre HCP-Fähigkeiten – für Turniere erforderlich, überall gültig.",
        ctaPdf: "PDF herunterladen",
        ctaBook: "Spiel reservieren",
        table: {
          holes: "Anzahl der Löcher",
          weekday: "Mo–Fr",
          weekend: "Sa, So, Feiertage",
          allDays: "Mo–So & Feiertage",
          type: "Mitgliedschaftstyp",
          price: "Preis"
        },
        rental: {
          trolley: "Trolley für 9 / 18 Löcher",
          melex: "Melex Cart",
          melex9: "9 Löcher",
          melex18: "18 Löcher",
          club: "1 Golfschläger",
          halfSet: "1/2 Satz Schläger",
          fullSet: "Kompletter Schlägersatz"
        }
      },
      pricing: {
        greenfee: "Green Fee",
        greenfeeDesc: "Zugang zum 18-Loch-Golfplatz.",
        lesson: "Trainerstunde",
        lessonDesc: "60 Minuten Einzelunterricht.",
        academy: "Juniorakademie",
        academyDesc: "Gruppenunterricht für Kinder und Jugendliche.",
        rental: "Ausrüstungsverleih",
        rentalDesc: "Schläger, Trolleys, Buggy."
      },
      contactPage: {
        heroTitle: "Kontakt",
        heroDesc: "Haben Sie Fragen? Kontaktieren Sie uns!",
        addressLabel: "Adresse:",
        address: "Jędrzejowice 20b, 58-203 Dzierżoniów",
        phoneLabel: "Telefon:",
        emailLabel: "E-Mail:",
        hoursLabel: "Öffnungszeiten:",
        hours: "Mo – So: 9:00 – 19:00",
        formName: "Vollständiger Name",
        formEmail: "E-Mail-Adresse",
        formMessage: "Nachricht",
        formSend: "Senden"
      },
      faqPage: {
        heroTitle: "Häufig gestellte Fragen",
        heroDesc: "Finden Sie Antworten auf die häufigsten Fragen.",
        cta: "Keine Antwort gefunden? Kontaktieren Sie uns!"
      },
      faq: {
        q1: "Wie kann ich eine Tee Time reservieren?",
        a1: "Reservierungen sind online über unser System oder telefonisch möglich.",
        q2: "Kann ich vor Ort Ausrüstung mieten?",
        a2: "Ja, wir bieten Trolleys, Golfschläger und Buggys zum Verleih an.",
        q3: "Bietet der Club Unterricht für Anfänger an?",
        a3: "Ja, wir haben eine Golfakademie mit Kursen für Anfänger und Fortgeschrittene."
      },
      reviewsPage: {
        heroTitle: "Gästebewertungen",
        heroQuote: "Golf bei Gorko ist ein reines Vergnügen!",
        cta: "Bewertung abgeben"
      },
      reviews: {
        r1: "Wunderschöner Ort, tolle Atmosphäre und professioneller Service. Sehr zu empfehlen!",
        r2: "Fantastische Akademie, die Kinder sind begeistert!",
        r3: "Der beste Golfplatz der Region. Ich komme jede Saison wieder!",
        r4: "Tolle Gemeinschaft und großartige Events. Ich gehe immer mit einem Lächeln nach Hause.",
        r5: "Leidenschaftliche Trainer, perfekt gepflegter Platz. Der ideale Ort zum Entspannen!"
      },
      newsPage: {
        heroTitle: "Neuigkeiten",
        heroDesc: "Bleiben Sie über Club-Events auf dem Laufenden.",
        cta: "Newsletter abonnieren"
      },
      news: {
        n1title: "Anfängerturnier im Gorko Golf & Country Club!",
        n1desc: "Wir laden Anfänger zu einem besonderen Turnier mit Preisen und Mittagessen ein!",
        n2title: "Sommer 2024 – Golfakademie",
        n2desc: "Neue Saison, neue Möglichkeiten! Machen Sie mit und holen Sie sich Ihre HCP-Karte.",
        n3title: "Top-Angebot zum langen Wochenende!",
        n3desc: "Nutzen Sie das lange Wochenende in der Golfakademie – Sonderaktionen und Unterricht für alle!"
      },
      reservationPage: {
        heroTitle: "Tee Time Reservierung",
        heroDesc: "Buchen Sie Ihre Spielzeit in wenigen Schritten.",
        formName: "Vollständiger Name",
        formEmail: "E-Mail-Adresse",
        formDate: "Spieltermin",
        formTime: "Uhrzeit",
        formTimeSelect: "Uhrzeit wählen",
        formPeople: "Anzahl der Spieler",
        formPaymentDesc: "Bei Online-Reservierung erheben wir 50% Anzahlung per Stripe. Der Restbetrag ist vor Ort zu zahlen.",
        formSend: "Buchen und Anzahlung leisten",
        howTitle: "Wie funktioniert es?",
        how1: "Füllen Sie das Reservierungsformular aus.",
        how2: "Zahlen Sie die Anzahlung online per Stripe.",
        how3: "Erhalten Sie die Bestätigung und kommen Sie zum Platz!",
        ctaPricing: "Zur Preisliste",
        ctaContact: "Fragen? Kontaktieren Sie uns."
      },
      whySection: {
        title: "Warum Gorko Golf?",
        box1Title: "Professioneller Platz",
        box1Desc: "18-Loch-Golfplatz, Driving Range, Chipping & Pitching Area, Putting Green.",
        box2Title: "Turniere & Events",
        box2Desc: "Wir organisieren Turniere, Akademien, Firmen- und Familienevents während der ganzen Saison.",
        box3Title: "Restaurant mit Ausblick",
        box3Desc: "Einzigartige Küche, Terrasse mit Blick auf den Platz, Angebot für Gäste und Gruppen.",
        box4Title: "Akademie für alle",
        box4Desc: "Unterricht mit PGA-Trainern, Kurse für Anfänger und Fortgeschrittene, Junioren und Senioren."
      },
      ctaSection: {
        title: "Schließen Sie sich uns an und erleben Sie unvergessliche Momente auf dem Golfplatz!",
        desc: "Buchen Sie Ihre Tee Time, entdecken Sie unser Angebot oder kontaktieren Sie uns – wir sind die ganze Saison für Sie da.",
        book: "Online buchen",
        contact: "Kontakt"
      },
      weather: {
        title: "Wetter auf dem Golfplatz"
      },
      footer: {
        aboutTitle: "Über uns",
        aboutDesc: "Professioneller Golfplatz, Driving Range, Chipping & Pitching Area und Putting Green.",
        hoursTitle: "Öffnungszeiten",
        hours: "Mo – So: 9:00 – 19:00",
        assocTitle: "Verein",
        assocDesc: "<strong>Gorko Golf & Country Club Golf Association</strong><br />Jędrzejowice 20 b<br />58-203 Dzierżoniów<br />NIP 882 211 8714<br />REGON 022120431",
        contactTitle: "Kontakt",
        copyright: "Alle Rechte vorbehalten."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pl',
    fallbackLng: 'pl',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 