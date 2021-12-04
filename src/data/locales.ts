import type { Locales } from "./types";

const locales: Locales = {
  ar: {
    cameraPermissionDialog: {
      callToAction: "السماح",
      content: "يتطلب {{appname}} استخدام الكاميرا لالتقاط {{passName}}",
      title: "يرجى السماح باستخدام الكاميرا"
    },
    footer: {
      disclaimer:
        "هذا ليس موقعًا رسميًا للحكومة. لمزيد من المعلومات حول COVIDpass، يرجى الانتقال إلى https://nzcp.covid19.health.nz",
      privacy:
        "لا تتم مشاركة نتائج عمليات المسح مع أي كيان؛ خاص أو عام أو حكومي. إذا وجدت أي مشاكل، يرجى إرسال بريد إلكتروني إلى vaxxed@contrer.as"
    },
    header: {
      "Change language": "غير اللغة",
      "Scan your NZ COVIDpass": "مسح COVID الخاص بك في نيوزيلندا"
    },
    inputPage: {
      "Enter QR code": "أدخل رمز الاستجابة السريعة",
      Verify: "توثيق"
    },
    invalidCodes: {
      expired:
        "عذرًا، يبدو أنك قد انتهت صلاحية COVIDpass. يرجى الاتصال بـ [وزارة الصحة]({{link}})",
      invalid:
        "عذرًا، لم نتمكن من التحقق من COVID Pass الخاص بك. يرجى الاتصال بـ [وزارة الصحة]({{link}})",
      notAcovidPass:
        "عذرًا، هذا لا يبدو أنه COVIDpass. يرجى الاتصال بـ [وزارة الصحة]({{link}})"
    },
    modeSelector: {
      useBarcode: {
        callToAction: "تحقق باستخدام ماسح الباركود",
        intro: "يمكنك الآن استخدام vaxxed.as مع ماسح الباركود."
      },
      useCamera: {
        callToAction: "تحقق باستخدام الكاميرا",
        intro: "استخدم vaxxed.as مع الكاميرا."
      }
    },
    thisLanguage: {
      callToAction: "استخدم vaxxed.as باللغة العربية",
      name: "عربي"
    },
    verificationDialog: {
      "Attention needed": "يجب الانتباه",
      Close: "إغلاق",
      "Copy results": "نتائج النسخ",
      "Date of birth": "تاريخ الميلاد",
      "First name": "الاسم الأول",
      "Last name": "اسم العائلة",
      Success: "نجاح",
      Valid: "صالح",
      "Verification results": "نتائج التحقق",
      "View details": "عرض التفاصيل",
      onlyForVerificationPurposes:
        "يرجى استخدام النتائج لأغراض التحقق فقط. إنه لأمر جيد احترام خصوصية الجميع.",
      yes: "نعم"
    }
  },
  de: {
    cameraPermissionDialog: {
      callToAction: "Zulassen",
      content:
        "Die {{appname}} erfordert die Verwendung Ihrer Kamera, um den {{passName}} zu erfassen",
      title: "Bitte erlauben Sie die Verwendung der Kamera"
    },
    footer: {
      disclaimer:
        "Dies ist keine offizielle Regierungswebsite. Weitere Informationen zum CovidPass finden Sie unter https://nzcp.covid19.health.nz",
      privacy:
        "Die Ergebnisse der Scans werden nicht an private, öffentliche oder staatliche Einrichtungen weitergegeben. Wenn Sie Probleme haben, senden Sie bitte eine E-Mail an vaxxed@contrer.as"
    },
    header: {
      "Change language": "Sprache ändern",
      "Scan your NZ COVIDpass": "Scannen Sie Ihren NZ CovidPass"
    },
    inputPage: {
      "Enter QR code": "QR-Code eingeben",
      Verify: "Verifizieren"
    },
    invalidCodes: {
      expired:
        "Ihr CovidPass ist abgelaufen. Bitte wenden Sie sich an das [Gesundheitsministerium (Ministry of Health)]({{link}})",
      invalid:
        "Wir bitten um Ihr Verständnis, aber leider konnten wir Ihren CovidPass nicht überprüfen. Bitte wenden Sie sich an das [Gesundheitsministerium (Ministry of Health)]({{link}})",
      notAcovidPass:
        "Dies scheint nicht der CovidPass zu sein. Probieren Sie bitte erneut oder wenden Sie sich an das [Gesundheitsministerium (Ministry of Health)]({{link}})"
    },
    modeSelector: {
      useBarcode: {
        callToAction: "Überprüfen Sie mit einem Barcodescanner",
        intro: "Sie können vaxxed.as jetzt mit einem Barcodescanner verwenden."
      },
      useCamera: {
        callToAction: "Mit der Kamera überprüfen",
        intro: "Verwenden Sie vaxxed.as mit einer Kamera."
      }
    },
    thisLanguage: {
      callToAction: "Verwenden Sie vaxxed.as in Deutsch",
      name: "Deutsch"
    },
    verificationDialog: {
      "Attention needed": "Aufmerksamkeit erforderlich",
      Close: "Schließen",
      "Copy results": "Ergebnisse übernehmen",
      "Date of birth": "Geburtsdatum",
      "First name": "Vorname",
      "Last name": "Nachname",
      Success: "Erfolg",
      Valid: "Gültig",
      "Verification results": "Prüfergebnisse",
      "View details": "Details anzeigen",
      onlyForVerificationPurposes:
        "Bitte verwenden Sie die Ergebnisse nur zu Überprüfungszwecken. Es ist gut, die Privatsphäre aller zu respektieren.",
      yes: "Ja"
    }
  },
  en: {
    cameraPermissionDialog: {
      callToAction: "Allow",
      content:
        "The {{appname}} requires the use of your camera to capture the {{passName}}",
      title: "Please allow camera use"
    },
    footer: {
      disclaimer:
        "This is not an official Government website. For more information about the COVIDpass, please go to https://nzcp.covid19.health.nz",
      privacy:
        "The results of the scans are not shared to any entity; private, public, or governmental. If you find any issues, please email to vaxxed@contrer.as"
    },
    header: {
      "Change language": "Change language",
      "Scan your NZ COVIDpass": "Scan your NZ COVIDpass"
    },
    inputPage: {
      "Enter QR code": "Enter QR code",
      Verify: "Verify"
    },
    invalidCodes: {
      expired:
        "Sorry, it looks like you COVIDpass has expired. Please contact the [Ministry of Health]({{link}})",
      invalid:
        "Sorry, we could not verify your COVIDpass. Please contact the [Ministry of Health]({{link}})",
      notAcovidPass:
        "Sorry, this doesn't look to be a COVIDpass. Please contact the [Ministry of Health]({{link}})"
    },
    modeSelector: {
      useBarcode: {
        callToAction: "Verify with a barcode scanner",
        intro: "You can now use vaxxed.as with a barcode scanner."
      },
      useCamera: {
        callToAction: "Verify with camera",
        intro: "Use vaxxed.as with a camera."
      }
    },
    thisLanguage: {
      callToAction: "Use vaxxed.as in English",
      name: "English"
    },
    verificationDialog: {
      "Attention needed": "Attention needed",
      Close: "Close",
      "Copy results": "Copy results",
      "Date of birth": "Date of birth",
      "First name": "First name",
      "Last name": "Last name",
      Success: "Success",
      Valid: "Valid",
      "Verification results": "Verification results",
      "View details": "View details",
      onlyForVerificationPurposes:
        "Please use the results for verification purposes only. It's a good thing to respect everybody's privacy.",
      yes: "Yes"
    }
  },
  es: {
    cameraPermissionDialog: {
      callToAction: "Permitir",
      content:
        "El {{appname}} requiere el uso de la cámara para capturar el {{passName}}",
      title: "Permita el uso de la cámara"
    },
    footer: {
      disclaimer:
        "Este no es un sitio web oficial del gobierno. Para obtener más información sobre el COVIDpass, visite https://nzcp.covid19.health.nz",
      privacy:
        "Los resultados de las exploraciones no se comparten con ninguna entidad; privada, pública o gubernamental. Si encuentra algún problema, envíe un correo electrónico a vaxxed@contrer.as"
    },
    header: {
      "Change language": "Cambiar idioma",
      "Scan your NZ COVIDpass": "Escanea tu NZ COVIDPass"
    },
    inputPage: {
      "Enter QR code": "Ingrese el código QR",
      Verify: "Verificar"
    },
    invalidCodes: {
      expired:
        "Lo sentimos, parece que su COVIDpass ha caducado. Por favor póngase en contacto con el [Ministerio de Salud (Ministry of Health)]({{link}})",
      invalid:
        "Lo sentimos, no pudimos verificar su COVIDpass. Por favor póngase en contacto con el [Ministerio de Salud (Ministry of Health)]({{link}})",
      notAcovidPass:
        "Lo sentimos, esto no parece ser un COVIDpass. Por favor póngase en contacto con el [Ministerio de Salud (Ministry of Health)]({{link}})"
    },
    modeSelector: {
      useBarcode: {
        callToAction: "Verificar con un escáner de códigos de barras",
        intro: "Ahora puede usar vaxxed.as con un escáner de códigos de barras."
      },
      useCamera: {
        callToAction: "Verificar con cámara",
        intro: "Use vaxxed.as con una cámara."
      }
    },
    thisLanguage: {
      callToAction: "Utilice vaxxed.as en Español",
      name: "Español"
    },
    verificationDialog: {
      "Attention needed": "Atención necesaria",
      Close: "Cerrar",
      "Copy results": "Copiar resultados",
      "Date of birth": "Fecha de cumpleaños",
      "First name": "Primer nombre",
      "Last name": "Apellido",
      Success: "Éxito",
      Valid: "Válido",
      "Verification results": "Resultados de la verificación",
      "View details": "Ver detalles",
      onlyForVerificationPurposes:
        "Utilice los resultados únicamente para fines de verificación. Es bueno respetar la privacidad de todos.",
      yes: "Sí"
    }
  },
  fa: {
    cameraPermissionDialog: {
      callToAction: "اجازه دادن",
      content:
        "{{appname}} نیاز به استفاده از دوربین شما برای ضبط {{passName}} دارد",
      title: "لطفا اجازه استفاده از دوربین را بدهید"
    },
    footer: {
      disclaimer:
        "این یک وب سایت رسمی دولت نیست. برای کسب اطلاعات بیشتر در مورد CovidPass، لطفا به آدرس https://nzcp.covid19.health.nz مراجعه نمایید.",
      privacy:
        "نتایج اسکن ها به هیچ یک از نهادهای خصوصی، عمومی یا دولتی به اشتراک گذاشته نمی شود. اگر هر گونه مشکلی پیدا کردید، لطفا به vaxxed@contrer.as ایمیل کنید"
    },
    header: {
      "Change language": "تغییر زبان",
      "Scan your NZ COVIDpass": "CovidPass خود را اسکن نمایید. "
    },
    inputPage: {
      "Enter QR code": "کد QR را وارد کنید",
      Verify: "تایید کردن"
    },
    invalidCodes: {
      expired:
        "متاسفانه، COVIDpass  شما منقضی شده است.  لطفا با [وزارت بهداشت] تماس حاصل فرمایید.  ({{link}})",
      invalid:
        "متأسفانه ما قادر به تأیید CovidPass شما نیستیم. لطفا با [وزارت بهداشت] تماس بگیرید ({{link}})",
      notAcovidPass:
        "متاسفانه ،QR کد شما یک COVIDpass نیست.   لطفا با [وزارت بهداشت] تماس بگیرید ({{link}})"
    },
    modeSelector: {
      useBarcode: {
        callToAction: "با یک اسکنر بارکد تأیید کنید",
        intro:
          "شما هم اکنون می توانید از vaxxed.as با یک اسکنر بارکد استفاده کنید."
      },
      useCamera: {
        callToAction: "تأیید با دوربین",
        intro: "استفاده از vaxxed.as با یک دوربین."
      }
    },
    thisLanguage: {
      callToAction: "استفاده از vaxxed.asبه زبان فارسی",
      name: "فارسی"
    },
    verificationDialog: {
      "Attention needed": "توجه فرمایید ",
      Close: "بستن",
      "Copy results": "کپی نتایج",
      "Date of birth": "تاریخ تولد",
      "First name": "نام",
      "Last name": "نام خانوادگی",
      Success: "موفقیت",
      Valid: "معتبر",
      "Verification results": "تأیید اعتبار نتایج ",
      "View details": "مشاهده جزئیات",
      onlyForVerificationPurposes:
        "لطفا نتایج را فقط به منظور اهداف تأیید استفاده نمایید و به حريم خصوصي دیگران احترام بگذارید. ",
      yes: "آری"
    }
  },
  fr: {
    cameraPermissionDialog: {
      callToAction: "Autoriser",
      content:
        "Le {{appname}} nécessite l'utilisation de votre appareil photo pour capturer le {{passName}}",
      title: "Veuillez autoriser l'utilisation de la caméra"
    },
    footer: {
      disclaimer:
        "Il ne s'agit pas d'un site Web officiel du gouvernement. Pour plus d'informations sur le CovidPass, rendez-vous sur https://nzcp.covid19.health.nz",
      privacy:
        "Les résultats des analyses ne sont partagés avec aucune entité, privée, publique ou gouvernementale. Si vous rencontrez des problèmes, veuillez envoyer un e-mail à vaxxed@contrer.as"
    },
    header: {
      "Change language": "Changer de langue",
      "Scan your NZ COVIDpass": "Scannez votre CovidPass NZ"
    },
    inputPage: {
      "Enter QR code": "Entrez le code QR",
      Verify: "Vérifier"
    },
    invalidCodes: {
      expired:
        "Désolé, il semble que votre CovidPass ait expiré. Veuillez contacter le [ministère de la Santé]({{link}})",
      invalid:
        "Désolé, nous n'avons pas pu vérifier votre CovidPass. Veuillez contacter le [ministère de la Santé]({{link}})",
      notAcovidPass:
        "Désolé, cela ne semble pas être un CovidPass. Veuillez contacter le [ministère de la Santé]({{link}})"
    },
    modeSelector: {
      useBarcode: {
        callToAction: "Vérifiez avec un lecteur de codes-barres",
        intro:
          "Vous pouvez désormais utiliser vaxxed.as avec un lecteur de codes-barres."
      },
      useCamera: {
        callToAction: "Vérifiez avec l'appareil photo",
        intro: "Utilisez vaxxed.as avec un appareil photo."
      }
    },
    thisLanguage: {
      callToAction: "Utilisez vaxxed.as en Français",
      name: "Français"
    },
    verificationDialog: {
      "Attention needed": "Attention requise",
      Close: "Fermer",
      "Copy results": "Copier les résultats",
      "Date of birth": "Date de naissance",
      "First name": "Prénom",
      "Last name": "Nom",
      Success: "Succès",
      Valid: "Valide",
      "Verification results": "Résultats de vérification",
      "View details": "Afficher les détails",
      onlyForVerificationPurposes:
        "Veuillez utiliser les résultats uniquement à des fins de vérification. C'est une bonne chose de respecter la vie privée de chacun.",
      yes: "Oui"
    }
  },
  hi: {
    cameraPermissionDialog: {
      callToAction: "अनुमति दें",
      content:
        "{{appname}} को {{passName}} को कैप्चर करने के लिए आपके कैमरे के उपयोग की आवश्यकता होती है",
      title: "कृपया कैमरा उपयोग की अनुमति दें"
    },
    footer: {
      disclaimer:
        "यह एक आधिकारिक सरकारी वेबसाइट नहीं है। COVIDpass के बारे में अधिक जानकारी के लिए, कृपया https://nzcp.covid19.health.nz . पर जाएं",
      privacy:
        "स्कैन के परिणाम किसी भी इकाई को साझा नहीं किए जाते हैं; निजी, सार्वजनिक या सरकारी। अगर आपको कोई समस्या मिलती है, तो कृपया vaxxed@contrer.as पर ईमेल करें"
    },
    header: {
      "Change language": "भाषा बदलें",
      "Scan your NZ COVIDpass": "अपने NZ COVIDPass को स्कैन करें"
    },
    inputPage: {
      "Enter QR code": "QR कोड डालें",
      Verify: "सत्यापित करें"
    },
    invalidCodes: {
      expired:
        "क्षमा करें, ऐसा लगता है कि आप कोविदपास की समय सीमा समाप्त हो गई है। कृपया [स्वास्थ्य मंत्रालय (Ministry of Health)]({{link}}) से संपर्क करें",
      invalid:
        "क्षमा करें, हम आपके COVIDpass की पुष्टि नहीं कर सके। कृपया [मिनिस्ट्री ऑफ़ हेल्थ] से संपर्क करें (Ministry of Health)]({{link}})",
      notAcovidPass:
        "क्षमा करें, यह कोई COVIDpass नहीं लगता। कृपया [मिनिस्ट्री ऑफ़ हेल्थ] से संपर्क करें (Ministry of Health)]({{link}})"
    },
    modeSelector: {
      useBarcode: {
        callToAction: "बारकोड स्कैनर से सत्यापित करें",
        intro: "अब आप बारकोड स्कैनर के साथ vaxxed.as का उपयोग कर सकते हैं।"
      },
      useCamera: {
        callToAction: "कैमरे से सत्यापित करें",
        intro: "कैमरे के साथ vaxxed.as का उपयोग करें।"
      }
    },
    thisLanguage: {
      callToAction: "हिंदी में vaxxed.as का प्रयोग करें",
      name: "अंग्रेज़ी"
    },
    verificationDialog: {
      "Attention needed": "ध्यान देने की आवश्यकता है",
      Close: "बंद करें",
      "Copy results": "परिणाम नक़ल करें",
      "Date of birth": "जन्मतिथि",
      "First name": "पहला नाम",
      "Last name": "अंतिम नाम",
      Success: "सफलता",
      Valid: "वैध",
      "Verification results": "सत्यापन के परिणाम",
      "View details": "विवरण देखें",
      onlyForVerificationPurposes:
        "कृपया परिणामों का उपयोग केवल सत्यापन उद्देश्यों के लिए करें। हर किसी की निजता का सम्मान करना अच्छी बात है।",
      yes: "हाँ"
    }
  },
  mi: {
    cameraPermissionDialog: {
      callToAction: "Tukua",
      content:
        "Ko te {{appname}} me whakamahi to kamera ki te hopu i te {{passName}}",
      title: "Whakaaetia te whakamahi kamera"
    },
    footer: {
      disclaimer:
        "Ehara tenei i te paetukutuku mana a te Kawanatanga. Mo etahi atu korero mo te COVIDpass, haere ki https://nzcp.covid19.health.nz",
      privacy:
        "Ko nga hua o nga karapa kaore e tohatohahia ki tetahi hinonga; tūmataiti, tūmatanui, kāwanatanga ranei. Mena ka kitea e koe etahi take, tena koa imeera ki vaxxed@contrer.as"
    },
    header: {
      "Change language": "Huri reo",
      "Scan your NZ COVIDpass": "Matawai i to NZ COVIDpass"
    },
    inputPage: {
      "Enter QR code": "Whakauruhia te waehere QR",
      Verify: "Manatoko"
    },
    invalidCodes: {
      expired:
        "Aroha mai, te ahua nei kua pau to COVIDpass. Tena koa whakapā atu ki te [Manatū Hauora (Ministry of Health)]({{link}})",
      invalid:
        "Aroha mai, kaore i taea e matou te manatoko i to urunga COVIDpass. Tena koa whakapā atu ki te [Manatū Hauora (Ministry of Health)]({{link}})",
      notAcovidPass:
        "Aroha mai, ehara tenei i te COVIDpass. Tena koa whakapā atu ki te [Manatū Hauora (Ministry of Health)]({{link}})"
    },
    modeSelector: {
      useBarcode: {
        callToAction: "Manatokohia me te matawai paewaehere",
        intro:
          "Ka taea e koe te whakamahi i te vaxxed.as me te matawai paewaehere."
      },
      useCamera: {
        callToAction: "Manatoko ma te kamera",
        intro: "Whakamahia te vaxxed.as me te kamera."
      }
    },
    thisLanguage: {
      callToAction: "Whakamahia te vaxxed.as i te reo Māori",
      name: "Te reo Māori"
    },
    verificationDialog: {
      "Attention needed": "Me aro",
      Close: "Katia",
      "Copy results": "Tārua ngā hua",
      "Date of birth": "Te ra whanau",
      "First name": "Ingoa tuatahi",
      "Last name": "Ingoa whakamutunga",
      Success: "Momoho",
      Valid: "Whaimana",
      "Verification results": "Nga hua manatoko",
      "View details": "Tirohia nga taipitopito",
      onlyForVerificationPurposes:
        "Tena koa whakamahia nga hua mo nga kaupapa manatoko anake. He mea pai ki te whakaute i te noho muna o te katoa.",
      yes: "Āe"
    }
  },
  nl: {
    cameraPermissionDialog: {
      callToAction: "Toestaan",
      content:
        "De {{appname}} vereist het gebruik van je camera om de {{passName}} vast te leggen",
      title: "Gelieve cameragebruik toe"
    },
    footer: {
      disclaimer:
        "Dit is geen officiële website van de overheid. Ga voor meer informatie over de COVIDpass naar https://nzcp.covid19.health.nz",
      privacy:
        "De resultaten van de scans worden niet gedeeld met een entiteit; privé, openbaar of gouvernementeel. Als je problemen ondervindt, stuur dan een e-mail naar vaxxed@contrer.as"
    },
    header: {
      "Change language": "Taal wijzigen",
      "Scan your NZ COVIDpass": "Scan je NZ COVIDpass"
    },
    inputPage: {
      "Enter QR code": "Voer QR-code in",
      Verify: "Verifiëren"
    },
    invalidCodes: {
      expired:
        "Sorry, het lijkt erop dat je COVIDpass is verlopen. Neem contact op met het [Ministerie van Volksgezondheid (Ministry of Health)]({{link}})",
      invalid:
        "Sorry, we hebben je COVIDpass niet kunnen verifiëren. Neem dan contact op met het [Ministerie van Volksgezondheid (Ministry of Health)]({{link}})",
      notAcovidPass:
        "Sorry, dit lijkt geen COVIDpass te zijn. Neem contact op met het [Ministerie van Volksgezondheid (Ministry of Health)]({{link}})"
    },
    modeSelector: {
      useBarcode: {
        callToAction: "Verifiëren met een barcodescanner",
        intro: "U kunt vaxxed.as nu gebruiken met een barcodescanner."
      },
      useCamera: {
        callToAction: "Verifiëren met camera",
        intro: "Gebruik vaxxed.as met een camera."
      }
    },
    thisLanguage: {
      callToAction: "Gebruik vaxxed.as in het Dutch",
      name: "Dutch"
    },
    verificationDialog: {
      "Attention needed": "Aandacht vereist",
      Close: "Sluiten",
      "Copy results": "Resultaten kopiëren",
      "Date of birth": "Geboortedatum",
      "First name": "Voornaam",
      "Last name": "Achternaam",
      Success: "Succes",
      Valid: "Geldig",
      "Verification results": "Resultaten van verificatie",
      "View details": "Bekijk details",
      onlyForVerificationPurposes:
        "Gebruik de resultaten alleen voor verificatiedoeleinden. Het is goed om ieders privacy te respecteren.",
      yes: "Ja"
    }
  },
  pt: {
    cameraPermissionDialog: {
      callToAction: "Permitir",
      content:
        "O {{appname}} requer o uso de sua câmera para capturar o {{passName}}",
      title: "Permita o uso da câmera"
    },
    footer: {
      disclaimer:
        "Este não é um site oficial do governo. Para obter mais informações sobre o CovidPass, acesse https://nzcp.covid19.health.nz",
      privacy:
        "Os resultados das varreduras não são compartilhados com nenhuma entidade; privada, pública ou governamental. Se você encontrar algum problema, envie um e-mail para vaxxed@contrer.as"
    },
    header: {
      "Change language": "Mudar língua",
      "Scan your NZ COVIDpass": "Digitalize seu NZ CovidPass"
    },
    inputPage: {
      "Enter QR code": "Digite o código QR",
      Verify: "Verificar"
    },
    invalidCodes: {
      expired:
        "Desculpe, parece que você CovidPass expirou. Entre em contato com o [Ministério da Saúde]({{link}})",
      invalid:
        "Desculpe, não foi possível verificar seu CovidPass. Entre em contato com o [Ministério da Saúde]({{link}})",
      notAcovidPass:
        "Desculpe, isso não parece ser um CovidPass. Entre em contato com o [Ministério da Saúde]({{link}})"
    },
    modeSelector: {
      useBarcode: {
        callToAction: "Verifique com um leitor de código de barras",
        intro:
          "Agora você pode usar o vaxxed.as com um leitor de código de barras."
      },
      useCamera: {
        callToAction: "Verifique com a câmera",
        intro: "Use vaxxed.as com uma câmera."
      }
    },
    thisLanguage: {
      callToAction: "Use vaxxed.as em português",
      name: "Português"
    },
    verificationDialog: {
      "Attention needed": "Atenção necessária",
      Close: "Fechar",
      "Copy results": "Copiar resultados",
      "Date of birth": "Data de nascimento",
      "First name": "Nome",
      "Last name": "Sobrenome",
      Success: "Sucesso",
      Valid: "Válido",
      "Verification results": "Resultados da verificação",
      "View details": "Ver detalhes",
      onlyForVerificationPurposes:
        "Use os resultados apenas para fins de verificação. É bom respeitar a privacidade de todos.",
      yes: "Sim"
    }
  },
  ru: {
    cameraPermissionDialog: {
      callToAction: "Разрешить",
      content:
        "{{appname}} требует использования вашей камеры для съемки {{passName}}",
      title: "Пожалуйста, разрешите использование камеры"
    },
    footer: {
      disclaimer:
        "Это не официальный сайт правительства. Для получения дополнительной информации о COVIDPass перейдите по ссылке https://nzcp.covid19.health.nz",
      privacy:
        "Результаты сканирования не передаются ни одному юридическому лицу: частному, государственному или государственному. Если вы обнаружите какие-либо проблемы, напишите по адресу vaxxed@contrer.as"
    },
    header: {
      "Change language": "Изменить язык",
      "Scan your NZ COVIDpass": "Отсканируйте свой NZ COVIDPass"
    },
    inputPage: {
      "Enter QR code": "Введите QR-код",
      Verify: "Проверить"
    },
    invalidCodes: {
      expired:
        "Извините, похоже, у вас истек срок действия CovidPass. Обратитесь к [Министерству здравоохранения (Ministry of Health)]({{link}})",
      invalid:
        "К сожалению, нам не удалось проверить ваш CovidPass. Обратитесь к [Министерству здравоохранения (Ministry of Health)]({{link}})",
      notAcovidPass:
        "Извините, похоже, это не CovidPass. Обратитесь к [Министерству здравоохранения (Ministry of Health)]({{link}})"
    },
    modeSelector: {
      useBarcode: {
        callToAction: "Проверка с помощью сканера штрих-кода",
        intro: "Теперь вы можете использовать vaxxed.as со сканером штрих-кода."
      },
      useCamera: {
        callToAction: "Проверка с помощью камеры",
        intro: "Используйте vaxxed.as с камерой."
      }
    },
    thisLanguage: {
      callToAction: "Использовать vaxxed.as на русском",
      name: "Русский"
    },
    verificationDialog: {
      "Attention needed": "Требуется внимание",
      Close: "Закрыть",
      "Copy results": "Копировать результаты",
      "Date of birth": "Дата рождения",
      "First name": "Имя",
      "Last name": "Фамилия",
      Success: "Успешно",
      Valid: "Достоверен",
      "Verification results": "Результаты проверки",
      "View details": "Подробнее",
      onlyForVerificationPurposes:
        "Полученные результаты можно использовать только для проверки. Хорошо уважать неприкосновенность частной жизни каждого.",
      yes: "Да"
    }
  },
  sm: {
    cameraPermissionDialog: {
      callToAction: "Fa&#39;ataga",
      content:
        "E mana&#39;omia e le {{appname}} le fa&#39;aogaina o lau meapueata e pu&#39;e ai le {{passName}}",
      title: "Fa&#39;amolemole fa&#39;ataga le fa&#39;aoga meapueata"
    },
    footer: {
      disclaimer:
        "E le ose upegatafa&#39;ilagi aloaia a le Malo. Mo nisi fa&#39;amatalaga e uiga ile COVIDpass, fa&#39;amolemole alu ile https://nzcp.covid19.health.nz",
      privacy:
        "O fa&#39;ai&#39;uga o su&#39;esu&#39;ega e le fa&#39;asoa i so&#39;o se fa&#39;alapotopotoga; tumaoti, lautele, pe faalemalo. Afai e te maua ni fa&#39;afitauli, fa&#39;amolemole imeli ile vaxxed@contrer.as"
    },
    header: {
      "Change language": "Suia le gagana",
      "Scan your NZ COVIDpass": "Va&#39;ai lau NZ COVIDpass"
    },
    inputPage: {
      "Enter QR code": "Ulufale QR code",
      Verify: "Fa&#39;amaonia"
    },
    invalidCodes: {
      expired:
        "Fa&#39;amalie atu, e foliga mai ua mae&#39;a lau COVIDpass. Fa&#39;amolemole fa&#39;afeso&#39;ota&#39;i le [Matagaluega o le Soifua Maloloina (Ministry of Health)]({{link}})",
      invalid:
        "Fa&#39;amalie atu, matou te le mafai ona fa&#39;amaonia lau COVIDpass. Fa&#39;amolemole fa&#39;afeso&#39;ota&#39;i le [Matagaluega o le Soifua Maloloina (Ministry of Health)]({{link}})",
      notAcovidPass:
        "Fa&#39;amalie atu, e le o se COVIDpass lea. Fa&#39;amolemole fa&#39;afeso&#39;ota&#39;i le [Matagaluega o le Soifua Maloloina (Ministry of Health)]({{link}})"
    },
    modeSelector: {
      useBarcode: {
        callToAction: "Fa&#39;amaonia i se su&#39;e fa&#39;ailoga",
        intro:
          "E mafai nei ona e fa&#39;aogaina le vaxxed.as ma se su&#39;e fa&#39;ailoga."
      },
      useCamera: {
        callToAction: "Fa&#39;amaonia ile meapueata",
        intro: "Fa&#39;aoga vaxxed.as ma se meapueata."
      }
    },
    thisLanguage: {
      callToAction: "Fa'aaoga le vaxxed.as o le gagana Samoa",
      name: "Samoa"
    },
    verificationDialog: {
      "Attention needed": "Manaomia le gauai",
      Close: "Tapuni",
      "Copy results": "Kopi i&#39;uga",
      "Date of birth": "Aso fanau",
      "First name": "Igoa muamua",
      "Last name": "Faʻaiu",
      Success: "Manuia",
      Valid: "Aoga",
      "Verification results": "I&#39;uga fa&#39;amaoniga",
      "View details": "Va&#39;ai fa&#39;amatalaga",
      onlyForVerificationPurposes:
        "Fa&#39;amolemole fa&#39;aoga tali mo na&#39;o fa&#39;amaoniga. Ose mea lelei le fa&#39;aaloalo i le le faalauaiteleina o tagata uma.",
      yes: "ioe"
    }
  },
  "zh-cn": {
    cameraPermissionDialog: {
      callToAction: "允许",
      content: "{{appname}} 需要使用相机捕获 {{passName}}",
      title: "请允许使用相机"
    },
    footer: {
      disclaimer:
        "這不是官方的政府網站。 有關 COVIDpass 的更多信息，請訪問 https://nzcp.covid19.health.nz",
      privacy:
        "扫描结果不会共享给任何实体；私人、公共或政府。如果你发现任何问题，请发送电子邮件至 vaxxed@contrer.as"
    },
    header: {
      "Change language": "改变语言",
      "Scan your NZ COVIDpass": "扫描你的新西兰 CovidPass"
    },
    inputPage: {
      "Enter QR code": "输入二维码",
      Verify: "验证"
    },
    invalidCodes: {
      expired:
        "抱歉，您的 COVID pass 好像已過期。 請聯繫[衛生部 (Ministry of Health)]({{link}})",
      invalid:
        "抱歉，我們無法驗證您的 COVIDpass。 請聯繫[衛生部 (Ministry of Health)]({{link}})",
      notAcovidPass:
        "抱歉，這看起來不是 COVIDpass。 請聯繫[衛生部 (Ministry of Health)]({{link}})"
    },
    modeSelector: {
      useBarcode: {
        callToAction: "使用条码扫描器进行验证",
        intro: "现在，您可以将 vaxxed.as 与条形码扫描器一起使用。"
      },
      useCamera: {
        callToAction: "用相机验证",
        intro: "将 vaxxed.as 与相机一起使用。"
      }
    },
    thisLanguage: {
      callToAction: "使用 vaxxed.as 简体中文版",
      name: "简体中文"
    },
    verificationDialog: {
      "Attention needed": "需要注意",
      Close: "关闭",
      "Copy results": "复制结果",
      "Date of birth": "出生日期",
      "First name": "名字",
      "Last name": "姓氏",
      Success: "成功",
      Valid: "有效",
      "Verification results": "验证结果",
      "View details": "查看详情",
      onlyForVerificationPurposes:
        "请仅将结果用于验证目的。尊重每个人的隐私是一件好事。",
      yes: "成功"
    }
  },
  "zh-hk": {
    cameraPermissionDialog: {
      callToAction: "允許",
      content: "{{appname}} 需要使用您的相機來捕捉 {{passName}}",
      title: "請允許使用相機"
    },
    footer: {
      disclaimer:
        "這不是官方的政府網站。 有關 COVIDpass 的更多信息，請訪問 https://nzcp.covid19.health.nz",
      privacy:
        "掃描結果不會共享給任何實體，包括私有實體、公共實體或政府實體。如果您發現任何問題，請發送電子郵件至 vaxxed@contrer.as"
    },
    header: {
      "Change language": "更改語言",
      "Scan your NZ COVIDpass": "掃描您的 NZ COVIDpass"
    },
    inputPage: {
      "Enter QR code": "輸入二維碼",
      Verify: "驗證"
    },
    invalidCodes: {
      expired:
        "抱歉，您的 COVIDpass 好像已過期。 請聯繫[衛生部 (Ministry of Health)]({{link}})",
      invalid:
        "抱歉，我們無法驗證您的 COVIDpass。 請聯繫[衛生部 (Ministry of Health)]({{link}})",
      notAcovidPass:
        "抱歉，這看起來不是 COVIDpass。 請聯繫[衛生部 (Ministry of Health)]({{link}})"
    },
    modeSelector: {
      useBarcode: {
        callToAction: "使用條形碼掃描儀驗證",
        intro: "現在，您可以將 vaxxed.as 與條形碼掃描儀一起使用。"
      },
      useCamera: {
        callToAction: "使用相機驗證",
        intro: "與攝像頭一起使用 vaxxed.as。"
      }
    },
    thisLanguage: {
      callToAction: "使用 vaxxed.as 繁體中文版",
      name: "繁體中文"
    },
    verificationDialog: {
      "Attention needed": "敬請注意",
      Close: "關閉",
      "Copy results": "複製結果",
      "Date of birth": "出生日期",
      "First name": "名字",
      "Last name": "姓氏",
      Success: "成功",
      Valid: "有效",
      "Verification results": "驗證結果",
      "View details": "查看詳情",
      onlyForVerificationPurposes:
        "請使用結果僅作驗證之用。尊重每個人的隱私是件好事",
      yes: "成功"
    }
  }
};
export { locales };
