import { Page } from "@src/pages/_app";

export function getVerificationEmail(email: string) {
  return (
    "<!DOCTYPE html>\n" +
    '<html lang="en">\n' +
    "  <head>\n" +
    '    <meta charset="utf-8" />\n' +
    "    <title>Confirm Your Subscription</title>\n" +
    "  </head>\n" +
    "  <body\n" +
    '    style="\n' +
    "      font-family: Arial, sans-serif;\n" +
    "      font-size: 16px;\n" +
    "      line-height: 1.5;\n" +
    "      color: #b7b6b6;\n" +
    "      max-width: 600px;\n" +
    "      margin: 0 auto;\n" +
    "      padding: 20px;\n" +
    "\n" +
    "      border: 5px solid black;\n" +
    "      border-radius: 5px;\n" +
    '    "\n' +
    "  >\n" +
    "    <div\n" +
    '      style="\n' +
    "        border-radius: 5px;\n" +
    "        padding: 20px 40px;\n" +
    "        border: 3px solid black;\n" +
    "        background-color: rgb(45, 58, 87);\n" +
    '      "\n' +
    "    >\n" +
    "      <h1\n" +
    '        style="text-align: center; color: white; font-weight: bold;\n' +
    "        margin-top: 0;\n" +
    '        margin-bottom: 10px;"\n' +
    "      >\n" +
    "        Confirm Your Subscription to the\n" +
    '        <span style="color: hsl(280, 100%, 70%)">Board Game Clock</span>\n' +
    "        Newsletter\n" +
    "      </h1>\n" +
    '      <div style="width: 100%; height: 1px; background-color: #333"></div>\n' +
    "      <p>\n" +
    "        Thank you for your interest in subscribing to our newsletter for updates\n" +
    "        on the development of our\n" +
    '        <span style="color: hsl(280, 100%, 70%)">Board Game Clock</span> web\n' +
    "        application. To complete your subscription, please confirm your email\n" +
    "        address by clicking the verification link below:\n" +
    "      </p>\n" +
    '      <p style="text-align: center">\n' +
    "        <a\n" +
    '          style="\n' +
    "            display: inline-block;\n" +
    "            padding: 10px 20px;\n" +
    "            background-color: #007bff;\n" +
    "            color: #fff;\n" +
    "            border-radius: 20px;\n" +
    "            text-decoration: none;\n" +
    "            transition: background-color 0.3s ease-in-out;\n" +
    '          "\n' +
    `          href="http://localhost:3000/${Page.SubscribeEmail}?email=${email}"\n` +
    '          target="_blank"\n' +
    '          class="button"\n' +
    "          >Click here to confirm your email</a\n" +
    "        >\n" +
    "      </p>\n" +
    "      <p>\n" +
    "        Once you click on the link, you will be redirected to a confirmation\n" +
    "        page confirming that you have successfully subscribed to our newsletter.\n" +
    "      </p>\n" +
    "      <p>\n" +
    "        By subscribing, you will be the first to receive news and updates on our\n" +
    "        app development progress, new features, and beta testing opportunities.\n" +
    "      </p>\n" +
    "      <p>\n" +
    "        Please note that your subscription will only be activated once you have\n" +
    "        clicked on the verification link.\n" +
    "      </p>\n" +
    "      <p>\n" +
    "        Thank you again for your interest in our project, and we look forward to\n" +
    "        sharing our progress with you.\n" +
    "      </p>\n" +
    "      <p>\n" +
    "        Best regards,<br /><a\n" +
    '          href="https://arnthordadi.github.io/"\n' +
    '          style="color: #007bff; text-decoration: none; /*text-decoration: underline;*/"\n' +
    "          >Arnthor D.J.</a\n" +
    "        >\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </body>\n" +
    "</html>\n"
  );
}
