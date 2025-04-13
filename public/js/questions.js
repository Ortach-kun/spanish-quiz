const quizQuestions = [
    {
        question: "1. Me ______ las manzanas.",
        answers: [
            { text: "a) gusta", correct: false },
            { text: "b) gustan", correct: true },
            { text: "c) gusto", correct: false }
        ]
    },
    {
        question: "2. ¿Te ______ el chocolate caliente?",
        answers: [
            { text: "a) gustan", correct: false },
            { text: "b) gusta", correct: true },
            { text: "c) gustas", correct: false }
        ]
    },
    {
        question: "3. A Juan y a mí nos ______ las hamburguesas.",
        answers: [
            { text: "a) gusta", correct: false },
            { text: "b) gustan", correct: true },
            { text: "c) gusto", correct: false }
        ]
    },
    {
        question: "4. ¿Qué fruta es roja y pequeña?",
        answers: [
            { text: "a) La fresa", correct: true },
            { text: "b) La cebolla", correct: false },
            { text: "c) El pescado", correct: false }
        ]
    },
    {
        question: "5. ¿Cuál de estos es un postre?",
        answers: [
            { text: "a) El pollo", correct: false },
            { text: "b) El helado", correct: true },
            { text: "c) La zanahoria", correct: false }
        ]
    },
    {
        question: "6. ¿Qué bebida es típica del desayuno?",
        answers: [
            { text: "a) El café", correct: true },
            { text: "b) El arroz", correct: false },
            { text: "c) La lechuga", correct: false }
        ]
    },
    {
        question: "7. A Pedro le ______ los refrescos.",
        answers: [
            { text: "a) gusta", correct: false },
            { text: "b) gustan", correct: true },
            { text: "c) gustas", correct: false }
        ]
    },
    {
        question: "8. ¿Qué comida es de color naranja?",
        answers: [
            { text: "a) La zanahoria", correct: true },
            { text: "b) El queso", correct: false },
            { text: "c) La leche", correct: false }
        ]
    },
    {
        question: "9. No me ______ el pescado, pero me ______ las ensaladas.",
        answers: [
            { text: "a) gusta / gustan", correct: true },
            { text: "b) gustan / gusta", correct: false },
            { text: "c) gusta / gusta", correct: false }
        ]
    },
    {
        question: "10. A Juan ______ el baloncesto.",
        answers: [
            { text: "a) le gusta", correct: true },
            { text: "b) le gustan", correct: false },
            { text: "c) les gusta", correct: false }
        ]
    },
    {
        question: "11. A nosotros ______ las películas de acción.",
        answers: [
            { text: "a) nos gusta", correct: false },
            { text: "b) nos gustan", correct: true },
            { text: "c) le gustan", correct: false }
        ]
    },
    {
        question: "12. A mis amigos no ______ la música clásica.",
        answers: [
            { text: "a) les gusta", correct: true },
            { text: "b) les gustan", correct: false },
            { text: "c) le gusta", correct: false }
        ]
    },
    {
        question: "13. ¿Cómo se dice \"Me gustan las fresas\" en español?",
        answers: [
            { text: "a) Me gusta las fresas", correct: false },
            { text: "b) Me gustan las fresas", correct: true },
            { text: "c) Me gustan la fresa", correct: false }
        ]
    },
    {
        question: "14. A ti no ______ el café con leche.",
        answers: [
            { text: "a) te gusta", correct: true },
            { text: "b) te gustan", correct: false },
            { text: "c) le gusta", correct: false }
        ]
    },
    {
        question: "15. A Rosa y a Jaime ______ ir a la playa.",
        answers: [
            { text: "a) les gusta", correct: true },
            { text: "b) les gustan", correct: false },
            { text: "c) le gusta", correct: false }
        ]
    },
    {
        question: "16. ¿Cómo se dice \"We like to go out at night\"?",
        answers: [
            { text: "a) Nos gustan salir de noche", correct: false },
            { text: "b) Nos gusta salir de noche", correct: true },
            { text: "c) Nos gusta salir en la noche", correct: false }
        ]
    },
    {
        question: "17. A vosotros ______ la paella, ¿verdad?",
        answers: [
            { text: "a) os gusta", correct: true },
            { text: "b) os gustan", correct: false },
            { text: "c) te gusta", correct: false }
        ]
    },
    {
        question: "18. A ellos no ______ mucho ver la tele.",
        answers: [
            { text: "a) les gusta", correct: true },
            { text: "b) le gusta", correct: false },
            { text: "c) les gustan", correct: false }
        ]
    },
    {
        question: "19. ¿Qué opción es correcta? - A Marta ______ los churros con chocolate.",
        answers: [
            { text: "a) le encanta", correct: false },
            { text: "b) le encantan", correct: true },
            { text: "c) le encantamos", correct: false }
        ]
    },
    {
        question: "20. A nosotros no ______ la comida picante.",
        answers: [
            { text: "a) nos gusta", correct: true },
            { text: "b) nos gustan", correct: false },
            { text: "c) les gusta", correct: false }
        ]
    },
    {
        question: "21. A mis amigos les ______ las fresas y las manzanas.",
        answers: [
            { text: "a) encanta", correct: false },
            { text: "b) encantan", correct: true },
            { text: "c) encantas", correct: false }
        ]
    },
    {
        question: "22. Yo ______ la mesa antes de la cena.",
        answers: [
            { text: "a) pono", correct: false },
            { text: "b) pongo", correct: true },
            { text: "c) pone", correct: false }
        ]
    },
    {
        question: "23. ¿Tú ______ hambre?",
        answers: [
            { text: "a) tienes", correct: true },
            { text: "b) tiene", correct: false },
            { text: "c) tenes", correct: false }
        ]
    },
    {
        question: "24. Mis padres ______ comer en un restaurante español.",
        answers: [
            { text: "a) quiero", correct: false },
            { text: "b) queremos", correct: false },
            { text: "c) quieren", correct: true }
        ]
    },
    {
        question: "25. ¿Cuál de estos es un postre?",
        answers: [
            { text: "a) La tarta", correct: true },
            { text: "b) El atún", correct: false },
            { text: "c) El cordero", correct: false }
        ]
    },
    {
        question: "26. Si quiero desayunar, puedo tomar...",
        answers: [
            { text: "a) espinacas y sardinas", correct: false },
            { text: "b) leche y pan tostado", correct: true },
            { text: "c) pescado y chuletas", correct: false }
        ]
    },
    {
        question: "27. ¿Cuál de estas opciones es un tipo de carne?",
        answers: [
            { text: "a) El pescado", correct: false },
            { text: "b) El cordero", correct: true },
            { text: "c) El yogur", correct: false }
        ]
    },
    {
        question: "28. Yo ______ la tarea todas las noches.",
        answers: [
            { text: "a) haco", correct: false },
            { text: "b) hago", correct: true },
            { text: "c) hace", correct: false }
        ]
    },
    {
        question: "29. Mis amigos ______ una casa en la playa.",
        answers: [
            { text: "a) tiene", correct: false },
            { text: "b) tenemos", correct: false },
            { text: "c) tienen", correct: true }
        ]
    },
    {
        question: "30. ¿Tú ______ a la fiesta esta noche?",
        answers: [
            { text: "a) vienes", correct: true },
            { text: "b) vengo", correct: false },
            { text: "c) viene", correct: false }
        ]
    },
    {
        question: "31. Nosotros ______ viajar a España el próximo verano.",
        answers: [
            { text: "a) queremos", correct: true },
            { text: "b) quiero", correct: false },
            { text: "c) quieren", correct: false }
        ]
    },
    {
        question: "32. Mi hermano no ______ comer gluten.",
        answers: [
            { text: "a) puede", correct: true },
            { text: "b) puedo", correct: false },
            { text: "c) pueden", correct: false }
        ]
    },
    {
        question: "33. Cuando hace frío, yo ______ un abrigo.",
        answers: [
            { text: "a) pono", correct: false },
            { text: "b) pongo", correct: true },
            { text: "c) pones", correct: false }
        ]
    },
    {
        question: "34. Mis amigos y yo ______ los viernes por la noche.",
        answers: [
            { text: "a) salgo", correct: false },
            { text: "b) salen", correct: false },
            { text: "c) salimos", correct: true }
        ]
    },
    {
        question: "35. Mi madre siempre ______ la verdad.",
        answers: [
            { text: "a) dices", correct: false },
            { text: "b) dice", correct: true },
            { text: "c) digo", correct: false }
        ]
    },
    {
        question: "36. ¿Tú ______ muchas películas en el cine?",
        answers: [
            { text: "a) ves", correct: true },
            { text: "b) ve", correct: false },
            { text: "c) veo", correct: false }
        ]
    },
    {
        question: "37. Los estudiantes ______ temprano antes de un examen.",
        answers: [
            { text: "a) duerme", correct: false },
            { text: "b) duermen", correct: true },
            { text: "c) dormimos", correct: false }
        ]
    }
]; 