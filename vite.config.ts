import { defineConfig, loadEnv, type ServerOptions } from 'vite'
import react from '@vitejs/plugin-react'

type Mode = 'development' | 'production' | 'test'

interface AppEnv {
    VITE_ENV: string
    PORT: string
    BACKEND_URL?: string
}

const validateEnv = (mode: Mode, env: AppEnv) => {
    const validEnvs: (keyof AppEnv)[] = ['VITE_ENV', 'PORT', 'BACKEND_URL']

    validEnvs.forEach((key) => {
        if (!(key in env)) {
            throw new Error(`Missing environment variable: ${key} in ${mode} mode`)
        }
    })
    // Additional validations can be added here
}

const normalizePort = (port: string): number => {
    const parsedPort = parseInt(port, 10)
    if (isNaN(parsedPort) || parsedPort <= 0) {
        throw new Error(`Invalid port value: ${port}`)
    }
    return parsedPort
}

export default defineConfig((mode) => {
    const envMode: Mode = mode.mode as Mode
    const env = loadEnv(envMode, process.cwd(), '') as unknown as AppEnv

    validateEnv(envMode, env)

    const PORT = normalizePort(env.PORT)

    const config: ServerOptions = {
        port: PORT,
        open: true,
        proxy: {
            '/api': {
                target: env.BACKEND_URL,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }

    return {
        plugins: [react()],
        server: config,
        preview: config,
        build: {
            minify: true
        }
    }
})
