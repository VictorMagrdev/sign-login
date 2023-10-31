import { Resend } from 'resend';

const resend = new Resend('re_No71uL9z_B8V69uEgVUJe4UpkgBkkEa5i');

resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'victorgamers123456@gmail.com',
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});
