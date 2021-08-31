import express from 'express'

type CreateServerParams = {
    staticsDir: string
}
export const createServer = ({ staticsDir }: CreateServerParams) => {
    const app = express()

    app.use(express.json());
    app.use(express.static(staticsDir))

    app.get('*', (req, res) => {
        res.status(200).sendFile('index.html', { root: staticsDir });
    });

    return app
}
