// Polyfills para o ambiente web
import 'react-native-get-random-values';
import { Buffer } from 'buffer';

// Adiciona o Buffer globalmente
if (typeof window !== 'undefined') {
  window.Buffer = Buffer;
}
