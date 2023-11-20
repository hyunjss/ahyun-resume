// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig ({
    app: {
        head: {
            titleTemplate: 'Front-end Developer 박아현',
            title: 'Front-end Developer 박아현',
            htmlAttrs: {
                lang: 'ko',
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: '프론트엔드 개발자 박아현의 포트폴리오 사이트입니다' }
            ],
        },
    },
    devtools: { enabled: true },
    tailwindcss: {
        cssPath: 'assets/css/tailwind.css',
        configPath: 'tailwind.config',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true,
        exposeLevel: 2,
        config: {},
    },
    css: [
        'assets/css/style.css',
    ],
    loading: {
        color: '#BA55D3'
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ]
})
