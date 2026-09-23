import { NEWSLETTER } from '../config/site';

export interface Subscriber {
  name: string;
  email: string;
}

export type SubscribeResult = { ok: true } | { ok: false; error: string };

/**
 * Adaptador único para el newsletter. Cambia NEWSLETTER.provider en src/config/site.ts
 * y ajusta aquí el formato que espera cada proveedor.
 */
export async function subscribe({ name, email }: Subscriber): Promise<SubscribeResult> {
  const { provider, endpoint } = NEWSLETTER;

  if (provider === 'none' || !endpoint) {
    // Sin proveedor conectado: no se envía ni se guarda ningún dato.
    await new Promise((r) => setTimeout(r, 500));
    return { ok: true };
  }

  try {
    let res: Response;
    switch (provider) {
      case 'mailerlite':
      case 'brevo':
      case 'mailchimp': {
        // Formularios embebidos de estos proveedores aceptan POST form-urlencoded.
        // Ajusta los nombres de campo según el formulario generado por el proveedor.
        const body = new URLSearchParams({ 'fields[name]': name, 'fields[email]': email, FNAME: name, EMAIL: email });
        res = await fetch(endpoint, { method: 'POST', body, mode: 'no-cors' });
        return { ok: true };
      }
      case 'custom':
      default:
        res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, source: 'web-zuly-pena' }),
        });
    }
    return res.ok ? { ok: true } : { ok: false, error: 'No pudimos registrarte. Intenta de nuevo en unos minutos.' };
  } catch {
    return { ok: false, error: 'Parece que hay un problema de conexión. Intenta de nuevo.' };
  }
}
