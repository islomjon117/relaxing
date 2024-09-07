import { useState } from "react";
import axios from "axios";

import '../contact/contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [lang, setLang] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Ismi: name,
      Telefon: phone,
      Viloyat: lang
    };

    const botToken = '7259114759:AAFC-MlNVXsk12o0iofZsST3npxn9mAAVH8';
    const chatId = '@chere_uz'; // Kanal username

    const text = `Ismi: ${data.Ismi}\nTelefon: ${data.Telefon}\nJoy: ${data.Viloyat}`;

    try {
      const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: text,
      });
      console.log('Message sent successfully:', response.data);

      setName('');
      setPhone('');
      setLang('');
      setMessageSent(true);

      setTimeout(() => {
        setMessageSent(false);
      }, 3000);
    } catch (error) {
      console.error('Error sending message:', error.response ? error.response.data : error.message);
    }
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value;

    // Ensure the phone number starts with +998
    if (!value.startsWith('+998')) {
      value = '+998' + value.replace(/^\+998/, '');
    }

    // Handle backspace to remove +998 if needed
    if (value === '+998' && e.nativeEvent.inputType === 'deleteContentBackward') {
      value = '';
    }

    setPhone(value);
  };

  return (
    <div className='contact'>
      <div className="container_main">
        <div className="contact_main max-md:p-[2rem]">

          <div className="hidden max-md:block">
            <form action="" autoComplete="off" onSubmit={handleSubmit}>
              <p>Ismingiz *</p>
              <input
                className="name"
                required
                type="text"
                placeholder=""
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <p>Telefon raqamingiz *</p>
              <input
                className="phone_number"
                required
                type="text"
                placeholder=""
                onChange={handlePhoneChange}
                value={phone}
              />
              <p>Qaysi viloyat*</p>
              <select
                className="select_province"
                required
                onChange={(e) => setLang(e.target.value)}
                value={lang}
              >
                <option value="Margilon">Margilon</option>
                <option value="Qoqon">Qoqon</option>
                <option value="Andijon">Andijon</option>
                <option value="Buhoro">Buhoro</option>
                <option value="Navoiy">Navoiy</option>
                <option value="Toshkent">Toshkent</option>
                <option value="Samarqand">Samarqand</option>
                <option value="Xiva">Xiva</option>
              </select>
              <br />
              <button className="submit_btn" type="submit">Jonatish</button>
            </form>
          </div>

          <div className="hidden lg:flex items-center justify-between">
            <div className="px-5">
              <form action="" autoComplete="off" onSubmit={handleSubmit}>
                <p>Ismingiz *</p>
                <br />
                <input
                  className="name"
                  required
                  type="text"
                  placeholder=""
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <p>Telefon raqamingiz *</p>
                <br />
                <input
                  className="phone_number"
                  required
                  type="text"
                  placeholder=""
                  onChange={handlePhoneChange}
                  value={phone}
                />
                <p>Qaysi viloyat*</p>
                <select
                  className="select_province"
                  required
                  onChange={(e) => setLang(e.target.value)}
                  value={lang}
                >
                  <option value="Margilon">Margilon</option>
                  <option value="Qoqon">Qoqon</option>
                  <option value="Andijon">Andijon</option>
                  <option value="Buhoro">Buhoro</option>
                  <option value="Shohmardon">Shohmardon</option>
                  <option value="Toshkent">Toshkent</option>
                  <option value="Samarqand">Samarqand</option>
                  <option value="Xiva">Xiva</option>
                </select>
                <br />
                <br />
                <button className="submit_btn" type="submit">Jonatish</button>
              </form>

              {/* Muvaffaqiyatli yuborish xabari */}
              {messageSent && (
                <div className="success_message">
                  Siz bilan bog'lanamiz!
                </div>
              )}
            </div>

            <div className="max-w-[800px]">
              <img src='https://storage.kun.uz/source/8/ganTyQLkp2o80U8F3sHhPwIwx-0kZ61u.jpg' className="rounded-lg" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
