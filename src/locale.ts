import LocalizedStrings from "localized-strings";

const strings = new LocalizedStrings({
    es: {
        about: {
            title: "Acerca de Mí",
            paragraph: "Mi nombre es Gonzalo Rocha. Estudié la licenciatura en Ciencias de la Comunicación pero me ha apasionado las tecnologías web desde mi adolescencia. Desde 2011 he aprendido de forma autodidacta diferentes tecnologías para el desarrollo y diseño web y he mantenido diversos proyectos personales." 
        },
        speak: {
            country: "Mexico",
            languages: {
                es: "Español",
                en: "Inglés"
            }
        },
        tech: {
            title: "Tecnologías Web",
            since: "Desde",
            years: "años",
            year: "año"
        },
        project: {
            title: "Proyecto En Curso",
            subtitle: "Plataforma de Manejo de Estudiantes FILEX",
            since: "desde",
            code: "Código en",
            paragraph: `FILEX (Formacion Integral por Lenguas Extranjeras) es un programa de lenguas ofrecido en el Centro Universitario del Sur, parte de la red de centros regionales de la Universidad de Guadalajara (Mexico). Actualmente me dedico a mantener una plataforma FullStack (React + GraphQL + SQL) para las necesidades tecnologicas del programa de lenguas.`,
            stack: {
                backend: {
                    title: "Backend",
                    description: "Servidor en NodeJS que conjunta toda la información de las plataformas en una API GraphQL.",
                    server: "Servidor Apollo GraphQL",
                    db: "Base de Datos Postgresql",
                },
                frontend: {
                    title: "Frontend",
                    description: "Clientes React (con cliente Apollo GraphQL) para diferentes necesidades especificas.",
                    items: {
                        test: {
                            title: "Exámen de Ubicación",
                            description: "Una plataforma para que los aspirantes completen un examen de opciones multiples autocalificable para luego ser redireccionados a una videollamada para su examen oral con los profesores del programa."
                        },
                        registration: {
                            title: "Registro",
                            description: "Plataforma para que los aspirantes realicen su registro semestral a algún nivel ofrecido en el programa."
                        },
                        workshops: {
                            title: "Talleres",
                            description: "Cada semestre se ofrecen talleres de lenguas para los alumnos. Esta plataforma sirve para que los estudiantes puedan hacer reservaciones en los distintos horarios de talleres."
                        }
                    }
                }
            },
        },
        learning: {
            title: "Actualmente Aprendiendo",
            items: {
                datastruct: "Algoritmos y estructuras de datos",
                responsive: "CSS Responsivo",
                uxd: "Diseño UX/UI"
            }
        },
        footer: {
            app: "Para ver este CV como una App de Reactjs visita",
            sourcecode: "Código fuente",
            here: "aquí",
        }
    },
    en: {
        about: {
            title: "About Me",
            paragraph: "My name is Gonzalo Rocha. I have a bachelors degree in Communication Sciences Ciencias but I have been passionate about web techonolgies since my teenage years. Since 2011 I have self-taugh different technologies for development and web design and I have mantained different personal projects." 
        },
        speak: {
            country: "Mexico",
            languages: {
                es: "Spanish",
                en: "English"
            }
        },
        tech: {
            title: "Web Technologies",
            since: "Since",
            years: "years",
            year: "year"
        },
        project: {
            title: "Current Project",
            subtitle: "FILEX Student Management System",
            since: "since",
            code: "Code on",
            paragraph: `FILEX (Formacion Integral por Lenguas Extranjeras) is a language program offered in the campus Centro Universitario del Sur, which is a part of the Universidad de Guadalajara's regional campus network in Mexico. Right now I am mantaining a FullStack platform (React + GraphQL + SQL) for the technological needs of the language program.`,
            stack: {
                backend: {
                    title: "Backend",
                    description: "NodeJS server that unifies all the information from the platforms in a GraphQL API.",
                    server: "Apollo GraphQL Server",
                    db: "Postgresql Database",
                },
                frontend: {
                    title: "Frontend",
                    description: "React Clients (whit an Apollo GraphQL client) for different specific needs.",
                    items: {
                        test: {
                            title: "Placement Test",
                            description: "A platform where aspiring students complete an auto-graded multiple choice placement test and be redirected to a videocall where teachers from the program apply an oral exam."
                        },
                        registration: {
                            title: "Registration",
                            description: "A platform where aspiring students register every semester to an offered course in the program."
                        },
                        workshops: {
                            title: "Workshops",
                            description: "Every semester, language workshops are offered for students. This platform helps students make reservations for the different workshops."
                        }
                    }
                }
            },
        },
        learning: {
            title: "Currently learning",
            items: {
                datastruct: "Algorithms and Data Structures",
                responsive: "Responsive CSS",
                uxd: "UX/UI Design"
            }
        },
        footer: {
            app: "To experience this resume as a React app",
            sourcecode: "Source code",
            here: "here",
        }
    }
    //pseudo: true,
});

export default strings;