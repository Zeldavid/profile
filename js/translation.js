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
    $scope.data = [{
            "title": "JavaScript",
            "percent": 85,
            "imgSrc": "img/js.png",
            "imgAlt": "js_logo",
        },
        {
            "title": "Gulp",
            "percent": 55,
            "imgSrc": "img/gulp.png",
            "imgAlt": "gulp_logo",
        },
        {
            "title": "HTML5",
            "percent": 88,
            "imgSrc": "img/html5.png",
            "imgAlt": "hmtl5_logo",
        },
        {
            "title": "CSS3",
            "percent": 88,
            "imgSrc": "img/css3.png",
            "imgAlt": "css3_logo",
        },
        {
            "title": "JQuery",
            "percent": 88,
            "imgSrc": "img/jquery.png",
            "imgAlt": "jquery_logo",
        },
        {
            "title": "Java",
            "percent": 55,
            "imgSrc": "img/java.png",
            "imgAlt": "java_logo",
        },
        {
            "title": "Python",
            "percent": 20,
            "imgSrc": "img/python.png",
            "imgAlt": "python_logo",
        },
        {
            "title": "PHP",
            "percent": 35,
            "imgSrc": "img/php.png",
            "imgAlt": "php_logo",
        },
        {
            "title": "MySQL",
            "percent": 55,
            "imgSrc": "img/mysql.png",
            "imgAlt": "mysql_logo",
        },
        {
            "title": "Angular",
            "percent": 64,
            "imgSrc": "img/angular.png",
            "imgAlt": "angular_logo",
        },
        {
            "title": "Ionic",
            "percent": 25,
            "imgSrc": "img/ionic.png",
            "imgAlt": "ionic_logo",
        },
        {
            "title": "NodeJS",
            "percent": 50,
            "imgSrc": "img/node_js.png",
            "imgAlt": "node_js_logo",
        },
        {
            "title": "Git",
            "percent": 58,
            "imgSrc": "img/git.png",
            "imgAlt": "git_logo",
        },
        {
            "title": "Sass",
            "percent": 66,
            "imgSrc": "img/sass.png",
            "imgAlt": "sass_logo",
        },
        {
            "title": "Less",
            "percent": 66,
            "imgSrc": "img/less.png",
            "imgAlt": "less_logo",
        },
        {
            "title": "Bootstrap",
            "percent": 75,
            "imgSrc": "img/bootstrap.png",
            "imgAlt": "bootstrap_logo",
        },
        {
            "title": "Handlebars",
            "percent": 55,
            "imgSrc": "img/handlebars.png",
            "imgAlt": "handlebars_logo",
        },
    ]
})