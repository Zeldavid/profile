angular.module("myApp", ['pascalprecht.translate'])
    .config(function($translateProvider) {
        $translateProvider.translations('en', {
                ABOUT: 'About Me',
                SKILLS: 'Skills',
                CONTACT: 'Contact',
                ENGLISH: 'English',
                SPANISH: 'Spanish',
                TEXT_ONE: 'Hi! I\'m David. I\'m a web developer who enjoy creating amazing things. Let\'s know more about me!',
                TEXT_TWO: '"The only way to do great work is to love what you do"',
                TEXT_THREE: 'Be the best version of yourself',
                PARAGRAPH: 'David is a Multimedia Engineer with development capacity in digital projects related to web technologies. His professional approach is oriented to web development, passionate about Front-End development, learning and research. His professional ambitions are the commitment and constant knowledge towards technologies that allow a better development is his profesional work environment.',
                BEGINNER: 'Beginner',
                FAMILIAR: 'Familiar',
                PROFICIENT: 'Proficient',
                EXPERT: 'Expert',
                MASTER: 'Master',
                NAME: 'Name',
                EMAIL: 'Email address',
                DESCRIPTION: 'What would you like to share with me...',
                SEND: 'Send',
                RIGHTS: 'All rights reserved',
                RESUME: 'Resume',
                ERROR_MESSAGE: 'This field is required...',
                CONFIRMATION_MESSAGE: 'Thank you for contacting me, your message was sent.'
            })
            .translations('es', {
                ABOUT: 'Acerca de Mí',
                SKILLS: 'Habilidades',
                CONTACT: 'Contacto',
                ENGLISH: 'Inglés',
                SPANISH: 'Español',
                TEXT_ONE: '¡Hola! Soy David. Soy un desarrollador web que disfruta creando cosas increibles. Vamos a saber más acerca de mí!',
                TEXT_TWO: '"La unica manera de hacer grandes trabajos es amar lo que uno hace"',
                TEXT_THREE: 'Se la mejor versión de ti mismo',
                PARAGRAPH: 'David es un ingeniero multimedia con capacidad de desarrollo en proyectos digitales relacionados con tecnologías web. Su enfoque profesional está orientado al desarrollo web, apasionado por el desarrollo Front-End, el aprendizaje y la investigación. Sus ambiciones profesionales son el compromiso y el conocimiento constante hacia tecnologías que permitan un mejor desarrollo en su entorno profesional de trabajo.',
                BEGINNER: 'Principiante',
                FAMILIAR: 'Familiar',
                PROFICIENT: 'Competente',
                EXPERT: 'Experto',
                MASTER: 'Maestro',
                NAME: 'Nombre',
                EMAIL: 'Dirección de correo electrónico',
                DESCRIPTION: 'Qué te gustaría compartir conmigo ...',
                SEND: 'Enviar',
                RIGHTS: 'Todos los derechos reservados',
                RESUME: 'Currículum',
                ERROR_MESSAGE: 'Este campo es obligatorio...',
                CONFIRMATION_MESSAGE: 'Gracias por ponerse en contacto conmigo, su mensaje ha sido enviado.'
            });
        $translateProvider.preferredLanguage('en');
    })

.controller('ctrlTraduce', function($scope, $translate) {
    $scope.changeLanguage = function(language) {
        $translate.use(language);
    }
})