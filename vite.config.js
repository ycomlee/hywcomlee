import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // Vercel 환경인지 확인
  const isVercel = process.env.VERCEL === '1';

  return {
    plugins: [react()],
    // 개발 모드거나 Vercel 배포일 경우 '/', GitHub Pages 빌드일 경우 '/gildong_portfolio/'
    base: command === 'serve' || isVercel ? '/' : '/gildong_portfolio/',
    server: {
      open: true,
      watch: {
        usePolling: true
      }
    }
  }
})
