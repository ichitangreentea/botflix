export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    ssr: false,
    target: 'static',
    server: {
        port: 3000
    },
    head: {
        title: 'Stream',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            },
            {
                name: 'format-detection',
                content: 'telephone=no'
            }
        ],
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico',
            },
            {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
            },
            {
                rel: 'stylesheet',
                href: 'https://use.fontawesome.com/releases/v5.0.6/css/all.css',
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
            },
        ],

        script: [{
                src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
                type: 'text/javascript',
            },
            {
                src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js',
                type: 'text/javascript',
            },
            { src: 'assets/js/style.js' },
            { src: 'assets/js/main-slick.js' },
            { src: 'assets/js/slick.js' },

        ],

    },


    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        { src: '~/assets/css/main-container.css' },
        { src: '~/assets/css/main-custom.css' },
        { src: '~/assets/css/main-modal.css' },
        { src: '~/assets/css/nav-sidebar.css' },
        { src: '~/assets/css/style-layouts-default.css' },
        { src: '~/assets/css/style.css' },
        { src: '~/assets/css/slick-theme.css' },
        { src: '~/assets/css/slick.css' },

    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        // '@/plugins/apexcharts'

    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        'bootstrap-vue/nuxt', [
            'nuxt-fontawesome', {
                imports: [{
                        set: '@fortawesome/free-solid-svg-icons',
                        icons: ['fas']
                    },
                    {
                        set: '@fortawesome/free-brands-svg-icons',
                        icons: ['fab']
                    }
                ]
            }
        ]
    ],
    bootstrapVue: {
        // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
        icons: true
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        vendor: [
            'vue-apexchart'
        ]
    }
}

// https://medium.com/@kozyreva.hanna/nuxt-js-fontawesome-integration-7ec56b1a41c8