# Sending emails with React Email, Sidecar, and Resend

Instead of using Laravel's Blade engine for generating the HTML for an email, we use React Email. Since React Email is a JavaScript library, we need to use Node.js to render the email. We use Sidecar to run the Node.js code in a PHP environment.

As a second step, we use Resend to send the email as our mailer. This step is optional, and you can use any mailer you want.

Check out this commit for the example implementation: https://github.com/springloadedco/react-email-in-laravel-example/commit/9fd15b25314877b24acbd027f11ea6fc84673a64
