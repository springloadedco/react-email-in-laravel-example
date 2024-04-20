import { render } from '@react-email/render';
import { MyTemplate } from './email';

export const handle = async () => {
    const html = render(<MyTemplate />, {
      pretty: true,
    });

    return html;
}
