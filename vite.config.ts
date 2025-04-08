import type { UserConfig } from 'vite';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({
    plugins: [react({babel: {
        presets: [],
        // Your plugins run before any built-in transform (eg: Fast Refresh)
        plugins: [[
            "formatjs",
            {
                "idInterpolationPattern": "[sha512:contenthash:base64:6]",
                "ast": true
            }
          ]],
      }})],
      base: '/owenmy-github.io/',
}) satisfies UserConfig;
