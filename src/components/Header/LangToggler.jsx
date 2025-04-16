import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English', shortName: 'en' },
  ru: { nativeName: 'Русский', shortName: 'ру' }
};

const LangToggler = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t('title');
    document.documentElement.lang = i18n.resolvedLanguage;
  }, [i18n.resolvedLanguage, t]);

  return (
    <div className='lang-toggler'>
    {Object.keys(lngs).map((lng) => (
      <div key={lng} className='btn-lang-container'>
      <button 
        key={lng} 
        style={{ textDecoration: i18n.resolvedLanguage === lng ? 'underline' : 'none' }} 
        type="submit" 
        title={lngs[lng].nativeName}
        aria-label={lngs[lng].nativeName}
        onClick={() => i18n.changeLanguage(lng)}
      >
        {lngs[lng].shortName}
      </button>
      </div>
    ))}
  </div>
  )
}

export default LangToggler