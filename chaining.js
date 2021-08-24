const company = {
    title: 'Rahman Software Company',
    address: 'Dhaka, Bangladesh',
    ceo: 'Mohammad Abdur Rahman',
    web: {
        work: 'web development',
        employee: 21,
        language: {
            mainLanguage: 'Python',
            optionalLanguage: {
                language1: 'Javascript',
                language2: 'django',
            }
        }
    }
};

const { language1, language2 } = company?.web?.language?.optionalLanguage?.language1;
console.log(language1);