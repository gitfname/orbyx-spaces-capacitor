import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'tech.orbyx.orbyxspaces',
  appName: 'Orbyx Spaces',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
