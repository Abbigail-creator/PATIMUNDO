/* =====================================================
   PATI MUNDO
   JAVASCRIPT GENERAL
===================================================== */


/* =====================================================
   BASE DE DATOS DE CATEGORÍAS
===================================================== */

const informacionMascotas = {


    /* =================================================
       PERROS
    ================================================= */

    "kala": {

        tipo: "perro",

        nombre: "K'ala / Perro sin pelo boliviano",

        icono: "🐕",

        descripcion:
            "Categoría de perro sin pelo asociada a Bolivia. Los cuidados deben adaptarse a las características individuales del animal, especialmente su piel, edad, tamaño y estado de salud.",

        alimentacion:
            "La alimentación debe ser completa y equilibrada y ajustarse a la edad, condición corporal, actividad y necesidades individuales. La cantidad no debe establecerse únicamente por la raza.",

        salud:
            "Se debe realizar vigilancia periódica de la piel, ojos, oídos, dientes, uñas, apetito, comportamiento y condición corporal. Los cambios importantes deben ser evaluados por un veterinario.",

        primerosAuxilios:
            "Ante una emergencia, la prioridad es mantener segura a la mascota y trasladarla a atención veterinaria. PATI MUNDO no sustituye la atención profesional.",

        cuidados:
            "Debe mantenerse un ambiente seguro y realizar cuidados rutinarios de higiene y observación. En un perro sin pelo se debe prestar especial atención a la piel y consultar al veterinario sobre sus necesidades específicas.",

        comportamiento:
            "El comportamiento debe observarse individualmente. La edad, el ambiente, la socialización y la experiencia del animal influyen en su conducta.",

        vacunacion:
            "El calendario de vacunación debe establecerse con un veterinario considerando la edad, ubicación, estilo de vida y riesgos de exposición.",

        veterinario:
            "Se debe buscar atención veterinaria ante dificultad para respirar, pérdida de conciencia, sangrado importante, traumatismos graves, intoxicaciones, convulsiones continuas, golpe de calor u otras situaciones de emergencia."

    },


    "chapi": {

        tipo: "perro",

        nombre: "Perro Chapi",

        icono: "🐕",

        descripcion:
            "En Bolivia, el término Chapi se utiliza para identificar un tipo de perro mestizo presente en la población canina. No debe tratarse automáticamente como una raza internacional con características genéticas uniformes.",

        alimentacion:
            "La alimentación debe adaptarse principalmente a la edad, tamaño, actividad y condición corporal del perro. Debe proporcionarse una dieta completa y equilibrada.",

        salud:
            "Al no existir una única composición genética para todos los perros Chapi, no es correcto atribuirles una lista fija de enfermedades propias de una raza. Se debe controlar su estado general y realizar revisiones veterinarias.",

        primerosAuxilios:
            "Ante una emergencia, se debe mantener al animal seguro, evitar movimientos innecesarios si existe un traumatismo y buscar atención veterinaria lo antes posible.",

        cuidados:
            "Los cuidados incluyen higiene, agua limpia, alimentación adecuada, actividad, ambiente seguro y observación diaria de cambios en apetito, sed, orina, heces y comportamiento.",

        comportamiento:
            "El comportamiento varía entre individuos. La socialización, el ambiente y las experiencias del perro deben tenerse en cuenta.",

        vacunacion:
            "La vacunación debe establecerse según las recomendaciones veterinarias y los riesgos existentes en la zona donde vive el animal.",

        veterinario:
            "Se debe acudir al veterinario ante signos de emergencia o cualquier cambio importante en el estado habitual del perro."

    },


    "mestizo": {

        tipo: "perro",

        nombre: "Perro Mestizo",

        icono: "🐕",

        descripcion:
            "Los perros mestizos pueden presentar combinaciones muy diferentes de características físicas y genéticas. Por ello, sus necesidades deben evaluarse individualmente.",

        alimentacion:
            "La alimentación debe determinarse considerando edad, tamaño, actividad y condición corporal, utilizando una dieta completa y equilibrada.",

        salud:
            "No existe una única lista de enfermedades que pueda aplicarse a todos los perros mestizos. La vigilancia general y los controles veterinarios son fundamentales.",

        primerosAuxilios:
            "Los primeros auxilios tienen como objetivo ayudar a mantener estable al animal mientras se consigue atención veterinaria.",

        cuidados:
            "Se deben mantener adecuados cuidados de higiene, actividad, alimentación, descanso y seguridad en el hogar.",

        comportamiento:
            "Cada perro puede presentar características de comportamiento diferentes. La socialización y el ambiente tienen un papel importante.",

        vacunacion:
            "El calendario debe ser determinado por el veterinario considerando la edad, ubicación y estilo de vida.",

        veterinario:
            "Ante una emergencia o un cambio significativo en el estado del animal, se debe buscar atención veterinaria."

    },


    "criollo": {

        tipo: "perro",

        nombre: "Perro Criollo",

        icono: "🐕",

        descripcion:
            "El término criollo se utiliza para perros de origen local o sin una raza pura definida. Sus características pueden variar considerablemente entre individuos.",

        alimentacion:
            "Debe utilizarse una alimentación completa y equilibrada adecuada para su edad, tamaño, actividad y condición corporal.",

        salud:
            "No se deben atribuir enfermedades específicas a todos los perros criollos. La prevención y vigilancia individual son fundamentales.",

        primerosAuxilios:
            "Ante una urgencia se debe proteger al animal y al propietario y buscar atención veterinaria rápidamente.",

        cuidados:
            "El cuidado diario incluye alimentación adecuada, agua limpia, higiene, actividad, descanso y un ambiente seguro.",

        comportamiento:
            "El comportamiento depende de cada individuo y de factores como socialización, ambiente y experiencias.",

        vacunacion:
            "Debe mantenerse un plan de vacunación establecido por un veterinario.",

        veterinario:
            "Cualquier signo grave o cambio repentino debe ser evaluado por un profesional."

    },


    "pinscher": {

        tipo: "perro",

        nombre: "Pinscher",

        icono: "🐕",

        descripcion:
            "El Pinscher es un perro pequeño de tipo definido. Sus necesidades concretas deben evaluarse considerando edad, tamaño, actividad y estado de salud.",

        alimentacion:
            "Debe recibir una alimentación completa y equilibrada adecuada para su etapa de vida y condición corporal.",

        salud:
            "Los controles veterinarios permiten vigilar su salud y detectar problemas de forma temprana.",

        primerosAuxilios:
            "Ante una emergencia, se debe mantener al perro seguro y trasladarlo a atención veterinaria.",

        cuidados:
            "Se deben cuidar higiene, uñas, dientes, oídos, piel, actividad y seguridad.",

        comportamiento:
            "El comportamiento debe observarse individualmente y acompañarse de una socialización adecuada.",

        vacunacion:
            "El calendario de vacunación debe ser indicado por un veterinario según edad y riesgo.",

        veterinario:
            "Ante signos de emergencia o cambios importantes se debe buscar atención veterinaria."

    },


    "labrador": {

        tipo: "perro",

        nombre: "Labrador Retriever",

        icono: "🐕",

        descripcion:
            "El Labrador Retriever es una raza de perro de tamaño mediano a grande. Sus necesidades deben ajustarse a su edad, actividad y condición corporal.",

        alimentacion:
            "Debe recibir una alimentación completa y equilibrada, controlando la cantidad para mantener una condición corporal saludable.",

        salud:
            "Los controles veterinarios permiten realizar prevención, vacunación, control parasitario y vigilancia general de salud.",

        primerosAuxilios:
            "En una emergencia se debe mantener al perro seguro y buscar atención veterinaria lo antes posible.",

        cuidados:
            "Necesita actividad física adecuada, higiene, cuidado dental, descanso y un ambiente seguro.",

        comportamiento:
            "El ejercicio, la socialización y el enriquecimiento ayudan a mantener un bienestar adecuado.",

        vacunacion:
            "El plan de vacunación debe determinarse individualmente con un veterinario.",

        veterinario:
            "Se debe acudir al veterinario ante signos graves, traumatismos, intoxicaciones, dificultad respiratoria, convulsiones o sangrado importante."

    },


    "golden": {

        tipo: "perro",

        nombre: "Golden Retriever",

        icono: "🐕",

        descripcion:
            "El Golden Retriever es una raza de tamaño mediano a grande que requiere cuidados adaptados a su edad y características individuales.",

        alimentacion:
            "La alimentación debe ser completa y equilibrada y ajustarse a la condición corporal y actividad del animal.",

        salud:
            "Las revisiones veterinarias permiten realizar prevención y detectar problemas de salud.",

        primerosAuxilios:
            "Ante una emergencia se debe mantener al animal seguro y trasladarlo a atención veterinaria.",

        cuidados:
            "Se deben cuidar su pelaje, higiene dental, uñas, actividad y ambiente.",

        comportamiento:
            "La socialización, actividad y estimulación adecuada contribuyen al bienestar.",

        vacunacion:
            "El calendario debe establecerse con el veterinario.",

        veterinario:
            "Los signos graves requieren atención veterinaria inmediata."

    },


    "pastor-aleman": {

        tipo: "perro",

        nombre: "Pastor Alemán",

        icono: "🐕",

        descripcion:
            "El Pastor Alemán es una raza de tamaño mediano a grande. Sus necesidades deben adaptarse a su edad, actividad y condición corporal.",

        alimentacion:
            "Debe recibir una dieta completa y equilibrada y controlar su condición corporal.",

        salud:
            "Los controles veterinarios periódicos ayudan a vigilar su estado general.",

        primerosAuxilios:
            "Ante una emergencia se debe evitar poner en riesgo al animal o a la persona y acudir al veterinario.",

        cuidados:
            "Necesita higiene, actividad adecuada, estimulación y un entorno seguro.",

        comportamiento:
            "La socialización y el entrenamiento adecuado son importantes para su bienestar.",

        vacunacion:
            "Debe seguir un programa veterinario de vacunación.",

        veterinario:
            "Los signos graves deben ser atendidos por un profesional."

    },


    "chihuahua": {

        tipo: "perro",

        nombre: "Chihuahua",

        icono: "🐕",

        descripcion:
            "El Chihuahua es una raza pequeña. Sus necesidades deben adaptarse a su edad, tamaño y condición corporal.",

        alimentacion:
            "Debe recibir una dieta completa y equilibrada adecuada para perros pequeños y para su etapa de vida.",

        salud:
            "Las revisiones veterinarias permiten controlar su salud y prevenir problemas.",

        primerosAuxilios:
            "En caso de emergencia se debe manipularlo con cuidado y buscar atención veterinaria.",

        cuidados:
            "Se deben mantener adecuados cuidados de higiene, dientes, uñas, actividad y seguridad.",

        comportamiento:
            "La socialización adecuada desde edades tempranas favorece un comportamiento equilibrado.",

        vacunacion:
            "Debe seguir un calendario indicado por un veterinario.",

        veterinario:
            "Cualquier emergencia o cambio importante debe ser evaluado por un veterinario."

    }

};


/* =====================================================
   OPCIONES DE PERROS
===================================================== */

const opcionesPerros = [

    {
        valor: "kala",
        nombre: "K'ala / Perro sin pelo boliviano"
    },

    {
        valor: "chapi",
        nombre: "Chapi"
    },

    {
        valor: "mestizo",
        nombre: "Mestizo"
    },

    {
        valor: "criollo",
        nombre: "Criollo"
    },

    {
        valor: "pinscher",
        nombre: "Pinscher"
    },

    {
        valor: "labrador",
        nombre: "Labrador Retriever"
    },

    {
        valor: "golden",
        nombre: "Golden Retriever"
    },

    {
        valor: "pastor-aleman",
        nombre: "Pastor Alemán"
    },

    {
        valor: "chihuahua",
        nombre: "Chihuahua"
    }

];


/* =====================================================
   OPCIONES DE GATOS
===================================================== */

const opcionesGatos = [

    {
        valor: "gato-domestico",
        nombre: "Gato doméstico / criollo"
    },

    {
        valor: "siames",
        nombre: "Siamés"
    },

    {
        valor: "persa",
        nombre: "Persa"
    },

    {
        valor: "maine-coon",
        nombre: "Maine Coon"
    },

    {
        valor: "angora",
        nombre: "Angora"
    }

];


/* =====================================================
   REGISTRO DEL DUEÑO
===================================================== */

const formDueño =
    document.getElementById("formDueño");


if (formDueño) {

    formDueño.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const nombre =
                document.getElementById("nombre").value.trim();

            const apellido =
                document.getElementById("apellido").value.trim();

            const correo =
                document.getElementById("correo").value.trim();


            localStorage.setItem(
                "nombreDueño",
                nombre
            );

            localStorage.setItem(
                "apellidoDueño",
                apellido
            );

            localStorage.setItem(
                "correoDueño",
                correo
            );


            window.location.href =
                "mascota.html";

        }
    );

}


/* =====================================================
   CAMBIAR OPCIONES SEGÚN PERRO O GATO
===================================================== */

const opcionesTipo =
    document.querySelectorAll(
        'input[name="tipo"]'
    );

const selectorRaza =
    document.getElementById("raza");


if (
    opcionesTipo.length > 0 &&
    selectorRaza
) {

    opcionesTipo.forEach(
        function(opcion) {

            opcion.addEventListener(
                "change",
                function() {

                    selectorRaza.innerHTML =
                        '<option value="">Selecciona una opción</option>';


                    let lista = [];


                    if (
                        this.value === "perro"
                    ) {

                        lista =
                            opcionesPerros;

                    }


                    if (
                        this.value === "gato"
                    ) {

                        lista =
                            opcionesGatos;

                    }


                    lista.forEach(
                        function(item) {

                            const nuevaOpcion =
                                document.createElement("option");

                            nuevaOpcion.value =
                                item.valor;

                            nuevaOpcion.textContent =
                                item.nombre;

                            selectorRaza.appendChild(
                                nuevaOpcion
                            );

                        }
                    );

                }
            );

        }
    );

}


/* =====================================================
   REGISTRO DE LA MASCOTA
===================================================== */

const formMascota =
    document.getElementById("formMascota");


if (formMascota) {

    formMascota.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const nombreMascota =
                document
                .getElementById("nombreMascota")
                .value
                .trim();


            const sexo =
                document
                .getElementById("sexo")
                .value;


            const raza =
                document
                .getElementById("raza")
                .value;


            const edad =
                document
                .getElementById("edad")
                .value;


            const tipoSeleccionado =
                document.querySelector(
                    'input[name="tipo"]:checked'
                );


            if (!tipoSeleccionado) {

                alert(
                    "Selecciona si tu mascota es un perro o un gato."
                );

                return;

            }


            if (!raza) {

                alert(
                    "Selecciona la raza de tu mascota."
                );

                return;

            }


            const tipo =
                tipoSeleccionado.value;


            localStorage.setItem(
                "nombreMascota",
                nombreMascota
            );

            localStorage.setItem(
                "sexoMascota",
                sexo
            );

            localStorage.setItem(
                "razaMascota",
                raza
            );

            localStorage.setItem(
                "edadMascota",
                edad
            );

            localStorage.setItem(
                "tipoMascota",
                tipo
            );


            /* ============================
               FOTO
            ============================ */

            const fotoInput =
                document.getElementById("foto");


            if (
                fotoInput &&
                fotoInput.files.length > 0
            ) {

                const archivo =
                    fotoInput.files[0];


                const lector =
                    new FileReader();


                lector.onload =
                    function() {

                        localStorage.setItem(
                            "fotoMascota",
                            lector.result
                        );


                        window.location.href =
                            "informacion.html";

                    };


                lector.readAsDataURL(
                    archivo
                );


            } else {

                window.location.href =
                    "informacion.html";

            }

        }
    );

}