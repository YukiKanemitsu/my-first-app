
// const QIITA_TOKEN = a1f36196f9f250713b1d051b7b9bd5b4ada6ef0b

export default function ({ $axios }) {
    $axios.onRequest((config) => {
        if (process.env.QIITA_TOKEN) {
            config.headers.common['Authorization'] = process.env.QIITA_TOKEN
        }
        return config
    })
}
