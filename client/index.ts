import { createServer } from './src/server';
import * as path from 'path';

const PORT = 3000

createServer({ staticsDir: path.join(__dirname, 'statics') })
    .listen(PORT, () => {
        console.log(`Server is successfully started and listening at http://localhost:${PORT}`)
    })
