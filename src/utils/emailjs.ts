import emailjs from "@emailjs/browser";

export const initializeEmailJs = () => {
  emailjs.init({
    publicKey: "1fjYNTMsrNIjh7aTa",
    blockHeadless: true,
  });
}
