const quizQuestions = [
    {
        question: "1. Me ______ las manzanas. (Elmalar bana ______ geliyor.)",
        answers: [
            { text: "a) gusta (hoşuma gidiyor)", correct: false },
            { text: "b) gustan (hoşuma gidiyorlar)", correct: true },
            { text: "c) gusto (hoşlanıyorum)", correct: false }
        ]
    },
    {
        question: "2. ¿Te ______ el chocolate caliente? (Sıcak çikolata sana ______ mu?)",
        answers: [
            { text: "a) gustan (hoşuna gidiyorlar)", correct: false },
            { text: "b) gusta (hoşuna gidiyor)", correct: true },
            { text: "c) gustas (hoşlanıyorsun)", correct: false }
        ]
    },
    {
        question: "3. A Juan y a mí nos ______ las hamburguesas. (Juan ve bana hamburgerler ______.)",
        answers: [
            { text: "a) gusta (hoşumuza gidiyor)", correct: false },
            { text: "b) gustan (hoşumuza gidiyorlar)", correct: true },
            { text: "c) gusto (hoşlanıyorum)", correct: false }
        ]
    },
    {
        question: "4. ¿Qué fruta es roja y pequeña? (Hangi meyve kırmızı ve küçüktür?)",
        answers: [
            { text: "a) La fresa (Çilek)", correct: true },
            { text: "b) La cebolla (Soğan)", correct: false },
            { text: "c) El pescado (Balık)", correct: false }
        ]
    },
    {
        question: "5. ¿Cuál de estos es un postre? (Bunlardan hangisi bir tatlıdır?)",
        answers: [
            { text: "a) El pollo (Tavuk)", correct: false },
            { text: "b) El helado (Dondurma)", correct: true },
            { text: "c) La zanahoria (Havuç)", correct: false }
        ]
    },
    {
        question: "6. ¿Qué bebida es típica del desayuno? (Kahvaltıda tipik olan içecek hangisidir?)",
        answers: [
            { text: "a) El café (Kahve)", correct: true },
            { text: "b) El arroz (Pirinç)", correct: false },
            { text: "c) La lechuga (Marul)", correct: false }
        ]
    },
    {
        question: "7. A Pedro le ______ los refrescos. (Pedro'ya meşrubatlar ______.)",
        answers: [
            { text: "a) gusta (hoşuna gidiyor)", correct: false },
            { text: "b) gustan (hoşuna gidiyorlar)", correct: true },
            { text: "c) gustas (hoşlanıyorsun)", correct: false }
        ]
    },
    {
        question: "8. ¿Qué comida es de color naranja? (Hangi yiyecek turuncu renktedir?)",
        answers: [
            { text: "a) La zanahoria (Havuç)", correct: true },
            { text: "b) El queso (Peynir)", correct: false },
            { text: "c) La leche (Süt)", correct: false }
        ]
    },
    {
        question: "9. No me ______ el pescado, pero me ______ las ensaladas. (Balık bana ______, ama salatalar bana ______.)",
        answers: [
            { text: "a) gusta / gustan (hoşuma gitmiyor / hoşuma gidiyorlar)", correct: true },
            { text: "b) gustan / gusta (hoşuma gitmiyorlar / hoşuma gidiyor)", correct: false },
            { text: "c) gusta / gusta (hoşuma gitmiyor / hoşuma gidiyor)", correct: false }
        ]
    },
    {
        question: "10. A Juan ______ el baloncesto. (Juan'a basketbol ______.)",
        answers: [
            { text: "a) le gusta (hoşuna gidiyor)", correct: true },
            { text: "b) le gustan (hoşuna gidiyorlar)", correct: false },
            { text: "c) les gusta (hoşlarına gidiyor)", correct: false }
        ]
    },
    {
        question: "11. A nosotros ______ las películas de acción. (Bize aksiyon filmleri ______.)",
        answers: [
            { text: "a) nos gusta (hoşumuza gidiyor)", correct: false },
            { text: "b) nos gustan (hoşumuza gidiyorlar)", correct: true },
            { text: "c) le gustan (hoşuna gidiyorlar)", correct: false }
        ]
    },
    {
        question: "12. A mis amigos no ______ la música clásica. (Arkadaşlarıma klasik müzik ______.)",
        answers: [
            { text: "a) les gusta (hoşlarına gitmiyor)", correct: true },
            { text: "b) les gustan (hoşlarına gitmiyorlar)", correct: false },
            { text: "c) le gusta (hoşuna gitmiyor)", correct: false }
        ]
    },
    {
        question: "13. ¿Cómo se dice \"Me gustan las fresas\" en español? (İspanyolca'da \"Çilekler hoşuma gidiyor\" nasıl denir?)",
        answers: [
            { text: "a) Me gusta las fresas (Çilekler hoşuma gidiyor)", correct: false },
            { text: "b) Me gustan las fresas (Çilekler hoşuma gidiyor)", correct: true },
            { text: "c) Me gustan la fresa (Çilek hoşuma gidiyor)", correct: false }
        ]
    },
    {
        question: "14. A ti no ______ el café con leche. (Sana sütlü kahve ______.)",
        answers: [
            { text: "a) te gusta (hoşuna gitmiyor)", correct: true },
            { text: "b) te gustan (hoşuna gitmiyorlar)", correct: false },
            { text: "c) le gusta (hoşuna gitmiyor)", correct: false }
        ]
    },
    {
        question: "15. A Rosa y a Jaime ______ ir a la playa. (Rosa ve Jaime'ye plaja gitmek ______.)",
        answers: [
            { text: "a) les gusta (hoşlarına gidiyor)", correct: true },
            { text: "b) les gustan (hoşlarına gidiyorlar)", correct: false },
            { text: "c) le gusta (hoşuna gidiyor)", correct: false }
        ]
    },
    {
        question: "16. ¿Cómo se dice \"We like to go out at night\"? (\"Geceleri dışarı çıkmayı severiz\" nasıl denir?)",
        answers: [
            { text: "a) Nos gustan salir de noche (Geceleri dışarı çıkmak hoşumuza gider)", correct: false },
            { text: "b) Nos gusta salir de noche (Geceleri dışarı çıkmak hoşumuza gider)", correct: true },
            { text: "c) Nos gusta salir en la noche (Gece dışarı çıkmak hoşumuza gider)", correct: false }
        ]
    },
    {
        question: "17. A vosotros ______ la paella, ¿verdad? (Size paella ______, değil mi?)",
        answers: [
            { text: "a) os gusta (hoşunuza gidiyor)", correct: true },
            { text: "b) os gustan (hoşunuza gidiyorlar)", correct: false },
            { text: "c) te gusta (hoşuna gidiyor)", correct: false }
        ]
    },
    {
        question: "18. A ellos no ______ mucho ver la tele. (Onlara televizyon izlemek çok ______.)",
        answers: [
            { text: "a) les gusta (hoşlarına gitmiyor)", correct: true },
            { text: "b) le gusta (hoşuna gitmiyor)", correct: false },
            { text: "c) les gustan (hoşlarına gitmiyorlar)", correct: false }
        ]
    },
    {
        question: "19. ¿Qué opción es correcta? - A Marta ______ los churros con chocolate. (Hangi seçenek doğrudur? - Marta çikolatalı churro'ları ______.)",
        answers: [
            { text: "a) le encanta (çok sever)", correct: false },
            { text: "b) le encantan (çok sever)", correct: true },
            { text: "c) le encantamos (bizi çok sever)", correct: false }
        ]
    },
    {
        question: "20. A nosotros no ______ la comida picante. (Bize baharatlı yemek ______.)",
        answers: [
            { text: "a) nos gusta (hoşumuza gitmiyor)", correct: true },
            { text: "b) nos gustan (hoşumuza gitmiyorlar)", correct: false },
            { text: "c) les gusta (hoşlarına gitmiyor)", correct: false }
        ]
    },
    {
        question: "21. A mis amigos les ______ las fresas y las manzanas. (Arkadaşlarım çilekleri ve elmaları ______.)",
        answers: [
            { text: "a) encanta (çok severler)", correct: false },
            { text: "b) encantan (çok severler)", correct: true },
            { text: "c) encantas (çok seversin)", correct: false }
        ]
    },
    {
        question: "22. Yo ______ la mesa antes de la cena. (Ben akşam yemeğinden önce masayı ______.)",
        answers: [
            { text: "a) pono (hazırlarım)", correct: false },
            { text: "b) pongo (hazırlarım)", correct: true },
            { text: "c) pone (hazırlar)", correct: false }
        ]
    },
    {
        question: "23. ¿Tú ______ hambre? (Sen ______ mısın?)",
        answers: [
            { text: "a) tienes (açsın)", correct: true },
            { text: "b) tiene (açtır)", correct: false },
            { text: "c) tenes (açsın)", correct: false }
        ]
    },
    {
        question: "24. Mis padres ______ comer en un restaurante español. (Ebeveynlerim bir İspanyol restoranında yemek yemek ______.)",
        answers: [
            { text: "a) quiero (isterim)", correct: false },
            { text: "b) queremos (isteriz)", correct: false },
            { text: "c) quieren (isterler)", correct: true }
        ]
    },
    {
        question: "25. ¿Cuál de estos es un postre? (Bunlardan hangisi bir tatlıdır?)",
        answers: [
            { text: "a) La tarta (Pasta)", correct: true },
            { text: "b) El atún (Ton balığı)", correct: false },
            { text: "c) El cordero (Kuzu eti)", correct: false }
        ]
    },
    {
        question: "26. Si quiero desayunar, puedo tomar... (Eğer kahvaltı yapmak istersem, ... alabilirim.)",
        answers: [
            { text: "a) espinacas y sardinas (ıspanak ve sardalye)", correct: false },
            { text: "b) leche y pan tostado (süt ve kızarmış ekmek)", correct: true },
            { text: "c) pescado y chuletas (balık ve pirzola)", correct: false }
        ]
    },
    {
        question: "27. ¿Cuál de estas opciones es un tipo de carne? (Bu seçeneklerden hangisi bir et türüdür?)",
        answers: [
            { text: "a) El pescado (Balık)", correct: false },
            { text: "b) El cordero (Kuzu eti)", correct: true },
            { text: "c) El yogur (Yoğurt)", correct: false }
        ]
    },
    {
        question: "28. Yo ______ la tarea todas las noches. (Ben her gece ödevi ______.)",
        answers: [
            { text: "a) haco (yaparım)", correct: false },
            { text: "b) hago (yaparım)", correct: true },
            { text: "c) hace (yapar)", correct: false }
        ]
    },
    {
        question: "29. Mis amigos ______ una casa en la playa. (Arkadaşlarımın plajda bir evi ______.)",
        answers: [
            { text: "a) tiene (var)", correct: false },
            { text: "b) tenemos (var)", correct: false },
            { text: "c) tienen (var)", correct: true }
        ]
    },
    {
        question: "30. ¿Tú ______ a la fiesta esta noche? (Sen bu gece partiye ______ musun?)",
        answers: [
            { text: "a) vienes (geliyorsun)", correct: true },
            { text: "b) vengo (geliyorum)", correct: false },
            { text: "c) viene (geliyor)", correct: false }
        ]
    },
    {
        question: "31. Nosotros ______ viajar a España el próximo verano. (Biz gelecek yaz İspanya'ya seyahat etmek ______.)",
        answers: [
            { text: "a) queremos (istiyoruz)", correct: true },
            { text: "b) quiero (istiyorum)", correct: false },
            { text: "c) quieren (istiyorlar)", correct: false }
        ]
    },
    {
        question: "32. Mi hermano no ______ comer gluten. (Kardeşim gluten ______ yiyemez.)",
        answers: [
            { text: "a) puede (yapabilir/yiyebilir)", correct: true },
            { text: "b) puedo (yapabilirim/yiyebilirim)", correct: false },
            { text: "c) pueden (yapabilirler/yiyebilirler)", correct: false }
        ]
    },
    {
        question: "33. Cuando hace frío, yo ______ un abrigo. (Soğuk olduğunda, ben bir palto ______.)",
        answers: [
            { text: "a) pono (giyerim)", correct: false },
            { text: "b) pongo (giyerim)", correct: true },
            { text: "c) pones (giyersin)", correct: false }
        ]
    },
    {
        question: "34. Mis amigos y yo ______ los viernes por la noche. (Arkadaşlarım ve ben cuma geceleri ______.)",
        answers: [
            { text: "a) salgo (çıkarım)", correct: false },
            { text: "b) salen (çıkarlar)", correct: false },
            { text: "c) salimos (çıkarız)", correct: true }
        ]
    },
    {
        question: "35. Mi madre siempre ______ la verdad. (Annem her zaman doğruyu ______.)",
        answers: [
            { text: "a) dices (söylersin)", correct: false },
            { text: "b) dice (söyler)", correct: true },
            { text: "c) digo (söylerim)", correct: false }
        ]
    },
    {
        question: "36. ¿Tú ______ muchas películas en el cine? (Sen sinemada çok film ______ musun?)",
        answers: [
            { text: "a) ves (izlersin)", correct: true },
            { text: "b) ve (izler)", correct: false },
            { text: "c) veo (izlerim)", correct: false }
        ]
    },
    {
        question: "37. Los estudiantes ______ temprano antes de un examen. (Öğrenciler bir sınavdan önce erken ______.)",
        answers: [
            { text: "a) duerme (uyur)", correct: false },
            { text: "b) duermen (uyurlar)", correct: true },
            { text: "c) dormimos (uyuruz)", correct: false }
        ]
    }
]; 